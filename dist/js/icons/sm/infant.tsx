import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const infantSvg = (props: Props) => {
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
      <path d="M12 5.25a2.6 2.6 0 0 0-1.2.274.68.68 0 0 0-.3.626v2.262A1.377 1.377 0 0 0 12 9.75a1.377 1.377 0 0 0 1.5-1.338V6.15a.69.69 0 0 0-.304-.62A2.55 2.55 0 0 0 12 5.25" />
      <path d="M16.663 8.89a.783.783 0 0 1 1.107-.002l.001.001a.79.79 0 0 1 0 1.113l-1.759 1.763a5.3 5.3 0 0 0-1.531 3.32l-.429 2.286a1.5 1.5 0 0 1-1.495 1.38h-1.113a1.5 1.5 0 0 1-1.495-1.379l-.43-2.288a5.3 5.3 0 0 0-1.531-3.319l-1.759-1.763a.785.785 0 0 1 1.107-1.114l.001.001 2.314 2.32A3.16 3.16 0 0 0 12 12a3.16 3.16 0 0 0 2.35-.79z" />
    </svg>
  );
};
export default infantSvg;
