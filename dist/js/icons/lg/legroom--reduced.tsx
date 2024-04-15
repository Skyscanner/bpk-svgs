import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const legroomReducedSvg = (props: Props) => {
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
      <path d="M9 3a1 1 0 0 0-1 1v8c0 2 1 4 3.5 4h1c.956 0 1.913.915 1.557 1.87-.033.088-.072.175-.102.265L13.5 19.5a.991.991 0 0 0 1 1.5h3.665c.552 0 1.02-.473.762-.961A1.98 1.98 0 0 0 17 19c-.123 0-.383-.34-.19-.739.093-.194.24-.359.335-.551l.791-1.583a1.5 1.5 0 0 0 .106-.263c.396-1.425-.588-2.38-2.042-2.864l-2.833-.677a1 1 0 0 1-.724-.855l-.697-6.454A2.28 2.28 0 0 0 9.628 3z" />
      <path d="M7 6a1 1 0 0 0-2 0v5.636a8.87 8.87 0 0 0 1.25 5.122C7.283 18.227 8.967 19 11.332 19H12a1 1 0 0 0 0-2h-.667c-1.9 0-2.884-.592-3.449-1.394A6.97 6.97 0 0 1 7 11.636z" />
    </svg>
  );
};
export default legroomReducedSvg;
