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
      width="1.5rem"
      height="1.5rem"
      fill={props.fill}
      {...props}
    >
      <path d="M9 2.498A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5V5h1c.432 0 .832.137 1.16.37l4.097-4.074a1 1 0 0 1 1.415 0l.035.035a1 1 0 0 1 0 1.415L2.743 22.71a1 1 0 0 1-1.414 0l-.036-.036a1 1 0 0 1 0-1.414L6 16.53V7a2 2 0 0 1 2-2h1zM8.073 20.38a.25.25 0 0 0-.073.177V22a1 1 0 1 0 2 0v-1h4v1a1 1 0 1 0 2 0v-1a2 2 0 0 0 2-2v-7.943a.25.25 0 0 0-.427-.177l-8.535 8.535zM10.5 2.5a.5.5 0 0 0-.5.5v2h4V3a.5.5 0 0 0-.5-.5z" />
    </svg>
  );
};
export default baggageCheckedNotIncludedSvg;
