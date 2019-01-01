<template>
    <div class="message">
        <!-- 上面-->
        <div class="top">
            <!-- 左边 -->
            <div class="top1">
                <div class="topl">
                    <p>粥品香坊</p>
                    <p>
                        <img src="../../assets/images/star24_on@2x.png">
                        <img src="../../assets/images/star24_on@2x.png">
                        <img src="../../assets/images/star24_on@2x.png">
                        <img src="../../assets/images/star24_on@2x.png">
                        <img src="../../assets/images/star24_on@2x.png">
                    月售60单</p>
                </div>
                <!-- 右边 -->
                <div class="topr">
                    <img src="../../assets/images/实心桃心.png" alt="" style="width:50px">
                    已收藏
                </div>
            </div>
            <div class="top2">
                <ul>
                    <li>
                        <p>起送价</p>
                        <p>20元</p>
                    </li>
                    <li>
                        <p>商家配送</p>
                        <p>4元</p>
                    </li>
                    <li>
                        <p>平均配送时间</p>
                        <p>39分钟</p>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 中间 -->
        <div class="center">
            <div class="contner1">
                公告与活动
                <p>粥品香坊</p>
                <ul>
                    <li v-for="(itme,index) in this.$store.state.merchantdata">
                        <img :src="itme.icon" alt="">
                        {{itme.content}}</li>
                </ul>
            </div>
        </div>

        <!-- 商家实景 -->
        <div class="imgs">
            <p>商家实景</p>
            <div class="imgss">
                <img src="../../assets/images/2.jpg" alt="" width="100px">
                <img src="../../assets/images/2.jpg" alt="" width="100px">
                <img src="../../assets/images/2.jpg" alt="" width="100px">
            </div>
        </div>

        <!-- 商家信息 -->
        <div class="merchantsinfo">
           <div class="contner1">
                商家信息
                <ul>
                    <li>fdadafdasfafds</li>
                    <li>在线支付</li>
                    <li>mana </li>
                </ul>
            </div>
        </div>

        <!-- 购物车
         -->
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
// 移入购物车
import shopcar from "../goods/shopcar"
    export default {
        computed:{
            data(){
                // 拿到商家信息
                return  this.$store.state.merchantdata
            }
        },
        created(){
           this.$store.dispatch('merchant')
        //    console.log( this.$store.state.merchantdata)
        // console.log(itme.icon)
        },
        components:{
            shopcar
        }
    }
</script>

<style scoped lang="less">
.message{
    background-color: rgb(219, 226, 224);
    .top{
        border-top:1px solid #e5e5e6;
        border-bottom:1px solid #e5e5e6;
        background-color: #fff;
    }
    .top1{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        // border:1px solid #e5e5e6;
        padding: 20px;
        .topl{
            width: 80%;
        }
        .topr{
            width:20%;
            
        }
    }
    .top2{
        // padding: 20px;
        ul{
            list-style: none;
            display:flex;
            justify-content: space-around;
            align-items: center;
            flex-direction:row;
            border-top:1px solid #e5e5e6;
            // width: 100%;
            padding: 20px;
            li{
                // padding: 10px;
                width: 100%;
                text-align: center;
            }
            li:nth-of-type(2){
                 border-left:1px solid #e5e5e6;
                 border-right: 1px solid #e5e5e6;
            }
        }

    }
    // 中间
    .center{
        margin-top:20px;
         background-color: #fff;
        .contner1{
            padding: 10px;
            ul{
                list-style: none;
                padding: 20px;
                li{
                    border-top:  1px solid #e5e5e6;
                }
            }
        }
    }
        // 商家实景
        .imgs{
            padding: 10px;
             margin-top:20px;
            background-color: #fff;
         .imgss{
             display: flex;
             justify-content: space-around;
             align-items: center;
         }
        }
// 商家信息
.merchantsinfo{
    background-color: #fff;
        padding: 10px;
            margin-top:20px;
        ul{
            list-style: none;
            padding: 20px;
            li{
                border-top:  1px solid #e5e5e6;
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
}
</style>