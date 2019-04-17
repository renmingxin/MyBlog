<template>
	<div class="container">
		底部
	</div>
</template>

<script>1
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
<style scoped>
	.container {
        position: fixed;
        bottom: 0;
        height: 60px;
        width: 100%;
		background: black;
		color: white;
	}
</style>
