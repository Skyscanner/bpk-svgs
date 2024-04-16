import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M19.673 17.694l-5.084-9.736a3.75 3.75 0 01-.43-1.741V3a1.043 1.043 0 00-1.08-1H10.92a1.043 1.043 0 00-1.08 1v3.221a3.761 3.761 0 01-.43 1.741l-5.083 9.732A3.018 3.018 0 007.243 22h9.514a3.019 3.019 0 002.916-4.306zm-3.74-.759a1 1 0 01-1.327-.488l-2-4q-.015-.027-.028-.055a1 1 0 111.816-.839l2 4q.015.027.028.055a1 1 0 01-.489 1.327z" /></svg>);