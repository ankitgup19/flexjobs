import React from 'react';
import { BLOG_ARTICLES } from "../../helper/Blogs.js";
import { STabs, STabList, STab, STabPanel, CardDeck, Card, CardBody, CardImg, CardImgLink, CardDescription, CardTitle, CardTitleLink } from "../../../styles/components/common/BlogTabs.style.js";

STabList.tabsRole = 'TabList';
STab.tabsRole = 'Tab';
STabPanel.tabsRole = 'TabPanel';

const BlogTabs = () => (
    <STabs
        selectedTabClassName='is-selected'
        selectedTabPanelClassName='is-selected'
    >
        <STabList>
            <STab>Latest</STab>
            <STab>Trending</STab>
            <STab>Saved</STab>
        </STabList>
        <STabPanel>
            {
                BLOG_ARTICLES.data.filter((article) => article.type.toLowerCase() === "latest").map((item) =>
                    <CardDeck>
                        <Card>
                            <CardImgLink href={item.href}><CardImg width={item.width} height={item.height} alt={item.alt} src={item.img_url} /></CardImgLink>
                            <CardBody>
                                <CardTitle>
                                    <CardTitleLink href={item.href}>{item.title}</CardTitleLink>
                                </CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                            </CardBody>
                        </Card>
                    </CardDeck>)
            }
        </STabPanel>
        <STabPanel>
            {
                BLOG_ARTICLES.data.filter((article) => article.type.toLowerCase() === "trending").map((item) =>
                    <CardDeck>
                        <Card>
                            <CardImgLink href={item.href}><CardImg width={item.width} height={item.height} alt={item.alt} src={item.img_url} /></CardImgLink>
                            <CardBody>
                                <CardTitle>
                                    <CardTitleLink href={item.href}>{item.title}</CardTitleLink>
                                </CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                            </CardBody>
                        </Card>
                    </CardDeck>)
            }
        </STabPanel>
        <STabPanel>
            {
                BLOG_ARTICLES.data.filter((article) => article.type.toLowerCase() === "saved").map((item) =>
                    <CardDeck>
                        <Card>
                            <CardImgLink href={item.href}><CardImg width={item.width} height={item.height} alt={item.alt} src={item.img_url} /></CardImgLink>
                            <CardBody>
                                <CardTitle>
                                    <CardTitleLink href={item.href}>{item.title}</CardTitleLink>
                                </CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                            </CardBody>
                        </Card>
                    </CardDeck>)
            }
        </STabPanel>
    </STabs>
);

export default BlogTabs;
