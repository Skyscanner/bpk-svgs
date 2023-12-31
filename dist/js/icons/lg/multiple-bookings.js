import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M4 2a3 3 0 00-3 3v1.5a.615.615 0 00.495.562 2 2 0 010 3.876A.615.615 0 001 11.5V13a3 3 0 003 3h16a3 3 0 003-3v-1.5a.615.615 0 00-.495-.562 2 2 0 010-3.876A.615.615 0 0023 6.5V5a3 3 0 00-3-3zM3 18a1 1 0 011-1h16a1 1 0 010 2H4a1 1 0 01-1-1zm3 2a1 1 0 000 2h12a1 1 0 000-2z" /></svg>);