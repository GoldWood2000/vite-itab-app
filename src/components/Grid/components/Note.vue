<template>
  <div class='relative w-full h-full text-[19px] rounded-[var(--icon-radius)]' @click='goMemo'>
    <div class='flex-center h-[25%] text-[0.76em] bg-[linear-gradient(0deg,#ffc927,#ffa403)] text-[#fff] rounded-tl-[var(--icon-radius)] rounded-tr-[var(--icon-radius)]'>
      备忘录
    </div>
    <ul class='notes-icon-content'>
      <li
        v-for='item,i in 3'
        :class='[i === 2 ? "rounded-bl-[var(--icon-radius)] rounded-br-[var(--icon-radius)]" : ""]'
      >
    
      </li>
    </ul>
  </div>
</template>
<script setup>
  const goMemo = () => {
    window.open(`${window.url}`)
  }
</script>
<style scoped>
  .flex-center {
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
  }

  .notes-icon-content {
    height: 75%;
    background-color: #fff;
    color: #222;
    border-bottom-left-radius: var(--icon-radius);
    border-bottom-right-radius: var(--icon-radius);

    li {
      height: 33.3%;
      font-size: .62em;
      padding: 0 .5em;
      box-sizing: border-box;
      border-color: rgba(var(--alpha-color), .08);
      border-bottom: 1px solid #f2f2f2;
    }
  }


 
</style>