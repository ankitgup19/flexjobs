import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { TESTIMONIALS } from "../../helper/Blogs.js";
import Styled from "../../../styles/components/common/BlogTestimonialSlider.styled.js";

const BlogTestimonialSlider = () => {
  return (
    <Styled.SwiperWrap>
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
              <Styled.SidebarTestimonialsQuote>
                <i className="fa fa-quote-left"/>
                {item.quote}
                <i className="fa fa-quote-right"/>
              </Styled.SidebarTestimonialsQuote>
              <Styled.SidebarTestimonialsByline>{item.by}</Styled.SidebarTestimonialsByline>
              <Styled.SidebarTestimonialsDetails>{item.detail}</Styled.SidebarTestimonialsDetails>
              <Styled.SidebarTestimonialsDateRow>
                <i className="fa fa-calendar-alt" aria-hidden="true"/>
                <Styled.SidebarTestimonialsDate>{item.date}</Styled.SidebarTestimonialsDate>
              </Styled.SidebarTestimonialsDateRow>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.SwiperWrap>
  );
}
export default BlogTestimonialSlider;