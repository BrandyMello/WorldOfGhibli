import { storeFilmsReducer } from './storeFilmsReducer';

describe('storeFilmsReducer', ()=> {
  it('should return state if the type does not match', () => {
    const expected = [];

    const result = storeFilmsReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the new state when the type matches "STORE_FILMS" it will return the films', async () => {
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
      type: 'STORE_FILMS',
      films: [
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

    const result = storeFilmsReducer(undefined, actionObj);

    await expect(result).toEqual(expected);
  });

  
})