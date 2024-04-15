import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const speakerSvg = (props: Props) => {
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
      <path d="M13.6 2.354A1.448 1.448 0 0 1 16 3.392v17.216a1.448 1.448 0 0 1-2.4 1.038L8.416 17.21a.88.88 0 0 0-.575-.21H3.596A2.55 2.55 0 0 1 1 14.5v-5A2.55 2.55 0 0 1 3.596 7h4.246a.9.9 0 0 0 .575-.21l5.182-4.437zm7.44 3.7a.75.75 0 0 0-1.205.892 8.5 8.5 0 0 1 0 10.108.75.75 0 0 0 1.206.892 10 10 0 0 0-.001-11.892" />
      <path d="M19.16 8.672a.75.75 0 0 0-1.32.714 5.5 5.5 0 0 1 0 5.228.75.75 0 0 0 1.32.714 7.01 7.01 0 0 0 0-6.656" />
    </svg>
  );
};
export default speakerSvg;
