import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const baggageCrossSvg = (props: Props) => {
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
      <path d="M6 6.5a.5.5 0 0 1-.5.5h-.532C3.88 7 3 7.933 3 9.083V18c0 1.5 1.5 3 3 3h12c1.5 0 3-1.5 3-3V9.083C21 7.933 20.119 7 19.032 7H18.5a.5.5 0 0 1-.5-.5v-.985a1.9 1.9 0 0 0-.555-1.356C16.547 3.279 14.693 2 12 2 9.297 2 7.312 3.29 6.457 4.227A1.8 1.8 0 0 0 6 5.455zm2 0v-.583c0-.264.1-.52.306-.684C9.003 4.676 10.296 4 12 4c1.7 0 2.944.676 3.677 1.262a.9.9 0 0 1 .323.71V6.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5m5.36 4.781a.961.961 0 0 1 1.359 1.36L13.359 14l1.36 1.36a.961.961 0 0 1-1.36 1.358L12 15.36l-1.36 1.36a.961.961 0 0 1-1.358-1.36L10.64 14l-1.36-1.36a.961.961 0 0 1 1.36-1.359l1.36 1.36z" />
    </svg>
  );
};
export default baggageCrossSvg;
