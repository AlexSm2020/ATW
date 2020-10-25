import React, { Component } from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import './form.css';
import PhoneInput from "react-phone-number-input"


class JobDetails_3 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { notes, GRE, GMAT, englishExamGrade, handleChange } = this.props;
        return (
            <div className="application-form">
                <ProgressBar percent={75}>
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
                <h3>Enter your job information:</h3>

                <label className="lable1">
                    <input
                        type="text"
                        name="GRE"
                        value={GRE}
                        onChange={handleChange('GRE')}
                        placeholder="GRE"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="GMAT"
                        value={GMAT}
                        onChange={handleChange('GMAT')}
                        placeholder="GMAT"
                    />
                </label>
                <label>
                    <PhoneInput className="phone-input"
                        placeholder="englis Exam Grade"
                        value={englishExamGrade}
                        name="englishExamGrade"
                        onChange={handleChange('englishExamGrade')}
                        defaultCountry="US"
                    >
                    </PhoneInput>
                </label>
                <label>
                    <input className="text-area"
                        type="textarea"
                        name="notes"
                        value={notes}
                        onChange={handleChange('notes')}
                        placeholder="Any extra notes?"
                    />
                </label>

                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={this.continue}>
                    Continue »
                </button>
            </div>
        );
    }
}

export default JobDetails_3;