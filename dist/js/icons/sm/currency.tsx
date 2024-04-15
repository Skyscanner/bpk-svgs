import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const currencySvg = (props: Props) => {
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
      <path d="M12 10.5c5.8 0 10.5-2.015 10.5-4.5S17.8 1.5 12 1.5 1.5 3.515 1.5 6s4.701 4.5 10.5 4.5M1.658 12.83a1.5 1.5 0 0 1 2.012-.673l.001.001C4.886 12.766 7.628 13.5 12 13.5s7.114-.734 8.33-1.342a1.5 1.5 0 0 1 1.36 2.674l-.02.01c-1.785.892-5.042 1.658-9.67 1.658s-7.886-.766-9.67-1.658a1.5 1.5 0 0 1-.673-2.012zm2.012 5.328a1.5 1.5 0 0 0-1.36 2.674l.02.01C4.113 21.734 7.371 22.5 12 22.5s7.886-.766 9.67-1.658a1.5 1.5 0 1 0-1.32-2.694l-.02.01c-1.216.608-3.958 1.342-8.33 1.342s-7.114-.734-8.33-1.342" />
    </svg>
  );
};
export default currencySvg;