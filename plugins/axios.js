import qs from "qs";
import { Toast } from 'vant';

export default ({ $axios, app, redirect }, inject) => {
    // 基本配置
    $axios.setBaseURL('http://192.168.103.121:8083/customer-service')
    $axios.defaults.timeout = 15000;
    $axios.defaults.withCredentials = true;
    $axios.setHeader('Content-Type', 'application/json', ['post'])

    // $axios.defaults.transformRequest = [(data) => {
    //     data = qs.parse(data)
    //     console.log(data);
    //     return data
    // }]

    // console.log($axios.defaults.baseURL);
    // console.log(app.$cookies);
    // console.log(app.$cookies.get('token'))  // 每次请求获取cooie

    $axios.onRequest(config => {
        //获取cookie放在头部传到后端
        if (app.$cookies.get('token')) {
            config.headers.Authorization = app.$cookies.get('token')
        }
        config.data = qs.parse(config.data, {
            allowDots: true // Option allowDots can be used to enable dot notation
        });
        return config;
    });

    $axios.onResponse(response => {
        const candeeHttpCode = response.data.code
        const httpStatus = response.status

        return new Promise((resolve, reject) => {
            if (candeeHttpCode === 200 && httpStatus === 200) {
                return resolve(response.data)
            } else {
                switch (candeeHttpCode) {
                    case 500:
                        Toast('Server Error')
                        break;
                    case 501:
                        Toast('Request parameter error')
                        break;
                    case 502:
                        Toast('Not logged in or token expired')
                        break;
                    case 503:
                        Toast('Permission denied')
                        break;
                    case 505:
                        Toast('account or password incorrect')
                        break;
                    case 506:
                        Toast('User does not exist')
                        break;
                    default:
                        reject(response.data.message)
                        break;
                }
            }
        })

    });

    $axios.onError(error => {
        return Promise.reject(error);
    });
}