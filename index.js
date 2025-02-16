class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
    
  }

  add(item) {
   

    this.items.push(item);
    
    this.items.sort(function(a, b) {
      return a - b;
    });

    this.length = this.items.length;
     
  }

  get(pos) {
    if (pos < 0 || pos > this.length){
      throw new Error("_OutOfBounds_");
    }
    return this.items[index];

  }

  max() {
    if (this.length === 0){
      throw new Error("EmptySortedList")
    } else {
      
      return Math.max(...this.items)
    }

  }

  min() {
    if (this.length === 0){
      throw new Error("EmptySortedList")
    } else {
      
      return Math.min(...this.items)
    }

  }

  sum() {
    if (this.length === 0){
      return 0
    } else { 
      let suma = 0;
      this.items.forEach(function(item){suma += item;});
      return suma
    }
  }

  avg() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    } else {
      
    }
  }
}

module.exports = SortedList;
