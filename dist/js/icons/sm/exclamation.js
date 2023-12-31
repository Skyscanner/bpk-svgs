import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M14.93 3.36a3.238 3.238 0 00-5.86 0L1.955 16.94c-1.296 2.474.33 5.56 2.93 5.56h14.23c2.6 0 4.226-3.086 2.93-5.56zM12 17.996a1.498 1.498 0 111.498-1.498A1.498 1.498 0 0112 17.996zm1.493-5.82a1.5 1.5 0 01-2.98.001l-.01-.175-.003-4.501.01-.175a1.5 1.5 0 012.98-.001l.01.175.003 4.501z" /></svg>);