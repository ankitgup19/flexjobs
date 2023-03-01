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
    return (
        <div className = {`btn-group ${props.active ? "active" : ""}`}>
            {props.name && <Button onClick={props.onToggle}>{props.name}</Button>}
            {
                props.children && <DropdownList className="dropdown">{getFilterOptions(props.children, true)}</DropdownList>
            }
        </div>
    )
}

export default ButtonGroup