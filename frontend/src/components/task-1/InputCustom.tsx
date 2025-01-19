import type { ChangeEvent } from 'react';
import React from 'react';

type InputCustomProps = {
  label: string;
  value: string;
  setValue: (value: string) => void;
  type: string;
  [key: string]: unknown;
};

export default function InputCustom({
  label,
  value,
  setValue,
  type,
  ...props
}: InputCustomProps): React.JSX.Element {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };
  return (
    <label>
      {label}
      <input {...props} type={type} value={value} onChange={onChangeHandler} />
    </label>
  );
}
