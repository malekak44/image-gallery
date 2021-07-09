import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slide = () => {
    const images = [{ id: 1, url: "https://i.ibb.co/SmzFjzb/fourth.jpg" }, { id: 2, url: "https://i.ibb.co/g7m05kd/second.jpg" }, { id: 3, url: "https://i.ibb.co/W3B07G3/third.jpg" }, { id: 4, url: "https://i.ibb.co/mGPsCCN/fifth.jpg" }, { id: 5, url: "https://i.ibb.co/2ckNRXR/sixth.jpg" }, { id: 6, url: "https://i.ibb.co/cLPcNj9/seventh.jpg" }, { id: 7, url: "https://i.ibb.co/przH3dh/eighth.jpg" }, { id: 8, url: "https://i.ibb.co/yBNQT7V/ninth.jpg" }, { id: 9, url: "https://i.ibb.co/zhZs0Wm/tenth.jpg" }, { id: 10, url: "https://i.ibb.co/cgs91fN/eleven.jpg" }];
    return (
        <div>
            <Carousel>
                {images.map((image) => <Carousel.Item key={image.id}>
                    <img className="d-block w-100" src={image.url} alt="slide" />
                </Carousel.Item>)}
            </Carousel>
        </div>
    );
};

export default Slide;