import React from "react";
import "../../css/style.css"
const SingleSelect = (props) => {
    return (
        <select className="select-class" onChange={(e) => {
            props.onChange(e);
          }}>
            <option value={null}>{props?.label}</option>
            {props?.options?.map((optionItem, index) => {
                return (
                    <option value={optionItem.key} key={index}>{optionItem.value}</option>
                )
            })}
        </select>
    )
}

export default SingleSelect;