import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><g clipPath="url(#a)"><path d="M15.75 6.127L21.437.44a1.501 1.501 0 012.123 2.123L2.563 23.56A1.501 1.501 0 11.44 21.437l4.81-4.81V14.25A2.25 2.25 0 017.5 12h.75V2.248A2.25 2.25 0 0110.5 0h3a2.25 2.25 0 012.25 2.25v3.877zm-1.5 1.5V2.625a.375.375 0 00-.375-.375h-3.75a.375.375 0 00-.375.375V12h.127l4.373-4.373zm3.86 5.051c-.132-.135-.345-.118-.478.015L7.609 22.765a.318.318 0 00-.098.264 1.125 1.125 0 002.239-.154V22.5h4.5v.375a1.125 1.125 0 002.25 0V22.5a2.25 2.25 0 002.25-2.25v-6c0-.612-.244-1.166-.64-1.572z" /></g></svg>);