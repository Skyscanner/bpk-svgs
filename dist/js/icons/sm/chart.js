import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M18 1.5A1.5 1.5 0 0016.5 3v18a1.5 1.5 0 003 0V3A1.5 1.5 0 0018 1.5zm-7.5 9a1.5 1.5 0 013 0V21a1.5 1.5 0 01-3 0zm-6 4.5a1.5 1.5 0 013 0v6a1.5 1.5 0 01-3 0z" /></svg>);