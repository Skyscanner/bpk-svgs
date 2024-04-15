import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const hotelFlexibleSvg = (props: Props) => {
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
      <path d="M21.9 12.005h-.1a1 1 0 0 1-1-1l-.003-2.375h.003V6.394a1.3 1.3 0 0 0-.669-1.218l-1.947-.853a15.17 15.17 0 0 0-12.368 0l-1.947.853a1.31 1.31 0 0 0-.669 1.22v4.61a1 1 0 0 1-1 1h-.1A1.113 1.113 0 0 0 1 13.13v7.055a.82.82 0 0 0 1.626.136l.574-2.69h17.6l.575 2.69A.819.819 0 0 0 23 20.184V13.13a1.113 1.113 0 0 0-1.1-1.125m-15.9-2v-3a1 1 0 0 1 2 0v.84a5 5 0 0 1 7.157-.61 1 1 0 1 1-1.314 1.507 3 3 0 0 0-4.205.263H10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1m12 4a1 1 0 1 1-2 0v-.175a5 5 0 0 1-7.434.925 1 1 0 0 1 1.324-1.5 3 3 0 0 0 4.814-1.25H14a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1z" />
    </svg>
  );
};
export default hotelFlexibleSvg;
