# VueTeller

**Don't use!! It's still dev**
vue-teller is error handling module.

[DEMO](https://akifo.github.io/vue-teller/)
[Usage](#usage)

## Install

### Donwload Manually

[Download zip from Github](https://github.com/akifo/vue-teller/archive/master.zip)

### NPM

```bash
npm install vue-teller
```

## SetUp

### Browser globals

```html
<link rel="stylesheet" href="/lib/vue-teller.min.css"/>

<script src="https://cdn.css.net/libs/vue/2.3.3/vue.js"></script>
<script src='/lib/vue-teller.min.js'></script>
```

### ES6

```javascript
import VueTeller from 'vue-teller'
Vue.use(VueTeller)
```

## Usage

```javascript
  SomePromiseTask()
  .then(res => {
    // do something
  })
  .catch(this.$teller)
```

## Options

now writing...

## Development

```bash
# watch
npm run dev
# build
npm run build
```

## Examples

```bash
$ npm install
$ npm run dev # serve examples at localhost:8080
```
