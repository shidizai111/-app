<template>
    <div>
        <!-- 导航条 -->
        <div class="nav">
            <router-link to="/">商品</router-link>
            <router-link to="/message">评价</router-link>
            <router-link to="/business">商家</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="less">
    .nav{
        display: flex;
        justify-content:space-around;
        flex-direction: row;
        a{
            color: black;
            font-size: 20px;
            text-decoration: none;
        }
    }
</style>