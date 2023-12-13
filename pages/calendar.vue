<template lang="html">
  <div class="py-12">
    <div class="py-4">
      <a-week-picker placeholder="Select week" @change="onChange" />
    </div>
    <a-table
      :columns="columns"
      :data-source="data"
      :scroll="{ x: 1500 }"
      :pagination="false"
    >
      <span
        slot="monday"
        @click="openDrawer(text)"
        slot-scope="text"
        class="status-inactive"
        >ID{{ text }}</span
      >
      <span
        slot="tuesday"
        @click="openDrawer(text)"
        slot-scope="text"
        class="status-active"
        >{{ text }}</span
      >
    </a-table>
    <vue-bottom-sheet-vue2
      v-if="bottomDrawer"
      ref="openSpecials"
      class="bottom-drawer spicial-drawer h-full"
      :init-sheet-height="500"
    >
      <div class="px-4 pb-4 flex flex-col justify-between h-full">
        <div class="flex flex-col">
          <div
            class="flex justify-between items-center flex-col gap-3 pb-6 border-[0] border-b border-solid border-grey-light"
          >
            <h6 class="text-black text-[18px] font-semibold">Sohangizni tanlang</h6>
            <p class="text-[14px] text-grey-80 flex gap-2 items-center">
              <span class="text-main-color font-medium">afdsafasfsafd</span>: yonalish
              tanlandi
              <span>(max 3 ta)</span>
            </p>
          </div>
          <div class="drop-list flex flex-col gap-2 xl:gap-8 mt-8">
            <div class="dropdown overflow-hidden">
              <button
                class="drop-head xl:px-0 xl:py-0 bg-white relative z-20 w-full flex justify-between items-center px-[10px] py-[10px]"
              >
                <h2 class="text-[14px] font-medium text-grey-80 flex gap-2 items-center">
                  <span class="flex items-center gap-2"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.9996 20C8.46499 20 5.59961 17.0833 5.59961 13.4854C5.59961 9.91563 7.64227 5.75007 10.8293 4.26044C11.2007 4.08681 11.6002 4 11.9996 4V20Z"
                        fill="#009A10"
                      />
                      <path
                        opacity="0.3"
                        d="M13.1703 4.26044C12.7989 4.08681 12.3994 4 12 4V9.60005L15.5453 6.05473C14.8551 5.29647 14.057 4.67489 13.1703 4.26044Z"
                        fill="#009A10"
                      />
                      <path
                        opacity="0.4"
                        d="M12 9.60001V14L17.2914 8.70857C16.8337 7.73243 16.245 6.82334 15.5453 6.05469L12 9.60001Z"
                        fill="#009A10"
                      />
                      <path
                        opacity="0.6"
                        d="M12 17.9999L18.2488 11.7511C18.0728 10.7187 17.7471 9.68039 17.2914 8.7085L12 13.9999V17.9999Z"
                        fill="#009A10"
                      />
                      <path
                        opacity="0.7"
                        d="M18.2488 11.751L12 17.9998V19.9997C15.5346 19.9997 18.4 17.083 18.4 13.4851C18.4 12.9177 18.3484 12.3353 18.2488 11.751Z"
                        fill="#009A10"
                      />
                    </svg>
                   Current ID: {{ currentId }}</span
                  >
                  <span class="text-[12px] text-grey-40">({{ 32 }})</span>
                </h2>
                <span class="drop-icon"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 10L12 14L17 10"
                      stroke="#020105"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></span>
              </button>

              <div class="drop-body relative z-10">
                <div class="py-4 flex flex-col gap-4 xl:gap-8">
                  <div class="flex gap-3 flex-wrap"></div>
                </div>
              </div>
              <!-- </Transition> -->
            </div>
          </div>
        </div>
        <div class="flex gap-2 flex-col w-full mt-20">
          <button
            class="h-[52px] border border-solid border-blue bg-blue rounded-[12px] flex justify-center items-center text-[14px] text-white font-medium"
          >
            Tasdiqlash
          </button>
          <button
            class="h-[52px] border border-solid border-border-darik rounded-[12px] flex justify-center items-center text-[14px] text-black font-medium"
          >
            Bekor qilish
          </button>
        </div>
      </div>
    </vue-bottom-sheet-vue2>
  </div>
</template>
<script>
const columns = [
  {
    title: "Time range",
    width: 126,
    dataIndex: "name",
    key: "name",
    fixed: "left",
    align: "center",
    className: "column-time",
  },
  {
    title: "Monday",
    dataIndex: "age",
    key: "age",
    align: "center",
    scopedSlots: { customRender: "monday" },
    className: "column-day",
  },
  {
    title: "Tuesday",
    dataIndex: "address",
    key: "1",
    align: "center",
    scopedSlots: { customRender: "tuesday" },
    className: "column-day",
  },
  {
    title: "Wednesday",
    dataIndex: "address",
    key: "2",
    align: "center",
    scopedSlots: { customRender: "tuesday" },
    className: "column-day",
  },
  { title: "Thursday", dataIndex: "address", key: "3", align: "center" },
  { title: "Friday", dataIndex: "address", key: "4", align: "center" },
  { title: "Saturday", dataIndex: "address", key: "5", align: "center" },
  { title: "Sunday", dataIndex: "address", key: "6", align: "center" },
];

const data = [
  {
    key: "1",
    name: "13:30 - 18:40",
    age: "1",
    address: "New York Park",
  },
  {
    key: "2",
    name: "13:30 - 18:40",
    age: "2",
    address: "",
  },
  {
    key: "3",
    name: "13:30 - 18:40",
    age: "3",
    address: "New York Park",
  },
  {
    key: "4",
    name: "13:30 - 18:40",
    age: "4",
    address: "",
  },
  {
    key: "5",
    name: "13:30 - 18:40",
    age: "",
    address: "New York Park",
  },
  {
    key: "6",
    name: "13:30 - 18:40",
    age: "6",
    address: "",
  },
  {
    key: "7",
    name: "13:30 - 18:40",
    age: "7",
    address: "New York Park",
  },
  {
    key: "8",
    name: "13:30 - 18:40",
    age: "",
    address: "",
  },
];
export default {
  data() {
    return {
      data,
      columns,
      bottomDrawer: false,
      currentId: null,
      events: [
        {
          start: "2023-12-13 13:00",
          end: "2023-12-13 14:00",
          title: "Need to go shopping",
          content: '<i class="icon material-icons">shopping_cart</i>',
          class: "leisure",
        },
        {
          start: "2023-12-13",
          end: "2023-12-13",
          title: "Golf with John",
          content: '<i class="icon material-icons">golf_course</i>',
          class: "sport",
        },
        {
          start: "2023-12-14",
          end: "2023-12-14",
          title: "Dad's birthday!",
          content: '<i class="icon material-icons">cake</i>',
          class: "sport",
        },
      ],
    };
  },
  mounted() {
    this.bottomDrawer = true;
  },
  methods: {
    openDrawer(id) {
      this.currentId = id;
      this.open();
    },
    open() {
      this.$refs.openSpecials.open();
    },
    close() {
      this.$refs.openSpecials.close();
    },
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  },
};
</script>
<style lang="css" scoped>
.vuecal {
  height: 90vh;
}
.vuecal__event.leisure {
  background-color: rgba(253, 156, 66, 0.9);
  border: 1px solid rgb(233, 136, 46);
  color: #fff;
}
.vuecal__event.sport {
  background-color: rgba(255, 102, 102, 0.9);
  border: 1px solid rgb(235, 82, 82);
  color: #fff;
}
:deep(.ant-table-tbody .ant-table-row td) {
  border-inline-end: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  /* height: 42px; */
  padding: 0;
}
:deep(.ant-table-tbody .ant-table-row) {
  height: 54px !important;
}
:deep(.ant-table-tbody .column-time) {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px !important;
}
:deep(.ant-table-tbody .column-day span) {
  display: flex;
  width: 100%;
  height: 100%;
  color: #606060;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
}

.status-inactive {
  background-color: rgba(255, 112, 67, 0.1);
  border-left: 2px solid rgb(255, 112, 67);
}
.status-active {
  background-color: rgba(39, 202, 55, 0.1);
  border-left: 2px solid rgb(39, 202, 55);
}
:deep(.ant-table-tbody .column-day) {
  position: relative;
}
.spicial-drawer :deep(.bottom-sheet__main) {
  height: 100%;
}
</style>
