// @flow

// Vendors
import React, { type Element, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';

// Data
import { getPageData } from '../../data';

// Styles
import './page.scss';

// Types
type Props = {
  data: string,
  slug: string,
  children: Element<any>,
  component: Function
};

const Page = ({
  data: model,
  component: PageComponent,
  children,
  ...props
}: Props) => {
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    // Get the page data
    const data = getPageData(model);
    if (data) setPageData(data);
  }, [model]);

  const className = classnames('page', {
    [`page--${pageData.className}`]: pageData.className
  });

  // Reset the the document scroll position
  if (document.documentElement) document.documentElement.scrollTop = 0;

  if (!PageComponent && !children) {
    console.error('Page: `component` prop or `children` must be provided.');
    return null;
  }

  return (
    <>
      <Helmet>
        <body className={className} />
        <title>{pageData.title}</title>
      </Helmet>

      <main className="page__main">
        {PageComponent ? (
          <PageComponent {...props} pageData={pageData} />
        ) : (
          React.cloneElement(children, { ...props, pageData })
        )}
      </main>
    </>
  );
};

export default Page;
