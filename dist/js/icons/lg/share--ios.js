import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M17.707 8.707a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 0l-5 5a1 1 0 001.414 1.414L11 5.414v8.589a1 1 0 002 0v-8.59l3.293 3.294a1 1 0 001.414 0z" /><path d="M5 15a1 1 0 00-2 0v3a4 4 0 004 4h10a4 4 0 004-4v-3a1 1 0 00-2 0v3a2 2 0 01-2 2H7a2 2 0 01-2-2z" /></svg>);