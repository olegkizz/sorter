class Sorter {
  constructor() {
     this.array = [];
     this.compare =  function(a, b){return a-b};
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;  
  }

  sort(indices) {
    var newarray = [];
    indices.sort(function(a, b){return a-b});
    for (var i = 0;i<indices.length;++i)
    {
        newarray.push(this.array[indices[i]]);
    }
    newarray.sort(this.compare);
    for (var i = 0;i<indices.length;++i)
    {
      this.array[indices[i]] = newarray[i];
    }
  }

  setComparator(compareFunction) {
    this.compare = compareFunction;
  }
}

module.exports = Sorter;
