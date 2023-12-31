import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M13.5 3a1.5 1.5 0 00-3 0v6.879l-1.94-1.94a1.5 1.5 0 10-2.12 2.122l4.5 4.5a1.5 1.5 0 002.12 0l4.5-4.5a1.5 1.5 0 00-2.12-2.122L13.5 9.88V3z" /><path d="M4.5 14.25a1.5 1.5 0 00-3 0V18A4.5 4.5 0 006 22.5h12a4.5 4.5 0 004.5-4.5v-3.75a1.5 1.5 0 00-3 0V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.75z" /></svg>);