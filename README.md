# simple-react-mirror
### 意外看到了由阿里前端开发的react新框架Mirror，看了介绍，感觉比传统的redux简单方便很多。
- redux需要利用reducer判断action的类型，进行state的变化，虽然利用了combineReducers，但是感觉效率上偏低，因为当dispatch(action)时，combineReducers中的所有reducer都会走一遍，找到对应的type。而mirror是将reducer和action融合在了一起，直接调用各自命名空间下的action方法，简便清晰了很多。
- 对于异步的问题，感觉都还好，mirror只是在mirror.model的effects进行集中的异步管理，而传统的redux是将异步放在actions中。

### 如何让程序跑起来
- 一贯的三部曲
```npm i```

```webpack```

```npm run start```

### 脚手架工具
- 最近还看到了react-app的脚手架工具create-react-app，其是利用react-scripts来实现webpack部署以及webpack-dev-server热更新的。
