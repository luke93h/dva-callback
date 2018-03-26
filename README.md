# dva-callback
dva插件，自动在effect完成时执行callback，免去了手动执行的麻烦

---

## Install

```bash
$ npm install dva-callback --save
```

## Usage

```javascript
import createCallback from 'dva-callback';

const app = dva();
app.use(createCallback({
  alias: 'callback' // 回调函数的名字，默认为'callback'
));
```

```javascript
this.props.dispatch({
  type,
  payload,
  callback: () => {
    console.log('executed')
  }
});
```

### createCallback参数

- `alias`: 回调函数的名字，默认为'callback'

## License

[MIT](https://tldrlegal.com/license/mit-license)
