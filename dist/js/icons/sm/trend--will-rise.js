import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M22.5 4.5A1.5 1.5 0 0124 6v7.527a1.507 1.507 0 01-3.013.001V9.657l-8.852 8.951a3.017 3.017 0 01-2.143.892H1.506A1.504 1.504 0 010 17.998a1.503 1.503 0 011.506-1.501h8.486l8.894-8.994h-3.81A1.566 1.566 0 0113.5 6a1.563 1.563 0 011.576-1.5z" /></svg>);