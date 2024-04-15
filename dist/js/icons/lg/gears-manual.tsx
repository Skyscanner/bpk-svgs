import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const gearsManualSvg = (props: Props) => {
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
      <path d="M9.5 5a3 3 0 0 1-1.674 2.692.56.56 0 0 0-.326.49V11h8a1 1 0 0 0 1-1V8.184a.56.56 0 0 0-.326-.491 3 3 0 1 1 2.652 0 .56.56 0 0 0-.326.49V10a3 3 0 0 1-3 3h-8v2.817a.56.56 0 0 0 .326.49 3 3 0 1 1-2.652 0 .56.56 0 0 0 .326-.49V8.183a.56.56 0 0 0-.326-.49A3 3 0 1 1 9.5 5" />
    </svg>
  );
};
export default gearsManualSvg;
