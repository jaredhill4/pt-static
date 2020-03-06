// @flow

// Vendors
import React from 'react';

// Styles
import './example-component.scss';

// Types
type Props = {
  className: string
};

const ExampleComponent = ({ className, ...props }: Props) => (
  <div className={`example-component ${className}`}></div>
);

export default ExampleComponent;
