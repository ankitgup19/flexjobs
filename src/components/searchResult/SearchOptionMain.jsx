import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FormGroup from "../common/FormGroup";
import Popover from "../common/PopoverDefinition";
import FormCheck from "../common/FormCheck";
import { LinkBtn } from "../../../styles/components/common/Common.styles.js";

const REMOTE_LIST = ["Select", "Remote - Any Level", "100% Remote Work", "Hybrid Remote Work", "Option for Remote Work", "No Remote Work"];

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
  margin: 0 0 1.6rem;
  padding: 0 1.2rem;
`;
const H3 = styled.h3`
  color: #000;
  font-size: 2.2rem;
  font-weight: 500;
  padding: 0 1.2rem;
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
`

const SearchOptionMain = () => {
  const [popover, setPopover] = useState(false);
  const showPopover = () => {
    if (!popover) {
      // setPopover(true);
    }
  }
  const hidePopover = (e) => {
    if (popover && !e.target.classList.contains('fa-info-circle')) {
      setPopover(false);
    }
  }
  useEffect(() => {
    if (popover) {
      document.addEventListener("click", hidePopover);
    }
    else {
      document.removeEventListener("click", hidePopover);
    }
    return () => {
      document.removeEventListener("click", hidePopover);
    };
  });
  return (
    <SearchOptionMainWrap>
      <H1>Advanced Job Search</H1>
      <H3 className="text-black">Please fill out ONLY those fields that you really want to narrow down your search.</H3>

      <form role="form" method="get" action="/search" id="form-advanced-search">
        <div className="row">
          <div className="form-group">
            <div className="lbl-wrp">
              <label className="ctrl-lbl" for="exact">Keywords</label>
              <a aria-label="Remote Work Level">
                <i className='fa fa-info-circle' onClick={showPopover} />
              </a>
            </div>
            {popover && <Popover />}
            <FormGroup type="text" placeholder="Enter a job title, function, skill, etc." id='keywords' spacing />
          </div>

          <div className="form-group">
            <div className="lbl-wrp">
              <label className="ctrl-lbl" for="inputTelecommutingLevel">Remote Work Level</label>
              <a aria-label="Remote Work Level">
                <i className='fa fa-info-circle' onClick={showPopover} />
              </a>
            </div>
            {popover && <Popover />}
            <div className="controls">
              <Select>
                {REMOTE_LIST.map((country, index) => (
                  <option key={country + index}>{country}</option>
                ))}
              </Select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <div className="lbl-wrp">
              <label className="ctrl-lbl" for="selectLocation">U.S. Location</label>
              <a aria-label="U.S. Location">
                <i className='fa fa-info-circle' onClick={showPopover} />
              </a>
            </div>
            {popover && <Popover />}
            <FormGroup type="text" placeholder="Enter city, state, or zip code" id='location' spacing />
            <FormCheck type="checkbox" label={["Open to candidates anywhere in U.S."]} labelBold spacing />
          </div>

          <div className="form-group">
            <div className="lbl-wrp">
              <label className="ctrl-lbl" for="inputTelecommutingLevel">International Location</label>
              <a aria-label="International Location">
                <i className='fa fa-info-circle' onClick={showPopover} />
              </a>
            </div>
            {popover && <Popover />}
            <div className="controls">
              <Select>
                {REMOTE_LIST.map((country, index) => (
                  <option key={country + index}>{country}</option>
                ))}
              </Select>
            </div>
            <FormCheck type="checkbox" label={["Open to candidates anywhere in world"]} labelBold />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <div className="lbl-wrp">
              <label className="ctrl-lbl" for="">Job Types</label>
              <a aria-label="Job Types">
                <i className='fa fa-info-circle' onClick={showPopover} />
              </a>
            </div>
            {popover && <Popover />}
            <div className="controls">
              <Select>
                {REMOTE_LIST.map((country, index) => (
                  <option key={country + index}>{country}</option>
                ))}
              </Select>
            </div>
          </div>

          <div className="form-group">
            <div className="lbl-wrp">
              <label className="ctrl-lbl" for="">Work Schedule</label>
              <a aria-label="Work Schedule">
                <i className='fa fa-info-circle' onClick={showPopover} />
              </a>
            </div>
            {popover && <Popover />}
            <div className="controls">
              <Select>
                {REMOTE_LIST.map((country, index) => (
                  <option key={country + index}>{country}</option>
                ))}
              </Select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <div className="lbl-wrp">
              <label className="ctrl-lbl" for="">Career Level</label>
              <a aria-label="Career Level">
                <i className='fa fa-info-circle' onClick={showPopover} />
              </a>
            </div>
            {popover && <Popover />}
            <div className="controls">
              <Select>
                {REMOTE_LIST.map((country, index) => (
                  <option key={country + index}>{country}</option>
                ))}
              </Select>
            </div>
          </div>

          <div className="form-group">
            <div className="lbl-wrp">
              <label className="ctrl-lbl" for="">Categories</label>
              <a aria-label="Categories">
                <i className='fa fa-info-circle' onClick={showPopover} />
              </a>
            </div>
            {popover && <Popover />}
            <div className="controls">
              <Select>
                {REMOTE_LIST.map((country, index) => (
                  <option key={country + index}>{country}</option>
                ))}
              </Select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <div className="lbl-wrp">
              <label className="ctrl-lbl" for="">Featured & Award-Winning Employers</label>
              <a aria-label="Featured & Award-Winning Employers">
                <i className='fa fa-info-circle' onClick={showPopover} />
              </a>
            </div>
            {popover && <Popover />}
            <div className="controls">
              <Select>
                {REMOTE_LIST.map((country, index) => (
                  <option key={country + index}>{country}</option>
                ))}
              </Select>
            </div>
          </div>

          <div className="form-group">
            <div className="lbl-wrp">
              <label className="ctrl-lbl" for="">Willing to Travel?</label>
              <a aria-label="Willing to Travel?">
                <i className='fa fa-info-circle' onClick={showPopover} />
              </a>
            </div>
            {popover && <Popover />}
            <div className="controls">
              <Select>
                {REMOTE_LIST.map((country, index) => (
                  <option key={country + index}>{country}</option>
                ))}
              </Select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <div className="lbl-wrp">
              <label className="ctrl-lbl" for="exact">Exclude Words</label>
              <a aria-label="Exclude Words">
                <i className='fa fa-info-circle' onClick={showPopover} />
              </a>
            </div>
            {popover && <Popover />}
            <FormGroup type="text" placeholder="Exclude results with these words" id='exclude' spacing />
          </div>
        </div>

        <div className="btn-wrap">
          <LinkBtn href="/newsletters" fWeight='500' widthNull={true}>Search for Jobs</LinkBtn>
        </div>
      </form>

    </SearchOptionMainWrap >
  );
};

export default SearchOptionMain;
