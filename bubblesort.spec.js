describe('Bubble Sort', function(){
  beforeEach(function() {
    var array = [5, 2, 4, 1, 3];
  })
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts the values', function() {
    expect(bubbleSort(array).toEqual([1, 2, 3, 4, 5]))
  });
});

describe('Swap', function() {
  it('how many times swapped', function() {
    expect(swap).tohaveBeenCalledTimes(100);
  });
});
