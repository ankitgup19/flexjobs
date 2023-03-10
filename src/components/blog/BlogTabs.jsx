import React, { useEffect, useState } from "react";
import { BLOG_ARTICLES } from "../../helper/Blogs.js";
import {
  STabs,
  STabList,
  STab,
  STabPanel,
  CardDeck,
  Card,
  CardBody,
  CardImg,
  CardImgLink,
  CardDescription,
  CardTitle,
  CardTitleLink,
} from "../../../styles/components/common/BlogTabs.style.js";

STabList.tabsRole = "TabList";
STab.tabsRole = "Tab";
STabPanel.tabsRole = "TabPanel";

const BlogTabs = (props) => {
  const [latestArticles, setLatestArticles] = useState(BLOG_ARTICLES.data);
  const [trendingArticles, setTrendingArticles] = useState(BLOG_ARTICLES.data);
  useEffect(() => {
    setLatestArticles(
      BLOG_ARTICLES.data
        .filter((article) => article.type.toLowerCase() === "latest")
        .slice(0, props.latestCount)
    );
    setTrendingArticles(
      BLOG_ARTICLES.data
        .filter((article) => article.type.toLowerCase() === "trending")
        .slice(0, props.trendingCount)
    );
  }, [props.latestCount, props.trendingCount]);

  return (
    <STabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <STabList className="blog-tabs">
        <STab name="latest" onClick={props.getActiveTab}>
          Latest
        </STab>
        <STab name="trending" onClick={props.getActiveTab}>
          Trending
        </STab>
        <STab name="saved" onClick={props.getActiveTab}>
          Saved
        </STab>
      </STabList>
      <STabPanel>
        {latestArticles.map((item, index) => (
          <CardDeck key={index}>
            <Card>
              <CardImgLink href={item.href}>
                <CardImg
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  src={item.img_url}
                />
              </CardImgLink>
              <CardBody>
                <CardTitle>
                  <CardTitleLink href={item.href}>{item.title}</CardTitleLink>
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardBody>
            </Card>
          </CardDeck>
        ))}
      </STabPanel>
      <STabPanel>
        {trendingArticles.map((item, index) => (
          <CardDeck key={index}>
            <Card>
              <CardImgLink href={item.href}>
                <CardImg
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  src={item.img_url}
                />
              </CardImgLink>
              <CardBody>
                <CardTitle>
                  <CardTitleLink href={item.href}>{item.title}</CardTitleLink>
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardBody>
            </Card>
          </CardDeck>
        ))}
      </STabPanel>
      <STabPanel>
        {BLOG_ARTICLES.data
          .filter((article) => article.type.toLowerCase() === "saved")
          .map((item, index) => (
            <CardDeck key={index}>
              <Card>
                <CardImgLink href={item.href}>
                  <CardImg
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    src={item.img_url}
                  />
                </CardImgLink>
                <CardBody>
                  <CardTitle>
                    <CardTitleLink href={item.href}>{item.title}</CardTitleLink>
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardBody>
              </Card>
            </CardDeck>
          ))}
      </STabPanel>
    </STabs>
  );
};

export default BlogTabs;
