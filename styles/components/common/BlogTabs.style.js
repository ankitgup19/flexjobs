import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const STabs = styled(Tabs)`
    padding: 0 1.2rem;
    margin: 1.1rem 0 0;
`;
export const STabList = styled(TabList)`
    list-style-type: none;
    display: flex;
    border-top: 1px solid #c0c0c0;
    border-bottom: 1px solid #dee2e6;
    margin: 0 0 2.4rem;
    padding: 0;
`;
export const STab = styled(Tab)`
    margin: 1.6rem 2.4rem -.1rem 0;
    padding: 1.3rem .4rem;
    cursor: pointer;
    color: #6c757d;
    outline: 0;

    &.is-selected {
        color: ${props => props.theme.colors.primaryLight};
        border-bottom: 3px solid ${props => props.theme.colors.primaryLight};
    }
    &:hover,
    &:focus {
        text-decoration: underline;
    }
`;
export const STabPanel = styled(TabPanel)`
    display: none;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 4.5rem;
    grid-row-gap: 2.4rem;
    &.is-selected {
        display: grid;
    }
`;
export const CardDeck = styled.div`
    border: 1px solid rgba(0,0,0,0.125);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
`;
export const Card = styled.div`    
    height: 100%;
    @media only screen and (min-width: 992px) {
        max-width: 400px;
    }
`;
export const CardBody = styled.div`
    padding: 1.6rem;
`;
export const CardImg = styled.img`
    width: 100%;
    height: auto;
`;
export const CardImgLink = styled.a`
    display: flex;
`;
export const CardDescription = styled.p`
    line-height: ${props => props.theme.lineHeight.lg};
    margin: 0;
`;
export const CardTitle = styled.h4`
    margin: 0 0 1.1rem;
    line-height: 1.2;
`;
export const CardTitleLink = styled.a`
    color: ${props => props.theme.colors.primaryLight};
    text-decoration: none;
    font-size: ${props => props.theme.fontSize.md1};
    font-weight: 500;
    &:hover {
        color: ${props => props.theme.colors.primaryDark};
        text-decoration: underline;
    }
`;