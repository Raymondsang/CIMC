import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './Firebase/FirebaseConfig';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'contacts'), {
                name: formData.name,
                email: formData.email,
                description: formData.description,
                timestamp: new Date(),
            });
            setMessage('Your message has been sent successfully!');
            setFormData({ name: '', email: '', description: '' });
        } catch (error) {
            setMessage('Failed to send the message.');
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
            {message && <p className="mt-4">{message}</p>}
        </div>
    );
}

export default ContactForm;
