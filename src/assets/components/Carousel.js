import Slider from "react-slick";
import Slide from '../components/Slide';
import Image1 from '../images/skin2.jpeg';
import Image2 from '../images/skin3.jpeg';
import Image3 from '../images/benefitmakeup.jpeg';
import Image4 from '../images/benefitmakeup2.jpeg';
import Image5 from '../images/blush.jpeg';
import Image6 from '../images/shop2.jpeg';

const Carousel = (prop) => {
    const settings = prop.settings;
    const items = [
        {
            src: Image1,
            key: "image" + Math.random()
        },
        {
            src: Image2,
            key: "image" + Math.random()
        },
        {
            src: Image3,
            key: "image" + Math.random()
        },
        {
            src: Image4,
            key: "image" + Math.random()
        },
        {
            src: Image5,
            key: "image" + Math.random()
        },
        {
            src: Image6,
            key: "image" + Math.random()
        }
    ]

    return (
        <Slider {...settings}>
        {items.map(a => {
            return <Slide src={a.src} key={a.key} />;
        })}
      </Slider>
    )
};

export default Carousel;