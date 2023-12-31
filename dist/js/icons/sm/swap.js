import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M9 7.5A1.5 1.5 0 0010.5 9h6.879l-1.94 1.94a1.5 1.5 0 002.122 2.12l4.5-4.5a1.5 1.5 0 000-2.12l-4.5-4.5a1.5 1.5 0 10-2.122 2.12L17.38 6H10.5A1.5 1.5 0 009 7.5zm6 9a1.5 1.5 0 00-1.5-1.5H6.62l1.94-1.94a1.5 1.5 0 00-2.122-2.12l-4.5 4.5a1.5 1.5 0 000 2.12l4.5 4.5a1.5 1.5 0 002.122-2.12L6.62 18h6.88a1.5 1.5 0 001.5-1.5z" clipRule="evenodd" /></svg>);