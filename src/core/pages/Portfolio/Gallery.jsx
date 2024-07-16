import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Gallery = ({ tag, imgItems }) => {
  var settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    delay: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className='container'>
      <ul>
        {imgItems && imgItems.length > 0 && (
          <Slider {...settings}>
            {imgItems.map((item) => (
              <li key={item.img} className='item'>
                <img src={`/img/portfolio/${tag.toLowerCase()}/${item?.img}`} className='img' alt={item?.title} />
              </li>
            ))}
          </Slider>
        )}
      </ul>
    </div>
  );
};

export default Gallery;
