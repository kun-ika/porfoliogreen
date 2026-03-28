import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dummy submit
        alert(`Thank you for your message, ${formData.name}! (This is a demo)`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="section relative bg-white">
            <div className="container relative z-10">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 tracking-tight">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    <p className="mt-8 text-lg md:text-xl text-secondary max-w-2xl font-medium">
                        Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="glass-card flex items-center gap-5 p-4 border-2 border-transparent hover:border-indigo-100 transition-all duration-300 group hover:-translate-y-1 bg-white">
                            <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-indigo-50">
                                <Mail className="text-indigo-500" size={24} />
                            </div>
                            <div className="overflow-hidden">
                                <h3 className="text-lg font-extrabold text-slate-800 mb-0.5">Email</h3>
                                <a href="mailto:kunika.jain@example.com" className="text-slate-600 hover:text-indigo-500 font-semibold transition-colors text-sm break-all">
                                    hello@kunikajain.com
                                </a>
                            </div>
                        </div>

                        <div className="glass-card flex items-center gap-5 p-4 border-2 border-transparent hover:border-fuchsia-100 transition-all duration-300 group hover:-translate-y-1 bg-white">
                            <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-100 to-pink-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-fuchsia-50">
                                <Phone className="text-fuchsia-500" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold text-slate-800 mb-0.5">Phone</h3>
                                <p className="text-slate-600 font-semibold text-sm">
                                    +91 (XXX) XXX-XXXX
                                </p>
                            </div>
                        </div>

                        <div className="glass-card flex items-center gap-5 p-4 border-2 border-transparent hover:border-teal-100 transition-all duration-300 group hover:-translate-y-1 bg-white">
                            <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-teal-50">
                                <MapPin className="text-teal-500" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold text-slate-800 mb-0.5">Location</h3>
                                <p className="text-slate-600 font-semibold text-sm">
                                    Ujjain, India
                                </p>
                                <p className="text-xs font-bold text-teal-500 mt-1 uppercase tracking-wide">Open to relocation</p>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-6 justify-center lg:justify-start">
                            <a href="#" className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-slate-600 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <Linkedin size={26} />
                            </a>
                            <a href="#" className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-slate-600 hover:bg-gradient-to-br hover:from-fuchsia-500 hover:to-pink-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <Mail size={26} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card p-8 lg:p-10 border-t-8 border-t-indigo-500 bg-white/80 shadow-xl relative overflow-hidden">
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 pointer-events-none"></div>

                        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-8 relative z-10">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors font-medium text-slate-800"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors font-medium text-slate-800"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors font-medium text-slate-800 resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full py-4 text-lg group flex items-center justify-center shadow-lg shadow-indigo-500/30">
                                Send Message <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 mt-24 py-10 text-center bg-white">
                <p className="text-slate-600 font-bold text-lg">
                    © {new Date().getFullYear()} Kunika Jain. Designed & Built with <span className="text-rose-500 animate-pulse inline-block">❤️</span>
                </p>
            </div>
        </section>
    );
};

export default Contact;
