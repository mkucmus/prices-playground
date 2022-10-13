<script setup lang="ts">
import { getProduct } from "@shopware-pwa/api-client";
import type { ProductResponse } from "@shopware-pwa/types";

const { refreshSessionContext, currency } = useSessionContext();
const { apiInstance } = useShopwareContext();

const productResponseSimplePrice = ref<ProductResponse>();
productResponseSimplePrice.value = await getProduct(
  "f5cdc1a027ba4f48947eb2fe3de1b4d4",
  null,
  apiInstance
);
const productSimplePrice = computed(
  () => productResponseSimplePrice.value?.product
);
const productResponseAdvancedPrice = ref<ProductResponse>();
productResponseAdvancedPrice.value = await getProduct(
  "40b927e45ff844eebc4250f4ec7b99b0",
  null,
  apiInstance
);
const productAdvancedPrice = computed(
  () => productResponseAdvancedPrice.value?.product
);

onMounted(() => {
  refreshSessionContext();
});
</script>

<template>
  <div class="container mx-auto">
    <div>
      <h2 class="text-2xl text-center">simple price</h2>
      <Product :product="productSimplePrice" :id="1" />
    </div>

    <div class="mt-8">
      <h2 class="text-2xl text-center">advanced price</h2>
      <Product :product="productAdvancedPrice" :id="2" />
    </div>
  </div>
</template>
<style></style>
