import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Title from './Title';

const App = ({ dispatch, books }) => {

  const bookNodes = books.items.map(book => {
    return (
      <div key={ book.id }>
        { book.text } - Read by { book.count } people.
        <button onClick={ () => dispatch({ type: 'ADD_COUNT', item: book }) }>Add reader</button>
        <button onClick={ () => dispatch(push('/test')) }>Transition to /test</button>
      </div>
    );
  });

  return (
    <div>
      <Title title="Cool boilerplate yo!" />
      { bookNodes }
    </div>
  );
};

const mapStateToProps = (state) => {
  const { books } = state;
  return { books };
};

// Connect props to component
export default connect(mapStateToProps)(App);
