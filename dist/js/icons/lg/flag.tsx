import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const flagSvg = (props: Props) => {
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
      <path d="M5 2a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1m3.105 10.571c-.432.135-1.105-.23-1.105-.682V3.654a1.25 1.25 0 0 1 .676-1.21A6.4 6.4 0 0 1 10.25 2a8.2 8.2 0 0 1 3.25.857 8.2 8.2 0 0 0 3.25.857 7.2 7.2 0 0 0 2.145-.285c.432-.135 1.105.23 1.105.682v8.235a1.25 1.25 0 0 1-.676 1.21A6.4 6.4 0 0 1 16.75 14a8.2 8.2 0 0 1-3.25-.857 8.2 8.2 0 0 0-3.25-.857 7.2 7.2 0 0 0-2.145.285" />
    </svg>
  );
};
export default flagSvg;
