import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Carousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={35.1}
      totalSlides={3}
      className="slider"
    >
      <ButtonBack className="sliderButton">#</ButtonBack>
      <Slider className="carouselContent">
        <Slide index={0}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          commodi eos! Ullam sed nemo quos optio officia obcaecati harum
          perspiciatis voluptates ipsam explicabo delectus id totam debitis quia
          accusamus quas qui, quidem libero. Molestiae facilis veritatis
          accusamus cupiditate libero! Numquam voluptatem culpa exercitationem
          libero aperiam esse, unde recusandae dicta explicabo nobis molestiae?
          Nobis, odio adipisci. Quia autem officia est quasi optio repellendus
          cumque molestias corrupti, ea ipsa veritatis fugit odio, doloribus
          veniam voluptates, impedit dignissimos incidunt rem non. Delectus,
          error! Perferendis numquam nulla dolore ipsa voluptatem repellat
          nesciunt nihil quam corrupti facilis, impedit deserunt vitae? Totam
          vero fugiat tenetur enim!
        </Slide>
        <Slide index={1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          placeat accusamus quas officia ipsam aspernatur incidunt! Sequi, unde
          sit atque quia fugit consequatur quae minima quam expedita similique
          distinctio ex amet officia pariatur tempore maiores sapiente velit rem
          voluptas ab veniam recusandae dolor nostrum adipisci. Ipsam aspernatur
          fuga non itaque, sed molestiae maxime unde numquam, sit quas, debitis
          quam aut nemo molestias distinctio. Ipsam facilis aspernatur, amet
          dolorem quis incidunt saepe neque nam autem perspiciatis culpa est
          deleniti pariatur fugiat quibusdam iure commodi nemo beatae quisquam
          iusto voluptatibus voluptatem deserunt eius! Natus rem aliquam cum
          commodi iste fugiat id adipisci!
        </Slide>
        <Slide index={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          voluptates maxime accusantium animi aliquam deleniti eius enim
          repellat dignissimos, iure sequi alias in at minus dicta velit non
          quaerat debitis quis officia! Totam, ex voluptatibus dicta, voluptatem
          assumenda veritatis neque nostrum, sed pariatur asperiores modi sunt
          ea quis cupiditate quidem fugit veniam officia alias possimus
          doloremque praesentium. Maxime culpa illum molestiae at, fugit
          excepturi quos ipsum delectus, autem ratione quasi saepe eos placeat
          in laboriosam ipsa atque exercitationem optio? Beatae aperiam numquam
          voluptate ex ullam veniam, incidunt quaerat magni culpa eius quas
          officiis! Veritatis, accusantium at numquam quae magni aut?
        </Slide>
      </Slider>

      <ButtonNext className="sliderButton">Next</ButtonNext>
    </CarouselProvider>
  );
};
export default Carousel;
