import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const trainSvg = (props: Props) => {
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
      <path d="M21.805 11.166 15.45 3.54A1.5 1.5 0 0 0 14.297 3H3a1.5 1.5 0 0 0-1.5 1.5V15A1.5 1.5 0 0 0 3 16.5h10.5a3 3 0 0 1 3 3A1.5 1.5 0 0 0 18 21h3a1.5 1.5 0 0 0 1.5-1.5v-6.414a3 3 0 0 0-.695-1.92M9 9.75a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3A.75.75 0 0 1 5.25 6h3a.75.75 0 0 1 .75.75zm7.129.576a.75.75 0 0 1-.48.174H12.75a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h.399a.75.75 0 0 1 .576.27l2.5 3a.75.75 0 0 1-.096 1.056M15 19.5a1.5 1.5 0 0 1-1.5 1.5H3a1.5 1.5 0 0 1 0-3h10.5a1.5 1.5 0 0 1 1.5 1.5" />
    </svg>
  );
};
export default trainSvg;
