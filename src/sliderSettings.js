 const sliderSettings=(slidesNumLargeScreen)=>{
    return { //settings for slider
        
        arrows:false,
        inite: false,
        speed: 200,
        slidesToShow: slidesNumLargeScreen <= 7 ? slidesNumLargeScreen:7,
        slidesToScroll: 4,
        initialSlide: 0,
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