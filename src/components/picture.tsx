const PictureSlider = ({ image }: { image: string}) => {
    return (
        <img src={image} loading="lazy"/>
    )
}