<template>
  <div
    class='fixed left-0 top-0 bottom-0 w-[50px] z-[2] animate-fadeIn text-xs'>
    <div
      style='--tw-text-opacity: 0.4;'
      class='w-full h-full flex flex-col backdrop-blur text-white bg-[#26405566]'
    >
      <div class='mt-10 mb-10 cursor-pointer'>
        <div class='flex flex-col justify-center items-center' style='display: none;'>
          <img
            class='w-[30px] h-[30px] rounded-[50%]'
            src="@/assets/avatar.webp" 
          />
          <div class='text-ellipsis overflow-hidden whitespace-nowrap mt-[5px]'>登录</div>
        </div>
      </div>
      <div class='sidebar-group flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        <div
          :class='["group-item", "flex-col", i === state.active ? "group-item-active" : ""]' 
          v-for='(tab,i) in state.tabs' 
          :key='tab.icon'
          @click='tabClick(tab, i)'
        >
          <i class="icon-scale w-[22px] h-[22px]">
            <svg v-if='i === 0' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 8.71l-5.333-4.148a2.666 2.666 0 0 0-3.274 0L5.059 8.71a2.665 2.665 0 0 0-1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.2c0-.823-.38-1.6-1.03-2.105"></path><path d="M16 15c-2.21 1.333-5.792 1.333-8 0"></path></g></svg>
            <svg v-else-if='i === 1' data-v-4cd4ab6b="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9c-.745 1.46-5.783-.259-11.255-3.838c-5.47-3.579-9.304-7.664-8.56-9.123c.464-.91 2.926-.444 5.803.805"></path><circle cx="12" cy="12" r="7"></circle></g></svg>
            <svg v-else-if='i === 2' data-v-4cd4ab6b="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" fill="currentColor"></path></svg>
          </i>
          <div class='group-item-title'>{{ tab.name }}</div>
        </div>
        <div class='group-item' @click='addGroup' style='display: none;'>
          <i class="icon-scale w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><g fill="none"><path d="M8.5 2.75a.75.75 0 0 0-1.5 0V7H2.75a.75.75 0 0 0 0 1.5H7v4.25a.75.75 0 0 0 1.5 0V8.5h4.25a.75.75 0 0 0 0-1.5H8.5V2.75z" fill="currentColor"></path></g></svg></i>
        </div>
      </div>
      <div class='flex justify-center items-center mb-[5px] cursor-pointer' style='display: none;'>
        <i class='icon'>
          <svg data-v-4cd4ab6b="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M273.067 477.867h477.866V409.6H273.067zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133m273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133M170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z"></path></svg>
        </i>
      </div>
      <div class='h-[56px] flex justify-center items-center cursor-pointer' style='display: none;'>
        <i class='icon'>
          <svg data-v-4cd4ab6b="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256"></path></svg>
        </i>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { reactive, defineExpose } from 'vue';
  import { tabs } from '@/config';
  const state = reactive({ tabs, active: 0 })

  const addGroup = () => {

  }

  const tabClick = (tab, i) => {
    state.active = i
  }

  defineExpose({ state, tabClick })
</script>
<style scoped>
  .icon {
    height: 1em;
    width: 1em;
    font-size: 20px;
    line-height: 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    fill: currentColor;
    color: inherit;
  }
  .sidebar-group {
    scrollbar-color: rgba(var(--alpha-bg), .4) transparent;
    scrollbar-width: none;
    .group-item {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 4px 0;
      min-height: 50px;
      transition: background .3s;

      .icon-scale {
        transition: transform .2s;
      }

      .group-item-title {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 4px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      &:hover {
        .icon-scale {
          transform: scale(1.25);
        }
      }
      
      &:active {
        transform: scale(.9);
      }
    }

    .group-item-active {
      background-color: #ffffff26;
    }
  }
  
</style>