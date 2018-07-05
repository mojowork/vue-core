import Watcher from '../watcher'

const CompilerUtils = {
    text(node, vm, expr) {
        var fn = this.updater['textUpdater']
        fn && fn(node, vm.$data[expr])
        new Watcher(vm, expr, val => {
            fn && fn(node, val)
        })
    },
    model: function model(node, vm, expr) {
        var fn = this.updater['modelUpdater']
        fn && fn(node, vm.$data[expr])
        node.addEventListener('input', (ev) => {
            var val = ev.target.value
            vm.$data[expr] = val
        })
    },

    updater: {
        textUpdater: (node, value) => {
            node.textContent = value
        },
        modelUpdater: (node, value) => {
            node.value = value
        }
    }
}

export default CompilerUtils
