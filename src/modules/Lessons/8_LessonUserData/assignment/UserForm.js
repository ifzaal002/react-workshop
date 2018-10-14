import React from 'react';
import TextInput from "./FormElements/Text";
import SelectInput from "./FormElements/SelectInput";
import COUNTRIES from "../../../../util/countries"
import CompositeInput from "./FormElements/CompositeInput";

const GENDER_OPTIONS = [
  {label: 'Male', value: 'M'},
  {label: 'Female', value: 'F'},
];
const EDUCATION_OPTIONS = [
  {label: 'Graduation', value: 'GRAD'},
  {label: 'Under Graduation', value: 'UGRAD'},
];

class UserForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      country: 'PK',
      userName: 'Ifzal',
      gender: 'M',
      education: new Map([['GRAD', true]])
    }

  }


  onInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    if (target.type === 'checkbox') {
      this.setState((prevState) => (
          prevState.education.set(target.value, target.checked)
      ));
    } else {
      this.setState({[target.name]: value});
    }

  };

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
        <section className="lesson-practice-user-data info-panel">
          <h2>User Signup Form</h2>
          <form onSubmit={this.onFormSubmit}>
            <fieldset>
              <TextInput name='userName' id="user_name" label="Enter Username" placeHolder="Please enter your name"
                         value={this.state.userName} onChange={this.onInputChange}/>
            </fieldset>
            <fieldset>
              <SelectInput name='country' id="country" label="Select Country" value={this.state.country}
                           options={COUNTRIES}
                           onChange={this.onInputChange}/>
            </fieldset>
            <fieldset>
              <CompositeInput name='gender' id="gender" label="Select Gender" value={this.state.gender} type="radio"
                              options={GENDER_OPTIONS}
                              onChange={this.onInputChange}/>
            </fieldset>
            <fieldset>
              <CompositeInput name='education' id="education" label="Select degrees" value={this.state.education}
                              type="checkbox"
                              options={EDUCATION_OPTIONS}
                              onChange={this.onInputChange}/>
            </fieldset>
            <div className="panel-body text-center">
              <input className="btn btn-success" type="submit" value="Sign Up"/>
            </div>


          </form>
        </section>
    );
  }
}

export default UserForm;
