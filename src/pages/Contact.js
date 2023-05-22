import React from "react";
import styled from "styled-components";
const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d33370.886220875866!2d87.92600066621613!3d24.472267002965214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x39fa38d92ffd83b7%3A0xd15cf26169064710!2sPanchahar%2C%20West%20Bengal%20731221%2C%20India!3m2!1d24.4673585!2d87.94940969999999!4m3!3m2!1d24.4666446!2d87.9514533!5e0!3m2!1sen!2sin!4v1684693974942!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xlekkebd" method="POST" className="contact-inputs" >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              required
              autoComplete="off"
            />
            <textarea name="Message" id="" cols="30" rows="10" required autoComplete="off" placeholder="Enter Your message"></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.hover_btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
export default Contact;
