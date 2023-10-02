import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M6 5.5C6 3.567 7.57 2 9.506 2a3.507 3.507 0 013.375 2.545h6.676a1.2 1.2 0 011.073.662 3.494 3.494 0 010 3.13l-.067.135a.957.957 0 01-1.711-.854l.067-.134c.161-.322.207-.685.136-1.03H17.16c.059.64-.06 1.294-.355 1.884l-.068.134a.957.957 0 01-1.71-.854l.067-.134c.161-.322.207-.685.136-1.03h-2.35A3.507 3.507 0 019.506 9 3.503 3.503 0 016 5.5zm3.506-1.591a1.591 1.591 0 100 3.182 1.592 1.592 0 000-3.182zM3 13.5v7a1.5 1.5 0 01-3 0v-7a1.5 1.5 0 013 0zm2 .5a2 2 0 012-2h6.6a2 2 0 01.77.154l3.015 1.256a1 1 0 01.615.923v.167a1 1 0 01-1 1h-3.917a.75.75 0 000 1.5h2.371a1 1 0 00.407-.086l6.432-2.86a1 1 0 011.301.467l.044.09a1 1 0 01-.27 1.227l-7.153 5.724a2 2 0 01-1.25.438H7a2 2 0 01-2-2v-6z" /></svg>);