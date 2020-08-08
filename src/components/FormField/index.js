import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 70px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: black;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 8px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: whitesmoke;
  color: black;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 14px;
  
  outline: 0;
  border: 4px solid yellow;
  border-top: 4px solid yellow;
  border-bottom: 4px solid yellow;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: #53585D;
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
   /*tag de template string*/
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
`;

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const isTypeTextarea = type === 'textarea';
  const tag = isTypeTextarea ? 'textarea' : 'input';
  
  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={tag}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default FormField;
