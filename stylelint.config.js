module.exports = {
  extends: [
    "stylelint-config-recess-order",
    "stylelint-config-recommended-scss",
    "stylelint-config-recommended-vue/scss",
    "stylelint-config-recommended-less",
    "stylelint-config-recommended-vue/less", // TODO 没有这个包
    "stylelint-config-recommended-vue",
  ],
  rules: {
    "no-empty-source": null,
  },
};
