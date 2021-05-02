import { Carousel } from "react-bootstrap";

const CarouselItem = (props) => {
  return (
    <Carousel>
      {props.Carouselelem.map((item) => {
        return <Carousel.Item>{item}</Carousel.Item>;
      })}
    </Carousel>
  );
};

export default CarouselItem;
