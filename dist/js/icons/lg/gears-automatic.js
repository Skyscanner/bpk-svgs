import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M5.5 5a1.995 1.995 0 00.762 1.57.586.586 0 01.238.45V10a2 2 0 000 4h2a2 2 0 000-4V7.02a.586.586 0 01.238-.45A2 2 0 105.5 5zm14 0a2 2 0 11-2-2 2 2 0 012 2zm-2 9a2 2 0 10-2-2 2 2 0 002 2zm0 7a2 2 0 10-2-2 2 2 0 002 2zm-11-5a1 1 0 012 0v.98a.586.586 0 00.238.45 2 2 0 11-2.477 0 .585.585 0 00.239-.45z" /></svg>);