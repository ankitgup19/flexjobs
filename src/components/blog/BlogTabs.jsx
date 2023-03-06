import React from 'react';
import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

const STabs = styled(Tabs)`
    padding: 0 1.2rem;
    margin: 4.2rem 0 0;
`;

const STabList = styled(TabList)`
    list-style-type: none;
    display: flex;
    border-top: 1px solid #c0c0c0;
    border-bottom: 1px solid #dee2e6;
    margin: 0 0 2.4rem;
    padding: 0;
`;
STabList.tabsRole = 'TabList';

const STab = styled(Tab)`
    margin: 1.6rem 2.4rem -.1rem 0;
    padding: 1.3rem .4rem;
    cursor: pointer;
    color: #6c757d;
    outline: 0;

    &.is-selected {
        color: ${(props) => props.theme.colors.primaryLight};
        border-bottom: 3px solid ${(props) => props.theme.colors.primaryLight};
    }
    &:hover,
    &:focus {
        text-decoration: underline;
    }
`;
STab.tabsRole = 'Tab';

const STabPanel = styled(TabPanel)`
  display: none;

  &.is-selected {
    display: block;
  }
`;
const CardDeck = styled.div`
    display: flex;
    margin: 0 -1.2rem;
`;
const Col = styled.div`
    padding: 0 1.2rem;
`;
const Card = styled.div`
    @media only screen and (min-width: 992px) {
        max-width: 400px;
        height: 100%
    }
`;
const CardBody = styled.div`
    border: 1px solid rgba(0,0,0,0.125);
    border-width: 0 1px 1px 1px;
    padding: 1.6rem;
`;
const CardImg = styled.img`
    width: 100%;
    height: auto;
    border: 1px solid rgba(0,0,0,0.125);
    border-width: 1px 1px 0 1px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
`;
const CardTitle = styled.h4`
    margin: 0 0 1.2rem;
`;
const CardTitleLink = styled.a`
    color: ${(props) => props.theme.colors.primaryLight};
    text-decoration: none;
    font-size: 1.84rem;
    font-weight: 500;
    &:hover {
        color: ${(props) => props.theme.colors.primaryDark};
        text-decoration: underline;
    }
`;
STabPanel.tabsRole = 'TabPanel';

const BlogTabs = () => (
    <STabs
        selectedTabClassName='is-selected'
        selectedTabPanelClassName='is-selected'
    >
        <STabList>
            <STab>Latest</STab>
            <STab>Trending</STab>
        </STabList>
        <STabPanel>
            <CardDeck>
                <Col>
                    <Card>
                        <a href="/blog/post/how-to-lose-a-job-offer-in-no-time" className="card-img-link"><CardImg className="card-img-top lazyloaded" data-src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/08/06104304/How-to-Lose-a-Job-Offer-in-No-Time-353x177.jpg" height="174" width="384" alt="" src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/08/06104304/How-to-Lose-a-Job-Offer-in-No-Time-353x177.jpg" /></a>
                        <CardBody>
                            <CardTitle><CardTitleLink href="/blog/post/how-to-lose-a-job-offer-in-no-time">6 Mistakes That Can Lose a Job Offer in No Time</CardTitleLink></CardTitle>
                            <p className="card-text">Certain missteps can cost you a new job offer. Avoid these six mistakes that cause employers to change their mind—plus, how to protect your new opportunity.
                            </p>
                        </CardBody>
                    </Card>
                </Col>
            </CardDeck>
        </STabPanel>
        <STabPanel>Panel 2</STabPanel>
    </STabs>
);

export default BlogTabs;
