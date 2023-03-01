import styled from "styled-components";

export const FilterWrap = styled.div`
    display: flex;
    .btn-group{
        position: relative;
        &.active{
            .dropdown{
                display: block;
            }
        }
    }
`

export const Button = styled.button`
    background-color: #fff;
    border: 1px solid #ccc;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    padding: 6px 12px;
    color: #212529;
    border-radius: 4px;
    margin-right: 3px;
    cursor: pointer;
    display: flex;
    align-items: center;
    &::after{
        content: "";
        border-top: 4px solid #212529;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        display: flex;
        margin-left: 3px;
    }
`

export const DropdownList = styled.div`
    display: none;
    position: absolute;
    top: 35px;
    max-height: 300px;
    overflow: auto;
    background-color: #fff;
    border-radius: 4px;
    width: 250px;
    padding: 15px;
    border: 1px solid rgba(0,0,0,0.15);
    ul{
        padding: 0;
        margin: 0;
        list-style: none;
        font-size: 13px;
        li{
            a{
                display: flex;
                padding: 4px 0;
                color: #007CAD;
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
`

export const Checkbox = styled.input`
    margin: 0 7px 0 0;
`