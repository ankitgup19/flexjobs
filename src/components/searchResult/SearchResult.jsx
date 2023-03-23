import React from "react";
import styled from "styled-components";

const SearchResult = (props) => {
  return (
    <Styled.Wrapper featured={props.featured}>
      {props.featured && (
        <span className="featured-job">
          <i className="fa fa-star"></i> Featured
        </span>
      )}
      <Styled.HeadWrap>
        <a className="job-title">{props.title}</a>
        <div className="job-age">
          {props.newjob && <span class="new-job">New!</span>}
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
    border: 1px solid #e5e5e5;
    padding: 1.6rem 2rem;
    color: #444;
    border-left: ${(props) => props.featured && "3px solid #FF532A"};
    .featured-job {
      color: #fe5329;
    }
  `,
  HeadWrap: styled.div`
    display: flex;
    justify-content: space-between;
    .job-title {
      color: #007cad;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
      &:hover {
        color: #23527c;
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
