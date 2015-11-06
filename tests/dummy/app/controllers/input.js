import Ember from 'ember';

export default Ember.Controller.extend({

  multipleConstraints: [
    {
      'errorMessage': 'Value is not even',
      'isError': (inputValue) => {
        return (+inputValue % 2) === 1;
      }
    },
    {
      'errorMessage': 'Value does not equal 4',
      'isError': (inputValue) => {
        return +inputValue !== 4;
      }
    }
  ],

  singleContraint: {
    'errorMessage': 'Value does not equal 16',
    'isError': (inputValue) => {
      return +inputValue !== 16;
    }
  },

  emailValidation: {
    'errorMessage': 'Please provide email in a valid format',
    'isError': (inputValue) => {
      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return !emailPattern.test(inputValue);
    }
  }
});
