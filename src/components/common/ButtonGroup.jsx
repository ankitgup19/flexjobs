import React, { useEffect, useState } from "react";
import { Button, DropdownList, Checkbox } from "../../../styles/components/searchResults/Filters.styles";

const getFilterOptions = (filters, child) => {
    return (
        <ul>
            {
                filters.map(item => (
                    <li>
                        { child && 
                            <a href="/">
                                <Checkbox type="checkbox"/>
                                {item.name}
                            </a> 
                        }
                        { item.children && getFilterOptions(item.children, true)}
                    </li>
                ))
            }
        </ul>
    )
}

const ButtonGroup = (props) => {
    
    const isVisible = (e) => {
        if(e.target.parentNode.classList.contains("active")){
            e.target.parentNode.classList.remove("active");
        }else{
            document.querySelectorAll(".btn-group").forEach((elem)=>{
                elem.classList.remove("active");
            })
            e.target.parentNode.classList.add("active");
        }
    }

    return (
        <div class="btn-group">
            {props.name && <Button onClick={(e) => isVisible(e) }>{props.name}</Button>}
            {
                props.children && <DropdownList className="dropdown">{getFilterOptions(props.children, true)}</DropdownList>
            }
        </div>
    )
}

export default ButtonGroup