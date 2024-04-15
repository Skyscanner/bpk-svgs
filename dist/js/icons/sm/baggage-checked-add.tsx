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
      width="1rem"
      height="1rem"
      fill={props.fill}
      {...props}
    >
      <path d="M7.5 0a2.25 2.25 0 0 0-2.25 2.248V6H4.5a2.25 2.25 0 0 0-2.25 2.25v12A2.25 2.25 0 0 0 4.5 22.5v.375a1.125 1.125 0 0 0 2.25 0V22.5h3.434c.3 0 .483-.338.343-.603a6.752 6.752 0 0 1 4.89-9.81.39.39 0 0 0 .333-.382V8.25A2.25 2.25 0 0 0 13.5 6h-.75V2.25A2.25 2.25 0 0 0 10.5 0zm3.75 2.625V6h-4.5V2.625c0-.207.168-.375.375-.375h3.75c.207 0 .375.168.375.375m10.5 16.125a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0m-6-3V18H13.5a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0V19.5h2.25a.75.75 0 0 0 0-1.5h-2.25v-2.25a.75.75 0 0 0-1.5 0" />
    </svg>
  );
};
export default baggageCheckedAddSvg;