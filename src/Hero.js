import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Hero = () => {
  return (
    <div id="Hero">
      <div id="top"></div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={25}
        totalSlides={3}
        className="slider"
      >
        <ButtonBack className="sliderButton" id="left">
          <h1>
            <i class="fa-solid fa-chevron-left"></i>
          </h1>
        </ButtonBack>

        <Slider className="carouselContent">
          <Slide index={0}>
            <h2>Slide 1</h2>
          </Slide>
          <Slide index={1}>
            <h2>Slide 2</h2>
          </Slide>
          <Slide index={2}>
            <h2>Slide 3</h2>
          </Slide>
        </Slider>

        <ButtonNext className="sliderButton" id="right">
          <h1>
            <i class="fa-solid fa-chevron-right"></i>
          </h1>
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
};
export default Hero;
