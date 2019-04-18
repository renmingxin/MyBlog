<template>
	<div class="container">
        <div class="tags">
            <div class="title">随机标签云</div>
            <div class="content">
                博客指针模拟飞行selenium游戏博客优化摄像头gitseoE6php分页模拟航天飞机音乐拉登win7DCS黑鲨Rewritecpanel伤不起C语言C++css+divpythonmysql分区mac独立博客个人博客wordpress五笔sessiondedecms外链数据结构Sunshine GirlSpaceShuttleMission搞笑蛋疼vagrant灯泡姑娘树莓派telnetphpnginxlaravel
            </div>
        </div>
        <div class="hot">
            <div class="title">最新热门</div>
            <div class="content">
                <ul class="hot-ul">
                    <li v-for="(item,index) in hot" :key="index">{{item.msg}}</li>
                </ul>
            </div>
        </div>
        <div class="chat">
            <div class="title">最新评论</div>
            <div class="content">
                <ul class="chat-ul">
                    <li v-for="(item,index) in chat" :key="index">
                        <div class="chat-ul-top">
                            <div>{{item.name}}</div>
                            <div>{{item.time}}</div>
                        </div>
                        <div class="chat-ul-bottom">
                            {{item.msg}}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="link">
            <div class="title">友情链接</div>
            <div class="content">
                <div v-for="(item,index) in link" :key="index">{{item.msg}}</div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
  data () {
    return {
        hot:[
            {msg:'查看你的AWS服务器已使用流量'},
            {msg:'查看你的AWS服务器已使用流量'},
            {msg:'查看你的AWS服务器已使用流量'},
            {msg:'查看你的AWS服务器已使用流量'},
            {msg:'查看你的AWS服务器已使用流量'},
            {msg:'查看你的AWS服务器已使用流量'},
            {msg:'查看你的AWS服务器已使用流量'},
            {msg:'查看你的AWS服务器已使用流量'},
            {msg:'查看你的AWS服务器已使用流量'},
        ],
        chat:[
            {
                name:'小刚刚',
                msg:'你可以看看这篇，unoconv-co',
                time:'两周前'
            },
            {
                name:'小刚刚',
                msg:'你可以看看这篇，unoconv-co',
                time:'两周前'
            },
            {
                name:'小刚刚',
                msg:'你可以看看这篇，unoconv-co',
                time:'两周前'
            },
            {
                name:'小刚刚',
                msg:'你可以看看这篇，unoconv-co',
                time:'两周前'
            },
            {
                name:'小刚刚',
                msg:'你可以看看这篇，unoconv-co',
                time:'两周前'
            },
            
        ],
        link:[
            {msg:'挨踢茶馆'},
            {msg:'佛布朗斯基'},
            {msg:'Lizenghais Blog'},
            {msg:'挨踢茶馆'},
            {msg:'佛布朗斯基'},
            {msg:'Lizenghais Blog'},
            {msg:'挨踢茶馆'},
            {msg:'佛布朗斯基'},
            {msg:'Lizenghais Blog'},
            {msg:'挨踢茶馆'},
            {msg:'佛布朗斯基'},
            {msg:'Lizenghais Blog'},
        ]
    }
  }
}
</script>

<style scoped lang="less">
    .container {
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 14px;
        line-height: 1.42857143;
        .title {
            padding: 10px 15px;
            background: black;
            color: #fff;
        }
        .content{
            padding: 15px;
            color: #fff;
        }
        >div{
            margin-bottom: 20px;
            background-color: #1f1f1f;
            border: 1px solid #191818;
            border-radius: 4px;
            box-shadow: 0 1px 1px rgba(0,0,0,.05);
        }
    }
    .tags {
        max-height: 300px;
        .content {
            padding: 15px;
        }
    }
    .hot {
        max-height: 450px;
        &-ul{
            >li{
                height: 40px;
                line-height: 40px;
                cursor: pointer;
            }
            >li:hover{
                opacity: .8;
            }
        }
    }
    .chat {
        max-height: 380px;
        &-ul{
            >li {
                padding: 6px 0;
            }
            &-top{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 5px;
            }
            &-bottom{
                color:#777;
            }
        }
    }
    .link {
        max-height: 550px;
        .content{
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            >div{
                width: 50%;
                height: 36px;
                cursor: pointer;
            }
            >div:hover{
                opacity: .8;
            }
        }
    }
</style>
