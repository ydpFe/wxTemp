export default(Vue) => {
    Vue.directive('title', {
      inserted: function (el, binding) {
        document.title = el.innerText
        el.remove()
      }
    })
}