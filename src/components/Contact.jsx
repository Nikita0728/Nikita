import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    const { personalInfo } = portfolioData;

    return (
        <section id="contact" style={{ padding: '6rem 0', background: 'linear-gradient(to top, var(--bg-color), #131318)' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '3rem'
                    }}
                >
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card"
                    style={{ display: 'inline-flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', padding: '3rem' }}
                >
                    <a href={`mailto:${personalInfo.email}`} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem', transition: 'color 0.3s' }} className="hover:text-accent-primary">
                        <Mail size={24} color="var(--accent-primary)" />
                        {personalInfo.email}
                    </a>

                    <a href={`tel:${personalInfo.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem', transition: 'color 0.3s' }} className="hover:text-accent-primary">
                        <Phone size={24} color="var(--accent-secondary)" />
                        {personalInfo.phone}
                    </a>

                    <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.3s' }} className="hover:scale-110">
                            <Github size={32} />
                        </a>
                        {/* Add LinkedIn if available */}
                        {personalInfo.linkedin && (
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.3s' }} className="hover:scale-110">
                                <Linkedin size={32} />
                            </a>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
