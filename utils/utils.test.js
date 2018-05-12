const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBeA('number').toBe(44);
    });
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(3, 4, (res) => {
      expect(res).toBeA('number').toBe(7);
      done();
    });
  });

  it('should square a number', () => {
    var res = utils.square(3);

    expect(res).toBeA('number').toBe(9);
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(3, (res) => {
      expect(res).toBeA('number').toBe(9);
      done();
    });
  });
});

// it('should expect some values', () => {
//   expect(12).toNotBe(11);
//   expect({name: 'Ahmed'}).toEqual({name: 'Ahmed'});
//   expect({name: 'Ahmed'}).toNotEqual({name: 'ahmed'});
//   expect([1,2,3]).toInclude(2);
//   expect([1,2,3]).toExclude(5);
//   expect({
//     name: 'Ahmed',
//     age: 26,
//     location: 'Egypt'
//   }).toInclude({
//     age: 26
//   });
// });

// should verify that first and last names are set
// assert it includes firstName and lastName with proper values
it('should set firstName and lastName', () => {
  var user = {location: 'Egypt', age: 26};
  var res = utils.setName(user, 'Ahmed Salem');
  expect(res).toInclude({
    firstName: 'Ahmed',
    lastName: 'Salem'
  });

});
