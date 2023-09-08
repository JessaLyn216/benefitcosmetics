import Carousel from '../components/Carousel';

const SkinCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 700,
        autoplay: true,
        prevArrow: false,
        nextArrow: false
      };

    return (
        <section className="skin-carousel">
            <div className='carousel-cont'>
                <Carousel settings={settings}/>
            </div>
        </section>
    )
}

export default SkinCarousel;