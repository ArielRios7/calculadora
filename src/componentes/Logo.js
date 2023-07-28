import React from "react";
import lbmCodingLogo from '../imagenes/lbm-coding.png';
import '../App.css';


const Logo = (props) => (
    <div className='logo-contenedor'>
        <img 
            src={lbmCodingLogo}
            className='logo'
            alt='Logo de LBMCoding'
        />
        {props.imgLogo}

    </div>

);


export default Logo;