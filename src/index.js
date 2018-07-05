import Tplcompiler from './compiler/tplcompiler'
import Observer from './observer'
class Lite {
    constructor(options) {
        debugger
        this.$vm = this
        this.$el = options.el
        this.$data = options.data

        // 劫持数据
        new Observer(this.$data)
        
        if (this.$el) {
            //模板编译
            this.$compiler = new Tplcompiler(this.$el, this.$vm)
        }
    }
}


export default Lite
