import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M7 5a2 2 0 11-2-2 2 2 0 012 2zm0 7a2 2 0 11-2-2 2 2 0 012 2zm-2 9a2 2 0 10-2-2 2 2 0 002 2zm9-16a2 2 0 11-2-2 2 2 0 012 2zm-2 9a2 2 0 10-2-2 2 2 0 002 2zm2 5a2 2 0 11-2-2 2 2 0 012 2zm5-12a2 2 0 10-2-2 2 2 0 002 2zm2 5a2 2 0 11-2-2 2 2 0 012 2zm-2 9a2 2 0 10-2-2 2 2 0 002 2z" /></svg>);