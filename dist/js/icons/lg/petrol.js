import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M3 4.48a.813.813 0 01.224-.588A7.798 7.798 0 018.5 2a7.867 7.867 0 015.213 1.867.896.896 0 01.287.675v15.85A1.666 1.666 0 0112.281 22H4.72A1.667 1.667 0 013 20.393zM6 6a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1V7a1 1 0 00-1-1zm10 0a1 1 0 00.2 1.4L19 9.5v5.764a1 1 0 01-2 0V12a1 1 0 00-2 0v3.264a3 3 0 006 0V9.5a2 2 0 00-.8-1.6l-2.8-2.1A1 1 0 0016 6z" /></svg>);