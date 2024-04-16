import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M1.752 16.371V12.67h1.96c2.112 0 3.293-1.016 3.293-2.585 0-1.568-1.181-2.584-3.294-2.584H.14C.042 7.5 0 7.539 0 7.629v8.742c0 .09.042.129.139.129h1.473c.098 0 .14-.039.14-.129zm-.001-5.194V8.991h2.03c.847 0 1.445.373 1.445 1.093s-.598 1.093-1.445 1.093zM8.474 16.5h2.959a4.244 4.244 0 004.588-4.5 4.244 4.244 0 00-4.587-4.5h-2.96c-.098 0-.14.039-.14.129v8.742c0 .09.042.129.14.129zm1.611-7.51h1.265a2.677 2.677 0 012.864 3.009 2.677 2.677 0 01-2.864 3.009h-1.264l-.001.001zM24 7.629v1.233c0 .09-.042.128-.139.128h-4.559v2.226h4.114c.097 0 .14.038.14.128v1.235c0 .09-.042.128-.14.128h-4.114v3.664c0 .09-.042.129-.139.129H17.69c-.098 0-.14-.039-.14-.129V7.629c0-.09.042-.129.14-.129h6.171c.097 0 .139.039.139.129z" /></svg>);