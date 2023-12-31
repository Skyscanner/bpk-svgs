import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M7.293 5.293A1 1 0 007 6v.5a.5.5 0 01-.5.5H3a1 1 0 000 2h3.5a.5.5 0 01.5.5v.5a1 1 0 102 0V6a1 1 0 00-1.707-.707zM11.48 17H12a1 1 0 000-2H3a1 1 0 000 2h8.481zm5.665.146A.5.5 0 0117.5 17H21a1 1 0 000-2h-3.5a.5.5 0 01-.5-.5V14a1 1 0 00-2 0v4a1 1 0 002 0v-.5a.5.5 0 01.146-.354zm-5.853-9.853A1 1 0 0012 9h9a1 1 0 100-2h-9a1 1 0 00-.707.293z" clipRule="evenodd" /></svg>);