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
      width="1.5rem"
      height="1.5rem"
      fill={props.fill}
      {...props}
    >
      <path d="M9.412 7.483 8.223 6.144a.472.472 0 0 1 .236-.764l1.261-.346a.94.94 0 0 1 .543.013l3.063 1.01a.468.468 0 0 1-.036.896l-2.935.806a.93.93 0 0 1-.943-.276" />
      <path d="M2.34 8.001a.94.94 0 0 0-.696-.076l-.295.082a.472.472 0 0 0-.234.764l2.528 2.845a3.17 3.17 0 0 0 3 1.028l4.22-1.16a.46.46 0 0 1 .587.467l-.323 6.565a.462.462 0 0 0 .587.467l1.15-.316a.96.96 0 0 0 .66-.635l2.784-7.626a1.34 1.34 0 0 1 .822-.642l5.235-1.437a.726.726 0 0 0 .514-1.087c-.804-1.082-2.454-1.28-3.946-.87L7.027 9.639a2.8 2.8 0 0 1-2.075-.23L2.338 8z" />
    </svg>
  );
};
export default flightTakeoffSvg;