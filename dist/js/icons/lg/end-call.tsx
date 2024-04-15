import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const endCallSvg = (props: Props) => {
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
      <path d="M8.586 12.487a.9.9 0 0 1 .578-.397 14.2 14.2 0 0 1 5.67 0 .9.9 0 0 1 .578.397l1.714 2.7a1.6 1.6 0 0 0 1.322.813h2.746a1.91 1.91 0 0 0 1.685-1.803l.113-1.271a1.67 1.67 0 0 0-.69-1.517A17.7 17.7 0 0 0 11.996 8 17.7 17.7 0 0 0 1.7 11.408a1.67 1.67 0 0 0-.692 1.519l.115 1.27A1.91 1.91 0 0 0 2.804 16H5.55a1.6 1.6 0 0 0 1.321-.813z" />
    </svg>
  );
};
export default endCallSvg;
