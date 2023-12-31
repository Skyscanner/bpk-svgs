import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M4.5 4.5A1.5 1.5 0 113 3a1.5 1.5 0 011.5 1.5zm0 7.5A1.5 1.5 0 113 10.5 1.5 1.5 0 014.5 12zm0 7.5A1.5 1.5 0 113 18a1.5 1.5 0 011.5 1.5zm3-15A1.5 1.5 0 019 3h12a1.5 1.5 0 010 3H9a1.5 1.5 0 01-1.5-1.5zm0 7.5A1.5 1.5 0 019 10.5h12a1.5 1.5 0 010 3H9A1.5 1.5 0 017.5 12zm0 7.5A1.5 1.5 0 019 18h12a1.5 1.5 0 010 3H9a1.5 1.5 0 01-1.5-1.5z" /></svg>);