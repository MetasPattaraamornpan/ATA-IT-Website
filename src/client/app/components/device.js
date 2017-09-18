import React from 'react';
import Responsive from 'react-responsive';

export const Desktop = ({ children }) => <Responsive minWidth={930} children={children} id="desktop" />;
export const Mobile = ({ children }) => <Responsive maxWidth={930} children={children} id="mobile"  />;
