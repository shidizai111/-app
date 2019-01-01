<template>
    <div id='box'>
        <h6 v-for="item in showData">
            <img :src="item.icon" alt="" width="50px">
            {{ item.name }} 数量： {{ item.num }}</h6>
        <!-- <button @click="clickBtn">点我</button> -->
    </div>
</template>

<script>
    export default {
      computed:{
               data(){
                 return 
                // 拿到商品信息
       this.$store.state.goodslist
      },
           // 拿到所有数量 >= 1的商品
            showData(){
            let arr = []
                  //循环判断，拿到所有数量 >0 的商品
                for(let item of this.$store.state.goodslist){
                    for(let food of item.foods){
                        if(food.num > 0)
                            arr.push(food)
                    }
                }
            return arr
      }
    }
    }
</script>

<style scoped>

</style>