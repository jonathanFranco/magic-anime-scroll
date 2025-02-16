<template>
  <div ref="target">
    <transition :name="type">
      <div v-show="animate" class="animated-component">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, PropType, ref } from "vue";

const props = defineProps({
  type: {
    type: String as PropType<
      | "zoom-in"
      | "fade-rotate"
      | "slide-fade"
      | "shake-enter"
      | "zoom-out"
      | "rotate"
      | "slide-right"
      | "slide-left"
      | "slide-up"
      | 'slide-down"'
    >,
    default: "zoom-in",
  },
  triggerAways: {
    type: Boolean,
    default: true,
  },
});

const target = ref<Element>();
const animate = ref<boolean>(false);

let hasAnimated = false;

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      if (!props.triggerAways || (props.triggerAways && !hasAnimated)) {
        animate.value = true;
        hasAnimated = true;
      }
    } else if (!props.triggerAways) animate.value = false;
  },
  {
    threshold: 0.1,
  }
);

onMounted(() => {
  if (target.value) observer.observe(target.value);
});

onBeforeUnmount(() => observer.disconnect());
</script>
