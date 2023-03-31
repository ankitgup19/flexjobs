import React from 'react';
import styled from 'styled-components';
import TableHorizontal from "../common/TableHorizontal";
import BannerUnlock from "../common/BannerUnlock";

const DetailsTabs = (props) => {

  return (
    <STabs
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
    >
      <STabList className='details-tabs'>
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
        <p className='job-description'>Managers at serve as program and project-level day-to-day leads on up to four accounts. This role works with client and team to consistently implement communications strategies and integrated campaigns that drive results. They have excellent media...</p>
        <TableHorizontal />
        <BannerUnlock 
          imgSrc='https://www.flexjobs.com/images/bg-join-flexjobs-1.png'
        />
        <div className='footer-txt'>
          <p>To find out more about or apply to this <strong>Manager</strong> job—and other great opportunities like it—<strong><a href='/Members/Flexers/Register.aspx' id='bottom-label-reg' aria-label='link to FlexJobs registration page'> become a FlexJobs member today!</a></strong></p>
          <p>With FlexJobs, you'll find the best flexible jobs and fantastic expert resources to support you in your job search. If you have any questions, <a href='/contact' aria-label='Contact FlexJobs'>please feel free to contact us</a>.</p>
        </div>
      </STabPanel>
      <STabPanel>
        <p className='add-blur'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <BannerUnlock 
          imgSrc='https://www.flexjobs.com/images/bg-join-flexjobs-10.png'
        />
      </STabPanel>
    </STabs>
  );
};

export default DetailsTabs;

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
      margin-bottom: 2rem;
    }
    .unlock-lock {
      top: -11.5rem;
      left: 35%;
    }
    .card-content {
      position: relative;
      @media (min-width: 768px) {
        max-width: 55%;
      }
      h3 {
        font-size: ${props => props.theme.fontSize.md};
        line-height: 2.6rem;
        margin: 0 0 .8rem;
      }
    }
    .add-blur {
      filter: blur(8px);
    }
    .footer-txt {
      margin: 2.4rem 0 0;
      padding: 2.4rem 0 0;
      border-top: 1px solid #e8e8e8;
      a {
        color: ${props => props.theme.colors.primaryLight};
        text-decoration: none;
        &:hover, &:active, &:focus {
            color: ${props => props.theme.colors.primaryDark};
            text-decoration: underline;
        }
      }
    }
`;

STabList.tabsRole = 'TabList';
STab.tabsRole = 'Tab';
STabPanel.tabsRole = 'TabPanel';
