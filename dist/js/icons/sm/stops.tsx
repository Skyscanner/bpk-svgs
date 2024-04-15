import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const stopsSvg = (props: Props) => {
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
      <path d="M11.25 7.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5m-3.588-.866a1.5 1.5 0 0 1-.358 2.09C5.597 9.933 4.5 11.89 4.5 14.092V19.5a1.5 1.5 0 1 1-3 0v-5.41c0-3.227 1.614-6.076 4.071-7.814a1.5 1.5 0 0 1 2.091.358m7.176 0a1.5 1.5 0 0 1 2.09-.359C19.387 8.014 21 10.864 21 14.091v1.788l.44-.44a1.5 1.5 0 0 1 2.12 2.122l-3 3a1.5 1.5 0 0 1-2.12 0l-3-3a1.5 1.5 0 0 1 2.12-2.122l.44.44V14.09c0-2.201-1.097-4.159-2.804-5.366a1.5 1.5 0 0 1-.358-2.091z" />
    </svg>
  );
};
export default stopsSvg;
