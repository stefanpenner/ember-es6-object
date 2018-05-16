import Ember from 'ember';

export default class {
  constructor() {
    Ember.meta(this); 
  }
    
  static create(attrs) {
    return new this(attrs);
  } 
  
  static extend() {
    throw new Error('please use ES6 class syntax for subclassing this object');
  }
}
