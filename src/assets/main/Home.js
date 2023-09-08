import '../styles/home.scss';
import Hero from '../sections/Hero';
import Featured from '../sections/Featured';
import Banner from '../components/Banner';
import bannerImg1 from '../images/kabrow.jpeg';
import bannerImg2 from '../images/skin.jpeg';
import bannerImg3 from '../images/lip.jpeg';
import BannerImage from '../components/BannerImage';
import SkinCarousel from '../sections/SkinCarousel';
import Pinterest from '../sections/Pinterest';

const Home = () => {
    return (
        <>
            <Hero />
            <Banner
                class="turquiose"
                img={bannerImg1}
                imgOrder="1"
                textOrder="2"
                alt="Banner Kabrow"
                headerText="No. 1 Brow Brand Worldwide"
                subTitleText="Love Your Brows"
                subText="Since 1976, brows have kinda been...our thing. No matter who you are, the brows you have or the brows you want, we’ve got everything you need to love your brows!"
            />
            <Featured />
            <BannerImage 
                img={bannerImg2}
                headerText="How about the skin?"
                subText="One more step to flawless beauty"
            />
            <SkinCarousel />
            <Banner
                class="green"
                img={bannerImg3}
                imgOrder="1"
                textOrder="2"
                alt="Benefit Make Up Set"
                headerText="Best Worn When Learned"
                subTitleText="If you're sad, add more lipstick and attack"
                subText="There is nothing like the enjoyment that comes from learning new makeup techniques. We all have our beauty regimens to match our style, and makeup is genuinely a miraculous tool for transformation and enhancement: it is both powerful and life-changing. Rather than shying away from the radiance of our true selves, it allows us to showcase our unique personalities and express our creativity through artistry and self-expression."
            />
            <Pinterest />
        </>
    )
}

export default Home;