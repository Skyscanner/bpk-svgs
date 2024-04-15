import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const chauffeurSvg = (props: Props) => {
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
      <path d="M8.043 5.433a.75.75 0 0 0 .67.415H9v3.226a2.79 2.79 0 0 0 3 2.774 2.79 2.79 0 0 0 3-2.774V5.848h.287a.75.75 0 0 0 .67-.415l.247-.493a.75.75 0 0 0-.255-.96l-3.117-2.077a1.5 1.5 0 0 0-1.664 0L8.051 3.981a.75.75 0 0 0-.255.96zm-3.898 11.28A17.3 17.3 0 0 1 12 14.848a17.6 17.6 0 0 1 7.893 1.867A2 2 0 0 1 21 18.598v.75a3.27 3.27 0 0 1-2.262 2.884.653.653 0 0 1-.784-.633 6.001 6.001 0 0 0-11.908 0 .653.653 0 0 1-.784.633A3.27 3.27 0 0 1 3 19.348v-.75a2.07 2.07 0 0 1 1.145-1.885" />
      <path d="M8.25 22.348a.662.662 0 0 1-.688-.747 4.501 4.501 0 0 1 8.876 0 .662.662 0 0 1-.688.747z" />
    </svg>
  );
};
export default chauffeurSvg;
