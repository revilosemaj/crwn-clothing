import React from "react";

import {
    GroupContainer,
    Input,
    InputLabel
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...props }) => (
    <GroupContainer>
        <Input onChange={handleChange} {...props} />
        {
            label ? 
            (<InputLabel {...props}>
                {label}
            </InputLabel>)
            : null
        }
    </GroupContainer>
);

export default FormInput;