<template>
  <div class='flex flex-col justify-center items-center text-white'>
    <div class='time'>{{ `${state.dateInfo.hour}:${state.dateInfo.minute}` }}</div>
    <div class='date'>
      <span class='time-month'>{{ `${state.dateInfo.month}月${state.dateInfo.day}日` }}</span>
      <span class='time-week'>{{ `${state.dateInfo.dddd}` }}</span>
      <span class='time-lunar'>{{ `${state.dateInfo.lunar}` }}</span>
    </div>
  </div>
</template>
<script setup>
  import { reactive, onMounted } from 'vue';
  import dayjs from 'dayjs';

  const generateDate = () => {
    const [year, month, day, hour, minute] = dayjs(new Date()).format('YYYY-MM-DD-HH-mm-ss').split('-')
    return {
      year,
      month,
      day,
      hour,
      minute,
      dddd: dayjs().format('dddd'),
      lunar: dayjs().format('LMLD')
    }
  }

  const state = reactive({ dateInfo: generateDate() })
  
  onMounted(() => {
    setInterval(() => {
      state.dateInfo = generateDate()
    }, 1000)
  })
</script>
<style scoped>
  .time {
    font-size: var(--time-size);
    font-family: var(--time-font);
    user-select: none;
    font-weight: var(--time-fontWeight);
    text-shadow: 0 2px 6px rgb(0 0 0 / 16%);
    display: inline-block;
    line-height: var(--time-size);
    transition: font .2s;
  }
  .date {
    font-size: 14px;
    line-height: 26px;
    opacity: 0.88;
    margin-top: -3px;
    text-shadow: 0 2px 4px rgb(0 0 0 / 16%);
    span {
      margin: 0 2px;
    }
    .time-week {
      margin: 0 6px;
    }
  }
</style>