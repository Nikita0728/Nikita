import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Designed & Built by Nikita Kunwor © {new Date().getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;
