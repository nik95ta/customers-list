import React from 'react';

interface TextAreaProps {
  value: string;
  placeholder: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea: React.FC<TextAreaProps> = ({ value, name, onChange, placeholder }) => (
  <textarea name={name} placeholder={placeholder} value={value} onChange={onChange} />
);

export default TextArea;
