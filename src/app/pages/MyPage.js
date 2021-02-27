import React from 'react';
import { useSubheader } from '../../_metronic/layout';

export const MyPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle('This is a custom page');

  return <>My Page</>;
};
