import React from 'react';
import classnames from 'classnames';
export default function TextInputGroup(props) {

    return (

        <div className="form-group">
            <label className="text-left" htmlFor={props.name}>{props.label}</label>
            <input name={props.name}
                   type={props.type}
                   className={classnames("form-control",{
                       'is-invalid': props.error,
                   })}
                   value={props.value}
                   onChange={props.onChange}
            />
            <div className="invalid-feedback">{props.error}</div>
        </div>

    );

}
