import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const uploadSvg = (props: Props) => {
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
      <path
        d="M17.707 7.292a1 1 0 0 1-1.414 1.414L13 5.413v8.589a1 1 0 1 1-2 0V5.413L7.707 8.706a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0zM4 14a1 1 0 0 1 1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3a1 1 0 1 1 2 0v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default uploadSvg;
