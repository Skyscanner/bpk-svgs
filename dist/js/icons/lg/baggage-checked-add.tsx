import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const baggageCheckedAddSvg = (props: Props) => {
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
      <path d="M6 2.498A1.5 1.5 0 0 1 7.5 1h3A1.5 1.5 0 0 1 12 2.5V5h1a2 2 0 0 1 2 2v4.871a.26.26 0 0 1-.208.25 6.002 6.002 0 0 0-4.193 8.496c.085.174-.037.383-.23.383H7v1a1 1 0 1 1-2 0v-1a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1zm1.5.002A.5.5 0 0 0 7 3v2h4V3a.5.5 0 0 0-.5-.5zm13.501 15.501A5 5 0 1 1 11 18a5 5 0 0 1 10.001.001m-2.001 0a1 1 0 0 0-1-1h-1v-1a1 1 0 1 0-2 0v1h-1A1 1 0 0 0 14 19h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 0 0 1-1Z" />
    </svg>
  );
};
export default baggageCheckedAddSvg;
