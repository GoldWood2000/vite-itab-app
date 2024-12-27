<template>
  <Sidebar ref='sidebarRef' />
  <Header />
  <Date />
  <Serach />
  <Grid ref='gridRef' :sidebarRef='sidebarRef'/>
  <div class='max-h-[60px] text-[#ffffffe6] flex justify-center overflow-hidden cursor-pointer bg-transparent leading-5'></div>
</template>

<script setup>
  import { ref } from 'vue';
  import Sidebar from 'components/Sidebar';
  import Header from 'components/Header';
  import Date from 'components/Date';
  import Serach from 'components/Serach';
  import Grid from 'components/Grid';

  const sidebarRef = ref(null)
  const gridRef = ref(null)

</script>

<style scoped>
 
</style>
