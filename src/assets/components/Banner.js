const Banner = (prop) => {
    const src = "" + prop.img;

    return (
        <section className={[`ad-banner ${prop.class}`]}>
            <div class="ad-image" order={prop.imgOrder}>
                <img src={src} alt={prop.alt} />
            </div>
            <div class="ad-text" order={prop.textOrder}>
                <h1 className="header-text">{prop.headerText}</h1>
                <b className="sub-title-text">{prop.subTitleText}</b>
                <p className="sub-text">{prop.subText}</p>
            </div>
        </section>
    )
}

export default Banner;