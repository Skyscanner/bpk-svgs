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
      width="1.5rem"
      height="1.5rem"
      fill={props.fill}
      {...props}
    >
      <path d="M12 10c4.97 0 9-1.79 9-4s-4.03-4-9-4-9 1.79-9 4 4.03 4 9 4m-8.954 1.2a1 1 0 0 1 1.253-.654c.278.087.553.178.833.27A19.3 19.3 0 0 0 12 12a19.3 19.3 0 0 0 6.868-1.184c.28-.092.555-.183.833-.27a1 1 0 0 1 .598 1.908q-.386.122-.794.259A21.3 21.3 0 0 1 12 14a21.3 21.3 0 0 1-7.505-1.287q-.407-.136-.794-.259a1 1 0 0 1-.655-1.253zm0 4a1 1 0 0 1 1.253-.654c.278.087.553.178.833.27A19.3 19.3 0 0 0 12 16a19.3 19.3 0 0 0 6.868-1.184c.28-.092.555-.183.833-.27a1 1 0 0 1 .598 1.908q-.386.122-.794.259A21.3 21.3 0 0 1 12 18a21.3 21.3 0 0 1-7.505-1.287q-.407-.136-.794-.259a1 1 0 0 1-.655-1.253zm0 4a1 1 0 0 1 1.253-.654c.278.087.553.178.833.27A19.3 19.3 0 0 0 12 20a19.3 19.3 0 0 0 6.868-1.184c.28-.092.555-.183.833-.27a1 1 0 0 1 .598 1.908q-.386.122-.794.259A21.3 21.3 0 0 1 12 22a21.3 21.3 0 0 1-7.505-1.287q-.407-.136-.794-.259a1 1 0 0 1-.655-1.253z" />
    </svg>
  );
};
export default currencySvg;
