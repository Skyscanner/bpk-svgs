import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const barSvg = (props: Props) => {
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
      <path d="M19.582 3H4.42a.42.42 0 0 0-.387.294.52.52 0 0 0 .113.546l5.76 5.638a4.86 4.86 0 0 1 1.4 3.468v2.39a4.6 4.6 0 0 1-2.614 4.287l-1.348.576a.424.424 0 0 0-.226.481.376.376 0 0 0 .355.32h9.056a.375.375 0 0 0 .354-.317.425.425 0 0 0-.226-.483l-1.312-.561a4.6 4.6 0 0 1-2.614-4.286v-2.448a4.86 4.86 0 0 1 1.399-3.467l5.725-5.604a.52.52 0 0 0 .11-.548.42.42 0 0 0-.383-.286M14.5 7A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 14.5 7" />
    </svg>
  );
};
export default barSvg;
