import styled from "styled-components";

const Styled = {
    Heading: styled.h2`
        text-align: center;
        margin: 0 0 1rem;
    `,
    SwiperWrap: styled.div`
        width: 100%;
        height: 22.3rem;
        font-size: ${props => props.theme.fontSize.xs};
        border-bottom: 1px solid #e1e8ef;
        text-align: center;
        --swiper-theme-color: #7f7f7f;
        --swiper-navigation-size: 2rem;
        .swiper {
            height: 100%;
        }
        .swiper-wrapper {
            margin: auto;
        }
        .swiper-slide {
            background: ${props => props.theme.colors.white};
            display: flex;
            text-align: center;
            justify-content: center;
            flex-direction: column; 
        }
        .swiper-pagination-bullet {
            border: 1px solid #7f7f7f;
        }
        .swiper-button-next,
        .swiper-button-prev {
            z-index: 11;
            color: #007CAD;
        }
        .swiper-button-prev {
            left: 3rem;
        }  
        .swiper-button-next {
            right: 3rem;
        }
        .swiper-button-next.swiper-button-disabled,
        .swiper-button-prev.swiper-button-disabled {
            opacity: 1;
            pointer-events: all;
        }
    `,
    SwiperSlideFrame: styled.div`
        border: 1px solid #979797;
        border-radius: 8px;
        height: 200px;
        width: 86%;
        margin: auto;
        padding: 2rem 3rem;
    `,
    SidebarTestimonialsQuote: styled.div`
        font-size: 1.6rem;
        .fa {
            color: #ff6843;
            font-size: 1.6rem;
            padding: 0 .4rem;
        }
  `,
    SidebarTestimonialsByline: styled.div`
        font-size: 1.6rem;
        font-weight: 700;
  `,
}

export default Styled;