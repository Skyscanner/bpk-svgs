import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M1.5 1.5a1.5 1.5 0 000 3h21a1.5 1.5 0 000-3zm3 4.5a1.5 1.5 0 000 3h15a1.5 1.5 0 000-3zM6 12a1.5 1.5 0 011.5-1.5H21a1.5 1.5 0 010 3H7.5A1.5 1.5 0 016 12zm4.5 3a1.5 1.5 0 000 3h9a1.5 1.5 0 000-3zM9 21a1.5 1.5 0 011.5-1.5H15a1.5 1.5 0 010 3h-4.5A1.5 1.5 0 019 21z" /></svg>);