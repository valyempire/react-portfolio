import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  ContactForm,
  ContactTitle,
  ContactInput,
  ContactInputMessage,
  ContactButton,
} from "./ContactStyles";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.current !== null) {
      // Use emailjs to send the form data as an email
      emailjs
        .sendForm(
          "service_sobiku4", // YOUR_SERVICE_ID
          "template_xr0evz9", // YOUR_TEMPLATE_ID
          form.current,
          "ThmIOLZE6oBtJ2z6C" // YOUR_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    // Reset the form after submission
    if (e.target instanceof HTMLFormElement) {
      e.target.reset();
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput
            type="email"
            placeholder="Email"
            name="user_email"
            required
          />
          <ContactInput
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
