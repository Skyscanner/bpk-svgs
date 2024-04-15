import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const thumbsDownSvg = (props: Props) => {
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
      <path d="M16.558 12.104V4a1 1 0 0 0-1-1H9.522A5 5 0 0 0 4.84 6.244l-2.27 6.054A2 2 0 0 0 4.444 15h4.833a1 1 0 0 1 .97 1.242L9.95 17.43A2.873 2.873 0 0 0 12.737 21a.48.48 0 0 0 .443-.297l3.227-7.837a2 2 0 0 0 .15-.762zm2-.604a1.5 1.5 0 0 0 3 0v-7a1.5 1.5 0 0 0-3 0z" />
    </svg>
  );
};
export default thumbsDownSvg;
