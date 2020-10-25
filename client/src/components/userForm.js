import React, { Component } from 'react';
import JobDetails_1 from './formPages/JobDetails_1';
import JobDetails_2 from './formPages/JobDetails_2';
import JobDetails_3 from './formPages/JobDetails_3';
import AllInfo from './formPages/AllInfo';

export class StepForm extends Component {
    state = {
        step: 1,
        // step 1
        applicationName: "",
        nationality: '',
        gradeAverage: '',
        countryOfEducation: '',
        countryOfInterest: '',
        

        // step 2
        visa: '',
        highestEducation: '',
        englishExam: '',

        //step 3
        GREgrade: '',
        GMATgrade: '',
        GRE: '',
        GMAT: '',
        englishExamGrade: '',
        futureMajor: '',
        major: '',
        notes: ''
    }

    componentDidMount() {
        if (this.props.location.state) {
            this.setState({
                applicationName: this.props.location.state.application[0].applicationName,
                countryOfInterest: this.props.location.state.application[0].countryOfInterest,
                futureMajor: this.props.location.state.application[0].futureMajor,
            })
        } 
    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        console.log("arefTest" , e)
        console.log("arefTest2" , input)
        if (typeof e === "undefined"){
            return
        }
        else if (typeof e === "string") {
            this.setState({
                englishExamGrade: e
            })
        }
        else if ((typeof e === "object") && (input ==="nationality")) {
                this.setState({
                    [input]: e.label
                })
        }
        else if ((typeof e === "object") && (input ==="countryOfEducation")) {
            this.setState({
                [input]: e.label
            })
        }
        else{
            this.setState({[input]: e.target.value});
        }
    }
    countryOfEducation

    showStep = () => {
        const { step, highestEducation,applicationName, major, futureMajor, countryOfInterest,englishExam, nationality, gradeAverage, countryOfEducation, visa, GREgrade, GMATgrade,GRE,GMAT, englishExamGrade, notes } = this.state;

        if(step === 1)
            return (<JobDetails_1 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange} 

                applicationName = {applicationName}
                nationality={nationality} 
                countryOfEducation={countryOfEducation}
                countryOfInterest={countryOfInterest}
                visa={visa}

                
            />);
        if (step === 2)
            return (<JobDetails_2
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}

                major={major}
                highestEducation={highestEducation}
                gradeAverage={gradeAverage}
                futureMajor={futureMajor}
                

            />);
        if (step === 3)
            return (<JobDetails_3
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}

                englishExam={englishExam}
                englishExamGrade={englishExamGrade}
                GREgrade={GREgrade}
                GMATgrade={GMATgrade}
                GRE={GRE}
                GMAT={GMAT}
                notes={notes}
            />);
        if(step === 4)
            return (<AllInfo 
                // firstName={firstName} 
                // lastName={lastName}
                applicationName = {applicationName}
                highestEducation={highestEducation} 
                englishExam={englishExam}
                nationality={nationality} 
                gradeAverage={gradeAverage}
                countryOfEducation={countryOfEducation}
                visa={visa}
                GREgrade={GREgrade}
                GMATgrade={GMATgrade}
                notes={notes}
                GRE={GRE}
                englishExamGrade={englishExamGrade}
                GMAT={GMAT}
                countryOfInterest={countryOfInterest}
                major={major}
                futureMajor={futureMajor}
                prevStep = {this.prevStep}
            />);
    }

    render(){
        const { step } = this.state;

        return(
            <>
                {this.showStep()}
            </>
        );
    }
}

export default StepForm;