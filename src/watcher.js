import Dep from './dep'
export default class Watcher {
    constructor(vm, expr, cb) {
        this.vm = vm
        this.expr = expr
        this.cb = cb
        this.value = this.get()
    }

    get() {
        Dep.target = this
        var value = this.vm.$data[this.expr]
        Dep.target = null
        return value
    }

    update(newVal) {
        var newVal = this.vm.$data[this.expr]
        var oldVal = this.value
        if (oldVal !== newVal) {
            this.cb.call(this.vm, newVal)
        }
    }
}
