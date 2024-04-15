import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const flightTakeoffSvg = (props: Props) => {
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
      <path d="M9.177 6.677 7.88 5.097a.572.572 0 0 1 .257-.9l1.376-.407a.95.95 0 0 1 .593.015l3.34 1.192a.565.565 0 0 1-.039 1.055l-3.2.95a.97.97 0 0 1-1.03-.325" />
      <path d="M1.46 7.287a.95.95 0 0 0-.757-.09l-.322.097a.572.572 0 0 0-.255.9l2.758 3.353a3.32 3.32 0 0 0 3.273 1.212l4.603-1.366a.514.514 0 0 1 .64.55l-.352 7.737a.515.515 0 0 0 .64.55l1.254-.372a1.09 1.09 0 0 0 .72-.75l3.038-8.986a1.48 1.48 0 0 1 .896-.757L23.31 7.67a.87.87 0 0 0 .56-1.28c-.877-1.276-2.677-1.51-4.305-1.027L6.575 9.217a2.86 2.86 0 0 1-2.264-.271l-2.85-1.66z" />
    </svg>
  );
};
export default flightTakeoffSvg;