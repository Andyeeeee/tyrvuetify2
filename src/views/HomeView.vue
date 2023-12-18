<template>
  <div id="HomeView">
    <!-- <v-container>
      <v-row> -->
    <!-- <v-col v-for="item in items2" :key="item.to"> -->
    <!-- <v-btn :title="item.title" :text="item.text" :icon="item.icon" :to="item.to">
          </v-btn> -->
    <!-- <br> -->
    <!-- {{ item.title }} -->
    <!-- </v-col> -->
    <!-- </v-row>
      contente
    </v-container> -->
    <div style="display: flex; text-align: center;justify-content: space-evenly;">
      <div> <v-btn append-icon="mdi-face-man" />
        <br>
        <div>關於我</div>
      </div>
      <div> <v-btn append-icon="mdi-book-open" />
        <br>
        <div>我的作品</div>
      </div>
      <div> <v-btn append-icon="mdi-hubspot" />
        <br>
        <div>我的技能</div>
      </div>
      <div> <v-btn append-icon="mdi-book-open-page-variant" />
        <br>
        <div>學習歷程</div>
      </div>
      <div> <v-btn append-icon="mdi-ski" />
        <br>
        <div>我的經歷</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
const items2 = computed(() => {
  return [
    { to: 'aboutme', title: '關於我', icon: 'mdi-face-man', text: '關於我' },
    { to: 'aboutme', title: '我的作品', icon: 'mdi-book-open', text: '我的作品' },
    { to: 'aboutme', title: '我的技能', icon: 'mdi-hubspot', text: '我的技能' },
    { to: 'aboutme', title: '學習歷程', icon: 'mdi-book-open-page-variant', text: '學習歷程' },
    { to: 'aboutme', title: '我的經歷', icon: 'mdi-ski', text: '我的經歷' }
  ]
})
</script>
