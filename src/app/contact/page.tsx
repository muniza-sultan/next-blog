"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {  // 👈 changed type
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6">📬 Contact Me</h1>

      <form onSubmit={handleSubmit} className="space-y-4">  {/* 👈 form tag with onSubmit */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your message..."
          />
        </div>

        {status === "success" && (
          <p className="text-green-600 font-medium">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-500 font-medium">❌ Something went wrong. Try again.</p>
        )}

        <button
          type="submit"   // 👈 type submit instead of onClick
          disabled={status === "loading"}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}