import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import {
  CheckBoxWrapper,
  CheckBox,
  CheckBoxLabel
} from '../styles/ToggleButton/ToggleButton';
import './App.scss';

// The main entry point of my website
function App() {
  const [theme, setTheme] = useState('light');

  // toggle between dark and light theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App-header">
          <CheckBoxWrapper>
            <CheckBox id="checkbox" type="checkbox" onChange={toggleTheme} />
            <CheckBoxLabel htmlFor="checkbox" />
            <p>{`${theme}`}</p>
          </CheckBoxWrapper>
        </div>
          <div className="App-intro">
            <h1>Welcome to the {theme} side!</h1>
            <p>
              I'm{' '}
              <a
                href="https://www.linkedin.com/in/danafng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dana Ng
              </a>
              , a frontend engineer.
            </p>
            <p>
              Check out my my projects on{' '}
              <a
                href="https://github.com/riceball1"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
              .
            </p>
            <p>Currently living in Oakland, CA.</p>
            <p>
              Reach out to me if you want to travel some countries together.
            </p>
            <p>"I never lose, either I win or I learn" -- Nelson Mandela</p>
          </div>
      </>
    </ThemeProvider>
  );
}

export default App;
