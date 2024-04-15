import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const cleanSvg = (props: Props) => {
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
      <path d="M8.378 4.523a.94.94 0 0 0-1.263.442.867.867 0 0 0 .415 1.13l4.97 2.39a1.84 1.84 0 0 1 .984 2.463l-.064.123a1.02 1.02 0 0 1-1.342.428.94.94 0 0 1-.468-1.24l.021-.044a.13.13 0 0 0-.055-.176l-.007-.004-4.98-2.253A2.745 2.745 0 0 1 5.277 4.21 2.69 2.69 0 0 1 9 2.792l6.625 3.057a2.9 2.9 0 0 1 1.568 1.872l2.035 9.617A.955.955 0 0 1 18.5 18.5a1.005 1.005 0 0 1-1.213-.696l-2.034-9.618a.97.97 0 0 0-.523-.624l-6.352-3.04zM15.5 20.5a1.075 1.075 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1.075 1.075 0 0 1-1-1" />
      <path d="M4.682 11.5A2.555 2.555 0 0 0 2.5 14.056v1.27a.69.69 0 0 0 .99.515 3.5 3.5 0 0 1 4.668 4.668.692.692 0 0 0 .516.991h3.644a2.155 2.155 0 0 0 2.182-2.127V18.31a6.836 6.836 0 0 0-6.545-6.81z" />
      <path d="M5 21.5A2.5 2.5 0 1 0 2.5 19 2.5 2.5 0 0 0 5 21.5" />
    </svg>
  );
};
export default cleanSvg;
