<template>
  <div class="method cheque mb-8">
    <p
      class="text-sm"
    >In order to make an offline donation we ask that you please follow these instructions:</p>
    <ol class="list-decimal pl-4 my-4">
      <li>
        Make a check payable to
        <strong>"Ezras Nashim"</strong>.
      </li>
      <li>
        On the memo line of the check, please indicate that the donation is for
        <strong>"Ezras Nashim"</strong>.
      </li>
      <li>
        Please mail your check to:
        <div class="block mt-2 p-3 bg-pink-50 rounded-lg text-pink-800">
          <strong class="uppercase">Ezras Nashim</strong>
          <span class="block text-sm">
            1716 56th St
            <br />Brooklyn, NY 11204
          </span>
        </div>
      </li>
    </ol>
    <p
      class="pl-6 text-gray-700 text-sm"
    >All contributions will be gratefully acknowledged and are tax deductible.</p>
  </div>
</template>

<script>
export default {
  name: "Cheque"
};
</script>

<style lang="scss">
.cheque {
  ol {
    li {
      @apply pl-2 mt-2;
      &::-moz-list-number {
        @apply font-bold text-pink-600;
      }
    }
  }
}
</style>
