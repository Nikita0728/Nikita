import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
    const { education, personalInfo } = portfolioData;

    return (
        <section id="about" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'white' }}>Research Interests</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            I am particularly interested in <strong style={{ color: 'var(--accent-primary)' }}>Image Processing</strong>,
                            with a special focus on its applications in <strong style={{ color: 'var(--accent-secondary)' }}>Medical Imaging</strong>,
                            including areas such as image enhancement, segmentation, and computer-aided diagnosis.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            My journey in Computer Engineering has equipped me with a robust set of skills in both software development and AI research.
                            I love bridging the gap between complex algorithms and user-friendly interfaces.
                        </p>
                    </motion.div>

                    {/* Education Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'white' }}>Education</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {education.map((edu, index) => (
                                <div key={index} className="glass-card" style={{ padding: '1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div style={{
                                            background: 'var(--accent-primary)',
                                            padding: '0.8rem',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <GraduationCap size={24} color="white" />
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{edu.degree}</h4>
                                            <h5 style={{ fontSize: '1rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>{edu.institution}</h5>
                                            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                    <Calendar size={14} /> {edu.duration}
                                                </span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                    <MapPin size={14} /> {edu.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
