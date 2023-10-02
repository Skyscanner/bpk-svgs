import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M21.702 3.522L19.38 2.73a22.771 22.771 0 00-14.758 0l-2.323.794h-.001A1.194 1.194 0 001.5 4.657V15.77A3.547 3.547 0 005 19.362h2.614a2.1 2.1 0 011.504.634l2.13 2.186a1.05 1.05 0 001.485.02l.019-.02 2.13-2.186a2.1 2.1 0 011.504-.634H19a3.547 3.547 0 003.5-3.59V4.657a1.195 1.195 0 00-.798-1.136zM7.5 12A1.5 1.5 0 119 10.5 1.5 1.5 0 017.5 12zm4.5 0a1.5 1.5 0 111.5-1.5A1.5 1.5 0 0112 12zm4.5 0a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5z" /></svg>);