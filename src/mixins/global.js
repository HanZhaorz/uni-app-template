/**
 * 全局混入
 */

import Vue from "vue";
import config from "@/config";

Vue.mixin({
  data() {
    return {
      // 主色
      _colorPrimary: config.colorPrimary,
      // 未加载时暂时的图片
      _previewImg: "/static/icon/preview.png"
    };
  },
  methods: {
    /**
     * 路由跳转
     */
    navTo(url) {
      uni.navigateTo({ url });
    },
    /**
     * 判断是否有上一页
     */
    isHasPrePage() {
      return getCurrentPages().length > 1;
    }
  }
});
