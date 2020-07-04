import React from 'react';
import emailjs from 'emailjs-com';

const initialState = {
  name: '',
  phone: '',
  email: '',
  message: ''
}

export default class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    let emailError = '';
    let nameError = '';
    let phoneError ='';

    if (!this.state.phone || this.state.phone.length > 10) {
      phoneError = 'invalid phone';
    }

    if (!this.state.name) {
      nameError = 'invalid name';
    }

    if (!this.state.email.includes('@')) {
      emailError = 'invalid email';
    }

    if (emailError || nameError || phoneError) {
      this.setState({ emailError, nameError, phoneError });
      return false;
    }
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
        emailjs
        .sendForm(
          'gmail', 
          'portfoliotemplate', 
          '.contact-form', 
          'user_wQPetSHncS1Xuyip0lihm'
        )
        .then()
        .catch();
      this.setState({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      alert('Message sent!');
    }    
    if (!isValid) {
      alert('Please enter a valid name, phone, and email');
    }    
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className='contact-form'
        >
          <label>Name : </label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Your name'
            value={this.state.name}
            onChange={this.handleChange}
            />
            <br />
          <label>Phone : </label>
          <input
            type='text'
            id='phone'
            name='phone'
            placeholder='XXXXXXXXXX'
            value={this.state.phone}
            onChange={this.handleChange}
            />
            <br />
          <label>Email : </label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='email@host.com'
            value={this.state.email}
            onChange={this.handleChange}
            />
            <br />
          <label>Message : </label>
          <input
            type='text'
            id='message'
            name='message'
            placeholder='How can I help?'
            value={this.state.message}
            onChange={this.handleChange}
            />
            <br />
            <input
            type='submit'
            className='button'
            />
        </form>
      </div>
    );
  }
}