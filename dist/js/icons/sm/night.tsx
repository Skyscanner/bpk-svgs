import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const nightSvg = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      width="1rem"
      height="1rem"
      fill={props.fill}
      {...props}
    >
      <path d="M15.328 15a7.86 7.86 0 0 1-6.33-6.328 8 8 0 0 1 1.9-6.751c.105-.211 0-.422-.212-.422a10.546 10.546 0 1 0 11.815 11.815c0-.211-.21-.422-.422-.211A8.24 8.24 0 0 1 15.33 15z" />
    </svg>
  );
};
export default nightSvg;
