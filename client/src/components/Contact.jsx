import React from 'react'
import '../Contact.css'
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
const Contact = () => {

    const audio = new Audio(buttonSound)


    const handleOnSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: "Thanks for your message!</br></br>If you get an email back from me about canned meat, don't open it. It's spam.😎"
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops, something went wrong',
            text: error.text,
          })
        });
      e.target.reset()
    };
    
  return (
    <div className='contactMain'>
        <span className='title1111'>Have a question? Want to collaborate? Squash some bugs?</span>
        <span className='title2222'>Let me know!</span>
        <Form className='formBox flex-row flex p-1 justify-around flex-wrap rounded'onSubmit={handleOnSubmit}>
        <Form.Field className='formFields'
          id='form-input-control-email'
          control={Input}
          label='Email:'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field className='formFields'
          id='form-input-control-last-name'
          control={Input}
          label='Name:'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field className='formFields'
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message:'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button className="navButtonForm" type='submit' onClick={()=> {audio.play()} }>Submit</Button>
      </Form>
    </div>
  )
}

export default Contact