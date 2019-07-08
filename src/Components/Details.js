import React, { Component } from 'react';

class Details extends Component {
	constructor (props){
		super(props);
	}
    render() {
        return (
            <div className="col-md-8 offset-md-2">
                <h1 className="display-4">Visitor's Personal Details</h1>
                <p className="lead">
                    A List Of Your Personal Details
                </p>
                <ul className="list-group">
                    <li className="list-group-item">
                        <h1 className="display-4">Fullname</h1>
                        <p className="lead">{this.props.entireState.firstName + ' ' + this.props.entireState.lastName}</p>
                    </li>
                    <li className="list-group-item">
                        <h1 className="display-4">Gender</h1>
                        <p className="lead">{this.props.entireState.gender}</p>
                    </li>
                    <li className="list-group-item">
                        <h1 className="display-4">Country Of Visit</h1>
                        <p className="lead">{this.props.entireState.countryOfVisit}</p>
                    </li>
                    <li className="list-group-item">
                        <h1 className="display-4">Purpose Of Visit</h1>
                        <p className="lead">{this.props.entireState.purpose}</p>
                    </li>
                </ul>
                <button type="submit" className="btn btn-primary mt-2" onClick={this.props.onButtonClick}>Go Back To Edit Details</button>
             </div>
        );
    }
}

export default Details;
