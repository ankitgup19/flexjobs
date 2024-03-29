import styled from "styled-components";

export const Styledform = styled.form`
    margin: 5rem 0 0;
    background: right 0 url(${props => props.passwordRecovery ? 'https://www.flexjobs.com/images/bg-password.jpg' : 'https://www.flexjobs.com/images/bg-login.jpg'}) no-repeat;
    background-size: contain;
    padding: 0 0 4.8rem;
`;
export const HeadingLogin = styled.div`
    margin-bottom: 1.6rem;
    align-items: center;
    justify-content: center;
    display: flex;
`;
export const Heading = styled.h2`
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSize.xl};
    font-weight: 500;
    margin: 0;
`;
export const IconLogin = styled.img`
    margin: 0 1.2rem;
`;
export const LoginWrap = styled.div`
    box-shadow: 0 3px 6px rgb(0 0 0 / 25%);
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: ${props => props.theme.colors.white};
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,0.125);
    border-radius: 0.25rem;
    flex: 0 0 auto;
    width: 50%;
    text-align: center;
    padding: 4.8rem;
`;

export const LoginBtn = styled.button`
    background-color: ${props => props.theme.colors.secondary};
    border: 0;
    padding: 1rem 1.2rem;
    margin: 0 0 1.6rem;
    font-size: ${props => props.theme.fontSize.sm};
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    border-radius: 4px;
`;
export const Link = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.primaryLight};
    &:hover{
        text-decoration: underline;
    }
`;
export const P = styled.p`
    margin: ${props => props.lastChild ? '0' : '0 0 1.6rem'};
`;
export const ForgotPw = styled.p`
    margin: 0;
    display: flex;
    margin: 0 0 1.6rem;
`;
export const AlertDanger = styled.div`
    background-color: ${props => props.theme.colors.dangerLighter};
    border: 1px solid ${props => props.theme.colors.dangerLight};
    color: ${props => props.theme.colors.danger};
    border-radius: 4px;
    padding: 1.6rem;
    margin: 0 0 1.6rem;
    display: flex;
`;
export const AlertDangerP = styled.p`
    margin: 0;
`