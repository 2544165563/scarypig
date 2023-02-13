<template>
    <n-carousel :key="myEffect" :effect="myEffect" :centered-slides="isCard" :slides-per-view="isCard ? 'auto' : 1"
        draggable style="height: 340px;width: ;">
        <n-carousel-item :style="{ width: isCard ? '60%' : '100%' }">
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg">
        </n-carousel-item>
        <n-carousel-item :style="{ width: isCard ? '60%' : '100%' }">
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg">
        </n-carousel-item>
        <n-carousel-item :style="{ width: isCard ? '60%' : '100%' }">
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg">
        </n-carousel-item>
        <n-carousel-item :style="{ width: isCard ? '60%' : '100%' }">
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg">
        </n-carousel-item>
    </n-carousel>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { NCarousel, NCarouselItem } from "naive-ui";

export default defineComponent({
    setup() {
        const effectRef = ref("card");
        const isCardRef = computed(() => effectRef.value === "card");
        return {
            isCard: isCardRef,
            myEffect: effectRef,
            effects: ["card"]
        };
    },
    components: {
        NCarousel, NCarouselItem
    }
});
</script>

<style scoped>
.carousel-img {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>