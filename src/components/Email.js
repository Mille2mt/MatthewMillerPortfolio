import React from 'react';
import emailjs from 'emailjs-com';

export default class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      message: ''      
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
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
            type='number'
            id='phone'
            name='phone'
            placeholder='Your phone number'
            value={this.state.phone}
            onChange={this.handleChange}
            />
            <br />
          <label>Email : </label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='Your email'
            value={this.state.email}
            onChange={this.handleChange}
            />
            <br />
          <label>Message : </label>
          <input
            type='text'
            id='message'
            name='message'
            placeholder='How may I be of assistance?'
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