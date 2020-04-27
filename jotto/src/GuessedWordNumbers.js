import React from 'react';
import PropTypes from 'prop-types';


const GuessedWordNumbers = (props) => {

    return (
        <div data-test='component-guessed-word-numbers'>
            <span data-test="guessed-count">Total Guesses: {props.guessedWords.length}</span>
        </div>
    );
};


GuessedWordNumbers.propTypes = {
    guessedWords: PropTypes.arrayOf(
      PropTypes.shape({
        guessedWord: PropTypes.string.isRequired,
        letterMatchCount: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
  

export default GuessedWordNumbers;