const BannerImage = (prop) => {
    return (
        <div class="banner-image">
            <img src={prop.img} />
            <div class="banner-image-text">
                <h1 class="header-text">{prop.headerText}</h1>
                <p class="sub-text">{prop.subText}</p>
            </div>
        </div>
    )
}

export default BannerImage;