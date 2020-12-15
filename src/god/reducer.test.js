import reducer from './reducer';

import {
  setRestaurants,
  changeRestaurantField,
  addRestaurant,
} from './actions';

import restaurants from '../../fixtures/restaurants';

describe('reducer', () => {
  describe('setRestaurants', () => {
    it('changes restaurants array', () => {
      const initialState = [];

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  describe('changeRestaurantField', () => {
    it('change restaurant form', () => {
      const initialState = {
        restaurant: {
          name: '이름',
          category: '분류',
          address: '주소',
        },
      };

      const state = reducer(initialState, changeRestaurantField({
        name: 'name',
        value: '마법사 식당',
      }));

      expect(state.restaurant.name).toBe('마법사 식당');
    });
  });

  describe('addRestaurant', () => {
    it('append restaurant into restaurants and clear restaurant form', () => {
      const initialState = {
        newId: 100,
        restaurants: [],
        restaurant: {
          name: '이름',
          category: '분류',
          address: '주소',
        },
      };

      const state = reducer(initialState, addRestaurant());

      const restaurant = state.restaurants[state.restaurants.length - 1];

      expect(restaurant.id).toBe(100);
      expect(restaurant.name).toBe('이름');

      expect(state.restaurant.name).toBe('');

      expect(state.newId).toBe(101);
    });
  });
});
