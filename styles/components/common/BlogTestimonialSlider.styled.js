import styled from "styled-components";

const Styled = {
    SwiperWrap: styled.div`
        width: 100%;
        height: 22.3rem;
        font-size: ${props => props.theme.fontSize.xs};
        border-bottom: 1px solid #e1e8ef;
        --swiper-pagination-bullet-size: 1.4rem;
        --swiper-pagination-bullet-inactive-color: ${props => props.theme.colors.white};
        --swiper-theme-color: #7f7f7f;
        --swiper-pagination-bullet-inactive-opacity: 1;
        --swiper-pagination-bottom: .7rem;
        --swiper-pagination-bullet-horizontal-gap: .2rem;
        --swiper-navigation-size: 1rem;
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
            top: auto;
            bottom: 1.4rem;
            @media (min-height: 769px) {
                bottom: 1.6rem;
            }
        }
        .swiper-button-prev {
            left: calc(50% - 7.5rem);
        }  
        .swiper-button-next {
            right: calc(50% - 7.5rem);
        }
        .swiper-button-next.swiper-button-disabled,
        .swiper-button-prev.swiper-button-disabled {
            opacity: 1;
            pointer-events: all;
        }
    `,
    SidebarTestimonialsQuote: styled.div`
        .fa {
            color: #ff6843;
            font-size: 1.6rem;
            padding: 0 .4rem;
        }
  `,
    SidebarTestimonialsByline: styled.div`
        color: #7f7f7f;
  `,
    SidebarTestimonialsDetails: styled.div`
        font-weight: 700;
        margin: 0 0 .3rem;
  `,
    SidebarTestimonialsDateRow: styled.div`
    color: #7f7f7f;
    font-style: italic;
  `,
    SidebarTestimonialsDate: styled.span`
    margin: 0 0 0 .5rem;
  `,
}

export default Styled;