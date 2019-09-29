import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from '../styles/theme';
import {GlobalStyles} from '../styles/global';
import './App.scss';

// The main entry point of my website
function App() {

  const [theme, setTheme] = useState('light');

  // toggle between dark and light theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
      <GlobalStyles />
      <div>

        <button onClick={toggleTheme}>toggle theme</button>
        <h1>Welcome to the {theme} side!</h1>
        <p>This is the website of <a href="https://www.linkedin.com/in/danafng/" target="_blank" rel="noopener noreferrer">Dana Ng.</a> </p> 
        <p>I'm a frontend engineer. </p>
        <p>Currently located in Boston, MA.</p>
        <p>I'm learning some new stuff. </p> 
        <p> Can't wait to make more improvements.</p>
        
        </div>
    </>
    </ThemeProvider>
  );
}

export default App;
