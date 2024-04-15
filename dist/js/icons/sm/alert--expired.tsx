import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const alertExpiredSvg = (props: Props) => {
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
      <path d="M5.056 18h13.888a2.062 2.062 0 0 0 1.837-2.985l-.51-1.025a10.35 10.35 0 0 1-1.085-4.612v-.66a7.186 7.186 0 1 0-14.372.001v.659A10.36 10.36 0 0 1 3.73 13.99l-.51 1.025A2.062 2.062 0 0 0 5.056 18M9 8.121l-.037-.037A1.5 1.5 0 1 1 11.12 6l.879.879.879-.879.036-.037A1.5 1.5 0 1 1 15 8.121L14.12 9l.88.879.036.037A1.5 1.5 0 1 1 12.88 12l-.88-.879-.878.879-.037.037A1.5 1.5 0 0 1 9 9.879L9.879 9zM12.993 22.5h-2a2.24 2.24 0 0 1-1.917-1.561A1.02 1.02 0 0 1 9.83 19.5h4.338a1.02 1.02 0 0 1 .755 1.439 2.26 2.26 0 0 1-1.931 1.561z" />
    </svg>
  );
};
export default alertExpiredSvg;
