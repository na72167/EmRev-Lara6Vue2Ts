<template>
  <div>
    <Hero/>
    <NewReview/>
    <About/>
    <Contact/>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import Hero from '@/components/home/hero/Index';
import NewReview from '@/components/home/newReview/Index';
import About from '@/components/home/about/Index';
import Contact from '@/components/home/contact/Index';

@Component({
  components: {
    Hero,
    NewReview,
    About,
    Contact
  },
})
export default class Home extends Vue {}
</script>
