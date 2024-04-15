import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const educationSvg = (props: Props) => {
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
      <path d="M10.326 1.968 2.14 6.838a1.44 1.44 0 0 0 .045 2.422l8.276 4.43a3.22 3.22 0 0 0 3.078 0l3.753-2.008a1.5 1.5 0 0 1 2.208 1.322V15a1.5 1.5 0 0 0 2.806.739 1.05 1.05 0 0 0 .194-.608V8.033a1.37 1.37 0 0 0-.64-1.195l-8.186-4.87a3.23 3.23 0 0 0-3.348 0" />
      <path d="M18 14.574a.525.525 0 0 0-.748-.474l-3.713 1.688a3.22 3.22 0 0 1-3.078 0L5.25 13.23a.525.525 0 0 0-.773.462v4.764a1.05 1.05 0 0 0 .58.938l5.065 2.664a4.2 4.2 0 0 0 3.756 0l3.542-1.727a1.05 1.05 0 0 0 .58-.938z" />
    </svg>
  );
};
export default educationSvg;
