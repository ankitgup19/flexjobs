import styled from "styled-components";

export const FilterWrap = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .btn-group{
        position: relative;
        margin: 0 0 .4rem;
        &.active{
            .dropdown{
                display: block;
            }
        }
    }
    .reset-filter{
        font-size: 1.3rem;
        text-decoration: none;
        margin-left: 0.8rem;
        color: ${props => props.theme.colors.primaryLight};
        text-decoration: none;
        &:hover{
            color: ${props => props.theme.colors.primaryDark};
            text-decoration: underline;
        }
    }
`;

export const DropdownList = styled.div`
    display: none;
    position: absolute;
    top: 35px;
    max-height: 300px;
    overflow: auto;
    background-color: ${props => props.theme.colors.white};
    border-radius: 4px;
    width: 250px;
    padding: 15px;
    border: 1px solid rgba(0,0,0,0.15);
    z-index: 1;
    ul{
        padding: 0;
        margin: 0;
        list-style: none;
        font-size: 13px;
        li{
            a{
                display: flex;
                padding: 4px 0;
                color: ${props => props.theme.colors.primaryLight};
                text-decoration: none;
                &:hover{
                    color: #004f6d;
                    text-decoration: underline;
                    background-color: #e9ecef;
                }
            }
            ul{
                padding-left: 16px;
            }
        }
    }
`;

export const Checkbox = styled.input`
    margin: 0 7px 0 0;
`