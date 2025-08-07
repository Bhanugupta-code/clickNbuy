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
import { useNavigate } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
export const Display1 = ({ filtered = [], item , setproductDetailData}) => {
    const navigate = useNavigate();
    const handleImageClick = (curelem) => {
        setproductDetailData(curelem);
        navigate("productdetails");
    };
    return (

      <div className="container mt-4 pt-2">
  <div className="container d-flex flex-wrap gap-4 p-3 align-content-around bg-body-tertiary justify-content-center w-100">
    {filtered.map((curelem) => (
      <div
        key={curelem.id}
        className="p-3 bg-body-secondary rounded-4 shadow-sm d-flex flex-column align-items-center card-hover"
        style={{ width: "220px", height: "320px", transition: "0.3s ease-in-out" }}
        onClick={() => handleImageClick(curelem)}
      >
        <div className="w-100 mb-3" style={{ height: "85%" }}>
          <img
            src={curelem.image}
            alt={curelem.name}
            className="img-fluid rounded-2 h-100 w-100 object-fit-cover shadow-sm"
            style={{ transition: "transform 0.3s" }}
          />
        </div>
        <div className="text-center">
          <h6 className="mb-0 fw-semibold text-dark">{curelem.name}</h6>
        </div>
      </div>
    ))}
  </div>

</div>

    );
};

export const Display2 = () => {
    return (
        <div>
            <div class="main_box container p-1">
                <div className="container d-flex flex-column flex-md-row justify-content-evenly">
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
                    <div class="box3 d-flex flex-wrap flex-md-row justify-content-evenly">
                        <div class="box2_box ">
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


