import React from 'react';
import classnames from 'classnames';
export default function TextInputGroup(props) {
    const {name, type, label, error, value, onChange} = props;
    return (

        <div className="form-group">
            <label className="text-left" htmlFor={name}>{label}</label>
            <input name={name}
                   type={type}
                   className={classnames("form-control",{
                       'is-invalid': error,
                   })}
                   value={value}
                   onChange={onChange}
            />
            <div className="invalid-feedback">{error}</div>
        </div>

    );

}
