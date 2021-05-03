 import SampleNextArrow from '../components/SampleNextArrow';
 import SamplePrevArrow from '../components/SamplePrevArrow';
 const sliderSettings=(slidesNumLargeScreen)=>{
    return { //settings for slider
        lazyLoad: true,
        easing:'ease-in-out',
        inite: false,
        speed: 2000,
        slidesToShow: slidesNumLargeScreen < 5 ? slidesNumLargeScreen:5,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
}

export default sliderSettings;