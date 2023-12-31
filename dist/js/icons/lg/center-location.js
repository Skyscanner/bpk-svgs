import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M6 4a2 2 0 00-2 2v2a1 1 0 01-2 0V6a4 4 0 014-4h2a1 1 0 010 2H6zm9-1a1 1 0 011-1h2a4 4 0 014 4v2a1 1 0 11-2 0V6a2 2 0 00-2-2h-2a1 1 0 01-1-1zM4 16v2a2 2 0 002 2h2a1 1 0 110 2H6a4 4 0 01-4-4v-2a1 1 0 112 0zm17-1a1 1 0 011 1v2a4 4 0 01-4 4h-2a1 1 0 110-2h2a2 2 0 002-2v-2a1 1 0 011-1zm-7.63-1.24a.545.545 0 00-.37.502V17a1 1 0 11-2 0v-2.738a.545.545 0 00-.37-.503A4.002 4.002 0 0112 6a4 4 0 011.37 7.76z" /></svg>);