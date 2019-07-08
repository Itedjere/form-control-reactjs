import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
	}
  render() {
    return (
      <div className="col-md-8 offset-md-2">
        <h1 className="display-4">Visitor's Form</h1>
        <p className="lead">
          Give Us A Full List Of Your Personal Details
        </p>
        <form onSubmit={this.props.onFormSubmit} method="POST">
          <div className="form-group">
            <label for="exampleInputEmail1">FirstName</label>
            <input type="text" value={this.props.entireState.firstName} className="form-control" onChange={this.props.onHandleChange} name="firstName" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter FirstName" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">LastName</label>
            <input type="text" value={this.props.entireState.lastName} className="form-control" onChange={this.props.onHandleChange} name="lastName" id="exampleInputPassword1" placeholder="Enter LastName" />
          </div>
          <div className="form-group">
            <h6>Gender</h6>
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio" checked={this.props.entireState.gender === "male"} id="customRadioInline1" value="male" name="gender" onChange={this.props.onHandleChange} className="custom-control-input" />
              <label className="custom-control-label" for="customRadioInline1">Male</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio" checked={this.props.entireState.gender === "Female"} id="customRadioInline2" name="gender" value="Female" onChange={this.props.onHandleChange} className="custom-control-input" />
              <label className="custom-control-label" for="customRadioInline2">Female</label>
            </div>
          </div>
          <div className="form-group">
            <label>Country Of Visit</label>
            <select className="custom-select" name="countryOfVisit" value={this.props.entireState.countryOfVisit} onChange={this.props.onHandleChange} >
              <option selected>Open this select menu</option>
              <option value="Mexico">Mexico</option>
              <option value="South Africa">South Africa</option>
              <option value="United States of America">United States Of America</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Purpose Of Visit</label>
            <textarea className="form-control" value={this.props.entireState.purpose} name="purpose" onChange={this.props.onHandleChange} id="exampleFormControlTextarea1" rows="3" ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form