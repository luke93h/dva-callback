# dva-callback

Auto callback plugin for dva. :clap: You don't need to call callback manually any more.

---

## Install

```bash
$ npm install dva-callback --save
```

## Usage

```javascript
import createCallback from 'dva-loading';

const app = dva();
app.use(createCallback(opts));
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

Then we can access input callback in dispatch.

### opts

- `opts.alias`: property key of callback, type String, Default `callback`

## License

[MIT](https://tldrlegal.com/license/mit-license)
