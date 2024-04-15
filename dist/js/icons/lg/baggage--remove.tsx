import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const baggageRemoveSvg = (props: Props) => {
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
      <path d="M21.707 2.293a1 1 0 0 0-1.414 0l-2.45 2.45a1.8 1.8 0 0 0-.398-.584C16.547 3.279 14.693 2 12 2 9.297 2 7.312 3.29 6.457 4.227A1.8 1.8 0 0 0 6 5.455V6.5a.5.5 0 0 1-.5.5h-.532C3.88 7 3 7.933 3 9.083V18c0 .43.123.858.333 1.253l-1.04 1.04a1 1 0 1 0 1.414 1.414l1.04-1.04c-.032.032.054-.054 0 0L18.422 6.994c.025.004-.08-.007 0 0l3.286-3.287a1 1 0 0 0 0-1.414zM8.5 7a.5.5 0 0 1-.5-.5v-.583c0-.264.1-.52.306-.684C9.003 4.676 10.296 4 12 4c1.7 0 2.944.676 3.677 1.262a.9.9 0 0 1 .323.71V6.5a.5.5 0 0 1-.5.5zm.121 14a.5.5 0 0 1-.353-.854L19.766 8.648c.435-.435 1.179-.354 1.227.26q.007.086.007.175V18c0 1.5-1.5 3-3 3z" />
    </svg>
  );
};
export default baggageRemoveSvg;