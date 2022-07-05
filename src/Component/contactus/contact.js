import React, { useState } from "react";
import "./contact.css";
import swal from "sweetalert2";

function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");

  function submitform() {
    const obj = {
      name: name,
      email: email,
      message: msg,
    };

    fetch("https://apptej.herokuapp.com/savecontactinfo", {
      method: "POST",
      body: JSON.stringify({ name: name, email: email, message: msg }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (data) => data.json())
      .then(() => {
        console.log(123);
      });
    swal.fire({
      icon: "success",
      title: "Thank You :)",
      type: "success",
      text: "Your feedback has been submitted.",
    });
    setname("");
    setemail("");
    setmsg("");
  }

  return (
    <>
      <div>
        <div class="aa contact-form-wrapper d-flex justify-content-center">
          <form
            action="#"
            class="contact-form"
            onSubmit={() => {
              submitform();
            }}
          >
            <h5 class="title">Contact us</h5>
            <p class="description">
              Feel free to contact us if you need any assistance, any help or
              another question.
            </p>
            <div>
              <input
                type="text"
                class="form-control rounded border-white mb-3 form-input"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <input
                type="email"
                class="form-control rounded border-white mb-3 form-input"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <textarea
                id="message"
                class="form-control rounded border-white mb-3 form-text-area"
                rows="5"
                cols="30"
                placeholder="Message"
                value={msg}
                onChange={(e) => {
                  setmsg(e.target.value);
                }}
                required
              ></textarea>
            </div>
            <div class="submit-button-wrapper">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
