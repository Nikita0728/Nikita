import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
    const { skills } = portfolioData;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const SkillCategory = ({ title, items }) => (
        <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
                color: 'var(--text-primary)',
                borderLeft: '4px solid var(--accent-primary)',
                paddingLeft: '1rem'
            }}>
                {title}
            </h3>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
            >
                {items.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="glass-card"
                        style={{
                            padding: '0.8rem 1.5rem',
                            fontSize: '1rem',
                            borderRadius: '2rem',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(255,255,255,0.03)',
                            cursor: 'default'
                        }}
                        whileHover={{
                            scale: 1.05,
                            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                            borderColor: 'transparent'
                        }}
                    >
                        {skill}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );

    return (
        <section id="skills" style={{ padding: '6rem 0', background: 'linear-gradient(to bottom, var(--bg-color), #131318)' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Skills
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div>
                        <SkillCategory title="Languages" items={skills.languages} />
                        <SkillCategory title="Frameworks & Technologies" items={skills.frameworks} />
                    </div>
                    <div>
                        <SkillCategory title="ML & AI Concepts" items={skills.ai_ml} />
                        <SkillCategory title="Tools & Libraries" items={skills.tools} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
