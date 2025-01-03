<template>
  <div class='one-icon'>
    <img
     class="app-item-img"
     :src=props.icon
     :style='{"--icon-bg-color": props.bgColor}'
     @click='jump'
     />
  </div>
</template>
<script setup>
  const props = defineProps(['icon', 'bgColor', 'link'])
  
  const jump = () => {
    window.open(props.link, '_blank')
  }

</script>
<style scoped>
  .one-icon {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: var(--icon-radius);
    font-size: 12px;
    box-shadow: 0 0 5px #0000001a;
    transition: transform .2s;
    cursor: pointer;

    .app-item-img {
      display: block;
      object-fit: contain;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-color: var(--icon-bg-color);
    }
  }
</style>