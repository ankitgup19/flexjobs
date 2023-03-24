import styled, { css } from "styled-components";

export const StyledContainerMd = styled.div`
    max-width: ${({ fullwidth }) => fullwidth ? null : "1170px"};
    margin: 0 auto;
    padding: ${({ layout }) => layout ? "16.2rem 1.5rem 0" : "0 1.5rem"};
    @media all and (max-width:1024px){
        padding: ${({ layout }) => layout ? "13.5rem 1.5rem 0" : "0 1.5rem"};
    }
    @media (min-width: 1400px) {
        max-width: ${({ fullwidth }) => fullwidth ? null : "1320px"};
        /* padding-left: 0;
        padding-right: 0;
        margin: 0 -15px; */
    }
`;

export const FeaturedWrap = styled.div`
    display: grid;
    grid-template-columns: ${props => props.gridCol || (props.blog ? "58.33% auto" : props.filter ? "75% 25%" : "1fr 1fr")};
    margin: 1.6rem 0 0;//9rem 0 0;
    .left,
    .right{
        padding: ${props => props.blog ? "0 1.2rem" : ""};
    }
`;

export const LinkBtn = styled.a`
    background-color: ${props => props.primary ? props.theme.colors.primaryLight : props.theme.colors.secondary};
    border: 0;
    padding: ${props => props.primary ? '0.7rem 2.4rem' : '0.7rem 1.2rem'};
    font-size: ${props => props.theme.fontSize.sm};
    font-weight: ${props => props.fWeight || '700'};
    line-height: 1.5;
    color: ${props => props.theme.colors.white};    
    display: ${props => props.primary ? 'inline-grid' : 'flex'};
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 4px;
    width: ${props => props.primary ? null : '100%'};
    outline: 0;
    /* &:hover,
    &:focus {
        text-decoration: underline;
    } */
    ${props => props.primary && css`
        &:hover,
        &:focus {
            background: ${props => props.theme.colors.primary};
        }
    `}
`