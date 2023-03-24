import styled from "styled-components";

export const BlogRecommendedJobsUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
export const BlogRecommendedJobsLi = styled.li`
    padding: 0.8rem;
    border-bottom: 1px solid rgba(0,0,0,0.125);
    .icn-us, .icn-world, .icn-canada {
        width: 16px;
        height: 14px;
        margin: 0 2px;
        display: inline-block;
        position: relative;
        top: 2px;
    }
    .icn-us {
        background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iMTRweCIgaGVpZ2h0PSIxMS44MTNweCIgdmlld0JveD0iMCAwIDE0IDExLjgxMyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTQgMTEuODEzIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHJlY3QgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjE0IiBoZWlnaHQ9IjExIi8+CjxyZWN0IGZpbGw9IiNFQTA5MjAiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxIi8+CjxyZWN0IHk9IjIiIGZpbGw9IiNFQTA5MjAiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxIi8+CjxyZWN0IHk9IjQiIGZpbGw9IiNFQTA5MjAiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxIi8+CjxyZWN0IHk9IjYiIGZpbGw9IiNFQTA5MjAiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxIi8+CjxyZWN0IHk9IjgiIGZpbGw9IiNFQTA5MjAiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxIi8+CjxyZWN0IHk9IjEwIiBmaWxsPSIjRUEwOTIwIiB3aWR0aD0iMTQiIGhlaWdodD0iMSIvPgo8cmVjdCBmaWxsPSIjMEUwRTZEIiB3aWR0aD0iOCIgaGVpZ2h0PSI2Ljk1OCIvPgo8L3N2Zz4=) no-repeat;
    }
    &:last-child{
        border: none;
    }
`;
export const JobDetail = styled.div`
    display: flex;
`;
export const JobLink = styled.a`
    color: ${props => props.theme.colors.primaryLight};
    outline: none;
    text-decoration: none;
    font-weight: 600;
    line-height: 2.4rem;
    flex: 1 0 0%;
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.primaryDark};
        text-decoration: underline;
    }
`;
export const JobDate = styled.div`
    flex: 0 0 auto;
    width: auto;
    color: #6c757d;
    font-size: ${props => props.theme.fontSize.xs};
`;
export const JobTagWrap = styled.div`
    margin: .6rem 0;
`;
export const JobTag = styled.span`
    background: #e8edf1;
    padding: .3rem .5rem;
    font-size: ${props => props.theme.fontSize.xxs};
    color: #000;
    margin-right: .8rem;
`;
export const JobLocation = styled.div`
    color: #818181;
    font-size: ${props => props.theme.fontSize.xxs};
    .fa-map-marker {
        margin: 0 .4rem 0 0;
        font-size: 1.1rem;
    }
`