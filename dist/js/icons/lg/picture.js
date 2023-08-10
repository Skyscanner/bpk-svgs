import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm1 12l-5.72-2.697a3 3 0 00-2.56 0L5 15V6a1 1 0 011-1h12a1 1 0 011 1zm-8.5-6.5a2 2 0 11-2-2 2 2 0 012 2z" /></svg>);