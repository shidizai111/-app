import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

// 获取菜单信息
import{menu} from "../API/sellapi";
// 接收商家信息数据
import{merchant} from "../API/sellapi"
// 接收评价消息
import{message} from "./sellapi"
// 创建数据仓库
export default new Vuex.Store({
    // state状态（数据）存储的地方
    state:{
        goodslist:[],
        merchantdata:[],
        message:[]
    },
    mutations:{
        // 初始化数据
        datas(state,obj){
            state.goodslist=obj.data
        },
        // 修改数据
             //商品数量+1 -1
       mchangeFoodsNum(state, obj){
        for(let item of state.goodslist){
            for(let food of item.foods){
                if(food.name == obj.name){
                    food.num += obj.val
                    return
                }
            }
        }
       },
    //    接收商家信息
    merchants2(state,res){
        state.merchantdata=res.data.data
        // console.log(res.data);
    },
    // 接收评价消息
    messages(state,res){
        state.message=res.data.data
    }

    },
    actions: {
        // 接收数据
       async initName(context){
            let res=await menu();
            let arr = res.data;

            for(let item of arr){
                for(let food of item.foods){
                    food.num = 0
                }
            }
            // mutations触发方法 传参
            context.commit({
                type:"datas",
                data:arr
            })
        },
        // 接收商家信息数据
       async merchant(context){
            let res=await merchant();
            // mutations触发方法
            context.commit({
                type:'merchants2',
                data:res
            })
            // console.log(res);
        },
        // 接收评价消息
        async messages1(context){
            let res=await message();
            // mutations触发方法
            context.commit({
                type:'messages',
                data:res
            })
            // console.log(res);
        }
    }
})

