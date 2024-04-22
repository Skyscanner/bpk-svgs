import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M3.5 10.5a7 7 0 1114 0 7 7 0 01-14 0zm7-8a8 8 0 105.292 14l4.854 4.854a.5.5 0 00.708-.708l-4.855-4.854a8 8 0 00-6-13.292z" clipRule="evenodd" /></svg>);