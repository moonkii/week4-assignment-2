import reducer from './reducer';

import {
  addRestaurant,
  changeField,
} from './actions';

describe('reducer', () => {
  context('with existed action', () => {
    describe('changeField', () => {
      it('changes value of field', () => {
        const state = reducer({
          fields: {
            name: '',
            category: '',
            address: '',
          },
        }, changeField({
          name: 'name',
          value: '마녀주방',
        }));

        expect(state.fields.name).toBe('마녀주방');
      });
    });

    describe('addRestaurant', () => {
      context('when all fields are filled', () => {
        it('appends a new restaurant information', () => {
          const state = reducer({
            fields: {
              name: '마녀주방',
              category: '한식',
              address: '서울시 강남구',
            },
            restaurants: [],
          }, addRestaurant());

          expect(state.restaurants).toHaveLength(1);
        });
      });

      context('when all fields are not filled', () => {
        it('appends a new restaurant information', () => {
          const state = reducer({
            fields: {
              name: '마녀주방',
              category: '',
              address: '서울시 강남구',
            },
            restaurants: [],
          }, addRestaurant({
            name: '마녀주방',
            category: '',
            address: '서울시 강남구',
          }));

          expect(state.restaurants).toHaveLength(0);
        });
      });
    });
  });

  context('without existed action', () => {
    it('returns initial state', () => {
      const state = reducer();

      expect(state).toEqual({
        fields: {
          name: '',
          category: '',
          address: '',
        },
        restaurants: [],
      });
    });
  });
});
