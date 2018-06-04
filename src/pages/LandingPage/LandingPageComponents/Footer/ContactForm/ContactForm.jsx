import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { style } from './ContactForm.styles'
import Sendbutton from '../../Buttons/SendButton';

class ContactForm extends Component {
  render() {
    return (
      <Form style={style.form}>
        <FormGroup>
        <Label for='email'>Correo Electronico:</Label>
        <Input 
          type='email' 
          name='email'
          id='emailInput'
          placeholder='prueba@prueba.com'
          style={style.inputLines} />
        </FormGroup>
        <FormGroup>
        <Label for='firstName'>Primer Nombre:</Label>
        <Input 
          type='text' 
          name='firstName'
          id='firstNameInput'
          placeholder='Josex'
          style={style.inputLines} />
        </FormGroup>
        <FormGroup>
        <Label for='lastName'>Apellido:</Label>
        <Input 
          type='text' 
          name='lastName'
          id='lastNameInput'
          placeholder='Lopez'
          style={style.inputLines} />
        </FormGroup>
        <FormGroup>
        <Label for='email'>Escriba su mensaje aqui:</Label>
        <Input 
          type='textarea' 
          name='email'
          id='emailInput'
          placeholder='Me gustaria saber el precio de...'
          style={style.textArea} />
        </FormGroup>
        <div style={style.sendButtonContainer}>
          <Sendbutton style={style.sendButton} />
        </div>
      </Form>
    )
  }
}

export default ContactForm;