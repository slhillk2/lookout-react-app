import first_image from '../assets/images/crab_salad.jpg'
import second_image from '../assets/images/seafood-platter_wine_chips.jpg'
import third_image from '../assets/images/crab.jpg'

const Carousel = () => {
    return (
    
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item">
                <img class="d-block w-100" src={first_image} alt="First slide"/>
            </div>
            <div class="carousel-item active">
                <img class="d-block w-100" src={second_image} alt="Second slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src={third_image} alt="Third slide"/>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    
    )
}

export default Carousel