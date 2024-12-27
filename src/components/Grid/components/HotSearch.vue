<template>
  <div class='hotsearch'>
    <div class='topsearch-icon'>
      <div class='topsearch-icon-top'>
        <span :class='["top-tag", state.active === i ? "active" : ""]' v-for='{ name, id },i in state.tag' @mouseenter='mouseenter(id, i)'>
          {{ name }}
        </span>
      </div>
      <ul class='topsearch-icon-content'>
        <li class='' v-for='item, index in state.tagData'>
          <span class='icon-index'>{{ index + 1 }}</span>
          <a :href='item.link' target='_blank' class='flex-1 text-ellipsis overflow-hidden whitespace-nowrap text-[#ddd]'>{{ item.title }}</a>
          <span class='max-w-[60px] overflow-hidden text-[#b3b6bb]'>{{ item.hotValue }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
  import { reactive, onMounted } from 'vue';
  import { get } from '@/plugin/http';
  const state = reactive({
    tag: [{ name: '百度', id: 'Jb0vmloB1G', cache: [] },{ name: '微博', id: 'KqndgxeLl9', cache: [] }, { name: '知乎', id: 'mproPpoq6O', cache: [] }],
    active: 0,
    tagData: []
  })

  const getData = async (cacheIIndex) => {
    if (state.tag[cacheIIndex].cache.length !== 0) {
      state.tagData = state.tag[cacheIIndex].cache
      return
    }
    const { code, data } = await get(`top/list?lang=cn&size=20&id=${state.tag[state.active].id}`)
    if (code === 200) {
      if (cacheIIndex === 0) {
        // data.forEach((item) => {
        //   const link = item.link
        // })
      }
      state.tagData = data
      state.tag[cacheIIndex].cache = data
    }
  }

  const mouseenter = async (id, i) => {
    state.active = i
    getData(i)
  }

  onMounted(() => {
    getData(0)
  })
  

</script>
<style scoped>
  .hotsearch {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: var(--icon-radius);
    font-size: 19px;
    box-shadow: 0 0 5px #0000001a;
    transition: transform .2s;
    cursor: pointer;

    .topsearch-icon {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 0.54em;
      background-image: linear-gradient(135deg, #252934, #494f5b);
      color: #fff;
      border-radius: var(--icon-radius);

      .topsearch-icon-top {
        white-space: nowrap;
        font-size: .58em;

        .top-tag {
          padding: 2px 4px;
          margin-right: 6px;
          border-radius: 3px;
          white-space: nowrap;
        }

        .active {
          background-color: #fff3;
        }
      }
    }

    .topsearch-icon-content {
      height: calc(100% - 1em);
      margin-top: .3em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      scrollbar-color: rgba(var(--alpha-bg), .4) transparent;
      scrollbar-width: none;
      overflow-y: auto;

      li {
        min-height: 25%;
        box-sizing: border-box;
        font-size: .59em;
        transition: color .2s;
        display: flex;
        align-items: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

        .icon-index {
          color: #7a8486;
          display: inline-block;
          min-width: 8px;
          font-weight: 700;
          margin-right: 5px;
        }
      }

      li:nth-of-type(1) .icon-index {
        color: #fff;
      }

      li:nth-of-type(2) .icon-index {
        color: #cfd0d4;
      }

      li:nth-of-type(3) .icon-index {
        color: #a7abb6;
      }
    }
  }
</style>