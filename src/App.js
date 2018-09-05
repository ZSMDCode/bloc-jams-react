import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './index.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
      <nav>
      <h5><Link to='/library'>>Click here for the Library</Link></h5>
      <h5><Link to='/'>>Click here for the Landing Page</Link></h5>
      </nav>
      <h1>Alphagility Music Player</h1>
      </header>
      <main>
      <Route exact path="/" component={Landing} />
      <Route path="/library" component={Library} />
      <Route path="/album/:slug" component={Album} />
      </main>
      </div>
    );
  }
}
export default App;
