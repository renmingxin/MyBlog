<template>
    <div class="main">
        <div class="main-head">
            <headerCom></headerCom>
        </div>
        <div class="main-body">
            <div class="main-body-left">
                <router-view />
            </div>
            <div class="main-body-right">
               <tagCom></tagCom> 
            </div>
        </div>
        <div class="main-footer">
            <footerCom></footerCom>
        </div>
    </div>
</template>

<script>
import headerCom from '@/components/Header';
import footerCom from '@/components/Footer'
import tagCom from '@/components/Tags'
export default {
    components:{
        headerCom,
        footerCom,
        tagCom
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
            margin: 60px auto 0 auto;
            width: 1170px;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            &-left{
                width: 65%;
            }
            &-right{
                border: 1px solid red;
                width: 33%;
            }
        }
    }
</style>
