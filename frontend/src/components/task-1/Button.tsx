import React from 'react';

type ButtonProps = {
  title: string;
  onClick: (value?) => void;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  title,
  onClick,
  disabled,
  className,
}: ButtonProps): React.JSX.Element {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {title}
    </button>
  );
}
