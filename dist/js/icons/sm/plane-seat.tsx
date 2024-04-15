import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const planeSeatSvg = (props: Props) => {
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
      <path d="M8.657.045A.87.87 0 0 0 7.5.829v2.843a.853.853 0 0 0 .875.828h.375a1.706 1.706 0 0 0 1.75-1.657V1.23a.83.83 0 0 0-.593-.784zM6 7.5a1.5 1.5 0 1 0-3 0v6a6 6 0 0 0 6 6h3.75a.75.75 0 1 1 0 1.5H7.5a1.5 1.5 0 0 0 0 3h5.25a3.75 3.75 0 1 0 0-7.5H9a3 3 0 0 1-3-3z" />
      <path d="M14.25 9H10.5v3h2.25A8.25 8.25 0 0 1 21 20.25V21a1.5 1.5 0 1 1-3 0v-.75A5.25 5.25 0 0 0 12.75 15h-3a2.25 2.25 0 0 1-2.25-2.25v-4.8A1.95 1.95 0 0 1 9.45 6h4.8a1.5 1.5 0 0 1 0 3" />
    </svg>
  );
};
export default planeSeatSvg;
