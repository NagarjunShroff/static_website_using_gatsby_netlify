import React from 'react';
import { FaGuitar, FaMotorcycle, FaGlobe } from 'react-icons/fa';
import siteConfig from '../../data/siteConfig';


const Introduction = () => {

    return (
        <>
        <div>
            <img style={{ height: '300px' }} src={siteConfig.authorAvatar} />
        </div>
        <div style={{ direction: 'column', fontFamily: 'Klima,Helvetica,Arial,sans-serif', marginTop: '20px' }}>
            <p style={{ fontSize: '60px' }}><strong>{siteConfig.author}</strong></p>
            <p style={{ fontSize: '15px' }}> ☝ UI/UX Enthusiast | 💻 Work @MicroFocus
        | 🍟 Foodie <br></br> | <FaGuitar /> Guitarist  | <FaMotorcycle /> Biker | <FaGlobe /> Traveller
        </p>
            {/* <span style={{ fontSize:'15px'}}>{siteConfig.authorDescription}</span> */}
        </div>
        </>);

};


export default Introduction;