<template>
  <div class='relative w-full h-full text-[19px] rounded-[var(--icon-radius)]'>
    <div class='calendar-icon rounded-[var(--icon-radius)]'>
      <div class='flex-center h-[25%] text-[0.76em] bg-[#ff5a5d] text-[#fff] rounded-tl-[var(--icon-radius)] rounded-tr-[var(--icon-radius)]'>
        {{ dayjs().format('YYYY年MM月') }}
      </div>
      <div class='flex-center h-[42%] text-[2.4em] text-center font-bold'>
        {{ dayjs().format('DD') }}
      </div>
      <div class='h-[33%] text-[.58em] text-center'>
        <p class='text-[#999999]'>{{ `第${dayjs().dayOfYear()}天 第${dayjs().week()}周` }}</p>
        <p>{{ `${dayjs().format('LMLD')} ${dayjs().format('ddd')}` }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
  import dayjs from 'dayjs';
</script>
<style scoped>
  .flex-center {
      display: flex;
      flex-flow: wrap;
      align-items: center;
      justify-content: center;
  }

  .calendar-icon {
    width: 100%;
    height: 100%;
    position: relative;
    color: #222;
    background: #fff;
    font-family: HarmonyOS_Sans;
  }
</style>