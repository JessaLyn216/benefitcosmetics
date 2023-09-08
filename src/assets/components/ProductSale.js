import "../styles/product.scss";

const ProductSale = (prop) => {
    const src = "" + prop.src;

    return (
        <div className={[`${prop.class} product`]}>
            <div className="product-image" key={prop.key}>
                <img src={src} alt={prop.alt} />
            </div>
            <div class="product-details">
                <span className="product-name">{prop.name}</span>
                <span className="product-price">{prop.price}</span>
            </div>
        </div>
    );
};

export default ProductSale;
