import Tplcompiler from './compiler/tplcompiler'
class Lite {
    constructor(options) {
        this.$vm = this
        this.$el = options.el
        this.$data = options.data
        if (this.$el) {
            //模板编译
            this.$compiler = new Tplcompiler(this.$el, this.$vm)
        }
    }
}


export default Lite