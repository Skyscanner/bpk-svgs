import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M22.4 10.194a13.01 13.01 0 00-20.8 0 3.025 3.025 0 000 3.615 13.014 13.014 0 0020.8 0 3.023 3.023 0 000-3.615zM12 17a5.07 5.07 0 01-5-5 5.07 5.07 0 015-5 5.07 5.07 0 015 5 5.07 5.07 0 01-5 5zm2-5a2 2 0 11-2-2 2.028 2.028 0 012 2z" /></svg>);