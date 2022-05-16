export default {
  install(app) {
// 첫번째 인자는 app객체, 두 번째 인자는 option
    app.config.globalProperties.$fetch = (url, opts) => {
      return fetch(url, opts).then(res => res.json());
    };
  }
};