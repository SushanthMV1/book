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
        naturalSlideHeight={41.4}
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
            <div id="slide1">
              <div id="slide1Left">
                <h1 id="slide1Title">
                  You can choose your favourite books here.
                </h1>
                <p>
                  Sign up to get some additional discounts on products you love
                </p>
                <button>Sign Up</button>
              </div>
              <div id="slide1Right">
                <div id="slideImgShadow"></div>
                <div id="slideImg">
                  <img src="Assets/HeroImg.png" />
                </div>
              </div>
            </div>
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
