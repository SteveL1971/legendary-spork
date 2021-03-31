<template>
<div class="container style404">
  <h1>404</h1>
  <p>The page you are looking for isn't here!</p>
  <img :src="pImage" class="imgStyle">
</div>
</template>

<script>

export default {
  computed: {
    pImage: function() {
      return require(`@/assets/img/freddy-krueger.jpg`)
    },
  },
}

</script>

<style scoped>
  .imgStyle {
    padding-top: 2rem;
    width: 30%;
  }

  .style404 {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding-top: 5rem;
  }
</style>