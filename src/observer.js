import Dep from './dep'
export default class Observer {
    constructor(data) {
        this.observer(data)
    }

    observer(data) {
        if (data && Object.prototype.toString.call(data) === '[object Object]') {
            Object.keys(data).forEach(key => {
                this.defineReactive(data, key, data[key])
            })
        }
    }

    // 数据重新定义
    defineReactive(obj, key, val) {
        var dep = new Dep()
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: false,
            get() {
                Dep.target && dep.addSub(Dep.target)
                return val
            },
            set(newVal) {
                val = newVal
                dep.notify()
            }
        })

    }
}
