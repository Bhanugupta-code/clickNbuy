import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductDetails = ({ productDetailData }) => {
  const { image, name, price, category } = productDetailData;

  console.log(productDetailData);

  return (
    <div className="container my-5 bg-secondary rounded shadow">
      <div className="row g-4 p-4 align-items-center">
        {/* Product Image */}
        <div className="col-md-4 d-flex justify-content-center">
          <img
            src={image}
            alt={name}
            className="img-fluid rounded w-100"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>

        {/* Product Info */}
        <div className="col-md-8">
          <h1 className="h3 fw-bold text-dark">{name}</h1>
          <p className="text-light fs-5 fw-semibold">${price}</p>
          <p className="text-secondary text-capitalize h4 fw-medium">{category}</p>
          <p className="text-muted lh-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet
            magni consectetur, quis, at qui cumque saepe tempore laboriosam
            ipsam enim quam veniam. Tenetur nobis vitae blanditiis obcaecati,
            facere nam. <br />
            <br />
            Temporibus asperiores dicta blanditiis nisi obcaecati cumque
            assumenda odio! Tenetur, eligendi eaque aspernatur debitis hic
            architecto temporibus cumque quos voluptatibus facilis vitae? Fuga
            modi delectus optio pariatur? Iste minus facere voluptas dolorum
            consectetur possimus, labore quam blanditiis animi sequi nam iure
            aliquam fuga non maiores eos dolore veniam assumenda maxime optio.{" "}
            <br />
            <br />
            Dolorum numquam eaque quod ducimus maxime rerum facere vitae
            perferendis possimus iure ab architecto voluptates illum officia
            qui, reprehenderit minima cupiditate.
          </p>

          <button className="btn btn-dark mt-3" onClick={()=>{
            alert("Order Successfull.")
          }}>Order</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
