import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M2 7v-.903a.873.873 0 01.228-.608A14.235 14.235 0 0112 2a14.5 14.5 0 019.705 3.467.932.932 0 01.295.694V7a1 1 0 01-1 1H3a1 1 0 01-1-1zm20 14a1 1 0 00-1-1H3a1 1 0 000 2h18a1 1 0 001-1zM6 9a1 1 0 011 1v8a1 1 0 01-2 0v-8a1 1 0 011-1zm8 0a1 1 0 011 1v8a1 1 0 01-2 0v-8a1 1 0 011-1zm-5 1a1 1 0 012 0v8a1 1 0 01-2 0zm9-1a1 1 0 011 1v8a1 1 0 01-2 0v-8a1 1 0 011-1z" /></svg>);