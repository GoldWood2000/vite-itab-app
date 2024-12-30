<template>
  <div class='weather'>
    <div class='w-full h-full relative text-[19px]'>
      <div class='weather-icon p-[0.6em]'>
        <div class='flex-between w-full' v-if='state.weather.now'>
          <div class="flex flex-col justify-between">
            <span class="text-[12px] flex items-center">
              {{ state.location.name }}
              <i class="block w-[12px] h-[12px] align-[-2px] mr-[2px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path fill="currentColor" d="m249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z"></path>
                </svg>
              </i>
            </span>
            <p class="mt-[5px] font-bold text-[1.4em]">{{ state.weather.now.tmp }}°</p>
          </div>
          <div class='leading-[1.1] text-[12px] text-right'>
            <p>{{ state.weather.now.cond_txt }}<img class="align-[-4px] w-[22px] h-[22px]"  :src='`https://files.codelife.cc/itab/weather/icon/${state.weather.now.cond_code}-fill.svg`'></p>
            <p class='mt-[0.3em]'>{{ `最低 ${state.weather.daily_forecast[0].tmp_min}° 最高 ${state.weather.daily_forecast[0].tmp_max}°` }}</p>
          </div>
        </div>
        <ul class='w-full flex-between leading-[1.4] mt-[0.2em] text-[12px]' v-if='state.weather.daily_forecast'>
          <li v-for='(item, i) in state.weather.daily_forecast.slice(1)'>
            <p>{{ i === 0 ? "明天" : dayjs(item.date).format('ddd') }}</p>
            <p class='flex-center'>
              <img class="mr5" :src='`https://files.codelife.cc/itab/weather/icon/${item.cond_code_d}-fill.svg`' style="width: 16px; height: 16px;">
            </p>
            <p>{{ `${item.tmp_min}~${item.tmp_max}` }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { reactive, onMounted } from 'vue';
  import {get} from '@/plugin/http';
  import dayjs from 'dayjs';

  const state = reactive({ location: {}, weather: {} })

  const getData = async () => {
    const { code, data } = await get('getLocation?lang=cn')
    if (code === 200) {
      const { data:wData } = await get(`getWeather?lang=cn&type=${data.type}&location=${data.id}`)
      state.location = data
      state.weather = wData
    }
  }

  onMounted(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        getData()
      }, (error) => {
        getData()
      });
    } else {
      getData()
    }
  })

</script>
<style scoped>
  .flex-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .flex-center {
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
  }

  .weather {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: var(--icon-radius);
    font-size: 12px;
    box-shadow: 0 0 5px #0000001a;
    transition: transform .2s;
    cursor: pointer;

    .weather-icon {
      width: 100%;
      height: 100%;
      position: relative;
      color: #fff;
      background-image: linear-gradient(45deg, #789fb8 20%, #6386a3);
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: cover;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>