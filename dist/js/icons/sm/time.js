import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1022.5 12 10.5 10.5 0 0012 1.5zm3.31 13.774a1.5 1.5 0 01-2.121.036l-1.81-1.81a3 3 0 01-.879-2.121V7.5a1.5 1.5 0 013 0v3.878l1.811 1.812a1.5 1.5 0 010 2.084z" /></svg>);