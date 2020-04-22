import { correctGuess, actionTypes } from './'

describe ('correctGuess', () => {
    test('returns action with type CORRECT_GUESS', () => {
        const action = correctGuess();

        // cannot use toBe() to compare objects
        // to equal is a deep comparision
        expect(action).toEqual({type: actionTypes.CORRECT_GUESS});

    })
})