import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = 'service_1jr8p9r';
    const templateId = 'template_erxkaxz';
    const publicKey = '_3a69brkOjcT9kCS4';

    const templateParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      to_name: 'Bhati Ji',
      message: message,
      email: "rishabhbhati831@gmail.com",
    };

    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email sent successfully!', response);

      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      alert('Email sent successfully!');

    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-yellow-400 dark:text-purple-400">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg border bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-yellow-400 dark:text-purple-400">Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg border bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="name@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-yellow-400 dark:text-purple-400">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 rounded-lg border bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="123-456-7890"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-yellow-400 dark:text-purple-400">Your Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="w-full p-3 rounded-lg border bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Write your message here..."
            required
          />
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input 
              id="terms" 
              type="checkbox" 
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 dark:bg-gray-700" 
              required 
            />
          </div>
          <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            I agree with the <a href="#" className="text-yellow-400 dark:text-purple-400 hover:underline">terms and conditions</a>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full text-white ${isSubmitting ? 'bg-yellow-500 dark:bg-purple-500' : 'bg-yellow-400 hover:bg-yellow-500 dark:bg-purple-400 dark:hover:bg-purple-500'} font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
        >
          {isSubmitting ? 'Sending...' : 'Send Email'}
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
