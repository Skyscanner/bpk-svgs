import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M1.5 6.5v-.903a.85.85 0 01.24-.608C3.05 3.683 6.767 1.5 12 1.5a15.662 15.662 0 0110.19 3.467.91.91 0 01.31.694V6.5a1.026 1.026 0 01-1.05 1H2.55a1.026 1.026 0 01-1.05-1zm3 4a1.5 1.5 0 013 0v6a1.5 1.5 0 01-3 0zM12 9a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 003 0v-6A1.5 1.5 0 0012 9zm4.5 1.5a1.5 1.5 0 013 0v6a1.5 1.5 0 01-3 0zM3 19.5a1.5 1.5 0 100 3h18a1.5 1.5 0 000-3z" /></svg>);