<template>
  <Sidebar ref='sidebarRef' />
  <Header />
  <Date />
  <Serach />
  <Grid ref='gridRef' :sidebarRef='sidebarRef'/>
  <div class='max-h-[60px] text-[#ffffffe6] flex justify-center overflow-hidden cursor-pointer bg-transparent leading-5'></div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import Sidebar from 'components/Sidebar';
  import Header from 'components/Header';
  import Date from 'components/Date';
  import Serach from 'components/Serach';
  import Grid from 'components/Grid';
  import { debounce } from 'lodash';

  const sidebarRef = ref(null)
  const gridRef = ref(null)

  const isAppDom = (dom) => {
    if (dom.id === 'app') return false
    if (dom.className.includes('app-grid')) return true

    return isAppDom(dom.parentElement)
  }

  onMounted(() => {
    document.querySelector('#app').addEventListener('wheel', debounce((event) => {
      const down = event.deltaY > 0
      const {active: i,  tabs: { length }} = sidebarRef.value.state
      const dom = document.querySelector(`.app-grid${i}`)

      if (event.target.className.includes('_wheel')) return
      if (dom.clientHeight !== dom.scrollHeight && isAppDom(event.target)) return
      

      if (dom.clientHeight === dom.scrollHeight) {
        sidebarRef.value.tabClick(null, down ? i + 1 === length ? 0 : i + 1 : i === 0 ? length - 1 : i - 1)
        return
      }

      dom.scroll({ behavior: 'smooth', top: down ? dom.scrollHeight : 0 })
    }, 50, { 'leading': false, 'trailing': true }), { capture: true, passive: true })
  })
</script>

<style scoped>
 
</style>
