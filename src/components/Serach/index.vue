<template>
  <div class='w-full'>
    <div class='max-w-[600px]  m-[3vh_auto_20px] relative'>
      <div class='search relative overflow-hidden flex items-center'>
        <div class='engine '>
          <img data-v-6aead7ad="" class="search-icon w-5 h-5" src="@/assets/baidu.svg" />
            <i class='icon w-3 h-3 absolute mt-[-5px] right-[2px] top-[50%]'>
              <svg data-v-6aead7ad="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="m192 384 320 384 320-384z"></path></svg>
            </i>
        </div>
        <input
          type="text"
          autocomplete="off" 
          class="w-full h-ful text-black text-sm bg-transparent leading-5" 
          maxlength="220" 
          placeholder="输入搜索内容"
          ref='inputRef'
          v-model='state.text'
          @input='inputSuggestion'
          @keyup='keyup'
        />
        <div class='clear' :style='{ "transform": `scale(${state.text ? 1 : 0})` }' @click='clear'>
          <i class='icon w-[30px] h-[30px]' style='color: rgba(var(--alpha-color),.52);'>
            <svg data-v-6aead7ad="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path d="M278.6,256l68.2-68.2c6.2-6.2,6.2-16.4,0-22.6c-6.2-6.2-16.4-6.2-22.6,0L256,233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6,0
              c-3.1,3.1-4.7,7.2-4.7,11.3c0,4.1,1.6,8.2,4.7,11.3l68.2,68.2l-68.2,68.2c-3.1,3.1-4.7,7.2-4.7,11.3c0,4.1,1.6,8.2,4.7,11.3
              c6.2,6.2,16.4,6.2,22.6,0l68.2-68.2l68.2,68.2c6.2,6.2,16.4,6.2,22.6,0c6.2-6.2,6.2-16.4,0-22.6L278.6,256z"></path></svg>
          </i>
        </div>
        <button type="button" class="enter" @click='enterJump'>
          <i class="icon w-5 h-5" style='color: rgba(var(--alpha-color),.52);'>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="7"></circle><path d="M21 21l-6-6"></path></g></svg>
          </i>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { reactive, ref } from 'vue';
  const state = reactive({ text: '' })
  const inputRef = ref(null)
  
  const inputSuggestion = () => {
    // console.log(state.text);
  }

  const clear = () => {
    state.text = ""
    inputRef.value.focus();    
  }

  const enterJump = () => {
    if (!state.text) {
      window.open(window.url, '_blank')
      return
    }
    window.open(`${window.url}${state.text}`, '_blank')
  }

  const keyup = (e) => {
    if (e.code === 'Enter' || e.key === 'Enter' || e.keyCode === 13) {
      enterJump()
    }
  }
</script>
<style scoped>
  .icon {
    line-height: 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    fill: currentColor;
    color: rgba(var(--alpha-color), 0.2);
  }

  .search {
    backdrop-filter: blur(12px);
    box-shadow: 0 0 10px 3px rgba(245, 243, 243, 1);
    z-index: 1;
    border-radius: var(--search-radius);
    height: var(--search-height);
    background-color: var(--search-bgColor);
    transition: background .2s;
    color: var(--alpha-color);

    &:hover {
      background-color: var(--search-list-hover);
    }

    .engine {
      background-color: initial;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      min-width: 50px;
      max-width: 50px;
      transition: .2s;
      position: relative;
    }

    .clear {
      transition: transform .2s;
      cursor: pointer;
      display: flex;
    }
    
    .enter {
      background-color: initial;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      min-width: 50px;
      max-width: 50px;
      transition: .2s;
      position: relative;

      &:hover {
        background-color: rgb(221,225,228);
      }
    }
  }
</style>