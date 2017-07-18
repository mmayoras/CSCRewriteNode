import React, {Component} from 'react';
import SkyLight from 'react-skylight';

class CommercialForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      middleInitial: '',
      lastName: '',
      strNumber: '',
      date: new Date(),
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
    };
  }

  handleChange = (event) => {
    console.log('NAME: ' + event.target.name + ' VALUE: ' + event.target.value);
    this.setState(
        {[event.target.name]: event.target.value},
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let newCommercial = {
      id: 0,
      firstName: this.state.firstName,
      middleInitial: this.state.middleInitial,
      lastName: this.state.lastName,
      strNumber: this.state.strNumber,
      date: this.state.date,
      addressLine1: this.state.addressLine1,
      addressLine2: this.state.addressLine2,
      city: this.state.city,
      state: this.state.state,
    };

    this.props.createCommercial(newCommercial);

    this.setState({
      firstName: '',
      middleInitial: '',
      lastName: '',
      strNumber: '',
      date: new Date(),
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
    });

    this.refs.simpleDialog.hide();
  };

  render() {
    const inputStyle = {
      margin: '5px',
      padding: '5px',
      width: '25%',
    };

    return (
        <div>
          <SkyLight hideOnOverlayClicked ref="simpleDialog">
            <h2>Start Commercial Application</h2>
            <form>
              <input style={inputStyle} type="text" placeholder="First Name"
                     name="firstName"
                     onChange={this.handleChange}/>
              <input style={inputStyle} type="text" placeholder="Middle Initial"
                     name="middleInitial"
                     onChange={this.handleChange}/>
              <input style={inputStyle} type="text" placeholder="Last Name"
                     name="lastName"
                     onChange={this.handleChange}/>
              <input style={inputStyle} type="text" placeholder="Store Number"
                     name="strNumber"
                     onChange={this.handleChange}/>
              <input style={inputStyle} type="text" placeholder="Date"
                     name="date"
                     onChange={this.handleChange}/>
              <input style={inputStyle} type="text" placeholder="Address Line 1"
                     name="addressLine1"
                     onChange={this.handleChange}/>
              <input style={inputStyle} type="text" placeholder="Address Line 2"
                     name="addressLine2"
                     onChange={this.handleChange}/>
              <input style={inputStyle} type="text" placeholder="City"
                     name="city"
                     onChange={this.handleChange}/>
              <input style={inputStyle} type="text" placeholder="State"
                     name="state"
                     onChange={this.handleChange}/>
              <div>
                <button className="button primary small"
                        onClick={this.handleSubmit}>Save
                </button>
              </div>
            </form>
          </SkyLight>
          <div style={{textAlign: 'center'}}>
            <button className="button primary medium"
                    onClick={() => this.refs.simpleDialog.show()}>New Commercial
              Application
            </button>
          </div>
        </div>
    );
  }
}

export default CommercialForm;