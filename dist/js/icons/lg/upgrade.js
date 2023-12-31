import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 15a1 1 0 111-1 1 1 0 01-1 1zm3.707-4.879a1 1 0 01-1.414 0L13 10.828V13a1 1 0 01-2 0v-2.172l-1.293 1.293-.025.025a1 1 0 11-1.389-1.439L12 7l3.707 3.707a1 1 0 010 1.414z" /></svg>);