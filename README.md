# ember-es6-object

WIP: Object baseclass that can be used as a replacment for many ember objects. Larger goal is for ember to be clearer about its interfaces, so we can easily through around different objects, as long as they duck-type to what they need to.

## Usage

```sh
ember install ember-es6-object
```

```js
// app/adapters/application.js
import Parent from 'ember-es6-object';

export default class ApplicationAdapter extends Parent {
  findQuery() {
    return fetch(url).then(resp => resp.json());
  }
}
```


## Development

* `git clone <repository-url>` this repository
* `cd ember-es6-object`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
