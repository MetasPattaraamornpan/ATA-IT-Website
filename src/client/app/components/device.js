import React from 'react';
import Responsive from 'react-responsive';

export const Desktop = ({ children }) => <Responsive minWidth={950} children={children} />;
export const Mobile = ({ children }) => <Responsive maxWidth={950} children={children} />;
