import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './project.css'
import I1 from '././resimage/slide1.jpg'
import I6 from '././resimage/slide2.jpg'
import I3 from '././resimage/slide3.jpg'
import I4 from '././resimage/slide4.jpg'
import I5 from '././resimage/slide5.jpg'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container crousel hector pt-2 w-100 h-100 bg-body-tertiary rounded-2 p-1">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block lock rounded-3 "
            src={I1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block lock rounded-3 "
            src={I3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block lock rounded-3 "
            src={I4}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block lock rounded-3 "
            src={I5}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block lock rounded-3"
            src={I6}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Fifth slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
