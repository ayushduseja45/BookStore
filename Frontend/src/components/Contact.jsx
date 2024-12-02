
import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });
        const data = await response.json();
        console.log('Response:', data);
    };

    return (
        
        <div className="bg-gray-300 p-4 flex items-center justify-center pt-20">
            <div className="max-w-4xl flex flex-col lg:flex-row items-center bg-red-300 p-8 rounded-lg shadow-lg">
                
                <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
                    <img 
                        src="/image.png" // Replace with actual image source
                        alt="Book with pages forming a heart"
                        className="rounded-lg shadow-lg mr-10"
                    />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">To Place Order</h2>
                    <p className="text-gray-700 mb-2">
                        <strong>Call:</strong> +91 9235454965
                    </p>
                    <p className="text-gray-700 mb-2">
                        <strong>Mail:</strong> <a href="mailto:booknest@gmail.com" className="text-blue-500 underline hover:text-blue-700">booknest@gmail.com</a>
                    </p>
                    <p className="text-gray-700 mb-2">
                        <strong>Location:</strong> Mumbai, India - 902839
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label>Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="border p-2 w-full"
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="border p-2 w-full"
                            />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="border p-2 w-full"
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white p-2">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
