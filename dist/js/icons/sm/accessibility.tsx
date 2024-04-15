import React from 'react';
type Props = {
  fill?: string,
  className?: string,
};
export const accessibilitySvg = (props: Props) => {
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
      <path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5m-.9 4.945a.32.32 0 0 1 .172-.303A1.8 1.8 0 0 1 12 6a1.8 1.8 0 0 1 .718.141.33.33 0 0 1 .182.314v1.142c0 .448-.45.676-.9.676s-.9-.228-.9-.676zm4.975 3.602-2.115.235a.956.956 0 0 0-.806.896l-.084.937a1 1 0 0 0 .004.24l.649 5.047a.51.51 0 0 1-.467.598.48.48 0 0 1-.454-.38l-.716-2.784a.087.087 0 0 0-.172 0l-.716 2.784a.48.48 0 0 1-.454.38.51.51 0 0 1-.468-.598l.65-5.047a1 1 0 0 0 .004-.241l-.084-.936a.956.956 0 0 0-.806-.896l-2.115-.235a.507.507 0 0 1-.425-.522A.5.5 0 0 1 7.972 9h8.056a.5.5 0 0 1 .472.525.507.507 0 0 1-.425.522" />
    </svg>
  );
};
export default accessibilitySvg;