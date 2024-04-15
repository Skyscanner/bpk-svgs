import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const babyCarriageSvg = (props: Props) => {
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
      <path d="M21.5 9.988a.457.457 0 0 0 .47-.499c-.374-3.218-4.21-7.16-6.986-7.487a.45.45 0 0 0-.473.323l-2.296 7.006a.5.5 0 0 0 .475.657zM10 19.998a2.001 2.001 0 0 1-4.002.001A2.001 2.001 0 1 1 10 19.997zm7 2.001a2.001 2.001 0 1 0-2.002-2A2 2 0 0 0 17 22zM2.253 4.32a1 1 0 0 1 1.41-.084A7.9 7.9 0 0 1 5.11 6.03 5.9 5.9 0 0 1 6 8.987a1 1 0 0 1-2 0 3.9 3.9 0 0 0-.61-1.937 5.9 5.9 0 0 0-1.054-1.319 1 1 0 0 1-.083-1.413zm2.414 6.67a.667.667 0 0 0-.667.667 5.336 5.336 0 0 0 5.333 5.338h7.334A5.336 5.336 0 0 0 22 11.656a.667.667 0 0 0-.667-.667z" />
    </svg>
  );
};
export default babyCarriageSvg;
