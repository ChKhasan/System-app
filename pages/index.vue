<template>
  <div class="pt-[40px] xl:pt-4 pb-[170px] xl:pb-[64px]">
    <div class="2xl:container mx-auto xl:px-4">
      <Banner />
    </div>
    <TheFreelancers />
    <OrderBanner />
  </div>
</template>

<script>
import Banner from "../components/home/Banner.vue";
import Orders from "../components/home/Orders.vue";
import PlaceOrder from "../components/home/PlaceOrder.vue";
import PlaceSpecialists from "../components/home/PlaceSpecialists.vue";
import TheFreelancers from "../components/home/TheFreelancers.vue";
import OrderBanner from "../components/home/OrderBanner.vue";

export default {
  name: "IndexPage",
  middleware: "auth",

  components: {
    Banner,
    PlaceOrder,
    PlaceSpecialists,
    Orders,
    TheFreelancers,
    OrderBanner,
  },
};
</script>
<style lang="css" scoped>
:deep(.ant-progress-circle-path) {
  transition: stroke-dasharray 1s linear !important;
  stroke: red !important;
}
</style>
