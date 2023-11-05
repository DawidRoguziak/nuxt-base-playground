<script lang="ts" setup>
definePageMeta({
  layout: "plain",
});

const modifiers = ref({
  quality: 100,
  flop: undefined,
  flip: undefined,
  blur: undefined,
  grayscale: undefined,
  grayscaleAlpha: undefined,
  tint: undefined,
  sharpen: undefined,
  negate: undefined,
});

const crop = ref({
  top: undefined,
  left: undefined,
  width: undefined,
  height: undefined,
});


const extract = computed(() => {
  if (crop.value.width && crop.value.height) {
    return `${crop.value.left}_${crop.value.top}_${crop.value.width}_${crop.value.height}`;
  }
  return;
})
</script>

<template>
  <NuxtPicture format="avif,webp" src="/cat.jpg" sizes="xs:30vw sm:40vw md:50vw"
               :modifiers="{...modifiers, extract: extract}"></NuxtPicture>
</template>

<style scoped>
:deep(image) {
  display: block;
  max-width: 100%;
}
</style>