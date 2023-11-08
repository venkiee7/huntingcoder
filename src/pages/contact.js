import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phone, email, name, desc);

    const data = { phone, email, name, desc };

    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        // console.log("Success:", data);
        setPhone("");
        setEmail("");
        setName("");
        setDesc("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    } else if (e.target.name == "name") {
      setName(e.target.value);
    }
    // console.log(e, "change");
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your name
          </label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            className={styles.input}
            id="name"
            name="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            className={styles.input}
            name="email"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We will never share your email with anyone else.
          </div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Phone
          </label>
          <input
            type="phone"
            value={phone}
            onChange={handleChange}
            className={styles.input}
            name="phone"
            id="phone"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.formlabel}>
            Elaborate your concern
          </label>
          <textarea
            value={desc}
            onChange={handleChange}
            className={styles.input}
            placeholder="Write your concern here"
            name="desc"
            id="desc"
          />
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
