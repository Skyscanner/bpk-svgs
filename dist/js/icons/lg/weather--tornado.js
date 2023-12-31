import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M3 3.5a1 1 0 000 2h18a1 1 0 000-2zm2 3a1 1 0 000 2h14a1 1 0 000-2zm1 4a1 1 0 011-1h13a1 1 0 010 2H7a1 1 0 01-1-1zm6 2a1 1 0 000 2h7a1 1 0 000-2zm-1 4a1 1 0 011-1h4a1 1 0 010 2h-4a1 1 0 01-1-1zm0 2a1 1 0 000 2h2a1 1 0 000-2z" /></svg>);