import SampleActionTypes from './sample.types';

const INITIAL_STATE = {
  data: {
    name: 'Aituar Abdiluly',
    email: 'aituufs@gmail.com',
    githubURL: 'https://github.com/AituAbdiluly'
  }
};

const sampleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SampleActionTypes.GET_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default sampleReducer;
