import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M21.994 9.086a2.251 2.251 0 00-1.452-1.943.418.418 0 00-.542.429V17.5l-.008.09A.5.5 0 0119 17.5V6.25l-.005-.154A2.25 2.25 0 0016.75 4H4.25l-.154.005A2.25 2.25 0 002 6.25v10.5l.005.184A3.25 3.25 0 005.25 20h13.5l.184-.005A3.25 3.25 0 0022 16.75v-7.5zM10 16a1 1 0 01-1 1H6a1 1 0 01-1-1v-4a1 1 0 011-1h3a1 1 0 011 1zm5 1h-2a1 1 0 010-2h2a1 1 0 010 2zm0-4h-2a1 1 0 010-2h2a1 1 0 010 2zm0-4H6a1 1 0 010-2h9a1 1 0 010 2z" /></svg>);