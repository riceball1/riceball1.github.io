import React, {useState} from 'react';
import Nav from './Nav/Nav';
import './App.css';

function App() {
  const [style, setColor] = useState({
    style: {color: 'white', fontsize: 'bold', margin: "50px"},
    colorSet: false
  })

  // change color
  const changeStyle = () => {
    const newStyle = {...style.style, color: 'orange'};
    setColor({style: newStyle, colorSet: true});
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">

        <div className="App-intro">
          <p style={style.style}>Hello <span role="img" aria-label="hand wave">👋</span>! <br/> I'm Dana Ng a Frontend Engineer.</p>
          <div>
            <button onClick={changeStyle} disabled={style.colorSet}>
            Change Style with React Hooks
            </button>
          </div>
        </div>
        <div className="App-block" id="about">
          <h2>About Dana</h2>
          <p>I am a frontend engineer who builds UI features using JavaScript, CSS and HTML. I use technologies such as React, Sass, GraphQL, and Redux daily. I unit test with Jest and Enzyme, as well as use flow type + eslint for static analysis. I continue to hone my skills by learning about web performance, accessibility, typescript, nodejs, plus improving my computer science knowledge in data structures and algorithms. </p>
          <p>Not only do I enjoy web development, I also am a minimalist, foodie, international traveller, language lover, and enjoy strength training + soccer.</p>
        </div>

        <div className="App-block" id="project">
        <h2>Projects</h2>
        </div>

        <div className="App-block" id="connect">
        <h2>Connect</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
