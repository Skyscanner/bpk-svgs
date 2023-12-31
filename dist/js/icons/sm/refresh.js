import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 6a6.002 6.002 0 00-5.501 3.6 1.5 1.5 0 01-2.75-1.2A9.002 9.002 0 0118 5.292V4.5a1.5 1.5 0 013 0V9a1.5 1.5 0 01-1.5 1.5H15a1.5 1.5 0 010-3h.969A5.978 5.978 0 0012 6zM8.03 16.5H9a1.5 1.5 0 000-3H4.5A1.5 1.5 0 003 15v4.5a1.5 1.5 0 003 0v-.792A9.001 9.001 0 0020.25 15.6a1.5 1.5 0 10-2.727-1.25l-.022.05a6.002 6.002 0 01-9.47 2.1z" /></svg>);