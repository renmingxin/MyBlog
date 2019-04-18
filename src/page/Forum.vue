<template>
    <div class="main">
        <div class="every-day">
            <div class="title">
                每日一句 
            </div>
            <div class="content">
                你所能做的事中，最好的就是了解自己，感受自己，并成为自己。
            </div>
        </div>
        <ul class="panel-ul">
            <li 
            class="panel"
            v-for="(item,index) in msg" 
            :key="index">
                <div class="panel-body">
                    <div>{{item.title}}</div>
                    <div>{{item.content}}</div>
                </div>
                <div class="panel-foot">{{item.foot}}</div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data () {
        return {
            msg:[
                {
                    title:'PC端微信(2.6.6.28)防撤回',
                    content:'此方法仅限于官网下载的PC版微信2.6.6.28版本。工具：winhex19、pc版微信打开winhex19， 文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工具栏中的“转到偏移量”。输入 0024A58E ，确定。自动定位到一个数值：75，其中5以反色（蓝色）光标显示，输入4，使其',
                    foot:'发布于2019-02-14 |  浏览(1,334) | Tags：微信'
                },
                {
                    title:'unoconv：在OpenOffice支持的任何文档格式之间进行转换',
                    content:'doc带格式转文本，如html之前发布过使用antiword把doc文档转出成纯文本，但这个工具的转出是无格式的，下面是我找到的一款工具，说是可以把任何openoffice支持的格式的文档进行互转，我只测试了doc转到html。具体文档见这里：http://dag.wiee.rs/home-made/unoconv/还有这里：https://www.systutorials.com/docs/linux/man/1-unoconv/我',
                    foot:'发布于2018-08-02 |  浏览(2,506) | Tags：unoconv'
                },
                {
                    title:'树莓派安装homebridge小记',
                    content:'此方法仅限于官网下载的PC版微信2.6.6.28版本。工具：winhex19、pc版微信打开winhex19， 文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工具栏中的“转到偏移量”。输入 0024A58E ，确定。自动定位到一个数值：75，其中5以反色（蓝色）光标显示，输入4，使其',
                    foot:'发布于2018-08-02 |  浏览(3,783) | Tags：homebridge 树莓派'
                },
                {
                    title:'树莓派安装homebridge小记',
                    content:'此方法仅限于官网下载的PC版微信2.6.6.28版本。工具：winhex19、pc版微信打开winhex19， 文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工具栏中的“转到偏移量”。输入 0024A58E ，确定。自动定位到一个数值：75，其中5以反色（蓝色）光标显示，输入4，使其',
                    foot:'发布于2018-08-02 |  浏览(3,783) | Tags：homebridge 树莓派'
                },
                {
                    title:'树莓派安装homebridge小记',
                    content:'此方法仅限于官网下载的PC版微信2.6.6.28版本。工具：winhex19、pc版微信打开winhex19， 文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工具栏中的“转到偏移量”。输入 0024A58E ，确定。自动定位到一个数值：75，其中5以反色（蓝色）光标显示，输入4，使其',
                    foot:'发布于2018-08-02 |  浏览(3,783) | Tags：homebridge 树莓派'
                },
                {
                    title:'树莓派安装homebridge小记',
                    content:'此方法仅限于官网下载的PC版微信2.6.6.28版本。工具：winhex19、pc版微信打开winhex19， 文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工具栏中的“转到偏移量”。输入 0024A58E ，确定。自动定位到一个数值：75，其中5以反色（蓝色）光标显示，输入4，使其',
                    foot:'发布于2018-08-02 |  浏览(3,783) | Tags：homebridge 树莓派'
                },
                {
                    title:'树莓派安装homebridge小记',
                    content:'此方法仅限于官网下载的PC版微信2.6.6.28版本。工具：winhex19、pc版微信打开winhex19， 文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工具栏中的“转到偏移量”。输入 0024A58E ，确定。自动定位到一个数值：75，其中5以反色（蓝色）光标显示，输入4，使其',
                    foot:'发布于2018-08-02 |  浏览(3,783) | Tags：homebridge 树莓派'
                },
            ]
        }
    },
}
</script>

<style lang="less" scoped>
    .main {
        margin-top: 30px;
        .every-day{
            min-height: 20px;
            padding: 19px;
            margin-bottom: 20px;
            background-color: #f5f5f5;
            border: 1px solid #e3e3e3;
            border-radius: 4px;
            box-shadow: 1px 1px 10px #5f5f5f;
        }
        .panel-ul {
            .panel{
                margin-bottom: 20px;
                background-color: #fff;
                border: 1px solid #555;
                border-radius: 4px;
                box-shadow: 0 1px 1px rgba(0,0,0,.05);
                &-body{
                    padding: 15px;
                    :nth-child(1){
                        color: #13102b;
                        font-size: 20px;
                        font-weight: 500;
                    }
                    :nth-child(2){
                        font-size:14px;
                        color: #333;
                        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
                        line-height: 1.42857143;
                        margin-top: 10px;
                    }
                }
                &-foot{
                    background: #000;
                    color: #fff;
                    padding: 5px 0 5px 15px;
                }
            }
        }
    }
</style>
