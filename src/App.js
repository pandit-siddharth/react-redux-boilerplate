import React, { Component } from 'react';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

class App extends Component {


  render() {
    return (
      <div>
        <AddBook />
        <BookList />
      </div>
    );
  }
}

export default App;
