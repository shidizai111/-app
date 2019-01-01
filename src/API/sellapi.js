import axios from "axios";
// 请求商家头部信息
// 服务器地址 
// const urlIp="http://47.107.97.161:8080/";
// 本地地址
const urlIp="http://localhost:8080/";
const url=axios.create({baseURL:urlIp});
// 创建一个axios新对象
export function index(){
    if(urlIp.indexOf("localhost")!=-1){
        return url.get('seller.json');
    }else{
        return url.get('/api/seller')
    }
}

// 发送菜单列表请求
export function menu(){
    if(urlIp.indexOf("localhost")!=-1){
        return url.get('goods.json');
    }else{
        return url.get('api/goods');
    }
}

// 发送商家信息请求
export function merchant(){
    if(urlIp.indexOf("localhost")!=-1){
        return url.get('merchant.json');
    }else{
        return url.get('api/goods');
    }
}
// 接收留言消息
export function message(){
    if(urlIp.indexOf("localhost")!=-1){
        return url.get('message.json');
    }else{
        return url.get('api/goods');
    }
}
    