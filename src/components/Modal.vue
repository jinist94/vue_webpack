<template>
  <div @click="onModal">
    <slot name="activator"></slot>
  </div>
  <teleport to="body">
    <!-- 바디태그 내부로 순간이동 -->
    <template v-if="modelValue"> 
      <div
        class="modal"
        @click="offModal">
        <div
          :style="{width: `${parseInt(width, 10)}px`}"
          class="modal__inner"
          @click.stop>
          <button
            v-if="closeable"
            class="close"
            @click="offModal">
            x
          </button>
          <slot></slot>
        </div>
      </div>
    </template>
  </teleport>
</template>

<script>
export default {
  props:{
    width: {
      type: [String, Number],
      default: 400
    },
    closeable:{
      type:Boolean,
      default: false 
    },
    modelValue:{
      type:Boolean,
      default: false,
    }
  },
  watch: {
    modelValue(newValue){
      if(newValue){
        window.addEventListener('keyup', this.keyupHandler);
      } else{
        window.removeEventListener('keyup', this.keyupHandler);
      }
    }
  },
  methods:{
    keyupHandler(event){
      if(event.key === 'Escape'){
        console.log('ESC!');
        this.offModal();
      }
    },
    onModal(){
      this.$emit('update:modelValue', true);
    },
    offModal(){
      this.$emit('update:modelValue', false);
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(black, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  &__inner{
    background-color: white;
    padding: 20px;
  }
}
</style>