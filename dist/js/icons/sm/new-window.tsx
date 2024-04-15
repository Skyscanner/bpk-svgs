import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const newWindowSvg = (props: Props) => {
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
      <path d="M22.5 9a1.5 1.5 0 0 1-3 0V3a1.5 1.5 0 0 1 3 0z" />
      <path d="M22.5 3A1.5 1.5 0 0 1 21 4.5h-6a1.5 1.5 0 0 1 0-3h6A1.5 1.5 0 0 1 22.5 3" />
      <path d="M12.44 11.56a1.5 1.5 0 0 1 0-2.12l7.5-7.5a1.5 1.5 0 0 1 2.12 2.12l-7.5 7.5a1.5 1.5 0 0 1-2.12 0" />
      <path d="M7.5 6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3H15a3 3 0 0 0 3-3V15a1.5 1.5 0 0 1 3 0v1.5a6 6 0 0 1-6 6H7.5a6 6 0 0 1-6-6V9a6 6 0 0 1 6-6H9a1.5 1.5 0 0 1 0 3z" />
    </svg>
  );
};
export default newWindowSvg;
