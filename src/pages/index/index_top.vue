<template>
    <div class="indextop">
        <!-- 上面 -->
        <div class="top1">
            <img :src="data.avatar" alt="">
            <div class="center">
                <p>{{data.name}}</p>
                <p>{{ data.description }} / {{ data.deliveryTime }}分钟送达</p>
                <p>在线支付</p>
            </div>
            <label for="">5ge</label>
        </div>
        <!-- 下面 -->
        <div class="buttom1">
            <p>促销信息</p>
        </div>
    </div>
</template>

<script>
import {index} from "../../API/sellapi.js"
    export default {
        data(){
            return{
                data:{
    
                },
            }
        },
    async created(){
            let res=await index();
            this.data=res.data.data
        },
       
    }
</script>

<style scoped lang="less">
*{
    margin: 0px;
    padding: 0px;
}
.indextop{
    background-color: aquamarine;
        .top1{
            flex-direction: row;
            padding-top:20px;
            padding-right:20px;
            padding-left: 20px;
    
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                width: 80px;
                height: 80px;
            }
            .center{
                align-self: flex-end;
            }
            label{
                align-self:flex-end;
            }
        }
        .buttom1{
            background-color: cadetblue;
        }
    }
</style>