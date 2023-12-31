import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M10.5 1.5a9 9 0 109 9 9 9 0 00-9-9zm0 15a6 6 0 116-6 6 6 0 01-6 6zm2.56-5.561a1.5 1.5 0 01-2.12 2.122L9 11.121V7.5a1.5 1.5 0 013 0v2.38zm8.966 11.086a1.619 1.619 0 01-2.29.001l-2.611-2.612c-.15-.15.243-.782.875-1.414.63-.632 1.264-1.024 1.414-.874l2.612 2.61a1.619 1.619 0 010 2.29z" /></svg>);