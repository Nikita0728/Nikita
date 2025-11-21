import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                <Folder size={40} color="var(--accent-primary)" />
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {/* Assuming links might be added later, placeholders for now */}
                                    {/* <Github size={20} className="hover:text-accent-primary cursor-pointer" /> */}
                                    {/* <ExternalLink size={20} className="hover:text-accent-primary cursor-pointer" /> */}
                                </div>
                            </div>

                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                {project.title}
                            </h3>

                            {project.status && (
                                <span style={{
                                    display: 'inline-block',
                                    fontSize: '0.8rem',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '1rem',
                                    background: 'rgba(236, 72, 153, 0.2)',
                                    color: 'var(--accent-secondary)',
                                    marginBottom: '1rem',
                                    width: 'fit-content'
                                }}>
                                    {project.status}
                                </span>
                            )}

                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                                {project.technologies.map((tech, i) => (
                                    <span key={i} style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--text-primary)',
                                        fontFamily: 'monospace'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
