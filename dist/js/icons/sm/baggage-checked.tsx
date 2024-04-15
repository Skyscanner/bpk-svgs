import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const baggageCheckedSvg = (props: Props) => {
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
      <path d="M10.5 0a2.25 2.25 0 0 0-2.25 2.248V6H7.5a2.25 2.25 0 0 0-2.25 2.25v12A2.25 2.25 0 0 0 7.5 22.5v.375a1.125 1.125 0 0 0 2.25 0V22.5h4.5v.375a1.125 1.125 0 0 0 2.25 0V22.5a2.25 2.25 0 0 0 2.25-2.25v-12A2.25 2.25 0 0 0 16.5 6h-.75V2.25A2.25 2.25 0 0 0 13.5 0zm3.375 2.25c.207 0 .375.168.375.375V6h-4.5V2.625c0-.207.168-.375.375-.375z" />
    </svg>
  );
};
export default baggageCheckedSvg;
