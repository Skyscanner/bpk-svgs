import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1022.5 12 10.5 10.5 0 0012 1.5zM9 18a1.5 1.5 0 111.5-1.5A1.5 1.5 0 019 18zm1.5-4.5h-3a1.5 1.5 0 010-3v-3a1.5 1.5 0 013 0v3a1.5 1.5 0 010 3zM15 18a1.5 1.5 0 111.5-1.5A1.5 1.5 0 0115 18zm0-4.5a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5zM15 9a1.5 1.5 0 111.5-1.5A1.5 1.5 0 0115 9z" /></svg>);