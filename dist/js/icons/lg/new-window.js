import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12.9 12.3a.99.99 0 11-1.4-1.4L18.4 4H16a.945.945 0 01-1-1 .945.945 0 011-1h5a.945.945 0 011 1v5a1 1 0 01-2 0V5.2z" /><path d="M4 9a3 3 0 013-3h4a1 1 0 000-2H7a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5v-4a1 1 0 00-2 0v4a3 3 0 01-3 3H7a3 3 0 01-3-3z" /></svg>);