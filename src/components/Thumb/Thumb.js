import React from 'react';
import { Image } from 'react-bootstrap';
import './Thumb.css';

const Thumb = (props) => {
    const { webformatURL } = props.photo;
    return (
        <Image className="thumb" src={webformatURL} alt="" thumbnail/>
    );
};

export default Thumb;