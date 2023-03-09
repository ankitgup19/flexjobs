import styled from "styled-components";

export const BlogPromoWrap = styled.form`
    margin: .8rem 0 0;
    padding: 0 1.2rem;
    flex: 0 0 auto;
    height: 300px;
    img {
        width: 100%;
    }
    .card-body {
        text-align: center;
        padding: 1.2rem;
        background: #E7EDF3;
    }
    .promo-title {
        font-size: 2.16rem;
        font-weight: 600;        
        margin: 1.2rem 0 0.8rem;
        line-height: 1.18;
    }
    .promo-text {
        font-size: 1.44rem;
        padding: 0 .5rem;
    }
`
export const LinkBtn = styled.button`
    background-color: ${props => props.theme.colors.secondary};
    border: 0;
    padding: 0.7rem 1.2rem;
    font-size: ${props => props.theme.fontSize.sm};
    font-weight: 700;
    line-height: 1.5;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    &:hover,
    &:focus {
        text-decoration: underline;
    }
`