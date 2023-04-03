import React from "react";
import styled, {css} from "styled-components";

const SearchResult = (props) => {
  const jobClick = (e) => {
    props.showDetail();
    props.setActiveIndex(e.currentTarget.getAttribute("data-index"));
  }

  return (
    <Styled.Wrapper featured={props.featured} onClick={jobClick} isActive={props.isActive} data-index={props.index}>
      {props.featured && (
        <span className="featured-job">
          <i className="fa fa-star"></i> Featured
        </span>
      )}
      <Styled.HeadWrap>
        <a className="job-title">{props.title}</a>
        <div className="job-age">
          {props.newjob && <span className="new-job">New!</span>}
          <span>{props.age.join(" ")}</span>
        </div>
      </Styled.HeadWrap>
      <Styled.MiddleWrap>
        <Styled.TagsWrap>
          {props.tags.map((tag) => (
            <li className="tag-name">{tag}</li>
          ))}
        </Styled.TagsWrap>
        <span className="job-locations">
          {props.locations.length > 1
            ? props.locations.join(", ")
            : props.locations}
        </span>
        <span className="icon-wrap">
          <i
            className="fa fa-map-marker"
            title="Candidates need to be able to work in the City or State specified"
          ></i>
        </span>
      </Styled.MiddleWrap>
      <p>{props.description}</p>
      <Styled.BottomWrap>
        {props.accolades.map((accolade) => (
          <img
            src={accolade.imgUrl}
            alt={accolade.title}
            title={accolade.title}
            className="accolades-img"
          />
        ))}
      </Styled.BottomWrap>
    </Styled.Wrapper>
  );
};

export default SearchResult;

const Styled = {
  Wrapper: styled.div`
    border: ${props => props.isActive ? "2px solid #00506d" : "1px solid #e5e5e5"};
    padding: ${props => props.isActive ? "1.5rem 1.9rem" : "1.6rem 2rem"};
    color: #444;
    border-left: ${(props) => props.featured && "3px solid #FF532A"};
    cursor: pointer;
    position: relative;
    ${props => props.isActive && css`
      border-left: 2px solid #00506d;
      &::before {
        content: '';
        position: absolute;
        top: calc(50% - 22px);
        left: 100%;
        border-style: solid;
        border-width: 15px 0 16px 16px;
        border-color: transparent transparent transparent #00506d;
        display: block;
        width: 0;
        z-index: 1;
        color: #fff;
      }
      &::after {
          content: '';
          position: absolute;
          top: calc(50% - 20px);
          left: 100%;
          border-style: solid;
          border-width: 13px 0 13px 14px;
          border-color: transparent transparent transparent #fff;
          display: block;
          width: 0;
          z-index: 1;
          color: #fff;
      }
    `}
    .featured-job {
      color: #fe5329;
    }
  `,
  HeadWrap: styled.div`
    display: flex;
    justify-content: space-between;
    .job-title {
      color: ${props => props.theme.colors.primaryLight};
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
      &:hover {
        color: ${props => props.theme.colors.primaryDark};
        text-decoration: underline;
      }
    }
    .job-age {
      font-size: 1.4rem;
      .new-job {
        color: #fe6843;
        font-weight: 500;
        padding-right: 0.8rem;
      }
    }
  `,
  MiddleWrap: styled.div`
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
    .job-locations {
      padding-left: 1.2rem;
    }
    .icon-wrap {
      padding-left: 0.8rem;
      color: #798f9d;
    }
  `,
  TagsWrap: styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    .tag-name {
      background: #e8edf1;
      padding: 0.5rem 0.8rem;
      margin-right: 1rem;
    }
  `,
  BottomWrap: styled.div`
    display: flex;
    gap: 4px;
    .accolades-img {
      width: 3.2rem;
      height: 3.2rem;
    }
  `,
};
