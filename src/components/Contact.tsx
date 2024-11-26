import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const webhookURL = import.meta.env.VITE_ASTRO_WEBHOOK_URL?.toString() || "https://discord.com/api/webhooks/1164589281772310588/--yzEwJ8ydf0WYENe9sQ-mgBr3q8do5a4ddUKXNPo7rjUUzsrvqo61c9CJlA24erP9N2";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!subject || !email || !message) {
      setStatus('Please fill in all the required fields.');
      return;
    }

    const content = `**Email:** ${email}\n**Subject:** ${subject}\n\n**Message:**\n${message}`;

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: content }),
    })
    console.log(webhookURL);
  };

  return (
    <div className="contact-form max-w-md mx-auto mt-8 p-6 bg-neutral-2 rounded-2xl">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-neutral-8">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 border border-neutral-4 rounded-2xl bg-neutral-1 text-neutral-9 focus:outline-none focus:ring-2 focus:ring-neutral-7 focus:ring-offset-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-neutral-8">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 border border-neutral-4 rounded-2xl bg-neutral-1 text-neutral-9 focus:outline-none focus:ring-2 focus:ring-neutral-7 focus:ring-offset-2"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-neutral-8">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full px-4 py-2 mt-1 border border-neutral-4 rounded-2xl bg-neutral-1 text-neutral-9 focus:outline-none focus:ring-2 focus:ring-neutral-7 focus:ring-offset-2"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 border border-neutral-4"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center text-sm text-neutral-7">{status}</p>}
    </div>
  );
};

export default ContactForm;
