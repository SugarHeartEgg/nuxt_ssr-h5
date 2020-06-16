import qs from "qs";

export default function ({ $axios, app }) {
    console.log(app.$cookies.get('token'))  // 每次请求获取cooie

    // 基本配置
    $axios.defaults.timeout = 10000;
    $axios.defaults.headers = { 'Content-Type': 'application/json' }
    $axios.defaults.transformRequest = [function (data) {
        data = qs.stringify(data)
        return data
    }]

    $axios.onRequest(config => {
        //获取cookie放在头部传到后端
        config.headers.Authorization = app.$cookies.get('token')
        config.data = qs.stringify(config.data, {
            allowDots: true // Option allowDots can be used to enable dot notation
        });
        return config;
    });

    $axios.onResponse(response => {
        return Promise.resolve(response.data);
    });

    $axios.onError(error => {
        return Promise.reject(error);
    });
}