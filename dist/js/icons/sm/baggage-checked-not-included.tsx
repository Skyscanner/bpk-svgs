import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const baggageCheckedNotIncludedSvg = (props: Props) => {
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
        <path d="m15.877 6 5.56-5.56a1.501 1.501 0 0 1 2.123 2.123L2.563 23.56A1.501 1.501 0 1 1 .44 21.437l4.81-4.81V8.25A2.25 2.25 0 0 1 7.5 6h.75V2.248A2.25 2.25 0 0 1 10.5 0h3a2.25 2.25 0 0 1 2.25 2.25V6zm2.873 6.48a.375.375 0 0 0-.64-.266l-10.5 10.5a.32.32 0 0 0-.1.265c.075.556.546 1.021 1.115 1.021.621 0 1.125-.504 1.125-1.125V22.5h4.5v.375a1.125 1.125 0 0 0 2.25 0V22.5a2.25 2.25 0 0 0 2.25-2.25zm-4.5-9.855a.375.375 0 0 0-.375-.375h-3.75a.375.375 0 0 0-.375.375V6h4.5z" />
      </g>
    </svg>
  );
};
export default baggageCheckedNotIncludedSvg;
