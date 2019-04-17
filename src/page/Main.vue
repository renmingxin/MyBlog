<template>
    <div class="main">
        <div class="main-head">
            <headerCom></headerCom>
        </div>
        <div class="main-body">
            <router-view />
        </div>
        <div class="main-footer">
            <footerCom></footerCom>
        </div>
    </div>
</template>

<script>
import headerCom from '@/components/Header';
import footerCom from '@/components/Footer'
export default {
    components:{
        headerCom,
        footerCom
    },
    data () {
        return {
        }
    },

}
</script>

<style lang="less"  scoped >
    .main{
        &-body{
            margin-top: 60px;
        }
    }
</style>
