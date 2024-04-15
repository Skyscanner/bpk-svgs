import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const fastTrackSvg = (props: Props) => {
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
      <path d="M11.65 3.304a.933.933 0 0 0-1.318-.06l-.04.038a1.03 1.03 0 0 0-.02 1.414l7.012 7.54-6.99 7.045a1.03 1.03 0 0 0-.024 1.414.933.933 0 0 0 1.318.063l.04-.039L20 12.28l-8.35-8.977z" />
      <path d="M5.634 5.304a.92.92 0 0 0-1.296-.069q-.026.023-.049.047a1.037 1.037 0 0 0-.021 1.414l5.042 5.475-5.02 5.11a1.037 1.037 0 0 0-.022 1.414.92.92 0 0 0 1.296.07q.025-.022.048-.046L12 12.216z" />
    </svg>
  );
};
export default fastTrackSvg;
