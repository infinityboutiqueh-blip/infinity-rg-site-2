"use client";
import React, { useState } from "react";

export default function QuickEnquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Enquiry submitted!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("❌ Error: " + data.error);
      }
    } catch (err) {
      alert("⚠️ Could not connect to server.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <input
        className="px-3 py-2 rounded-lg text-black"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="px-3 py-2 rounded-lg text-black"
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        className="px-3 py-2 rounded-lg text-black"
        rows={4}
        placeholder="Tell us a bit about your goals…"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-2xl bg-blue-600 hover:bg-blue-500 px-4 py-2 text-white font-semibold"
      >
        Send enquiry
      </button>
    </form>
  );
}
