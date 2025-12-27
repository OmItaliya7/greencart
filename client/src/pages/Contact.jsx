import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Contact = () => {
  const { axios } = useAppContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/contact/add", formData);

      if (data.success) {
        toast.success(data.message || "Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="mt-16 pb-16 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        Contact <span className="text-[var(--color-primary)]">Us</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-4 text-gray-600">
          <p>
            <strong>📍 Address:</strong> Surat, Gujarat, India
          </p>
          <p>
            <strong>📧 Email:</strong> support@greencart.com
          </p>
          <p>
            <strong>📞 Phone:</strong> +91 9473476124
          </p>
          <p>
            <strong>🕒 Working Hours:</strong> Mon – Sat (9:00 AM – 6:00 PM)
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded outline-none focus:border-[var(--color-primary)]"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border px-4 py-2 rounded outline-none focus:border-[var(--color-primary)]"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full border px-4 py-2 rounded outline-none focus:border-[var(--color-primary)]"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-[var(--color-primary)] text-white px-6 py-2 rounded hover:bg-[var(--color-primary-dull)] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
