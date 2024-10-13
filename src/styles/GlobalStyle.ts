import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #FF4500;
    --secondary-color: #FFD700;
    --background-color: #FFFFFF;
    --text-color: #333333;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: darken(var(--primary-color), 10%);
    }
  }

  button {
    cursor: pointer;
    border: none;
    background-color: var(--primary-color);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
      background-color: darken(var(--primary-color), 10%);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;