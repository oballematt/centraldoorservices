// ContactForm.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  background: #fff;
  width: 800px;
  padding: 25px 40px 10px 40px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Text = styled.div`
  text-align: center;
  font-size: 41px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  background: -webkit-linear-gradient(
    right,
    #56d8e4,
    #9f01ea,
    #56d8e4,
    #9f01ea
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Form = styled.form`
  padding: 30px 0 0 0;
`;

const FormRow = styled.div`
  display: flex;
  margin: 32px 0;

  @media (max-width: 700px) {
    display: block;
  }
`;

const InputData = styled.div`
  width: 100%;
  height: ${(props) => (props.textarea ? '70px' : '40px')};
  margin: 0 20px;
  position: relative;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);

  &:focus ~ label,
  &:valid ~ label {
    transform: translateY(-20px);
    font-size: 14px;
    color: #3498db;
  }
`;

const TextArea = styled.textarea`
  resize: none;
  padding-top: 10px;
`;

const Label = styled.label`
  position: absolute;
  pointer-events: none;
  bottom: ${(props) => (props.textarea ? '40px' : '10px')};
  font-size: 16px;
  transition: all 0.3s ease;
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;

  &:before {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    background: #3498db;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  ${Input}:focus ~ &:before,
  ${Input}:valid ~ &:before,
  ${TextArea}:focus ~ &:before,
  ${TextArea}:valid ~ &:before {
    transform: scale(1);
  }
`;

const SubmitBtn = styled.div`
  overflow: hidden;
  height: 45px !important;
  width: 25% !important;
`;

const Inner = styled.div`
  height: 100%;
  width: 300%;
  position: absolute;
  left: -100%;
  background: -webkit-linear-gradient(
    right,
    #56d8e4,
    #9f01ea,
    #56d8e4,
    #9f01ea
  );
  transition: all 0.4s;
`;

const SubmitInput = styled.input`
  background: none;
  border: none;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  z-index: 2;
`;

const ContactForm = () => {
  return (
    <Container>
      <Text>Contact us Form</Text>
      <Form action="#">
        <FormRow>
          <InputData>
            <Input type="text" required />
            <Underline />
            <Label>First Name</Label>
          </InputData>
          <InputData>
            <Input type="text" required />
            <Underline />
            <Label>Last Name</Label>
          </InputData>
        </FormRow>
        <FormRow>
          <InputData>
            <Input type="text" required />
            <Underline />
            <Label>Email Address</Label>
          </InputData>
          <InputData>
            <Input type="text" required />
            <Underline />
            <Label>Website Name</Label>
          </InputData>
        </FormRow>
        <FormRow>
          <InputData textarea>
            <TextArea rows="8" cols="80" required />
            <br />
            <Underline />
            <Label>Write your message</Label>
            <br />
          </InputData>
        </FormRow>
        <FormRow className="submit-btn">
          <SubmitBtn>
            <InputData>
              <Inner />
              <SubmitInput type="submit" value="submit" />
            </InputData>
          </SubmitBtn>
        </FormRow>
      </Form>
    </Container>
  );
};

export default ContactForm;
