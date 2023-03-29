import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FormGroup from '../common/FormGroup';
import Popover from '../common/PopoverDefinition';
import FormCheck from '../common/FormCheck';
import { LinkBtn } from '../../../styles/components/common/Common.styles.js';

const REMOTE_LIST = ['Select', 'Remote - Any Level', '100% Remote Work', 'Hybrid Remote Work', 'Option for Remote Work', 'No Remote Work'];
const INTL_LOC_LIST = ['Select Country', 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'The Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Brazzaville)', 'Congo (Kinshasa)', 'Costa Rica', "Côte d'Ivoire", 'Croatia', 'Cuba', 'Curacao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'The Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Holy See', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Federated States of Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Yemen', 'Zambia', 'Zimbabwe'];
const JOB_TYPES_LIST = ['Employee', 'Freelance', 'Temporary'];
const WORK_SCHEDULE_LIST = ['Full-Time','Part-Time','Flexible Schedule','Alternative Schedule'];
const CAREER_LEVEL_LIST = ['Entry-Level','Experienced','Manager','Senior Level Manager'];
const CATEGORIES_LIST = ['Entry-Level','Experienced','Manager','Senior Level Manager'];
const FEATURED_LIST = ['Select', 'Featured Employers', 'FlexJobs Top 100 Remote', 'Diversity-Friendly', 'Environmental/Green', 'Family-Friendly', 'Fast Growing', 'Flex-Friendly Cultures', 'Great Places to Work Awards', 'Healthy Lifestyle Cultures', 'Military-Friendly', 'Other Awards or Accolades', 'Progressive', 'Public Companies', 'Remote-Friendly Cultures', 'Trusted Reputation Awards', 'Women-Friendly', 'All Award-Winning Employers', '100 Best Corporate Citizen', '50 Best Companies for Latinas', '50 Best Nonprofits To Work For', 'America’s 100 Best Adoption-Friendly Workplaces', 'Barrons 400', 'Best Companies to Work for in Florida ', 'Best Companies to Work for in New York', 'Best Companies to Work for in Pennsylvania', 'Best Companies to Work for in Texas', 'Best Employers for Healthy Lifestyles', 'Black Enterprise - 40 Best Companies for Diversity', 'CareerBliss 50 Happiest Companies in America', 'ComputerWorld - Best Places to Work in IT', 'Diversity 50', 'Entrepreneur\'s Best Small and Medium Workplaces', 'Equal Opportunity Top 50 Employers', 'Fast Company - Most Innovative Company', 'Forbes 2000', 'Forbes Most Valuable Brands', 'Forbes - World\'s Most Reputable Companies', 'Forbes World\'s Most Innovative Companies', 'Fortune 100', 'Fortune 500', 'Fortune\'s Most Admired Companies', 'Glassdoor Employees Choice - Best Place to Work', 'Harris Reputation Quotient Survey', 'Human Rights Campaign Best Places to Work', 'Inc 500', 'Minneapolis Star Trib Top Workplaces', 'Most Ethical Companies', 'NYSE100', 'Outside 50', 'Red100', 'S&amp;P 500', 'Top 100 Ideal Employers', 'Training Magazine - Top 125', 'WorldBlu Most Democratic Workplaces'];
const TRAVEL_LIST = ['Yes, a lot','Yes, a bit','No','No specification'];

const SearchOptionMain = () => {
  const [popover, setPopover] = useState(new Array(11).fill(false));
  const showPopover = (e) => {
    let newPopoverState = new Array(11).fill(false);
    newPopoverState[e.target.dataset.index] = true;
    setPopover({ ...newPopoverState });
  }
  const hidePopover = (e) => {
    if (popover && !e.target.classList.contains('fa-info-circle')) {
      setPopover(new Array(11).fill(false));
    }
  }
  useEffect(() => {
    if (popover) {
      document.addEventListener('click', hidePopover);
    }
    else {
      document.removeEventListener('click', hidePopover);
    }
    return () => {
      document.removeEventListener('click', hidePopover);
    };
  });
  return (
    <SearchOptionMainWrap>
      <H1>Advanced Job Search</H1>
      <H3 className='text-black'>Please fill out ONLY those fields that you really want to narrow down your search.</H3>

      <form role='form' method='get' action='/search' id='form-advanced-search'>
        <div className='row'>
          <div className='form-group'>
            <div className='lbl-wrp'>
              <label className='ctrl-lbl' htmlFor='exact'>Keywords</label>
              <a aria-label='Remote Work Level'>
                <i className='fa fa-info-circle' data-index='0' onClick={showPopover} />
              </a>
            </div>
            {popover[0] &&
              <Popover
                head='Keywords'
                body="It will pull the EXACT word or words, so you will get different results for words or phrases like 'product manager' vs 'production manager'."
              />}
            <FormGroup type='text' placeholder='Enter a job title, function, skill, etc.' id='keywords' spacing='true' />
          </div>

          <div className='form-group'>
            <div className='lbl-wrp'>
              <label className='ctrl-lbl' htmlFor='inputTelecommutingLevel'>Remote Work Level</label>
              <a aria-label='Remote Work Level'>
                <i className='fa fa-info-circle' data-index='1' onClick={showPopover} />
              </a>
            </div>
            {popover[1] &&
              <Popover
                head='Remote Work Level'
                body="If you want to work remotely, choose which option works for you. Recommendation - choose 'Remote Work - Any Level' unless you specifically want '100% Remote Work.' We also suggest entering your location along with your remote work level, so you receive positions that are either available to local candidates in your area, nationally, or globally. To see more about why some remote positions have a location, please <a href='https://www.flexjobs.com/blog/post/why-do-some-telecommuting-jobs-require-a-location/' target='blank'>check out this blog</a>."
              />}
            <div className='controls'>
              <Select>
                {REMOTE_LIST.map((item, index) => (
                  <option key={item + index}>{item}</option>
                ))}
              </Select>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='form-group'>
            <div className='lbl-wrp'>
              <label className='ctrl-lbl' htmlFor='selectLocation'>U.S. Location</label>
              <a aria-label='U.S. Location'>
                <i className='fa fa-info-circle' data-index='2' onClick={showPopover} />
              </a>
            </div>
            {popover[2] &&
              <Popover
                head='U.S. Location'
                body='You can search jobs specifically available in a certain city, state, zip code or even nationwide. To begin, we recommend that you select the widest geographic region possible.' />}
            <FormGroup type='text' placeholder='Enter city, state, or zip code' id='location' spacing='true' />
            <FormCheck type='checkbox' label={['Open to candidates anywhere in U.S.']} labelBold spacing='true' />
          </div>

          <div className='form-group'>
            <div className='lbl-wrp'>
              <label className='ctrl-lbl' htmlFor='inputTelecommutingLevel'>International Location</label>
              <a aria-label='International Location'>
                <i className='fa fa-info-circle' data-index='3' onClick={showPopover} />
              </a>
            </div>
            {popover[3] &&
              <Popover
                head='International Location'
                body='To search for jobs that are available in other countries, please select your country from the dropdown.'
              />}
            <div className='controls'>
              <Select>
                {INTL_LOC_LIST.map((item, index) => (
                  <option key={item + index}>{item}</option>
                ))}
              </Select>
            </div>
            <FormCheck type='checkbox' label={['Open to candidates anywhere in world']} labelBold />
          </div>
        </div>

        <div className='row'>
          <div className='form-group'>
            <div className='lbl-wrp'>
              <label className='ctrl-lbl' htmlFor=''>Job Types</label>
              <a aria-label='Job Types'>
                <i className='fa fa-info-circle' data-index='4' onClick={showPopover} />
              </a>
            </div>
            {popover[4] &&
              <Popover
                head='Job Types'
                body='Choose which type of job arrangement that you are interested in or would consider.'
              />}
            <div className='controls'>
              <Select>
                {JOB_TYPES_LIST.map((item, index) => (
                  <option key={item + index}>{item}</option>
                ))}
              </Select>
            </div>
          </div>

          <div className='form-group'>
            <div className='lbl-wrp'>
              <label className='ctrl-lbl' htmlFor=''>Work Schedule</label>
              <a aria-label='Work Schedule'>
                <i className='fa fa-info-circle' data-index='5' onClick={showPopover} />
              </a>
            </div>
            {popover[5] &&
              <Popover
                head='Work Schedule'
                body="Choose a schedule that you would consider or prefer. For information on flexible schedules and alternative schedules, please check out our <a href='https://www.flexjobs.com/blog/post/flexible-schedule-vs-alternative-schedule-whats-difference/' target='blank'>blog post</a>."
              />}
            <div className='controls'>
              <Select>
                {WORK_SCHEDULE_LIST.map((item, index) => (
                  <option key={item + index}>{item}</option>
                ))}
              </Select>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='form-group'>
            <div className='lbl-wrp'>
              <label className='ctrl-lbl' htmlFor=''>Career Level</label>
              <a aria-label='Career Level'>
                <i className='fa fa-info-circle' data-index='6' onClick={showPopover} />
              </a>
            </div>
            {popover[6] &&
              <Popover
                head='Career Level'
                body='Please select your current or desired career level to see the jobs most applicable to your job search.'
              />}
            <div className='controls'>
              <Select>
                {CAREER_LEVEL_LIST.map((item, index) => (
                  <option key={item + index}>{item}</option>
                ))}
              </Select>
            </div>
          </div>

          <div className='form-group'>
            <div className='lbl-wrp'>
              <label className='ctrl-lbl' htmlFor=''>Categories</label>
              <a aria-label='Categories'>
                <i className='fa fa-info-circle' data-index='7' onClick={showPopover} />
              </a>
            </div>
            {popover[7] &&
              <Popover
                head='Categories'
                body='Choose the career category that you are interested in and/or qualified for. This is a great way to explore job listings in a given career area with a more broad approach than doing a specific keyword search.'
              />}
            <div className='controls'>
              <Select>
                {CATEGORIES_LIST.map((item, index) => (
                  <option key={item + index}>{item}</option>
                ))}
              </Select>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='form-group'>
            <div className='lbl-wrp'>
              <label className='ctrl-lbl' htmlFor=''>Featured & Award-Winning Employers</label>
              <a aria-label='Featured & Award-Winning Employers'>
                <i className='fa fa-info-circle' data-index='8' onClick={showPopover} />
              </a>
            </div>
            {popover[8] &&
              <Popover
                head='Featured & Award-Winning Employers'
                body='This is a unique feature on FlexJobs!  Featured Companies are employers who post their jobs directly to the FlexJobs site and are actively using FlexJobs in their hiring process. Award-Winning Employers are employers who have won recognition as an accomplished company, such as the Fortune 500, Working Mother Top 100 Companies to Work for, and many others.'
              />}
            <div className='controls'>
              <Select>
                {FEATURED_LIST.map((item, index) => (
                  <option key={item + index}>{item}</option>
                ))}
              </Select>
            </div>
          </div>

          <div className='form-group'>
            <div className='lbl-wrp'>
              <label className='ctrl-lbl' htmlFor=''>Willing to Travel?</label>
              <a aria-label='Willing to Travel?'>
                <i className='fa fa-info-circle' data-index='9' onClick={showPopover} />
              </a>
            </div>
            {popover[9] &&
              <Popover
                head='Willing to Travel?'
                body='Consider whether you are willing to consider a position that has a travel component or not, and select the option that you are comfortable with.'
              />}
            <div className='controls'>
              <Select>
                {TRAVEL_LIST.map((item, index) => (
                  <option key={item + index}>{item}</option>
                ))}
              </Select>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='form-group'>
            <div className='lbl-wrp'>
              <label className='ctrl-lbl' htmlFor='exact'>Exclude Words</label>
              <a aria-label='Exclude Words'>
                <i className='fa fa-info-circle' data-index='10' onClick={showPopover} />
              </a>
            </div>
            {popover[10] &&
              <Popover
                head='Exclude Words'
                body='You can filter the results of your search by excluding certain keywords or terms by entering them into this field. You can also exclude jobs from specific companies by adding the company name exactly as it appears in our database to this field.'
              />}
            <FormGroup type='text' placeholder='Exclude results with these words' id='exclude' spacing='true' />
          </div>
        </div>

        <div className='btn-wrap'>
          <LinkBtn href='/newsletters' fWeight='500' widthNull={true}>Search for Jobs</LinkBtn>
        </div>
      </form>

    </SearchOptionMainWrap >
  );
};

const SearchOptionMainWrap = styled.div`
  box-shadow: rgba(0,0,0,0.03) 0 2px 0 2px;
  padding: 1.6rem 0 26rem;
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .controls {
    display: flex;
    margin: 0 0 1.7rem;
  }
  @media (min-width: 576px) {
    .form-group {
        flex: 0 0 auto;
        width: 50%;
        padding: 0 1.2rem;
        margin: 0 0 .2rem;
        position: relative;
    }
  }
  .ctrl-lbl {
    margin: 0 0 .7rem;
    font-weight: 600;
  }
  .lbl-wrp {
    display: flex;
    justify-content: space-between;
  }
  .fa-info-circle {
    color: ${(props) => props.theme.colors.primaryLight};
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors.primaryDark};
    }
  }
  .btn-wrap {
    display: flex;
    justify-content: center;
  }
`
const H1 = styled.h1`
  font-size: 2.8rem;
  line-height: 3.4rem;
  margin: 0 0 .8rem;
  padding: 0 1.2rem;
`;
const H3 = styled.h3`
  color: ${props => props.theme.colors.black};
  font-size: 2.2rem;
  font-weight: 500;
  padding: 0 1.2rem;
  margin: 0 0 3.2rem;
`;
const Select = styled.select`
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
    color: #212529;
    padding: .6rem 3.6rem .6rem 1.2rem;
    border: 1px solid ${props => props.theme.colors.tertiartyMedium};
    margin: 0;
    position: relative;    
    border-radius: 4px;
    &:focus{
        outline: 0;
        border-color: #86b7fe;
        box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
    }
`;

export default SearchOptionMain;
