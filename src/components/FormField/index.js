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
  label, type, name, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}`; /* Obs */
  const isTypeTextarea = type === 'textarea';
  const tag = isTypeTextarea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId} /* Obs */
      >
        <Input
          as={tag}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          hasValue={hasValue}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
        {
          hasSuggestions && (
            <datalist id={`suggestionFor_${fieldId}`}>
              {
              suggestions.map((suggestion) => (
                <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                  {suggestion}
                </option>
              ))
            }
            </datalist>
          )
        }
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};
export default FormField;
