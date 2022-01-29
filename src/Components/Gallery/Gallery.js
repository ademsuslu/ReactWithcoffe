import React from 'react';
import One from "./Galleryİmage/One.jpg"
import Two from "./Galleryİmage/Two.jpg"
import Theree from "./Galleryİmage/Theree.jpg"
import Four from "./Galleryİmage/Four.jpg"
import Five from "./Galleryİmage/Five.jpg"
import Six from "./Galleryİmage/Six.jpg"
import {  FaEye} from 'react-icons/fa';

const Gallery = () => {
    return <div id="gallery" className="gallery">
        <h1 className="gallery-title">Gallery</h1>
        <div className="gallery-images">
            <div className="galleryShadow">
                <div className="golge">
                    <FaEye className="eye" />
                </div>
                <img src={One} />
            </div>
            <div className="galleryShadow">
                <div className="golge">
                <FaEye className="eye" />
                </div>
                <img src={Two} />
            </div>
            <div className="galleryShadow">
                <div className="golge">
                <FaEye className="eye" />
                </div>
                <img src={Theree} />
            </div>
            <div className="galleryShadow">
                <div className="golge">
                <FaEye className="eye" />
                </div>
                <img src={Four} />
            </div>
            <div className="galleryShadow">
                <div className="golge">
                <FaEye className="eye" />
                </div>
                <img src={Five} />
            </div>
            <div className="galleryShadow">
                <div className="golge">
                <FaEye className="eye" />
                </div>
                <img src={Six} />
            </div>

        </div>
    </div>;
};

export default Gallery;
