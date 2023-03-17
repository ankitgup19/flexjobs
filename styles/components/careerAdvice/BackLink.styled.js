import styled from "styled-components";

const Styled = {
    BackLinkWrap: styled.div`
        padding: .9rem 1.6rem;
        background-color: #e7edf3;
    `,
    BackLink: styled.a`
        color: ${(props) => props.theme.colors.primaryLight};
        text-decoration: none;
        &:hover {
          color: ${(props) => props.theme.colors.primaryDark};
          text-decoration: underline;
        }
        .fa {
            margin: 0 .5rem 0 0;
        }
    `,
}

export default Styled;