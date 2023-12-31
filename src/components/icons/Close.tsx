import React, { ComponentProps } from 'react';
import classNames from 'classnames';

interface IconProps extends ComponentProps<'svg'> {}

const CloseIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={classNames('h-5 w-5', `${className}`)}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  );
};

export default CloseIcon;
