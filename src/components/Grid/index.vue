<template>
  <div class='grid-wrap flex-1'>
    <div class='grid-icon overflow-hidden'>
      <template v-for='{ app }, index in _apps'>
        <Transition name="slide-up">
          <div class='h-[100%] relative' v-show='_sidebarActive === index'>
            <div class='icon-item' >
              <div class='app-grid'>
                <div
                  v-for='({ name, size, icon, bgColor, component, link }, i) in app'
                  :class='["app-item", "app-item-duration", `icon-size-${size} `]'
                >
                  <OneIcon v-if='size === "1x1"' :icon='icon' :bgColor='bgColor' :link='link'/>
                  <Weather v-else-if='component === "weather"' />
                  <Calendar v-else-if='component === "calendar"' />
                  <HotSearch v-else-if='component === "hotsearch"' />
                  <p class="app-item-title">{{ name }}</p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </template>
    </div>
  </div>
</template>
<script setup>
  import { defineProps, watch, ref } from 'vue';
  import OneIcon from './components/1x1.vue';
  import Weather from './components/Weather.vue';
  import Calendar from './components/Calendar.vue';
  import HotSearch from './components/HotSearch.vue';
  const props = defineProps(['sidebarRef'])
  const _sidebarActive = ref(0)
  const _apps = ref([])
  
  watch(
    () => props.sidebarRef?.state?.active,
    (state, prevState) => {
      _sidebarActive.value = state
    },
  )

  watch(
    () => props.sidebarRef?.state?.tabs,
    (state, prevState) => {
      if (state) {
        _apps.value = state
      }
    },
  )
 
</script>
<style scoped>
  .icon-size-1x1 {
    width: var(--icon-size);
    height: var(--icon-size);
  }
  
  .icon-size-2x2 {
    grid-column: span 2;
    grid-row: span 2;
    width: calc(var(--icon-size)* 2 + var(--icon-gap-y));
    height: calc(var(--icon-size)* 2 + var(--icon-gap-x));
  }

  .icon-size-2x4 {
    --folder-width: var(--icon-size)* 4 + var(--icon-gap-y)* 3;
    --folder-size: calc((var(--icon-size)* 2 + var(--icon-gap-x) - var(--icon-size) / 5) / 2);
    --folder-gap: calc(((var(--folder-width) - var(--icon-size) / 4) - 4* var(--folder-size)) / 3);
    grid-column: span 4;
    grid-row: span 2;
    width: calc(var(--icon-size)* 4 + var(--icon-gap-y)* 3);
    height: calc(var(--icon-size)* 2 + var(--icon-gap-x));
  }

  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: all 0.25s ease-out;
  }

  .slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
  }

  .slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }

  .grid-wrap {
    transition: .1s ease;

    .grid-icon {
      max-width: var(--icon-max-width, 1350px);
      margin: 0 auto;
      padding: 0 var(--sidebar-width, 45px);
      height: 100%;

      .icon-item {
        transition: transform ease-out .28s !important;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: inline-block;
        overflow: hidden;
        
        .app-grid {
          position: relative;
          display: grid;
          padding-top: 2vh;
          user-select: none;
          grid-template-columns: repeat(auto-fill, var(--icon-size));
          grid-template-rows: repeat(auto-fill, var(--icon-size));
          grid-auto-flow: dense;
          grid-gap: var(--icon-gap-x) var(--icon-gap-y);
          box-sizing: border-box;
          justify-content: center;
          padding-bottom: 50px;

          .app-item {
            position: relative;
            box-sizing: border-box;
            opacity: var(--icon-opacity);
            border-radius: var(--icon-radius);

            .app-item-title {
              width: calc(100% + var(--icon-gap-y));
              margin-left: calc(var(--icon-gap-y) / 2* -1);
              display: var(--icon-name);
              margin-top: 6px;
              text-align: center;
              color: var(--icon-nameColor);
              font-size: var(--icon-nameSize);
              line-height: 1.1;
              filter: drop-shadow(0px 2px 7px rgba(0, 0, 0, .8));
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
          }

          .app-item-duration {
            transition-duration: var(--icon-transition-duration);
          }
        }
      }
    }
  }
</style>