import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M8.5 2a7.798 7.798 0 00-5.276 1.892A.813.813 0 003 4.48v15.913A1.667 1.667 0 004.72 22h7.561A1.666 1.666 0 0014 20.392V4.542a.896.896 0 00-.287-.675A7.867 7.867 0 008.5 2zm3.329 9.299l-3.455 6.048a.2.2 0 01-.374-.1V14a1 1 0 00-1-1H5.345a.2.2 0 01-.174-.299l3.455-6.048a.2.2 0 01.374.1v3.246a1 1 0 001 1h1.655a.2.2 0 01.174.3zM21 9.5v5.764a3 3 0 11-6 0V12a1 1 0 012 0v3.264a1 1 0 102 0V9.5l-2.8-2.1a1 1 0 111.2-1.6l2.8 2.1a2 2 0 01.8 1.6z" /></svg>);