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
            <div className="slide" id="slide1">
              <div className="slideLeft">
                <h1 className="slideTitle">
                  You can choose your favourite books here.
                </h1>
                <p>
                  Sign up to get some additional discounts on products you love
                </p>
                <button>Sign Up</button>
              </div>
              <div className="slideRight">
                <div className="slideImgShadow"></div>
                <div className="slideImg">
                  <img src="Assets/HeroImg.png" />
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div className="slide" id="slide2">
              <div className="slideLeft" id="slide2Left">
                <h1 className="slideTitle" id="slide2Title">
                  Have the entire Harry Potter Collection.
                </h1>
                <p>
                  Sign up to get some additional discounts on products you love
                </p>
                <button>Order Now</button>
              </div>
              <div className="slideRight">
                <div className="slideImgShadow" id="slide2ImgShadow"></div>
                <div className="slideImg">
                  <img src="Assets/HeroImg2.png" />
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={2}>
            <div className="slide" id="slide3">
              <div className="slideLeft">
                <h1 className="slideTitle">
                  You can choose your favourite books here.
                </h1>
                <p>
                  Sign up to get some additional discounts on products you love
                </p>
                <button>Sign Up</button>
              </div>
              <div className="slideRight">
                <div className="slideImgShadow"></div>
                <div className="slideImg">
                  <img src="Assets/HeroImg.png" />
                </div>
              </div>
            </div>
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
