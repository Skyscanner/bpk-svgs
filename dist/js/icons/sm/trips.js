import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 1.5a7.392 7.392 0 00-5.543 2.46v.001A2.125 2.125 0 006 5.319v16.076A1.057 1.057 0 007 22.5h10a1.057 1.057 0 001-1.105V5.386a2.206 2.206 0 00-.555-1.5A7.444 7.444 0 0012 1.5zM15 7c0 .276-.168.5-.375.5h-5.25C9.168 7.5 9 7.276 9 7v-.583a1.003 1.003 0 01.23-.684A3.858 3.858 0 0112 4.5a3.793 3.793 0 012.758 1.262 1.048 1.048 0 01.242.71zM4.5 9v12a1.5 1.5 0 01-3 0V9a1.5 1.5 0 013 0zm18 0v12a1.5 1.5 0 01-3 0V9a1.5 1.5 0 013 0z" /></svg>);