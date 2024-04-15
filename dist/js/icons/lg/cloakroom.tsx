import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const cloakroomSvg = (props: Props) => {
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
      <path d="M7.5 6.39A4.41 4.41 0 0 1 12 2a4.41 4.41 0 0 1 4.5 4.39 4.7 4.7 0 0 1-1.63 3.482A6 6 0 0 1 13 11.03v1.703a1 1 0 0 1-2 0v-2.419a.995.995 0 0 1 .858-.986 3.56 3.56 0 0 0 1.647-.882 2.77 2.77 0 0 0 .994-2.055A2.43 2.43 0 0 0 12 3.952a2.43 2.43 0 0 0-2.5 2.44 1 1 0 0 1-2-.001z" />
      <path d="m12 13.783 7.887 6.25a.6.6 0 0 1-.147.016H4.26q-.075 0-.148-.016zm0-2.515L2.735 18.61C1.22 19.813 2.202 22 4.26 22h15.48c2.057 0 3.041-2.187 1.524-3.39z" />
      <path d="M5.844 16.146 12 11.268l6.155 4.878z" />
    </svg>
  );
};
export default cloakroomSvg;