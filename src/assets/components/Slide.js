const Slide = (prop) => {
    return (
        <div class="slide-container">
            <div class="skin-slide" key={prop.key}>
                <img src={prop.src} />
            </div>
        </div>
    )
}

export default Slide;