<template>
  <div class="px-2 mb-2 input-group text-start">
    <label :for="name" class="label">
      {{name}}
      <span v-if="required" class="font-bold text-red-600">*</span>
    </label>
    <div class="relative mt-1 rounded-md shadow-sm">
      <slot name="addon-before" />
      <textarea
        v-if="type === 'textarea'"
        :value="value"
        :id="name"
        v-bind="$attrs"
        v-on="inputListeners"
        :placeholder="placeholder"
        :class="[validation]"
        class="block w-full form-input sm:text-sm sm:leading-5"
      ></textarea>
      <input
        v-else
        :id="name"
        :value="value"
        :type="type"
        v-bind="$attrs"
        v-on="inputListeners"
        class="block w-full form-input sm:text-sm sm:leading-5"
        :class="{'pl-24': !!$slots['addon-before'], 'pr-28': !!$slots['addon-after']}"
        :placeholder="placeholder"
      />
      <slot name="addon-after" />
    </div>
  </div>
</template>

<script>
export default {
  name: "InputGroup",
  props: {
    type: {
      type: String,
      default: "text",
    },
    name: String,
    placeholder: String,
    value: [String, Number],
    required: {
      type: Boolean,
      default: false,
    },
    validation: {
      type: String,
      default: "",
      validator: function (value) {
        return ["", "error", "info", "warning"].indexOf(value) !== -1;
      },
    },
  },
  inheritAttrs: false,
  computed: {
    inputListeners: function () {
      var vm = this;
      return Object.assign({}, this.$listeners, {
        input: function (event) {
          vm.$emit("input", event.target.value);
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  min-width: 120px;
  &::placeholder {
    @apply text-gray-300;
  }
}
</style>
