import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const starHalfSvg = (props: Props) => {
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
      <path d="M21.773 10.386a.795.795 0 0 0-.416-1.338l-5.476-.83a1 1 0 0 1-.755-.563l-2.454-5.217a.734.734 0 0 0-1.344 0L8.875 7.655a1 1 0 0 1-.755.563l-5.477.829a.795.795 0 0 0-.416 1.339l3.993 4.07a1 1 0 0 1 .273.863l-.948 5.761a.757.757 0 0 0 1.087.828l4.885-2.695a1 1 0 0 1 .966 0l4.885 2.695a.757.757 0 0 0 1.087-.827l-.943-5.763a1 1 0 0 1 .272-.862zm-5.417 2.671a3 3 0 0 0-.818 2.584l.535 3.268-2.623-1.447a3 3 0 0 0-1.45-.374V5.71l1.316 2.796a3 3 0 0 0 2.266 1.69l3.115.471z" />
    </svg>
  );
};
export default starHalfSvg;