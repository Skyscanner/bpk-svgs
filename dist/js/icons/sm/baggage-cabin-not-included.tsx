import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const baggageCabinNotIncludedSvg = (props: Props) => {
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
      <g clipPath="url(#a)">
        <path d="M15.75 6.127 21.437.44a1.501 1.501 0 0 1 2.123 2.123L2.563 23.56A1.501 1.501 0 1 1 .44 21.437l4.81-4.81V14.25A2.25 2.25 0 0 1 7.5 12h.75V2.248A2.25 2.25 0 0 1 10.5 0h3a2.25 2.25 0 0 1 2.25 2.25zm-1.5 1.5V2.625a.375.375 0 0 0-.375-.375h-3.75a.375.375 0 0 0-.375.375V12h.127zm3.86 5.051c-.132-.135-.345-.118-.478.015L7.609 22.765a.32.32 0 0 0-.098.264 1.125 1.125 0 0 0 2.239-.154V22.5h4.5v.375a1.125 1.125 0 0 0 2.25 0V22.5a2.25 2.25 0 0 0 2.25-2.25v-6c0-.612-.244-1.166-.64-1.572" />
      </g>
    </svg>
  );
};
export default baggageCabinNotIncludedSvg;
