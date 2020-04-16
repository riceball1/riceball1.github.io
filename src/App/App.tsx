import React, { useState } from 'react';
import blogData from '../data';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
import GlobalStyles from '../styles/global';
import {
  CheckBoxWrapper,
  CheckBox,
  CheckBoxLabel
} from '../styles/ToggleButton/ToggleButton';
import './App.scss';

// The main entry point of my website
const App = () => {
  const [theme, setTheme] = useState('dark');

  // toggle between dark and light theme
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const blogFeed = () => {
      return blogData.reverse().map(blog => {
        return (<div className="App-blogItem" key={blog.url}>
           <p><a href={blog.url}>{blog.title}</a></p>
           <p>{blog.duration}</p>
         </div>)
      })
  }

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
        <div className="App-main">
          <div className="App-intro">
            <h1>Welcome to the {theme} side 👋 !</h1>
            <p>
              I'm{' '}
              <a
                href="https://www.linkedin.com/in/danafng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Dana Ng</strong>
              </a>
              , a frontend engineer at Wayfair.
            </p>
            <p>
              Check out my my projects on{' '}
              <a
                href="https://github.com/riceball1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>github</strong>
              </a>
              .
            </p>
            <p>Currently living in <strong>Oakland, CA</strong>.</p>
            <p className="App-smallBox">
              Reach out to me if you want to talk about: minimalism, food, travel, languages or fútbol.
            </p>
            <p><strong>"I never lose, either I win or I learn" -- Nelson Mandela</strong></p>
            {/* <div className="App-blog">
            <h2>What's Happening?</h2>
           {blogFeed()}
          </div> */}
          </div>
          
          </div>
      </>
    </ThemeProvider>
  );
};

export default App;
