import React, { Component,  useState} from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step} from "react-step-progress-bar";
import './form.css';
import Select from 'react-select'
import countryList from 'react-select-country-list'


const options = countryList().getData()

class JobDetails_1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { applicationName, nationality, gradeAverage,countryOfInterest, countryOfEducation, visa, handleChange } = this.props;
 
        return (
            <div className="application-form">
                <ProgressBar percent={25}>
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



                <h3>Tell us more about yourself:</h3>
                <label>
                    <input
                        type="text"
                        name="Choose a name for your application"
                        value={applicationName}
                        onChange={handleChange('applicationName')}
                        placeholder="applicationName"
                    />
                </label>
                <h5>What is your nationality?</h5>
                <label>
                    <Select className="nationality-input"
                        options={options}
                        placeholder={nationality} 
                        value={nationality}
                        name="nationality"
                        type="country"
                        onChange={handleChange('nationality')}
                        defaultValue = {nationality}
                    >
                    </Select>
                </label>

                <label>
                    <input
                        type="text"
                        name="countryOfInterest"
                        value={countryOfInterest}
                        onChange={handleChange('countryOfInterest')}
                        placeholder="Which country are you planning to apply?"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="visa"
                        value={visa}
                        onChange={handleChange('visa')}
                        placeholder="Do you have visa?"
                    />
                </label>

                <label>
                    <input
                        type="text"
                        name="gradeAverage"
                        value={gradeAverage}
                        onChange={handleChange('gradeAverage')}
                        placeholder="gradeAverage"
                    />
                </label>

                <label>
                    <input
                        type="text"
                        name="gradeAverage"
                        value={countryOfEducation}
                        onChange={handleChange('countryOfEducation')}
                        placeholder="countryOfEducation"
                    />
                </label>


                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </div>
        );
    }
}

export default JobDetails_1;