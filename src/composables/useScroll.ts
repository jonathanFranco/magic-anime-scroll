import { onBeforeUnmount, onMounted, ref } from "vue";

export function useScrollAnimation() {
  const elements = ref<(HTMLElement | null)[]>([]);
  const isInView = ref<boolean[]>([]);

  const checkVisibility = () => {
    elements.value.forEach((el, index) => {
      if (el) {
        const rect = el.getBoundingClientRect();
        isInView.value[index] =
          rect.top < window.innerHeight && rect.bottom > 0;
      }
    });
  };

  const observeElements = (refs: HTMLElement | HTMLElement[]) => {
    if (Array.isArray(refs)) {
      elements.value = refs || [];
      isInView.value = Array(refs.length).fill(false);
    } else {
      elements.value = [refs];
      isInView.value = [false];
    }
    checkVisibility();
  };

  onMounted(() => {
    window.addEventListener("scroll", checkVisibility);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", checkVisibility);
  });

  return {
    observeElements,
    isInView,
  };
}
