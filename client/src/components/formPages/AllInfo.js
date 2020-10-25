  
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
            applicationName: data.applicationName,
            nationality: data.nationality,
            countryOfEducation: data.countryOfEducation,
            countryOfInterest: data.countryOfInterest,
            visa: data.visa,
            highestEducation: data.highestEducation,
            gradeAverage: data.gradeAverage,
            futureMajor: data.futureMajor,
            major: data.major,
            englishExam: data.englishExam,
            GRE: data.GRE,
            GMAT: data.GMAT,
            englishExamGrade: data.englishExamGrade,
            GREgrade: data.GREgrade,
            GMATgrade: data.GMATgrade,
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
        const { highestEducation,applicationName,major,futureMajor, englishExam,countryOfInterest, nationality, gradeAverage, countryOfEducation, visa, GREgrade, GMATgrade, GRE, GMAT, englishExamGrade, notes  } = this.props;
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

                Application Name: <b>{applicationName}</b><br />
                Nationality: <b>{nationality}</b><br />
                Country of Education: <b>{countryOfEducation}</b><br />
                Interested Country: <b>{countryOfInterest}</b><br />
                Visa:  <b>{visa}</b><br />
                Major: <b>{major}</b><br />
                Highest Education: <b>{highestEducation}</b><br />
                Average GPA: <b>{gradeAverage}</b><br />
                Future Program/Degree: <b>{futureMajor}</b><br />
                English Exam: <b>{englishExam}</b><br />
                Englis Exam Grade: <b>{englishExamGrade}</b><br />
                GRE: <b>{GRE}</b><br />
                GRE Grade: <b>{GREgrade}</b><br />
                GMAT: <b>{GMAT}</b><br />
                GMAT grade: <b>{GMATgrade}</b><br />
                Extra Notes: <b>{notes}</b><br />
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

