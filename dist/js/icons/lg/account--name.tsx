import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const accountNameSvg = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      width="1.5rem"
      height="1.5rem"
      fill={props.fill}
      {...props}
    >
      <path d="M10 12c1.5 0 3-.8 3-2.378V4.6a1.18 1.18 0 0 0-.608-1.102A5.6 5.6 0 0 0 10 3a5.8 5.8 0 0 0-2.428.499A1.13 1.13 0 0 0 7 4.568v5.054C7 11.2 8.5 12 10 12M9 9h2v.028a1 1 0 0 1-2 0zm9 8.25v.977A2.71 2.71 0 0 1 15.227 21H5.045A2.95 2.95 0 0 1 2 18.227v-.995a1.77 1.77 0 0 1 .99-1.634A16.9 16.9 0 0 1 9.972 14a17.3 17.3 0 0 1 7.016 1.6A1.78 1.78 0 0 1 18 17.25M22 7a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1m-1 4a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1" />
    </svg>
  );
};
export default accountNameSvg;
