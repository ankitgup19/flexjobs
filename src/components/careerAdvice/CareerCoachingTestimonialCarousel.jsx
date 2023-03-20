import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { TESTIMONIALS } from "../../helper/CareerCoaching.js";
import Styled from "../../../styles/components/careerAdvice/CareerCoachingTestimonialCarousel.styled.js";

const CareerCoachingTestimonialCarousel = () => {
  return (
    <>
      <Styled.Heading>What People Are Saying About Our Career Coaching!</Styled.Heading>
      <Styled.SwiperWrap>
        <Swiper
          spaceBetween={70}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="coaching-carousel"
        >
          {TESTIMONIALS.map((item, index) => (
            <SwiperSlide key={index}>
              <Styled.SwiperSlideFrame>
                <Styled.SidebarTestimonialsQuote>
                  <i className="fa fa-quote-left" />
                  {item.quote}
                  <i className="fa fa-quote-right" />
                </Styled.SidebarTestimonialsQuote>
                <Styled.SidebarTestimonialsByline>{item.by}</Styled.SidebarTestimonialsByline>
              </Styled.SwiperSlideFrame>
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.SwiperWrap>
    </>
  );
}
export default CareerCoachingTestimonialCarousel;