import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Autoplay, Pagination, Navigation } from "swiper";

const BlogStoriesSlider = () => {
  return (
    <SwiperWrap>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="sidebar-testimonials-quote">
              <i className="fa fa-quote-left"></i>Thank you, FlexJobs, for assisting me in finding this amazing employment opportunity!
              <i className="fa fa-quote-right ps-1"></i>
            </div>
            <div className="sidebar-testimonials-byline">Rebecca T., Brigham City, UT</div>
            <div className="sidebar-testimonials-details">Inbound Customer Service Representative at Discover Financial Services</div>
            <div className="sidebar-testimonials-date">
              <i className="fa fa-calendar-alt" aria-hidden="true"></i> <span className="testimonial-date">Mar 13, 2023</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="sidebar-testimonials-quote">
              <i className="fa fa-quote-left"></i>I was out of a job for a while and wanted to break into the work-from-home job market, and FlexJobs worked wonders!<i className="fa fa-quote-right ps-1"></i>
            </div>
            <div className="sidebar-testimonials-byline">Christine A., Middletown, MD</div>
            <div className="sidebar-testimonials-details">Call Center Agent at Working Solutions</div>
            <div className="sidebar-testimonials-date">
              <i className="fa fa-calendar-alt" aria-hidden="true"></i> <span className="testimonial-date">Mar 8, 2023</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="sidebar-testimonials-quote">
              <i className="fa fa-quote-left"></i>Thank you, FlexJobs, for assisting me in finding this amazing employment opportunity!
              <i className="fa fa-quote-right ps-1"></i>
            </div>
            <div className="sidebar-testimonials-byline">Rebecca T., Brigham City, UT</div>
            <div className="sidebar-testimonials-details">Inbound Customer Service Representative at Discover Financial Services</div>
            <div className="sidebar-testimonials-date">
              <i className="fa fa-calendar-alt" aria-hidden="true"></i> <span className="testimonial-date">Mar 13, 2023</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="sidebar-testimonials-quote">
              <i className="fa fa-quote-left"></i>I was out of a job for a while and wanted to break into the work-from-home job market, and FlexJobs worked wonders!<i className="fa fa-quote-right ps-1"></i>
            </div>
            <div className="sidebar-testimonials-byline">Christine A., Middletown, MD</div>
            <div className="sidebar-testimonials-details">Call Center Agent at Working Solutions</div>
            <div className="sidebar-testimonials-date">
              <i className="fa fa-calendar-alt" aria-hidden="true"></i> <span className="testimonial-date">Mar 8, 2023</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="sidebar-testimonials-quote">
              <i className="fa fa-quote-left"></i>Thank you, FlexJobs, for assisting me in finding this amazing employment opportunity!
              <i className="fa fa-quote-right ps-1"></i>
            </div>
            <div className="sidebar-testimonials-byline">Rebecca T., Brigham City, UT</div>
            <div className="sidebar-testimonials-details">Inbound Customer Service Representative at Discover Financial Services</div>
            <div className="sidebar-testimonials-date">
              <i className="fa fa-calendar-alt" aria-hidden="true"></i> <span className="testimonial-date">Mar 13, 2023</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="sidebar-testimonials-quote">
              <i className="fa fa-quote-left"></i>I was out of a job for a while and wanted to break into the work-from-home job market, and FlexJobs worked wonders!<i className="fa fa-quote-right ps-1"></i>
            </div>
            <div className="sidebar-testimonials-byline">Christine A., Middletown, MD</div>
            <div className="sidebar-testimonials-details">Call Center Agent at Working Solutions</div>
            <div className="sidebar-testimonials-date">
              <i className="fa fa-calendar-alt" aria-hidden="true"></i> <span className="testimonial-date">Mar 8, 2023</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="sidebar-testimonials-quote">
              <i className="fa fa-quote-left"></i>Thank you, FlexJobs, for assisting me in finding this amazing employment opportunity!
              <i className="fa fa-quote-right ps-1"></i>
            </div>
            <div className="sidebar-testimonials-byline">Rebecca T., Brigham City, UT</div>
            <div className="sidebar-testimonials-details">Inbound Customer Service Representative at Discover Financial Services</div>
            <div className="sidebar-testimonials-date">
              <i className="fa fa-calendar-alt" aria-hidden="true"></i> <span className="testimonial-date">Mar 13, 2023</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </SwiperWrap>
  );
}
export default BlogStoriesSlider;

const SwiperWrap = styled.div`
  width: 308px;
  height: 223px;
  font-size: 1.4rem;
  border-bottom: 1px solid #e1e8ef;
  --swiper-pagination-bullet-size: 1.4rem;
  --swiper-pagination-bullet-inactive-color: #fff;
  --swiper-theme-color: #7f7f7f;
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-pagination-bottom: .7rem;
  --swiper-pagination-bullet-horizontal-gap: .2rem;
  --swiper-navigation-size: 1rem;
  --swiper-navigation-top-offset: 90%;
  --swiper-navigation-sides-offset: 7.7rem;
  .swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    text-align: center;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 2.2rem;
  }
  .sidebar-testimonials-quote {
    .fa {
      color: #FF6843;
      font-size: 1.6rem;
      padding: 0 .4rem;
    }
  }
  .sidebar-testimonials-byline {
    color: #7f7f7f;
  }
  .sidebar-testimonials-details {
    font-weight: 700;
    margin: 0 0 0.3rem;
  }
  .testimonial-date {
      color: #7f7f7f;
      font-style: italic;
  }
  .swiper-pagination {
  }
  .swiper-pagination-bullet {
    border: 1px solid #7f7f7f;
  }
  .swiper-button-next.swiper-button-disabled,
  .swiper-button-prev.swiper-button-disabled {
    opacity: 1;
  }
`;