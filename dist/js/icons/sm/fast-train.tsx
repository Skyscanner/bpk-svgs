import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const fastTrainSvg = (props: Props) => {
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
      <path d="M2.98 3h5.333a7.33 7.33 0 0 1 3.81 1.069l8.94 5.812a3.023 3.023 0 0 1 .426 4.83L19.51 16.5a1.27 1.27 0 0 0 0 1.87l.152.193A1.502 1.502 0 0 1 18.506 21H12a1.507 1.507 0 0 1-1.5-1.5 3.226 3.226 0 0 0-3-3H2.98A1.49 1.49 0 0 1 1.5 15v-3a1.49 1.49 0 0 1 1.48-1.5h8.124a1.49 1.49 0 0 0 1.48-1.5 1.49 1.49 0 0 0-1.48-1.5H2.98A1.49 1.49 0 0 1 1.5 6V4.5A1.49 1.49 0 0 1 2.98 3" />
      <path d="M3 18a1.5 1.5 0 0 0 0 3h4.5a1.5 1.5 0 0 0 0-3z" />
    </svg>
  );
};
export default fastTrainSvg;
