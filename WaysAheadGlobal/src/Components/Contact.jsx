import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        interest: '',
        country: '',
        sector: '',
        description: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('http://localhost:3000/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    interest: '',
                    country: '',
                    sector: '',
                    description: ''
                });
                setTimeout(() => {
                    setStatus('')
                }, 2000);
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <section id='contact' className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl font-semibold leading-xl mb-4 text-center" style={{ fontFamily: 'Times New Roman' }}>Contact Form</h2>
            <div className='flex flex-col md:flex-row md:space-x-6 items-center justify-center gap-9'>
                {/* Contact Form */}
                <form onSubmit={handleSubmit} className='w-full md:w-3/5'>
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-1">Name*</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Email*</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Company Name*</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                                placeholder="Enter company name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Area of Interest*</label>
                            <input
                                type="text"
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                                placeholder="Enter your area of interest"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Country*</label>
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                                required
                            >
                                <option value="">Select your country</option>
                                <option value="Singapore">Singapore</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                <option value="India">India</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-1">Retail Sector*</label>
                            <select
                                name="sector"
                                value={formData.sector}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                                required
                            >
                                <option value="">Select Retail Sector</option>
                                <option value="Retail">Retail</option>
                                <option value="Hospitality">Hospitality</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="F&B">F&B</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-1">Description*</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                                placeholder="Enter a description"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white px-3 py-2 rounded-md hover:bg-orange-600 cursor-pointer focus:outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>

                {/* Location Details */}
                <div className="mt-10 md:mt-0 md:w-2/5">
                    <h3 className="text-2xl font-semibold mb-4">Our Locations</h3>
                    <div className="mb-6 flex items-center space-x-2">
                        <img src="https://th.bing.com/th/id/OIP.pCrVPsAfz81gOhOG-nnTBgHaE8?rs=1&pid=ImgDetMain" alt="Singapore" className="w-30" />
                        <div>
                            <h4 className="text-lg font-semibold">Singapore</h4>
                            <p>68 Circular Road, #02-01</p>
                            <p>Singapore, 049422</p>
                        </div>
                    </div>

                    <div className="mb-6 flex items-center space-x-2">
                        <img src="https://www.iconarchive.com/download/i109052/wikipedia/flags/AE-United-Arab-Emirates-Flag.1024.png" alt="UAE" className="w-30" />
                        <div>
                            <h4 className="text-lg font-semibold">United Arab Emirates</h4>
                            <p>A4/1032 Al Hamra RAKEZ</p>
                            <p>Ras Al Khaimah, UAE</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <img src="https://cdn1.iconfinder.com/data/icons/flags-36/512/India_Country_flag-512.png" alt="India" className="w-30 " />
                        <div>
                            <h4 className="text-lg font-semibold">India</h4>
                            <p>2nd Floor, Regal Building,</p>
                            <p>Connaught Place, Delhi </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
