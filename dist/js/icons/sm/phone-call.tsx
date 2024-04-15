import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const phoneCallSvg = (props: Props) => {
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
      <path d="M14.079 15.703a1.02 1.02 0 0 1-.792-.14 17 17 0 0 1-2.673-2.177 17.2 17.2 0 0 1-2.178-2.673 1.02 1.02 0 0 1-.14-.794l.857-3.78a1.92 1.92 0 0 0-.428-1.817L6.393 1.99a2.31 2.31 0 0 0-2.972.11l-1.18.99a2.02 2.02 0 0 0-.716 1.869 21.17 21.17 0 0 0 5.836 11.68 21.2 21.2 0 0 0 11.679 5.835 2.02 2.02 0 0 0 1.871-.718l.987-1.18a2.304 2.304 0 0 0 .111-2.97l-2.331-2.332a1.92 1.92 0 0 0-1.817-.427z" />
    </svg>
  );
};
export default phoneCallSvg;
