// Vendors
import React from 'react';
import classnames from 'classnames';

// Types
type Props = {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full',
  className: string
};

// TODO: Consider importing styles, as well.

const Container = ({ size = 'lg', className, ...props }: Props) => (
  <div
    className={classnames(
      'container',
      { [`container--${size}`]: size },
      className
    )}
    {...props}
  />
);

export default Container;
