import React, {Component} from 'react';

export default function TextInputGroup(props) {

    return (

        <div className="form-group">
            <label className="text-left" htmlFor={props.name}>{props.label}</label>
            <input name={props.name} type={props.type} className="form-control"
                   value={props.value}
                   onChange={props.onChange}
            />
        </div>

    );

}
