import axios from 'axios'
import QS from 'qs'
import { Message, Loading } from 'element-ui'

// 封装文件上传的头信息
const http = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    return QS.stringify(data)
  }
  ],
  paramsSerializer: function (data) {
    return QS.stringify(data)
  }
})

// POST传参序列化
// axios.interceptors.request.use(function (config) {
//     config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
//     if (config.method === 'post') {
//         console.log(config)
//         config.data = QS.stringify(config.data)
//     }
//     return config
// }, function (err) {
//     return Promise.reject(err)
// })

export default {
  getData (url, params) {
    Loading.service('加载中')
    return new Promise((resolve, reject) => {
      axios.get(url, params)
        .then(response => {
          if (response.data.code === 500) {
            Message(response.data.message)
          } else if (response.data.code === 200 && response.data.body === 'null') {
            Message('系统错误')
          } else {
            resolve(response.data)
          }

          Loading.service('加载中').close()
        }, err => {
          reject(err)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  postData (url, params) {
    Loading.service('加载中')
    return new Promise((resolve, reject) => {
      axios.post(url, params)
        .then(response => {
          if (response.data.code === 500) {
            Message(response.data.message)
          } else if (response.data.code === 200 && response.data.body === 'null') {
            Message('系统错误')
          } else {
            resolve(response.data)
          }

          Loading.service('加载中').close()
        }, err => {
          Message(err)
          reject(err)
        })
        .catch((error) => {
          Message(error)
          reject(error)
        })
    })
  },
  http: http
}
