export default class {
  static create(attrs) {
    return new this(attrs);
  }

  get(key) {
    return this[key];
  }
}
