import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Autoplay, Pagination, Navigation } from "swiper";
import { TESTIMONIALS } from "../../helper/Blogs.js";

const BlogStoriesSlider = () => {
  return (
    <SwiperWrap>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {TESTIMONIALS.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <SidebarTestimonialsQuote>
                <i className="fa fa-quote-left"></i>
                {item.quote}
                <i className="fa fa-quote-right"></i>
              </SidebarTestimonialsQuote>
              <SidebarTestimonialsByline>{item.by}</SidebarTestimonialsByline>
              <SidebarTestimonialsDetails>{item.detail}</SidebarTestimonialsDetails>
              <SidebarTestimonialsDate>
                <i className="fa fa-calendar-alt" aria-hidden="true"></i> <span className="testimonial-date">{item.date}</span>
              </SidebarTestimonialsDate>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrap>
  );
}
export default BlogStoriesSlider;

const SwiperWrap = styled.div`
  width: 30.8rem;
  height: 22.3rem;
  font-size: 1.4rem;
  border-bottom: 1px solid #e1e8ef;
  --swiper-pagination-bullet-size: 1.4rem;
  --swiper-pagination-bullet-inactive-color: ${props => props.theme.colors.white};
  --swiper-theme-color: #7f7f7f;
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-pagination-bottom: .7rem;
  --swiper-pagination-bullet-horizontal-gap: .2rem;
  --swiper-navigation-size: 1rem;
  --swiper-navigation-top-offset: 90.5%;
  --swiper-navigation-sides-offset: 7.7rem;
  .swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    background: ${props => props.theme.colors.white};
    display: flex;
    align-items: flex-start;
    padding: 0 2.2rem;
    text-align: center;
  }
  .swiper-pagination-bullet {
    border: 1px solid #7f7f7f;
  }
  .swiper-button-next,
  .swiper-button-prev {
    z-index: 11;
  }
  .swiper-button-next.swiper-button-disabled,
  .swiper-button-prev.swiper-button-disabled {
    opacity: 1;
    pointer-events: all;
  }
`;
const SidebarTestimonialsQuote = styled.div`
  .fa {
      color: #FF6843;
      font-size: 1.6rem;
      padding: 0 .4rem;
    }
`;
const SidebarTestimonialsByline = styled.div`
  color: #7f7f7f;
`;
const SidebarTestimonialsDetails = styled.div`
  font-weight: 700;
  margin: 0 0 0.3rem;
`;
const SidebarTestimonialsDate = styled.div`
  color: #7f7f7f;
  font-style: italic;
`;