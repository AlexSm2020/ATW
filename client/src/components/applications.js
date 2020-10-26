import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Link } from "react-router-dom"
import axios from "axios"


class Applications extends Component {
    // Creating state to store applications received from axios query
    state = {
        applications: []
    }
    // Retrieving applications for user upon loading this component. 
    async componentDidMount() {
        try {
            const applications = await axios.get("/user/applications")

            this.setState({
                applications: applications.data.applications
            })
        }
        catch (error) {
            if (error) {
                console.log(error)
            }
        }
    }

    render() {
        return (
            <div className="APPLICATIONS">
                <h6 className="applicationsHeader1">Tell us about yourself. let us know what exaclty you are looking for by answering some simple questions.  </h6>
                <h6 className="applicationsHeader1">Here, you can make as many applications as you want. You may make multiple applications depending your needs!  </h6>
                <h6 className="applicationsHeader1">You may modify your applications later by login to your account.  </h6>
                <h6 className="applicationsHeader1"> 
               <Link to='/userForm' className="linkBTN">
                    <button className="appBTN">
                        Add an Application
                </button>
                </Link>
                </h6>
                <h4 className="applicationsHeader">My Applications</h4>
                <div className="APPLICATIONS_cards"  >
                    <ListGroup >
                        {
                            this.state.applications.map(application => {
                                return (
                                <ListGroupItem className="APPLICATIONS_cards_items" style={{borderColor:"rgb(39, 114, 212)", width:"40%", marginLeft:"auto", marginRight:"auto"}}>
                                    <Link to={{
                                        pathname: "/singleApplication",
                                        state: {
                                            application: application
                                        }
                                    }}>
                                        <ListGroupItemHeading>{application.applicationName}</ListGroupItemHeading>
                                    </Link>
                                    <ListGroupItemText>
                                        Future Country: {application.countryOfInterest}
                                    </ListGroupItemText>
                                    <ListGroupItemText>
                                        programm/degree: {application.futureMajor}
                                    </ListGroupItemText>
                                </ListGroupItem>)
                            })
                        }

                    </ListGroup>
                </div >
            </div >
        )
    }

}

export default Applications