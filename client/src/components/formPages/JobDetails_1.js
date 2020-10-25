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
        const { applicationName, nationality,countryOfInterest, countryOfEducation, visa, handleChange } = this.props;
 
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
                <label></label>



                <h3>Tell us more about yourself:</h3>
                <label>
                <label>Choose a name for your application! </label>
                    <input
                        type="text"
                        name="applicationName"
                        value={applicationName}
                        onChange={handleChange('applicationName')}
                        placeholder="Application Name!"
                        
                    />
                </label>
                <div className="form-group">
                    <label>What is your nationality?</label>
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
                </div>
                <div className="form-group">
                    <label>What is the country of your education?</label>
                    <Select className="nationality-input"
                        options={options}
                        placeholder={countryOfEducation} 
                        value={countryOfEducation}
                        name="countryOfEducation"
                        type="country"
                        onChange={handleChange('countryOfEducation')}
                        defaultValue = {countryOfEducation}
                    >
                    </Select>
                </div>
                <div className="form-group">
                    <label>Which country are you planning to apply?</label>
                    <select className="form-control" name="countryOfInterest"  value={countryOfInterest} onChange={this.props.handleChange('countryOfInterest')}>

                    <option>Please select an option</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Australia</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Do you have Visa?</label>
                    <select className="form-control" name="visa"  value={visa} onChange={this.props.handleChange('visa')}>

                        <option>Please select an option</option>
                        <option>Yes</option>
                        <option>No, I will apply later</option>
                    </select>
                </div>

                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </div>
        );
    }
}

export default JobDetails_1;