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

class JobDetails_2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { highestEducation, englishExam, GREgrade, GMATgrade, handleChange } = this.props;
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
                <label >
                <h3>Enter your job information:</h3>
                </label>
                
                <div className="form-group">
                    <label>highest Education</label>
                    <select className="form-control" name="highestEducation"  value={highestEducation} onChange={this.props.handleChange('highestEducation')}>

                        <option>Pre-application</option>
                        <option>Submitted Application</option>
                        <option>Interview</option>
                        <option>Assessment</option>
                        <option>Offered</option>
                        <option>Accepted Offer</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>English Exam</label>
                    <select className="form-control" name="englishExam"  value={englishExam} onChange={this.props.handleChange('englishExam')}>

                        <option>englishExam</option>
                        <option>englishExam2</option>
                        <option>englishExam3</option>
                        <option>englishExam4</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>GRE grade</label>
                    <select className="form-control" name="GREgrade"  value={GREgrade} onChange={handleChange('GREgrade')}>

                        <option>In-GREgrade</option>
                        <option>GREgrade1</option>
                        <option>GREgrade 2</option>
                        <option>GREgrade 3</option>
                        <option>GREgrade 4</option>
                    </select>
                </div>
                <label>
                    <label>GMAT grade</label>
                    <Input className="date-input" defaultValue={GMATgrade} onChange={this.props.handleChange('GMATgrade')} type="date" bsSize="lg" name="GMATgrade" className="taskDueDate"></Input>
 
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

export default JobDetails_2;