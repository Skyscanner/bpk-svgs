import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const accountIdCardSvg = (props: Props) => {
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
      <path d="M18.922 2H5a3.226 3.226 0 0 0-3 3v13.768A3.27 3.27 0 0 0 5 22h14a3.226 3.226 0 0 0 3-3V5a3.24 3.24 0 0 0-3.078-3M8 7.858A.88.88 0 0 1 8.897 7h1.206a.88.88 0 0 1 .897.858v1.707a1.501 1.501 0 0 1-3 0zm6 7.557A1.537 1.537 0 0 1 12.44 17H6.713A1.67 1.67 0 0 1 5 15.415v-.653a.89.89 0 0 1 .487-.815A9.4 9.4 0 0 1 9.484 13a9.65 9.65 0 0 1 4.017.947.9.9 0 0 1 .499.825zM18.5 11h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1m0-2h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1" />
    </svg>
  );
};
export default accountIdCardSvg;
