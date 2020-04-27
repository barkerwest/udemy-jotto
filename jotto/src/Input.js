import React, { Component} from 'react';
import { connect} from 'react-redux';
import {guessWord } from './actions'


export class UnconnectedInput extends Component {

    constructor(props)
    {
        super(props);

        this.state = {currentGuess: null};

        // bind this for submitGuessedWord
        this.submitGuessedWord = this.submitGuessedWord.bind(this);
    }

    submitGuessedWord(evt){
        evt.preventDefault();
        const guessedWord = this.state.currentGuess;

        if ( guessedWord && guessedWord.length > 0){
          this.props.guessWord(guessedWord);
        }
    }

    render () {
        const contents = this.props.success
        ? null
        : (
                <form classname="form-inline">
                    <input
                        data-test="input-box"
                        className="mb-2 xm-sm-3"
                        type="test"
                        value={this.state.currentGuess}
                        onChange = {(evt) => this.setState({currentGuess: evt.target.value})}
                        placeholder="enter guess">
                    </input>
                    <button
                        data-test="submit-button"
                        className="btn btn-primary mb-2"
                        onClick={(evt) => this.submitGuessedWord(evt)}
                        type="submit">
                        Submit
                </button>
                </form>
        )
        return (
            <div data-test="component-input">
                {contents}
            </div>
        );
    }
};

const mapStateToProps = ({ success }) => {
    return { success };
}

export default connect(mapStateToProps, {guessWord})(UnconnectedInput);