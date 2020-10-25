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
        const { englishExam, englishExamGrade, GRE, GREgrade, GMAT,GMATgrade, notes, handleChange } = this.props;
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
                <label></label>


                <div className="form-group">
                    <label>Have you taken any english exames (Like: IELTS, TOEFL,...?)</label>
                    <select className="form-control" name="englishExam"  value={englishExam} onChange={this.props.handleChange('englishExam')}>
                        <option>Please select an option</option>
                        <option>TOEFL</option>
                        <option>IELTS</option>
                        <option>Other</option>
                        <option>None</option>
                    </select>
                </div>

                <label>
                <label>If Yes, what is your overall score?</label>
                    <input
                        type="text"
                        name="englishExamGrade"
                        value={englishExamGrade}
                        onChange={handleChange('englishExamGrade')}
                        placeholder="english exam overall score"
                    />
                </label>

                <label className="form-group">
                <label>Have you taken GRE?</label>
                <select className="form-control" name="GRE"  value={GRE} onChange={this.props.handleChange('GRE')}>
                        <option>Please select an option</option>
                        <option>Yes</option>
                        <option>No, I will take it later</option>
                    </select>
                </label>

                <label>
                <label>If Yes, please enter your scores in the order of:</label>
                <label>Verbal, Quantitative,Writing (Ex: 164, 161, 3.5)</label>
                    <input 
                        type="text"
                        name="GREgrade"
                        value={GREgrade}
                        onChange={handleChange('GREgrade')}
                        placeholder="GRE grades"
                    />
                </label>

                <label className="form-group">
                <label>Have you taken GMAT?</label>
                <select className="form-control" name="GMAT"  value={GMAT} onChange={this.props.handleChange('GMAT')}>
                        <option>Please select an option</option>
                        <option>Yes</option>
                        <option>No, I will take it later</option>
                    </select>
                </label>

                <label>
                <label>If Yes, please enter your scores in the order of:</label>
                <label>Verbal, Quantitative, Writing (Ex: 26, 36, 5)</label>
                    <input
                        type="text"
                        name="GMATgrade"
                        value={GMATgrade}
                        onChange={handleChange('GMATgrade')}
                        placeholder="GMAT scores"
                    />
                </label>


                <label>
                    <input className="text-area"
                        type="textarea"
                        name="notes"
                        value={notes}
                        onChange={handleChange('notes')}
                        placeholder="Extra notes?"
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