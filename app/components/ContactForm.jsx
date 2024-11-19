"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required ";
    if (!formData.email) {
      errors.email = "email is required";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      setErrors({});
      setIsSending(true);
      emailjs
        .send(
          "service_vfcqsvr",
          "template_yqly2d7",
          {
            user_name: formData.name,
            user_email: formData.email,
            message: formData.message,
          },
          "GOxvzU9_EUyp8rZFS"
        )
        .then((response) => {
          console.log("Success", response.status, response.text);
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("error");
          toast.error("failed to send message , please try again later ");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };
  return (
    <div className="mx-auto max-w-xl p-4">
      <Toaster />
      <h2 className="my12 text-center text-2xl font-semibold uppercase mb-4 tracking-wide text-slate-100">
        Get in Touch{" "}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full appearance-none rounded-lg border
             border-slate-800 bg-transparent px-3 py-2 texxt-sm
              focus:border-gray-400 focus:outline-none"
          />
          {errors.name && (
            <p className="text-sm text-pink-700">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full appearance-none rounded-lg border
             border-slate-800 bg-transparent px-3 py-2 texxt-sm
              focus:border-gray-400 focus:outline-none"
          />
          {errors.email && (
            <p className="text-sm text-pink-700">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            type="message"
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full appearance-none rounded-lg border
             border-slate-800 bg-transparent px-3 py-2 texxt-sm
              focus:border-gray-400 focus:outline-none"
            rows={4}
          />
          {errors.message && (
            <p className="text-sm text-pink-700">{errors.message}</p>
          )}
        </div>
        <button
          className={`w-full rounded bg-gray-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:text-teal-800 ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
