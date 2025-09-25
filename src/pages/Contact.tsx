import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Added honeypot field
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false });

    try {
      // Replace with your actual backend API endpoint
      const response = await fetch('https://formspree.io/f/mblzlggj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ loading: false, success: true, error: false });
        setFormData({ name: '', email: '', message: '', honeypot: '' }); // Clear the form
      } else {
        setFormStatus({ loading: false, success: false, error: true });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
          <input
            className="border border-gray-300 p-2 w-full rounded"
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input
            className="border border-gray-300 p-2 w-full rounded"
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
          <textarea
            className="border border-gray-300 p-2 w-full rounded"
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div style={{ display: 'none' }}>
          <label htmlFor="honeypot">Do not fill this field</label>
          <input
            type="text"
            id="honeypot"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
          />
        </div>
        <button
          className={`bg-blue-500 text-white py-2 px-4 rounded ${formStatus.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          type="submit"
          disabled={formStatus.loading}
        >
          {formStatus.loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {formStatus.success && <p className="mt-4 text-green-600">Message sent successfully!</p>}
      {formStatus.error && <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>}
    </div>
  );
};

export default Contact;
