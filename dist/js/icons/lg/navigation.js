import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 2a10 10 0 1010 10A10.03 10.03 0 0012 2zm4.684 5.949l-1.868 5.602a2 2 0 01-1.265 1.265L7.95 16.684a.5.5 0 01-.633-.633l1.868-5.602a2 2 0 011.265-1.265h-.001l5.602-1.868a.5.5 0 01.633.633zM12.7 11.3a.99.99 0 11-1.4 1.4.99.99 0 111.4-1.4z" /></svg>);