import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const expandSvg = (props: Props) => {
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
      <path d="M22.386 2.426A1.5 1.5 0 0 0 21 1.5h-4.5a1.5 1.5 0 0 0 0 3h.879l-3.44 3.44a1.5 1.5 0 0 0 2.122 2.12L19.5 6.622V7.5a1.5 1.5 0 0 0 3 0V2.995a1.5 1.5 0 0 0-.114-.57zm-.812 19.96a1.5 1.5 0 0 0 .48-.319l.013-.013A1.5 1.5 0 0 0 22.5 21v-4.5a1.5 1.5 0 0 0-3 0v.879l-3.44-3.44a1.5 1.5 0 0 0-2.12 2.122l3.439 3.439H16.5a1.5 1.5 0 0 0 0 3h4.505a1.5 1.5 0 0 0 .57-.114zM1.933 1.946a1.5 1.5 0 0 0-.433 1.05V7.5a1.5 1.5 0 0 0 3 0v-.879l3.44 3.44a1.5 1.5 0 0 0 2.12-2.122L6.622 4.5H7.5a1.5 1.5 0 0 0 0-3H3a1.5 1.5 0 0 0-1.054.433zm.013 20.121a1.5 1.5 0 0 0 1.05.433H7.5a1.5 1.5 0 0 0 0-3h-.879l3.44-3.44a1.5 1.5 0 0 0-2.122-2.12L4.5 17.378V16.5a1.5 1.5 0 0 0-3 0V21a1.5 1.5 0 0 0 .433 1.054z" />
    </svg>
  );
};
export default expandSvg;
