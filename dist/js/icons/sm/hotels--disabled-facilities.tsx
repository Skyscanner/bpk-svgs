import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const hotelsDisabledFacilitiesSvg = (props: Props) => {
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
      <path d="M13.5 2.382a.66.66 0 0 1 .286-.601A2.6 2.6 0 0 1 15 1.5a2.56 2.56 0 0 1 1.196.28.69.69 0 0 1 .304.62v2.262A1.377 1.377 0 0 1 15 6a1.377 1.377 0 0 1-1.5-1.338zM16.25 22.5a1.338 1.338 0 0 1-1.148-1.851 6.75 6.75 0 0 0-.001-5.301 1.335 1.335 0 0 1 1.146-1.848 3.134 3.134 0 0 1 3.253 3v5a1.045 1.045 0 0 1-1.084 1zm-7.468-9.464a1 1 0 0 0 .234.313.8.8 0 0 0 .249.159 4.5 4.5 0 1 1-2.958.887 1.63 1.63 0 0 0 .404-1.357l-.733-3.85a.73.73 0 0 1 .317-.737c.192-.135.41-.307.65-.496 1.105-.87 2.683-2.11 4.431-1.94a2.125 2.125 0 0 1 1.686 2.81l-.843 2.568a1.1 1.1 0 0 1-1.284.708 7 7 0 0 0-1.686-.144.596.596 0 0 0-.532.726z" />
    </svg>
  );
};
export default hotelsDisabledFacilitiesSvg;
