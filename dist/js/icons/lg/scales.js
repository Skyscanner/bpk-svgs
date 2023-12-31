import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M20.705 5.467C19.27 4.158 16.955 3 12 3 7.016 3 4.477 4.183 3.228 5.489A.873.873 0 003 6.097V18a3 3 0 003 3h12a3 3 0 003-3V6.161a.932.932 0 00-.295-.694zM12 18a6 6 0 116-6 6 6 0 01-6 6z" /><path d="M12.273 8.174a.302.302 0 00-.546 0l-1.582 3.441A1.778 1.778 0 0012 14a1.778 1.778 0 001.855-2.385z" /></svg>);