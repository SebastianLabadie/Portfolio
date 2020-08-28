import React from "react";
import { Control, Errors, Form } from "react-redux-form";
import Wrapper from "./Wrapper";
import styled from "styled-components";
import emailjs from 'emailjs-com';

const required = (val) => val && val.length;
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const height = window.innerHeight;
const ContactStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: ${height}px;
  .container {
    width: 55%;
  }
  .title {
    font-size: 60px;
    margin: 40px 16px;
  }
  .subTitle {
    font-size: 24px;
    line-height: 1.55;
    font-weight: 500;
    margin: 16px;
  }
  .form-group {
    padding: 0 20px;
    line-height: 1.33;
    width: 100%;
    .form-control {
      width: 100%;
      padding: 0 20px;
      margin: 16px 0;
      outline: none;
      font-size: 17px;
      color: #7c7c7c;
      border: 1px solid #dadada;
      background-color: #131414;
      border-radius: 10px;
      font-weight: 700;
      line-height: 1.33;
      font-family: "Inter", sans-serif;
    }
    .input {
      height: 60px;
    }
    .textArea {
      padding-top: 10px;
      height: 160px;
    }
    .submit {
      cursor: pointer;
      background-color: #e05050;
      border-radius: 10px;
      width: 33%;
      color: #fff;
      border: none;
      height: 60px;
      padding: 0 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .fas {
    margin-top: 3px;
    margin-left: 5px;
    font-weight: 600;
    font-size: 12px;
  }

  @media screen and (max-width: 1114px) {
    .container {
      width: 55%;
    }
  }
  @media screen and (max-width: 1114px) {
    .container {
      width: 60%;
    }
  }
  @media screen and (max-width: 920px) {
    .title {
      font-size: 55px;
    }
    .subTitle {
      font-size: 22px;
    }
    .form-group {
      .submit {
        width: 36%;
        font-size: 15px;
      }
      .form-control {
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 817px) {
    .title {
      font-size: 51px;
    }
    .form-group {
      .submit {
        width: 40%;
        height: 50px;
        padding: 0 13px;
      }
    }
  }

  @media screen and (max-width: 773px) {
    .title {
      font-size: 44px;
    }
    .subTitle {
      font-size: 20px;
    }
    .form-group {
      .submit {
      }
      .form-control {
        font-size: 15px;
      }
    }
  }

  @media screen and (max-width: 697px) {
    .title {
      font-size: 38px;
    }
    .subTitle {
      font-size: 18px;
    }

    .form-group {
      .form-control {
        font-size: 14px;
      }
      .submit {
        width: 44%;
        font-size: 13px;
      }
    }
  }

  @media screen and (max-width: 579px) {
    .container {
      width: 75%;
    }
  }

  @media screen and (max-width: 465px) {
    .title {
      font-size: 35px;
    }
    .subTitle {
      font-size: 17px;
    }
    .form-group {
      .submit {
        width: 44%;
        height: 50px;
        padding: 0 5px;
      }
    }
  }
  @media screen and (max-width: 420px) {
    .subTitle {
      font-size: 16px;
    }
    .title {
      font-size: 32px;
    }
    .container {
      width: 85%;
    }
    .form-group {
      .submit {
        width: 48%;
        padding: 0 2px;
      }
    }
  }
`;

const Contact = () => {

  let data = {
    'service_id': 'default_service',
    'template_id': 'template_WyUXuOTf',
    'user_id': 'user_xnFCyYKQzoftkdB7K6nAr',
    'template_params': {
        'email_html': '',
        'message_html': ''
    }
};
const handleSendEmail2 = (val) => {
  data.template_params.email_html=val.email
  data.template_params.message_html=val.message
  fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res)
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}
 

  return (
    <>
      <Wrapper>
        <ContactStyled>
          <div className="container">
            <h2 className="title">Nice to meet you</h2>
            <p className="subTitle">
              Please give me a few details about your thoughts. If you are a
              recruiter feel free to contact me.
            </p>

            <Form model="formState" onSubmit={(val)=>handleSendEmail2(val)}>
              <div className="form-group">
                <Control.text
                  model=".email"
                  id="email"
                  name="email"
                  placeholder="Your E-mail"
                  className="form-control input"
                />
              </div>
              <div className="form-group">
                <div>
                  <Control.textarea
                    model=".message"
                    id="message"
                    name="message"
                    placeholder="Say something..."
                    rows="12"
                    className="form-control textArea"
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <button className="form-control submit" type="submit">
                    Send Message
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </ContactStyled>
      </Wrapper>
    </>
  );
};

export default Contact;
