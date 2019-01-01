<template>
    <div class="message">
        <!-- 上面内容 -->
        <div class="top">
            <ul>
                <li>
                    <p>3.9</p>
                    <p>综合评分</p>
                    <p>高于周边商家69.2%</p>
                </li>
                <li>
                    <p>
                    服务态度
                    <img src="../../assets/images/star24_on@2x.png">
                    <img src="../../assets/images/star24_on@2x.png">
                    <img src="../../assets/images/star24_on@2x.png">
                    <img src="../../assets/images/star24_on@2x.png">
                    </p>
                    <p>
                      服务态度
                    <img src="../../assets/images/star24_on@2x.png">
                    <img src="../../assets/images/star24_on@2x.png">
                    <img src="../../assets/images/star24_on@2x.png">
                    <img src="../../assets/images/star24_on@2x.png">
                    </p>
                    <p>
                        送达时间 <span>44分钟</span>
                    </p>
                </li>
            </ul>
        </div>
        <!-- 中间数据 -->
    <div id="content">
        <div class="btn">
            <Button class="blues" type="primary">全部<i>57</i></Button>
            <Button class="skyBlues" type="info">满意<i>47</i></Button>
            <Button class="gray">不满意<i>10</i></Button>
        </div>

        <div class="look">
            <i>√</i>
            <span>只看有内容的评论</span>
        </div>

        <div class="comment">
            <div class="customer" v-for="(item,index) in this.$store.state.message">
                <div class="photo">
                    <img :src="item.icon" alt="">
                </div>
                <div class="other">
                    <div>
                        <span>{{item.name}}</span>
                        <span>{{item.time}}</span>
                    </div>

                    <div>
                        <label>
                            <img src="../../assets/images/star24_on@2x.png" alt="">
                            <img src="../../assets/images/star24_on@2x.png" alt="">
                            <img src="../../assets/images/star24_on@2x.png" alt="">
                            <img src="../../assets/images/star24_on@2x.png" alt="">
                            <img src="../../assets/images/star24_on@2x.png" alt="">
                        </label>
                        <span>{{item.gettime}}</span>
                    </div>

                    <div>
                        {{item.cantent}}
                    </div>
                    
                    <div>
                        <span>大王香菇卤肉饭</span>
                        <span>大王香菇卤肉饭</span>
                        <span>大王香菇卤肉饭</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
       computed:{
            data(){
                // 拿到评价信息
                return  this.$store.state.message
            }
        },
        created(){
           this.$store.dispatch('messages1')
        //    console.log( this.$store.state.merchantdata)
        // console.log(itme.icon)
        },
    }
</script>

<style scoped lang="less">
    .message{
        background-color: rgb(77, 103, 126);
        .top{
            background-color: #e5e5e6;
            
            ul{
                background-color: #fff;
                display: flex;
                list-style: none;
                align-items: center; 
                padding: 20px;
                justify-content: space-between;
                li{
                    text-align: center;
                
                }
                li:nth-of-type(2){
                    width: 70%;
                    border-left:1px solid  #e5e5e6;
                }
            }
        }
       
    #content{
        margin-top: 20px;
        border-top: 1px solid #ccc;
        background: #fff;
        overflow: auto;
        .btn{
            margin: 0 16px;
            padding: 16px 0;
            border-bottom: 1px solid rgb(216, 213, 213);
            Button{
                margin-right: 5px;
                font-size: 14px;
                i{
                    font-style: normal;
                    margin-left: 5px;
                    font-size: 10px;
                }
            }
            .blues{
                border-radius: 0;
                color: #fff;
                font-weight: 600;
            }
            .skyBlues{
                background: #cceef7;
                border: #cceef7 1px solid;
                border-radius: 0;
                color: #000;
            }
            .gray{
                background: #ccc;
                border-radius: 0;
                color: #000;
            }
        }

        .look{
            margin: 0 16px;
            padding: 16px 0;
            i{
                width: 20px;
                height: 20px;
                background: #ccc;
                display: inline-block;
                border-radius: 50%;
                color:#fff;
                font-weight: bold;
                text-align: center;
                line-height: 23px;
                vertical-align: middle;
                font-size: 16px;
            }
            span{
                font-size: 16px;
                vertical-align: middle;
                margin-left: 5px;
                color:rgb(141, 138, 138);
            }
        }

        .comment{
            width: 100%;
            border-top: 1px solid #ccc;
            .customer{
                width: 92%;
                margin: 0 16px;
                padding: 16px 0;
                display: flex;
                border-bottom: 1px solid #ccc;
                .photo{
                    width: 12%;
                    margin-right: 5px;
                    img{
                        width: 40px;
                        height: 40px;
                        display: inline-block;
                        border-radius: 50%;
                        border:1px solid #000;
                    }
                }
                .other{
                    width: 88%;
                    div{
                        margin-bottom: 5px;
                        &:nth-of-type(1){
                            display: flex;
                            justify-content: space-between;
                        }
                        &:nth-of-type(2){
                            label{
                                img{
                                    width: 12px;
                                    height: 12px;
                                    margin-right: 5px;
                                }
                            }
                        }
                        &:nth-of-type(3){
                            font-size: 14px;
                            font-weight: 600;
                            color: rgb(29, 28, 28);
                        }
                        &:nth-of-type(4){
                            span{
                                width: 80px;
                                height: 20px;
                                border: 1px solid #ccc;
                                text-align: center;
                                margin-right: 5px;
                                color: rgb(207, 201, 201);
                                display: inline-block;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                        }
                    }
                }
            }
        }
    }

    }
</style>