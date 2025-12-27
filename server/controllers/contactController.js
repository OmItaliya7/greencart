import ContactMessage from "../models/ContactMessage.js";

export const addContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.json({ success: false, message: "All fields are required" });
    }

    await ContactMessage.create({ name, email, message });

    res.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
