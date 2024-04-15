import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const singleBookingSvg = (props: Props) => {
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
      <path d="M23.258 9.093A.925.925 0 0 0 24 8.25V4.5a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v3.75a.925.925 0 0 0 .742.843 3 3 0 0 1 2.162 2.162 3 3 0 0 1-2.162 3.652.925.925 0 0 0-.742.843v3.75a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-3.75a.925.925 0 0 0-.742-.843 3.001 3.001 0 0 1 0-5.814M15 16.417a1.502 1.502 0 1 1-3-.001v-6.41l-2.073 1.716a1.45 1.45 0 0 1-2.106-.269 1.644 1.644 0 0 1 .254-2.223l3.286-2.719A2.243 2.243 0 0 1 15 8.379z" />
    </svg>
  );
};
export default singleBookingSvg;
