  
import React, { Component } from 'react';
import Axios from 'axios';
import { ProgressBar, Step} from "react-step-progress-bar";
import './form.css';
// aref test

class AllInfo extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    submit = (e,data) => {
        e.preventDefault();
        // PROCESS FORM //
        const appPayload = {
            nationality: data.jobTitle,
            countryOfEducation: data.jobLocation,
            countryOfInterest:data.countryOfInterest,
            highestEducation: data.status,
            gradeAverage: data.jobCompany,
            visa: data.jobAdURL,
            englishExam: data.interest,
            GRE: data.poc,
            GMAT: data.pocEmail,
            englishExamGrade: data.pocPhone,
            GREgrade: data.lastComm,
            GMATgrade: data.lastCommDate,
            notes: data.notes    
        }

        Axios.post("/user/startApplication", appPayload)
            .then((response) => {
                console.log(response)
                window.location = "/applications"
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    render(){
        const { status,interest,countryOfInterest, jobTitle, jobCompany, jobLocation, jobAdURL, LastComm, LastCommDate, poc, pocEmail, pocPhone, notes  } = this.props;
        return(
            <div className="application-form">
                                <ProgressBar percent={100}>
                    <Step>
                        {({ accomplished, index }) => (
                            <div
                                className={`indexedStep ${accomplished ? "accomplished" : null}`}
                            >
                                {index + 1}
                            </div>
                        )}
                    </Step>
                    <Step>
                        {({ accomplished, index }) => (
                            <div
                                className={`indexedStep ${accomplished ? "accomplished" : null}`}
                            >
                                {index + 1}
                            </div>
                        )}
                    </Step>
                    <Step>
                        {({ accomplished, index }) => (
                            <div
                                className={`indexedStep ${accomplished ? "accomplished" : null}`}
                            >
                                {index + 1}
                            </div>
                        )}
                    </Step>
                    <Step>
                        {({ accomplished, index }) => (
                            <div
                                className={`indexedStep ${accomplished ? "accomplished" : null}`}
                            >
                                {index + 1}
                            </div>
                        )}
                    </Step>
                </ProgressBar>
                <h4>Here is the information you entered:</h4>

                Nationality: <b>{jobTitle}</b><br />
                Average GPA: <b>{jobCompany}</b><br />
                Country of Education: <b>{jobLocation}</b><br />
                Interested Country:<b>{countryOfInterest}</b><br />
                English Exam: <b>{interest}</b><br />
                highest Education: <b>{status}</b><br />
                Visa: <b>{jobAdURL}</b><br />
                GRE Grade: <b>{LastComm}</b><br />
                GMAT grade:<b>{LastCommDate}</b><br />
                GRE:<b>{poc}</b><br />
                GMAT:<b>{pocEmail}</b><br />
                englis Exam Grade:<b>{pocPhone}</b><br />
                Extra Notes:<b>{notes}</b><br />
                <button className="Back" onClick={this.back}>
                    « Make Changes
                </button>
                <button className="Next" onClick={(e)=>this.submit(e,this.props)}>
                Submit
                </button>
            </div>
        );
    }
}

export default AllInfo;

