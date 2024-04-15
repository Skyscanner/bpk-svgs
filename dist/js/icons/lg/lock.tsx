import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const lockSvg = (props: Props) => {
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
      <path d="m19.392 10.281-1.138-.324A.57.57 0 0 1 18 9.5v-1C18 4.818 15.534 2 12 2S6 4.818 6 8.5v1a.57.57 0 0 1-.254.457l-1.138.324A.78.78 0 0 0 4 11v8a3.226 3.226 0 0 0 3 3h10a3.226 3.226 0 0 0 3-3v-8a.78.78 0 0 0-.608-.719M14 16.602A1.56 1.56 0 0 1 12.322 18h-.644A1.557 1.557 0 0 1 10 16.602v-2.204A1.557 1.557 0 0 1 11.678 13h.644A1.56 1.56 0 0 1 14 14.398zm2-7.213za20.8 20.8 0 0 0-8 0v-.852A4.3 4.3 0 0 1 12 4a4.3 4.3 0 0 1 4 4.537z" />
    </svg>
  );
};
export default lockSvg;
