import ProductSale from "../components/ProductSale";
import imgOne from "../images/browitem.jpeg";
import imgTwo from "../images/browset.jpeg";
import imgThree from "../images/eyebrowpen.jpeg";
import imgFour from "../images/eyebrowwax.png";

const Featured = () => {
    const items = [
        {
            key: "img01",
            src: imgOne,
            name: "Benefit Brow Gel",
            price: "$25.00",
            alt: "Brow Gel",
        },
        {
            key: "img02",
            src: imgTwo,
            name: "Benefit Brow Set",
            price: "$30.00",
            alt: "Brow Gel Set",
        },
        {
            key: "img03",
            src: imgThree,
            name: "Benefit Long Lasting Brow Pen",
            price: "$30.00",
            alt: "Brow Gel Set",
        },
        {
            key: "img04",
            src: imgFour,
            name: "Benefit Brow Wax",
            price: "$30.00",
            alt: "Brow Gel Set",
        },
    ];

    return (
        <section className="featured-section">
            <h1 className="featured-header boldoni">All About Brows</h1>
            <p class="feature-subheader">Brows at your service!</p>
            <div class="featured">
                <div class="featured-items" data-aos="fade-right" data-aos-duration="400" data-aos-delay="600">
                    {items.map((a) => {
                        return (
                            <ProductSale
                                key={a.key}
                                src={a.src}
                                name={a.name}
                                price={a.price}
                                alt={a.alt}
                                class="grid-item"
                            />
                        );
                    })}
                </div>
                <div class="featured-image" data-aos="fade-left" data-aos-duration="400" data-aos-delay="600">
                    <img src={require('../images/browad.jpeg')} alt="Brow Ad" /> </div>
            </div>
            <div className="svg-cont">
                <svg height="500" width="500" className="floatUp">
                    <circle cx="100" cy="500" r="200" fill="#B6EFD4" opacity="0.5"/>
                </svg>
            </div>
            <div className="svg-cont">
                <svg height="500" width="500" className="floatDown">
                    <circle cx="800" cy="300" r="200" fill="#F5A0A0" opacity="0.5"/>
                </svg>
            </div>
            <div className="svg-cont">
                <svg height="500" width="500" className="floatDown">
                    <circle cx="1300" cy="900" r="200" fill="#97F1F0" opacity="0.5"/>
                </svg>
            </div>
            <div className="svg-cont">
                <svg height="500" width="500" className="floatUp">
                    <circle cx="700" cy="1000" r="200" fill="#E9497E" opacity="0.2"/>
                </svg>
            </div>
        </section>
    );
};

export default Featured;
