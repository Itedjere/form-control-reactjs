import React from 'react';
import Nav from './Components/Nav'
import Form from './Components/Form'
import Details from './Components/Details'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	firstName: '',
    	lastName: '',
    	gender: '',
    	countryOfVisit: '',
    	purpose: '',
    	page: 1
    }
  	this.onFormSubmit = this.onFormSubmit.bind(this);
  	this.onHandleChange = this.onHandleChange.bind(this);
  	this.onButtonClick = this.onButtonClick.bind(this);

  }

  onFormSubmit(event) {
  	event.preventDefault();
  	//Update page to 2
  	this.setState({
  		page: this.state.page+1
  	})
  }

  onHandleChange(event) {
  	this.setState({
  		[event.target.name] : event.target.value
  	})
  }

  onButtonClick(event) {
  	//Update page to 1
  	this.setState({
  		page: this.state.page-1
  	})
  }
 

  render() {

  	let componentValue;
  	if (this.state.page === 1) {
  		componentValue = <Form onFormSubmit={this.onFormSubmit} onHandleChange={this.onHandleChange} entireState={this.state} />;
  	} else if (this.state.page === 2){
  		componentValue = <Details entireState={this.state} onButtonClick={this.onButtonClick}/>;
  	}

    return (
      <React.Fragment>
		  <Nav />
		  <div class="row mt-5">
			{ componentValue }  
		  </div>
      </React.Fragment>
    );
  }
}
export default App