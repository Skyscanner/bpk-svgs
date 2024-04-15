import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const informationLanguageAlertSvg = (props: Props) => {
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
      <path d="m21.247 3.916-2.216-.758a21.7 21.7 0 0 0-14.063 0l-2.215.758A1.14 1.14 0 0 0 1.993 5v10.597a3.38 3.38 0 0 0 3.337 3.425h2.49a2 2 0 0 1 1.433.605l2.03 2.085a1 1 0 0 0 1.414.019l.02-.019 2.03-2.085a2 2 0 0 1 1.432-.605h2.491a3.38 3.38 0 0 0 3.336-3.425V5a1.14 1.14 0 0 0-.76-1.083zm-9.252 12.071h-.063a.999.999 0 1 1 .063 0m.994-3.883a1 1 0 0 1-1.987 0l-.007-.117-.002-5L11 6.87a1 1 0 0 1 1.987 0l.007.116.002 5.001z" />
    </svg>
  );
};
export default informationLanguageAlertSvg;
