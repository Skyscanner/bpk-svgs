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
      width="1.5rem"
      height="1.5rem"
      fill={props.fill}
      {...props}
    >
      <path d="M14 4a2 2 0 1 0-3.444 1.384 1.37 1.37 0 0 1 .444.914 1.13 1.13 0 0 1-.77 1.024q-.138.052-.272.113a1.155 1.155 0 0 1-1.293-.185l-.362-.361A1.23 1.23 0 0 1 8 5.999a2 2 0 1 0-2 2 1.23 1.23 0 0 1 .889.304l.36.362a1.15 1.15 0 0 1 .186 1.293q-.058.127-.107.258A1.16 1.16 0 0 1 6.283 11h-.55a2 2 0 1 0 0 2h.55a1.16 1.16 0 0 1 1.045.784q.05.13.107.258a1.155 1.155 0 0 1-.185 1.293l-.361.362a1.23 1.23 0 0 1-.89.303 2 2 0 1 0 2 2 1.23 1.23 0 0 1 .304-.89l.362-.36a1.15 1.15 0 0 1 1.293-.185q.135.06.272.113a1.13 1.13 0 0 1 .77 1.024 1.37 1.37 0 0 1-.444.914 2 2 0 1 0 2.887 0 1.37 1.37 0 0 1-.443-.914 1.13 1.13 0 0 1 .77-1.024q.138-.053.272-.113a1.16 1.16 0 0 1 1.293.184l.362.363A1.23 1.23 0 0 1 16 18a2 2 0 1 0 2-2 1.23 1.23 0 0 1-.89-.303l-.36-.362a1.15 1.15 0 0 1-.185-1.293q.06-.135.113-.272a1.13 1.13 0 0 1 1.024-.77 1.37 1.37 0 0 1 .914.444 2 2 0 1 0 0-2.887 1.37 1.37 0 0 1-.914.443 1.13 1.13 0 0 1-1.024-.77q-.053-.138-.113-.272a1.16 1.16 0 0 1 .184-1.293l.363-.362A1.23 1.23 0 0 1 18 8a2 2 0 1 0-2-2 1.23 1.23 0 0 1-.303.889l-.362.36a1.15 1.15 0 0 1-1.293.186q-.135-.06-.272-.113A1.13 1.13 0 0 1 13 6.298a1.37 1.37 0 0 1 .444-.914A2 2 0 0 0 14 4" />
    </svg>
  );
};
export default virusSvg;
