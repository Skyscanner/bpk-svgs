import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const notAllowedSvg = (props: Props) => {
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
      <path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5M5.742 16.142a7.5 7.5 0 0 1 0-8.278l10.394 10.393a7.5 7.5 0 0 1-10.394-2.115m12.515-.007v.002L7.864 5.742a7.5 7.5 0 0 1 10.393 10.393" />
    </svg>
  );
};
export default notAllowedSvg;
