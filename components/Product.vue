<script setup lang="ts">
import { useProductPrice } from "@shopware-pwa/composables-next";
import {
  getProductThumbnailUrl,
  getProductTierPrices,
} from "@shopware-pwa/helpers-next";
import { Product } from "@shopware-pwa/types";
const props = defineProps<{
  product: Product;
}>();
const { price, fromPrice, originalPrice, showOriginalPrice } = useProductPrice(
  props.product
);
const { getFormattedPrice } = usePrice();

const priceData = computed(() => {
  let priceData = {};
  Object.keys(props.product).forEach((key) => {
    if (
      key.toLowerCase().includes("price") // &&
      //!key.toLowerCase().includes("cheapest")
    ) {
      priceData[key] = props.product[key];
    }
  });
  return priceData;
});
</script>
<template>
  <div class="flex gap-4">
    <div
      class="flex-1 w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <div>
        <a
          :href="`https://demo-frontends.shopware.store/admin#/sw/product/detail/${product.id}/base`"
          target="_blank"
        >
          <img
            class="p-8 rounded-t-lg"
            :src="getProductThumbnailUrl(product)"
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a
            :href="`https://demo-frontends.shopware.store/admin#/sw/product/detail/${product.id}/base`"
            target="_blank"
          >
            <h5
              class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
            >
              {{ product.name }}
            </h5>
          </a>
          <div class="flex items-center mt-2.5 mb-5">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <span
              class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
              >5.0</span
            >
          </div>
          <div class="flex justify-between items-center">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">{{
              getFormattedPrice(price)
            }}</span>
            <span
              v-if="showOriginalPrice"
              class="text-3xl font-bold text-red-400 line-through dark:text-white"
              >{{ getFormattedPrice(originalPrice) }}</span
            >
            <!-- <button
              disabled
              class="disabled text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </button> -->
          </div>
        </div>
      </div>
      <hr />
      <div class="p-4">
        <div>
          <strong class="underline">useProductPrice:</strong>
          <br />
          <strong>price</strong>: {{ price }}<br />
          <strong>fromPrice</strong>: {{ fromPrice || typeof fromPrice }} <br />
          <strong>originalPrice</strong>:
          {{ originalPrice || typeof originalPrice }} <br />
          <strong>showOriginalPrice</strong>: {{ showOriginalPrice }}<br />
        </div>
        <div class="mt-4">
          <strong class="underline">tier prices:</strong><br />
          getProductTierPrices:
          <json-viewer :value="getProductTierPrices(product)"></json-viewer>
        </div>
      </div>
    </div>
    <div class="flex-1 text-xs font-mono rounded-lg shadow-md p-4">
      <json-viewer :expand-depth="2" :value="priceData"></json-viewer>
    </div>
  </div>
</template>
