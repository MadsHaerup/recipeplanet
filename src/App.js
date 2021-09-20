import { Router } from '@reach/router';
import './App.css';
import MainPage from './view/MainPage';
import { SinglePage } from './view/SinglePage';

function App() {
  return (
  <Router>
    <MainPage path="/"/>
    <MainPage path="/:id"/>
    <SinglePage path="/recipes/:id" />
  </Router>
  
  );
}

export default App;
