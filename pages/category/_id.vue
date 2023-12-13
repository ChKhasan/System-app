<template>
  <div class="pt-[40px] xl:pt-4 pb-[170px] xl:pb-[64px]">
    <TheFreelancers />
  </div>
</template>

<script>
import TheFreelancers from "@/components/home/TheFreelancers.vue";

export default {
  name: "IndexPage",
  middleware: "auth",

  components: {
    TheFreelancers,
  },
};
</script>
<style lang="css" scoped>
:deep(.ant-progress-circle-path) {
  transition: stroke-dasharray 1s linear !important;
  stroke: red !important;
}
</style>
