import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const priceTagSvg = (props: Props) => {
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
      <path d="M21 6.908A3.91 3.91 0 0 0 17.092 3H12.62a3 3 0 0 0-2.12.878l-6.623 6.624a2.997 2.997 0 0 0 0 4.238l5.382 5.382a2.997 2.997 0 0 0 4.238 0l6.624-6.624A3 3 0 0 0 21 11.38V6.91zM16.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </svg>
  );
};
export default priceTagSvg;
