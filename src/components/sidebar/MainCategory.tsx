import React, { ComponentProps } from 'react';
import classNames from 'classnames';

interface MainCategoryProps extends ComponentProps<'h3'> {}

const MainCategory = ({ children, className }: MainCategoryProps) => {
  return <h3 className={classNames('text-xl', `${className}`)}>{children}</h3>;
};

export default MainCategory;
