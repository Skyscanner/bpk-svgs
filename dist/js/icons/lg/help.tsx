import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const helpSvg = (props: Props) => {
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
      <path d="M12.02 2a5.8 5.8 0 0 0-4.847 2.1A5.9 5.9 0 0 0 6 7.644a1 1 0 1 0 2 0 3.9 3.9 0 0 1 .756-2.32A3.81 3.81 0 0 1 12.02 4a3.66 3.66 0 0 1 3.773 2.432 3.84 3.84 0 0 1-.895 3.967 11 11 0 0 1-.88.704l-.099.074a12 12 0 0 0-1.27 1.056A5.09 5.09 0 0 0 11 16v1a1 1 0 0 0 2 0v-1a3.1 3.1 0 0 1 1.05-2.34 10 10 0 0 1 1.068-.883l.111-.083a12 12 0 0 0 1.043-.843 5.84 5.84 0 0 0 1.414-6.063A5.65 5.65 0 0 0 12.02 2M13 21a1 1 0 1 1-1-1 1 1 0 0 1 1 1" />
    </svg>
  );
};
export default helpSvg;
