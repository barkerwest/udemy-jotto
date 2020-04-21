import { getLetterMatchCount} from './'

describe ('getLetterMatchCount', () => {

    const secretWord = 'party';

    test ('returns correct count when no matching letters', () => {

        const letterMatchCount = getLetterMatchCount('bones', secretWord);
        expect(letterMatchCount).toBe(0);
    });

    test ('returns correct count when three matching letters', () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord);
        expect(letterMatchCount).toBe(3);
    });

    test ('returns correct count when duplicate matching letters', () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord);
        expect(letterMatchCount).toBe(3);
    });

});