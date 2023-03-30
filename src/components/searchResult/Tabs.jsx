import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BLOG_ARTICLES } from '../../helper/Blogs.js';
import { LinkBtn } from '../../../styles/components/common/Common.styles.js';
/* import {
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
} from '../../../styles/components/common/BlogTabs.style.js'; */

const BlogTabs = (props) => {
  const [latestArticles, setLatestArticles] = useState(BLOG_ARTICLES.data);
  const [trendingArticles, setTrendingArticles] = useState(BLOG_ARTICLES.data);
  useEffect(() => {
    setLatestArticles(
      BLOG_ARTICLES.data
        .filter((article) => article.type.toLowerCase() === 'latest')
        .slice(0, props.latestCount)
    );
    setTrendingArticles(
      BLOG_ARTICLES.data
        .filter((article) => article.type.toLowerCase() === 'trending')
        .slice(0, props.trendingCount)
    );
  }, [props.latestCount, props.trendingCount]);

  return (
    <STabs
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
    >
      <STabList className='blog-tabs'>
        <STab name='job' onClick={props.getActiveTab}>
          <i className='fa fa-briefcase fa-fw'></i>
          Job
        </STab>
        <STab name='company' onClick={props.getActiveTab}>
          <i className='fa fa-building fa-fw'></i>
          Company
        </STab>
      </STabList>
      <STabPanel>
        <div className='job-description'>Managers at serve as program and project-level day-to-day leads on up to four accounts. This role works with client and team to consistently implement communications strategies and integrated campaigns that drive results. They have excellent media...</div>
        <table className='job-details'>
          <tbody><tr>
            <th scope='row'>Date Posted:</th>
            <td>02/23/23

            </td>
          </tr>

            <tr>
              <th scope='row'>Remote Work Level:</th>
              <td>100% Remote
              </td>
            </tr><tr>
              <th scope='row'>Location:</th>
              <td>US National <span className='icn-us' title='Job open to candidates located anywhere in the US'></span></td>
            </tr>
            <tr>
              <th scope='row'>Job Type:</th>
              <td>Employee</td>
            </tr>
            <tr>
              <th scope='row'>Job Schedule:</th>
              <td>  Full-Time
              </td>
            </tr>
            <tr>
              <th scope='row'>Career Level:</th>
              <td>Manager</td>
            </tr>
            <tr>
              <th scope='row'>Travel Required:</th>
              <td>No</td>
            </tr>
            <tr>
              <th scope='row'>Hours per Week:</th>
              <td>40</td>
            </tr>
            <tr>
              <th scope='row'>Categories:</th>
              <td><a href='/remote-jobs/account-management'>Account Management</a>, <a href='/remote-jobs/online-client-services'>Client Services</a>, <a href='/remote-jobs/advertising-pr'>Advertising &amp; PR</a></td>
            </tr>
            <tr>
              <th scope='row'>Company:</th>
              <td className='add-blur'>Company name here</td>
            </tr>
            <tr>
              <th scope='row'>Benefits:</th>
              <td className='add-blur'>Other benefits listed here</td>
            </tr>
          </tbody>
        </table>
        <a className='lead-card-link' href='/Members/Flexers/Register.aspx'>
          <div className='card'>
            <div className='card-content'>
              <img src='https://www.flexjobs.com/images/icons/icn-lock-arrow.svg' className='unlock-lock' />
              <h3>Join FlexJobs to Unlock Full Job Details and Apply!</h3>
              <ul className='benefit-list'>
                <li className='benefit-list-item'>Find a better job, faster!</li>
                <li className='benefit-list-item'>Hand-screened leads</li>
                <li className='benefit-list-item'>No ads, scams, junk</li>
                <li className='benefit-list-item'>Great job search support</li>
                <li className='benefit-list-item'>50+ career categories</li>
              </ul>
              <LinkBtn fWeight='500' widthNull={true} inline={true}>Create an Account to Unlock</LinkBtn>
            </div>
            <img src='https://www.flexjobs.com/images/bg-join-flexjobs-1.png' alt='job seeker image' title='job seeker image' />
          </div>
        </a>
        <div className='footer-txt'>
          <p>To find out more about or apply to this <strong>Manager</strong> job—and other great opportunities like it—<strong><a href='/Members/Flexers/Register.aspx' id='bottom-label-reg' aria-label='link to FlexJobs registration page'> become a FlexJobs member today!</a></strong></p>
          <p>With FlexJobs, you'll find the best flexible jobs and fantastic expert resources to support you in your job search. If you have any questions, <a href='/contact' aria-label='Contact FlexJobs'>please feel free to contact us</a>.</p>
        </div>
      </STabPanel>
      <STabPanel>
        <p className='add-blur'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <a className='lead-card-link' href='/Members/Flexers/Register.aspx'>
          <div className='card'>
            <div className='card-content'>
              <img src='https://www.flexjobs.com/images/icons/icn-lock-arrow.svg' className='unlock-lock' />
              <h3>Join FlexJobs to Unlock Full Job Details and Apply!</h3>
              <ul className='benefit-list'>
                <li className='benefit-list-item'>Find a better job, faster!</li>
                <li className='benefit-list-item'>Hand-screened leads</li>
                <li className='benefit-list-item'>No ads, scams, junk</li>
                <li className='benefit-list-item'>Great job search support</li>
                <li className='benefit-list-item'>50+ career categories</li>
              </ul>
              <LinkBtn fWeight='500' widthNull={true} inline={true}>Create an Account to Unlock</LinkBtn>
            </div>
            <img src='https://www.flexjobs.com/images/bg-join-flexjobs-10.png' alt='job seeker image' title='job seeker image' />
          </div>
        </a>
      </STabPanel>
    </STabs>
  );
};

export default BlogTabs;

import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const STabs = styled(Tabs)`
    padding: 0 1.2rem;
    margin: 1.1rem 0 0;
`;
export const STabList = styled(TabList)`
    list-style-type: none;
    display: flex;
    margin: 0 0 2.4rem;
    padding: 0;
    font-size: 2.4rem;
    border-bottom: 1px solid #bfbfbf;
    .fa {
      margin: 0 .5rem 0 0;
    }
`;
export const STab = styled(Tab)`
    margin: 1.6rem 0 -.1rem 0;
    padding: 1.2rem 2.4rem;
    cursor: pointer;
    color: #6c757d;
    outline: 0;

    &.is-selected {
        color: ${props => props.theme.colors.primaryLight};
        border-bottom: .2rem solid ${props => props.theme.colors.primaryLight};
    }
    &:hover,
    &:focus {
        text-decoration: underline;
    }
`;
export const STabPanel = styled(TabPanel)`
    display: none;
    &.is-selected {
        display: grid;
    }
    .job-description {
      margin-bottom: 20px;
    }
    .job-details {
      caption-side: bottom;
      border-collapse: collapse;
      text-align: left;
      max-width: 56rem;
      th {
        padding-bottom: 15px;
        color: ${props => props.theme.colors.black};
        padding-right: 15px;
      }
      td {
        padding-bottom: 15px;
      }
    }
    .add-blur {
      filter: blur(8px);
    }
    .unlock-lock {
      top: -115px;
      left: 20%;
      position: absolute;
    }
    .card-content {
      position: relative;
    }
    .card {
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
      position: relative;
      max-width: 95%;
      padding: 2.4rem;
      img {
        position: absolute;
        right: 3%;
        bottom: 0px;
        max-width: 40%;
        max-height: 99%;
      }
    }
    .lead-card-link {
      text-decoration: none;
      &:hover,
      &:focus {
        h3,li {
          text-decoration: underline;
          text-decoration-color: ${props => props.theme.colors.black};
        }
      }
    }
    .benefit-list {
        list-style-type: none;
        padding-left: 0;
    }
    .benefit-list-item {
      color: ${props => props.theme.colors.black};
      text-decoration: none;
      &:before {
        content: '\f00c';
        color: #ff6843;
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        margin-right: 8px;
      }
    }
    .footer-txt {
      margin: 2.4rem 0 0;
      padding: 2.4rem 0 0;
      border-top: 1px solid #e8e8e8;
      a {
        color: ${props => props.theme.colors.primaryLight};
        &:hover, &:active, &:focus {
            color: ${props => props.theme.colors.primaryDark};
        }
      }
    }
`;

STabList.tabsRole = 'TabList';
STab.tabsRole = 'Tab';
STabPanel.tabsRole = 'TabPanel';
