import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!subject || !email || !message) {
      setStatus('Please fill in all the required fields.');
      return;
    }
  
    const content = { email, subject, message };
    console.log('Sending content:', content);
  
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
      });
  
      if (response.ok) {
        setStatus('Message sent successfully!');
      } else {
        const error = await response.text();
        setStatus(`Error: ${error}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        // Handle generic errors
        console.error(error.message);
      }
    }
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
