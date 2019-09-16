import { storeCharactersReducer } from './storeCharactersReducer';

describe('storeCharactersReducer', () => {
  it('should return state if the type does not match', () => {
    const expected = [];
    const result = storeCharactersReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the new state when the type matches "STORE_CHARACTERS" it will return the characters', async () => {
    const expected = [
      {
        id: 5678,
        name: 'stray'
      },
      {
        id: 5679,
        name: 'straying'
      }
    ];

    const actionObj = {
      type: 'STORE_CHARACTERS',
      characters: [
        {
          id: 5678,
          name: 'stray'
        },
        {
          id: 5679,
          name: 'straying'
        }
      ]
    };

    const result = storeCharactersReducer(undefined, actionObj);

    await expect(result).toEqual(expected);
  });
});