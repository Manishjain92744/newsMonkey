
import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';


export default class App extends Component {
  pageSize=5;
  apiKey=process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router> 
       <Navbar/>
       <Routes>
        <Route exact path="/" element={ <News key ="general" apiKey={this.apiKey} pageSize={this.pageSize} category="general" country="in" />} />
        <Route exact path="/business" element={ <News key ="business" apiKey={this.apiKey} pageSize={this.pageSize} category="business" country="in" />} />
        <Route exact path="/entertainment" element={ <News key ="entertainment" apiKey={this.apiKey} pageSize={this.pageSize} category="entertainment" country="in" />} />
        <Route exact path="/general" element={ <News key ="general" apiKey={this.apiKey} pageSize={this.pageSize} category="general" country="in" />} />
        <Route exact path="/health" element={ <News key ="health" apiKey={this.apiKey} pageSize={this.pageSize} category="health" country="in" />} />
        <Route exact path="/science" element={ <News key ="science" apiKey={this.apiKey} pageSize={this.pageSize} category="science" country="in" />} />
        <Route exact path="/sports" element={ <News key ="sports" apiKey={this.apiKey} pageSize={this.pageSize} category="sports" country="in" />} />
        <Route exact path="/technology" element={ <News key ="technology" apiKey={this.apiKey} pageSize={this.pageSize} category="technology" country="in" />} />
      </Routes>
     
       </Router>
      </div>
    )
  }
}
