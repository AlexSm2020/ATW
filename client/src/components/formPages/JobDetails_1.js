import React, { Component } from 'react';
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
        const { jobTitle, jobCompany,countryOfInterest, jobLocation, jobAdURL, handleChange } = this.props;
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
                    <Select className="phone-input"
                        options={options}
                        placeholder="Nationality"
                        value={jobTitle}
                        name="jobTitle"
                        onChange={handleChange('jobTitle')}
                        displayValue = {jobTitle}
                        text={{jobTitle} || "Nationality"}
                        hideSelectedOptions={false}
                        defaultCountry="US"
                    >
                    </Select>
                </label>
                <label>
                    <input
                        type="text"
                        name="jobCompany"
                        value={jobCompany}
                        onChange={handleChange('jobCompany')}
                        placeholder="gradeAverage"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="countryOfInterest"
                        value={countryOfInterest}
                        onChange={handleChange('countryOfInterest')}
                        placeholder="countryOfInterest"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="jobCompany"
                        value={jobLocation}
                        onChange={handleChange('jobLocation')}
                        placeholder="countryOfEducation"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="jobAdURL"
                        value={jobAdURL}
                        onChange={handleChange('jobAdURL')}
                        placeholder="visa"
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