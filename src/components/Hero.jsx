import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
    const { personalInfo } = portfolioData;

    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            paddingTop: '80px'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: '300px',
                height: '300px',
                background: 'var(--accent-primary)',
                filter: 'blur(150px)',
                opacity: 0.2,
                borderRadius: '50%',
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '20%',
                width: '400px',
                height: '400px',
                background: 'var(--accent-secondary)',
                filter: 'blur(150px)',
                opacity: 0.2,
                borderRadius: '50%',
                zIndex: -1
            }} />

            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 style={{
                        fontSize: '1.5rem',
                        color: 'var(--accent-primary)',
                        marginBottom: '1rem',
                        fontWeight: 600,
                        letterSpacing: '2px'
                    }}>
                        HELLO, I'M
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        background: 'linear-gradient(to right, #fff, #a1a1aa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    {personalInfo.name}
                </motion.h1>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{
                        fontSize: 'clamp(1.2rem, 4vw, 2rem)',
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem'
                    }}
                >
                    {personalInfo.title}
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{
                        maxWidth: '600px',
                        margin: '0 auto 3rem',
                        color: 'var(--text-secondary)',
                        fontSize: '1.1rem'
                    }}
                >
                    {personalInfo.bio}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <a href="#projects" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        View Projects <ArrowRight size={20} />
                    </a>
                    <a href="#contact" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Contact Me <Mail size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
