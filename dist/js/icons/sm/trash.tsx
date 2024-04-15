import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const trashSvg = (props: Props) => {
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
      <path d="M7.5 2.842A.16.16 0 0 1 7.342 3H4.5a1.5 1.5 0 0 0 0 3h15a1.5 1.5 0 0 0 0-3h-2.89a.11.11 0 0 1-.11-.11.59.59 0 0 0-.364-.524A9.3 9.3 0 0 0 12 1.5a9.3 9.3 0 0 0-4.208.884.52.52 0 0 0-.292.458M18.415 7.5a1.036 1.036 0 0 1 1.081 1.083L18.51 19.5a3.37 3.37 0 0 1-3.254 3h-6.51a3.37 3.37 0 0 1-3.254-3L4.504 8.583A1.036 1.036 0 0 1 5.585 7.5z" />
    </svg>
  );
};
export default trashSvg;
