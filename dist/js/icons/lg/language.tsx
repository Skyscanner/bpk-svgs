import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const languageSvg = (props: Props) => {
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
      <path d="m21.24 3.927-2.213-.757a21.7 21.7 0 0 0-14.054 0l-2.213.757A1.14 1.14 0 0 0 2 5.008v10.584a3.377 3.377 0 0 0 3.333 3.421h2.49a2 2 0 0 1 1.432.6l2.03 2.082a1 1 0 0 0 1.414.016l.016-.016 2.03-2.082a2 2 0 0 1 1.432-.6h2.49A3.377 3.377 0 0 0 22 15.592V5.009a1.14 1.14 0 0 0-.76-1.082M8.995 10.988a1 1 0 1 1-1-1 1 1 0 0 1 1 1m3 1a1 1 0 1 1 1-1 1 1 0 0 1-1.002.999zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1.004.999z" />
    </svg>
  );
};
export default languageSvg;
