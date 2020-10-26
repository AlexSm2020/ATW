import React, { Component } from 'react';
import 'react-dropdown/style.css';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step} from "react-step-progress-bar";
import './form.css';
import {  Label, Input } from 'reactstrap';
 
const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
    { value: 'four', label: 'Four' }

];

class ApplicantDetails_2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }



    render(){
        const { major, highestEducation, gradeAverage,futureMajor, handleChange } = this.props;
        const defaultOption = options[0];
        return(
            <div className="application-form">
                                <ProgressBar percent={50}>
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
                <label></label>

                <label>
                <label>What is your major?</label>
                    <input
                        type="text"
                        name="major"
                        value={major}
                        onChange={handleChange('major')}
                        placeholder="major"
                        maxLength="30"
                    />
                </label>
        
                <label>
                <label>What is your highest educational degree?</label>
                    <input
                        type="text"
                        name="highestEducation"
                        value={highestEducation}
                        onChange={handleChange('highestEducation')}
                        placeholder="Your last degree earned"
                        maxLength="30"
                    />
                </label>
                
                <label>
                <label>What is your GPA for the highest educational degree?</label>
                    <input
                        type="text"
                        name="gradeAverage"
                        value={gradeAverage}
                        onChange={handleChange('gradeAverage')}
                        placeholder="gradeAverage"
                        maxLength="30"
                    />
                </label>
                
                <label>
                <label>Which programm/degree are you planing to apply for?</label>
                    <input
                        type="text"
                        name="futureMajor"
                        value={futureMajor}
                        onChange={handleChange('futureMajor')}
                        placeholder="future degree"
                        maxLength="30"
                    />
                </label>
                
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </div>
        );
    }
}

export default ApplicantDetails_2;