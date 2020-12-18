import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
    render() {
      return (
        <div className="App">
          <Header title="WEB" sub="World Wide WEB !"></Header>
            <TOC></TOC>
          <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
        </div>
      );
    }
  }

export default App;
