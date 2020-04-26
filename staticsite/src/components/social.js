import React from 'react';
import siteConfig from '../../data/siteConfig';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaFacebook } from "react-icons/fa"


const Social = () => {

    return (
        <div style={{
            justifyContent: 'space-between',
            display: 'flex'
        }}>
            {siteConfig.social.github && <a style={{ color: 'white' }} href={siteConfig.social.github}>
                <FaGithub size="24" />
            </a>}
            {siteConfig.social.linkedin && <a style={{ color: 'white', marginLeft: '8px' }} href={siteConfig.social.linkedin}>
                <FaLinkedin size="24" />
            </a>}
            {siteConfig.social.facebook && <a style={{ color: 'white', marginLeft: '8px' }} href={siteConfig.social.facebook}>
                <FaFacebook size="24" />
            </a>}
            {siteConfig.social.twitter && <a style={{ color: 'white', marginLeft: '8px' }} href={siteConfig.social.twitter}>
                <FaTwitter size="24" />
            </a>}
            {siteConfig.social.email && <a style={{ color: 'white', marginLeft: '8px' }} href={`mailto:${siteConfig.social.email}`}>
                <FaEnvelope size="24" />
            </a>}
        </div>)
};

export default Social;