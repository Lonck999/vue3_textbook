import { ref } from "vue";

export default function useSum() {
  const sum = ref(0);

  function add() {
    sum.value += 1;
  }

  return {
    sum,
    add,
  };
}
