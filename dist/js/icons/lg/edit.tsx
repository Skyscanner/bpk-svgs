import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const editSvg = (props: Props) => {
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
      <path d="m13.893 5.066 5.04 5.04-9.898 9.9a2.24 2.24 0 0 1-.995.577l-5.096 1.39a.747.747 0 0 1-.917-.918l1.39-5.095a2.24 2.24 0 0 1 .577-.995zm7.063-2.022a3.564 3.564 0 0 1 0 5.04l-.966.966-5.041-5.04.966-.966a3.564 3.564 0 0 1 5.04 0z" />
    </svg>
  );
};
export default editSvg;
