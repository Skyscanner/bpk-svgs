import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M18 19.5h3a3 3 0 01-3 3H3a3 3 0 01-3-3v-15a3 3 0 013-3h13.5a1.5 1.5 0 010 3H3.75a.75.75 0 000 1.5H18a3 3 0 013 3h-3a4.5 4.5 0 00-4.5 4.5V15a4.5 4.5 0 004.5 4.5zm6-6V15a3 3 0 01-3 3h-3a3 3 0 01-3-3v-1.5a3 3 0 013-3h3a3 3 0 013 3zm-1.5.75a.75.75 0 10-.75.75.75.75 0 00.75-.75z" /></svg>);