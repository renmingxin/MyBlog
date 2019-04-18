<template>
  <div class="container">
    <ul class="contatner-ul">
      <li v-for="(item,index) in msg" :key="index">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
1;
export default {
  data() {
    return {
      msg: [
        { title: "C/C++" },
        { title: "Java" },
        { title: "C#" },
        { title: "javaScript" },
        { title: "C/C++" },
        { title: "Java" },
        { title: "C#" },
        { title: "javaScript" },
        { title: "C/C++" },
        { title: "Java" },
        { title: "C#" },
        { title: "javaScript" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.container {
		padding: 20px 0;
		background: #111;
		color: white;
		ul{
			width: 80%;
			margin: 0 auto;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			li{
				cursor: pointer;
			}
			li:hover{
				opacity: .8;
			}
		}
	}
</style>
