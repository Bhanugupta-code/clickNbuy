import React from 'react'
import './project.css'
import laptops from './resimage/WhatsApp Image 2023-07-08 at 14.25.34.jpg'
import offer_mobile from './resimage/offer mobile.jpg'
import headphone from './resimage/headphone.jpg'
import iphone from './resimage/iphone.jpg'
import shirt from './resimage/WhatsApp Image 2023-07-08 at 14.45.25.jpg'
import shir from './resimage/shirt.jpg'
import lap from './resimage/lap.jpg'
import watch from './resimage/watch.jpg'
import { useState } from 'react'
export const Display1 = ({ filtered = [], item }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (curelem) => {
        setSelectedImage(curelem);
    };

    const closePopup = () => {
        setSelectedImage(null);
    };
    if (item) {
        return (
            <div key={item.id} className="p-1 width3 d-inline-block h-50 rounded-3">

                <div className="img-thumbnail  width2 mx-auto height3">
                    <img src={item.image} alt='' id="popup" className='w-100 d-inline-block rounded-1 h-100' />
                </div>
                <div className="px-5 py-2">
                    <h6 id='hd' className='text-center'>{item.name}</h6>
                    {/* <h6>{item.category}</h6>
                <h6>{item.price}</h6> */}
                </div>
            </div>
        );
    }
    return (

        <div className='container mt-2 '>
            <div className="container d-flex flex-wrap gap-3 p-2 align-content-around bg-body-tertiary justify-content-around w-100">
                {filtered.map((curelem) => (
                    <div key={curelem.id} className="p-1 width justify-content-evenly h-50! bg-body-secondary rounded-3">

                        <div className="img-thumbnail  width2 mx-auto height" onClick={() => handleImageClick(curelem)}>
                            <img src={curelem.image} alt='' id="popup" className='w-100 d-inline-block rounded-1 h-100' />
                        </div>
                        <div className="px-5 py-2">
                            <h6 id='hd' className='text-center'>{curelem.name}</h6>
                            {/* <h6>{curelem.category}</h6>
                            <h6>{curelem.price}</h6> */}
                        </div>
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className="popup" onClick={closePopup} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    <div className=' text-center'>
                        <img src={selectedImage.image} alt={selectedImage.title} style={{ paddingBottom: "3px", maxWidth: '98%', borderRadius: "10px", maxHeight: '98%', width: "auto", height: "auto" }} />
                        <p>{selectedImage.name}</p>
                        <p>{selectedImage.category}</p>
                        <p>{selectedImage.price}</p>
                    </div>
                </div>
            )}
        </div>
    );
};


export const Display2 = () => {
    return (
        <div>
            <div class="main_box container p-1">
                <div className="container d-flex justify-content-evenly">
                    <div class="box">
                        <h2>
                            <center>Deals on Top Brands</center>
                        </h2>
                        <img src={laptops} alt="error" width="100%" height="300px" />
                        <br />

                    </div>
                    <div class="box">

                        <h2>
                            <center>30% Off on Mobile Phone</center>
                        </h2>
                        <img src={offer_mobile} alt="error" width="100%" height="300px" />
                    </div>
                    <div class="box">
                        <h2>
                            <center>Trending in Fashion</center>
                        </h2>
                        <img src={shirt} alt="error" width="90%" height="300px"
                            className=' ps-1' />
                    </div>
                </div>
                <div class="box2 container">
                    <h1>
                        <center> TOP DEALS </center>
                    </h1>
                    <div class="box3">
                        <div class="box2_box">
                            <img src={headphone} alt="" width="80%" height="200px" />
                            <h4><center><a href="accessories.html">Boat Headphone</a></center></h4>
                        </div>
                        <div class="box2_box">
                            <img src={iphone} alt="" width="80%" height="200px" />
                            <h4><center><a href="phone.html">Iphone 14</a></center></h4>
                        </div>
                        <div class="box2_box">
                            <img src={lap} alt="" width="80%" height="200px" />
                            <h4><center><a href="laptop.html">Mi Notebook Ultra</a></center></h4>
                        </div>
                        <div class="box2_box">
                            <img src={shir} alt="" width="80%" height="200px " />
                            <h4><center><a href="menscloths.html">Denim Shirt</a></center></h4>
                        </div>
                        <div class="box2_box">
                            <img src={watch} alt="" width="80%" height="200px" />
                            <h4><center><a href="accessories.html">Noise Smartwatch</a></center></h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


