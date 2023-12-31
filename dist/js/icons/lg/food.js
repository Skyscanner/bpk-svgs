import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M18 2a1 1 0 01.993.884L19 3v18a1 1 0 01-1.993.117L17 21v-5h-1a1 1 0 01-.993-.883L15 15V7c0-2.21 1.5-5 3-5zm-6 0a1 1 0 01.993.884L13 3v5a4.002 4.002 0 01-3 3.874V21a1 1 0 01-1.993.117L8 21v-9.126a4.002 4.002 0 01-2.995-3.668L5 8V3a1 1 0 011.993-.117L7 3v5a2 2 0 001 1.732V3a1 1 0 011.993-.117L10 3l.001 6.732a2 2 0 00.992-1.563L11 8V3a1 1 0 011-1z" /></svg>);