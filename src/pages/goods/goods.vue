<template>
<div class="goods">
    <!-- 上面 -->
    <div class="top">
        <!-- 左边 -->
        <div class="left">
            <ul class="content">
                <li v-for="(value,index) in data" @click="btn(index)" :class="{leftTree:true ,colorcheked:curSelectedIndex == index }" >{{value.name}}</li>
            </ul>
        </div>
        <!-- 右边 -->
        <div class="right">
            <!-- 单人特色套餐 -->
            <div class="content">
            <div class="Onemeal" v-for="(item,index) in data" :id="index">
                <p class="font1">{{item.name}}</p>
                <div class="content1" v-for="(value,index) in item.foods">
                    <img :src="value.icon" alt="">
                    <div>
                        <p>{{value.name}}</p>
                        <p>{{value.description}}</p>
                        <p>月售{{value.sellCount}}份&emsp;好评率{{value.rating}}%</p>
                        <p>&yen;{{value.price}}</p>
                    </div>
                    <Button v-if="value.num != 0" type="warning" @click='clickDec(value)'>-</Button>
                    <label v-if="value.num != 0">{{value.num}}</label>
                    <Button type="success" @click='clickAdd(value)'>+</Button>
                </div>
            </div>
            </div>
        </div>
    </div>
    <!-- 下面 -->
    <div class='shopcar'>              
           <Poptip placement="top" width="400">
                <img src="../../assets/images/shopcar.png" alt="" width="50px">
                <div class="api" slot="content">
                   <shopcar></shopcar> 
                </div>
            </Poptip>
    </div>
</div>
    
</template>

<script>
// 引入插件
import BScroll from 'better-scroll'
// import{data} from '../../API/data.js'
// 移入购物车
import shopcar from "./shopcar"
// import{menu} from "../../API/sellapi.js";
    export default {
        data(){
            return{
                scrollLeft: undefined,     //左侧滚动组件
                scrollRight: undefined,     //右侧滚动组件
                curSelectedIndex: 0, //默认选中左侧第一个标签
            }
        },
            computed:{
        // 商品列表
        data(){
            return this.$store.state.goodslist
        }
    },
       async created(){
              //保存ajax拿到的数据

            //提交一个action 初始化数据！
            this.$store.dispatch('initName')

        },
        // 页面渲染完成函数
        mounted(){
            // 获取dom元素
            let left = document.querySelector(".left");
            // console.log(left)
            // 创建滚动初始化实例对象
            let scroll = new BScroll(left,{
                click:true
            });
            let right=document.querySelector(".right");
            // console.log(right)             // 创建滚动初始化实例对象
            let scrolls = new BScroll(right,{
                click:true
            });
            this.scrollRight =scrolls;
            this.scrollLeft =scroll;
        },
        methods:{
            btn(index){
                 let domEl = document.getElementById(index)
                // 滚动到指定目标元素
                this.scrollRight.scrollToElement(domEl,500)
                
                // 设置当前选中标签的索引
                this.curSelectedIndex = index
                
            },
            // 商品数量加减
             clickDec(data){
               this.$store.commit({
                   type: 'mchangeFoodsNum',
                   name: data.name,
                   val: -1
               })
           },
           clickAdd(data){
               this.$store.commit({
                   type: 'mchangeFoodsNum',
                   name: data.name,
                   val: 1
               })
           }
        },
        components:{
            shopcar,
        },

    }
</script>

<style scoped lang="less">
.top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 472px;
    border-top:1px solid #e5e5e6;
// 左边
    .left{
        width: 20%;
        // background-color: rgb(224, 139, 224);
        height: 400px;
         overflow: auto;
        ul{
            width:100%;
            // display: flex;
            // flex-direction: column;
            justify-content: space-between;
            align-items: center;
            // height: 472px;
            font-size:12px;
            list-style: none;
            // background-color:#f3f6f6;
            

            li{
                // align-self:center;
                height: 70px;
                // line-height: 50px;
                width:100%;
                border-bottom:1px solid #e5e5e6;
                // background-color:#f3f6f6;
                // height: 80%;
                
            }
        }
    }
    // 右边
    .right{
        height:500px;
        width:80% ;
        background-color: rgb(109, 165, 156);
        overflow: auto;
        // 单人套餐
        .Onemeal{
            .font1{
                width: 100%;
                // background-color: #f3f6f6;
            }
            .content1{
                // background-color: #ffffff;
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding:10px;
                div{
                    align-self:flex-end;
                };
                label{
                    align-self: flex-end;
                }
                img{
                    widows:40px;
                    height:40px;
                }

            }
        }
    }
}
.shopcar{
    height: 50px;
    // background-color: black;
    position: fixed;
    bottom:0px;
    width: 80%;
}
// 被选中颜色
.colorcheked{
    background-color: rgb(53, 169, 223);
}
</style>