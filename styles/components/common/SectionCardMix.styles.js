import styled from "styled-components";

const Styled = {
    SectionCardMix: styled.div`
        border: 1px solid #C5DAE4;
        background-color: #e7edf3;
        padding: 1.6rem;
        .collapse {
            height: 0;
            opacity: 0;
            transition: all .3s ease;
        }
        .toggle-upsell-details[aria-expanded='true']+.collapse {
            height: auto;
            opacity: 1;
        }
    `,
    ToggleLink: styled.a`
        color: ${props => props.theme.colors.primaryLight};
        text-decoration: none;
        display: block;
        margin: 0 0 1.2rem;
        &:hover,
        &:focus {
            text-decoration: underline;
        }
        .fa {
            padding: 0 .8rem;
        }
    `,
    ToggleP: styled.p`
        text-align: left;
    `,
    LinkMore: styled.a`
        color: ${props => props.theme.colors.primaryLight};
        text-decoration: none;
        border: 1px solid ${props => props.theme.colors.primaryLight};
        padding: 0.6rem 0.8rem;
        margin: 1.6rem 0 0;
        cursor: pointer;
        border-radius: 0.4rem;
        display: inline-grid;
    `,
    Heading: styled.h2`
        text-align: center;
        margin: 0 0 2.4rem;
    `,
    P: styled.p`
        padding: 0 2.4rem;
        margin: 0;
    `,
    PriceCardVertWrap: styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        padding: 1.6rem 0;
    `,
    PriceCardVert: styled.div`
        box-shadow: 0 3px 6px rgba(0,0,0,0.25);
        border: 1px solid rgba(0,0,0,0.125);
        border-radius: 0.25rem;
        background: ${props => props.theme.colors.white};
        text-align: center;
    `,
    PriceCardVertImg: styled.img`
        width: 100%;
    `,
    PriceCardVertBody: styled.div`
        padding: 1.6rem;
    `,
    PriceCardVertDesc: styled.div`
        @media (min-width: 992px) {
            min-height: 125px;
        }
    `,
    PriceCardVertHeading: styled.h4`
        font-size: ${props => props.theme.fontSize.md1};
        margin: 0 0 .8rem;
    `,
    PriceInfo: styled.p`
        font-size: ${props => props.theme.fontSize.lg};
        color: #6c757d;
    `,
    Price: styled.span`
        color: ${props => props.theme.colors.secondary};
        font-weight: 600;
    `,
    Slash: styled.span`
        font-weight: 500;
        padding: 0 .6rem;
    `,
    PriceText: styled.span`
        font-size: ${props => props.theme.fontSize.xxs};
    `,
}

export default Styled;