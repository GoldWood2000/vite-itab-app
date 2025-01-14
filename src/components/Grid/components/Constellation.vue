<template>
  <div class='wrapCon relative w-full h-full text-[19px] rounded-[var(--icon-radius)]' @click='goConstellation'>
    <div class='tag'>星座运势</div>
  </div>
</template>
<script setup>
  const goConstellation = () => {
    window.open(`${window.url}十二星座`)
  }
</script>
<style scoped>
  .flex-center {
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
  }

  .wrapCon {
    background: transparent url('@/assets/Constellation.jpeg') no-repeat center/100%;

    .tag {
      height: 18px;
      min-width: 52px;
      width: fit-content;
      max-width: 100%;
      overflow: hidden;
      position: absolute;
      top: 6px;
      left: 6px;
      background: #4E6EF2;
      text-align: center;
      line-height: 19px;
      font-size: 12px;
      color: #FFFFFF;
      border-radius: 10px;
      box-sizing: border-box;
      padding: 0 8px;
    }
  }
</style>