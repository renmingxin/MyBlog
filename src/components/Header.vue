<template>
	<div class="container">
		<div class="main">
			<ul class="main-left">
				<li>欢迎**来访</li>
				<router-link tag="li" to="/forum">首页</router-link>
				<router-link tag="li" to="/map">地图</router-link>
				<!-- <li><a href="/sitemap.html">地图</a></li> -->
				<router-link tag="li" to="/about">关于</router-link>
				<router-link tag="li" to="/message">留言</router-link>
			</ul>
			<div class="main-right">
				<input type="text" placeholder="请输入关键词">
				<button>搜索</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.container {
		position: fixed;
		top:0;
		height: 60px;
		width: 100%;
		background: black;
		color: white;
		display: flex;
		justify-content: center;
		font-size:18px;
	}
	.main{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 1170px;
		&-left{
			width: 500px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			li{
				cursor: pointer;
			}
			li:hover{
				opacity: .8;
			}
			.router-link-active {
				border-bottom: 2px solid white;
			}
			
		}
	}
</style>
