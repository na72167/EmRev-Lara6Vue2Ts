<template>
  <div>
    <Hero/>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import Hero from '@/components/home/hero/Index';

@Component({
  components: {
    Hero
  },
})
export default class Home extends Vue {}
</script>
