import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const paperclipSvg = (props: Props) => {
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
      <path d="M12.332 3.417a5.23 5.23 0 0 1 7.16 0 4.766 4.766 0 0 1 .22 6.737q-.106.113-.22.22l-7.226 6.885a3.116 3.116 0 0 1-4.27 0 2.883 2.883 0 0 1-.128-4.075q.062-.066.128-.128l4.336-4.13a1 1 0 0 1 1.38 1.448l-4.336 4.13a.884.884 0 0 0-.058 1.25q.028.03.058.058a1.116 1.116 0 0 0 1.51 0l7.227-6.886a2.766 2.766 0 0 0 0-4.06 3.23 3.23 0 0 0-4.4 0L6.485 11.75a4.65 4.65 0 0 0 0 6.814 5.35 5.35 0 0 0 7.291 0l4.336-4.13a1 1 0 0 1 1.38 1.447l-4.336 4.13a7.347 7.347 0 0 1-10.05 0 6.65 6.65 0 0 1 0-9.71z" />
    </svg>
  );
};
export default paperclipSvg;
