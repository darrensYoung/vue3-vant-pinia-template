import { ref } from "vue";
import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 2 };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    // increment() {
    //   this.count++;
    // },
  },
});
