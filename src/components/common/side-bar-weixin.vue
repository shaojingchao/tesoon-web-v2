<template>
  <div class="mask-layer">
    <transition name="fadeIn-up" appear>
      <div class="ewm-wrap">
        <img src="../../assets/img/ewm.png">
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'SideBarWeixin',
    data () {
      return {
      }
    },
    prop: {
      isVisible: {
        default: false
      }
    },
    mounted () {
    }
  }
</script>


<style lang="less" scoped>
  .mask-layer {
    z-index: 10000;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0;
  }
  .ewm-wrap{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }

  @media screen and (max-width: 767px) {
  }
</style>
