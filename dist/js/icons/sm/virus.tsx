import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const virusSvg = (props: Props) => {
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
      <path d="M14.1 3.6a2.1 2.1 0 1 0-3.616 1.453 1.44 1.44 0 0 1 .466.96 1.19 1.19 0 0 1-.808 1.075q-.145.055-.286.118a1.21 1.21 0 0 1-1.358-.193l-.38-.38A1.3 1.3 0 0 1 7.8 5.7a2.1 2.1 0 1 0-2.1 2.1 1.3 1.3 0 0 1 .933.318l.38.38a1.21 1.21 0 0 1 .193 1.358q-.06.134-.112.27a1.21 1.21 0 0 1-1.097.824h-.578a2.101 2.101 0 1 0 0 2.1h.578a1.21 1.21 0 0 1 1.097.823q.053.138.112.271a1.21 1.21 0 0 1-.193 1.358l-.38.38a1.3 1.3 0 0 1-.933.318 2.1 2.1 0 1 0 2.1 2.1 1.3 1.3 0 0 1 .318-.933l.38-.38a1.21 1.21 0 0 1 1.358-.193q.141.063.286.118a1.19 1.19 0 0 1 .808 1.075 1.44 1.44 0 0 1-.466.96 2.1 2.1 0 1 0 3.032 0 1.44 1.44 0 0 1-.466-.96 1.19 1.19 0 0 1 .808-1.075q.145-.055.286-.118a1.21 1.21 0 0 1 1.358.193l.38.38a1.3 1.3 0 0 1 .318.933 2.1 2.1 0 1 0 2.1-2.1 1.3 1.3 0 0 1-.933-.318l-.38-.38a1.21 1.21 0 0 1-.193-1.358q.062-.142.118-.286a1.19 1.19 0 0 1 1.075-.808 1.44 1.44 0 0 1 .96.466 2.1 2.1 0 1 0 0-3.032 1.44 1.44 0 0 1-.96.466 1.19 1.19 0 0 1-1.075-.808q-.055-.145-.118-.286a1.21 1.21 0 0 1 .193-1.358l.38-.38A1.3 1.3 0 0 1 18.3 7.8a2.1 2.1 0 1 0-2.1-2.1 1.3 1.3 0 0 1-.318.933l-.38.38a1.21 1.21 0 0 1-1.358.193q-.141-.063-.286-.118a1.19 1.19 0 0 1-.808-1.075 1.44 1.44 0 0 1 .466-.96A2.1 2.1 0 0 0 14.1 3.6" />
    </svg>
  );
};
export default virusSvg;
