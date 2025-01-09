<template>
  <div class='hotsearch'>
    <div class='topsearch-icon'>
      <div class='topsearch-icon-top' @click='goHotSearch'>
        <span :class='["top-tag", state.active === i ? "active" : ""]' v-for='{ name, id },i in state.tag' @mouseenter='mouseenter(id, i)'>
          {{ name }}
        </span>
      </div>
      <ul class='topsearch-icon-content' ref='listRef' @mouseenter='stopScroll' @mouseleave='startScroll'>
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
  import { reactive, onMounted, ref, nextTick } from 'vue';
  import qs from 'query-string';
  import { get } from '@/plugin/http';
  const state = reactive({
    tag: [{ name: '热搜', id: 'Jb0vmloB1G', cache: [] },{ name: '娱乐', id: 'KqndgxeLl9', cache: [] }, { name: '八卦', id: 'mproPpoq6O', cache: [] }],
    active: 0,
    tagData: [],
    scrollIndex: 0,
  })
  const listRef = ref(null)
  const intervalRef = ref(null)

  const getData = async (cacheIIndex, cb) => {
    if (state.tag[cacheIIndex].cache.length !== 0) {
      state.tagData = state.tag[cacheIIndex].cache
      return
    }
    const { code, data } = await get(`top/list?lang=cn&size=20&id=${state.tag[state.active].id}`)
    if (code === 200) {
      data.forEach((item) => {
        const objUrl = qs.parseUrl(item.link)
        Reflect.set(objUrl.query, 'tn', '54093922_41_hao_pg')
        item.link = `${window.url}${cacheIIndex === 0 ? objUrl.query.wd : item.title}`
      })
      state.tagData = data
      state.tag[cacheIIndex].cache = data
      await nextTick()
      cb?.()
    }
  }

  const mouseenter = async (id, i) => {
    state.active = i
    getData(i)
  }

  const goHotSearch = (e) => {
    window.open(`${state.tag[0].cache[0].link}`)
  }

  const startScroll = () => {
    const { children } = listRef.value
    const height = children[0].clientHeight
    intervalRef.value = setInterval(() => {
      state.scrollIndex === 16 ? state.scrollIndex = 0 : state.scrollIndex +=1
      listRef.value.scrollTo({ behavior: "smooth", top: state.scrollIndex * height })
    },3000)
  }

  const stopScroll = () => {
    clearInterval(intervalRef.value)
  }

  onMounted(() => {
    getData(0, () => {
      startScroll()
    })
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
      z-index: 99;

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

        a {
          &:hover {
            color: #a7abb6;
          }
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