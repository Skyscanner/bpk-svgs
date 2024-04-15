import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const accountFemaleSvg = (props: Props) => {
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
      <path d="M10.865 12h2.27a8.1 8.1 0 0 0 3.223-.614c.234-.117.15-.44-.046-.61a3.62 3.62 0 0 1-.744-2.63 8 8 0 0 1 .079-1.068 4 4 0 0 0-.08-1.808c-.454-1.575-1.296-1.766-2.27-1.46a2.682 2.682 0 0 0-4.54 1.284 10.1 10.1 0 0 0-.325 3.052 3.62 3.62 0 0 1-.744 2.63c-.197.17-.28.493-.046.61a8.1 8.1 0 0 0 3.223.614M11 9h2v.028a1 1 0 0 1-2 0zm9 8.25v.977A2.71 2.71 0 0 1 17.227 21H7.045A2.95 2.95 0 0 1 4 18.227v-.995a1.77 1.77 0 0 1 .99-1.634A16.9 16.9 0 0 1 11.972 14a17.3 17.3 0 0 1 7.016 1.6A1.78 1.78 0 0 1 20 17.25" />
    </svg>
  );
};
export default accountFemaleSvg;
