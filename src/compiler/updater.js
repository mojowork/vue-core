const CompilerUtils = {
    text(node, vm, expr) {
        var fn = this.updater['textUpdater']
        fn && fn(node, vm.$data[expr])
    },
    model: function model(node, vm, expr) {
        var fn = this.updater['modelUpdater']
        fn && fn(node, vm.$data[expr])
    },
    
    updater: {
        textUpdater: (node, value) => {
            node.textContent = value
        },
        modelUpdater: (node, value) => {
            debugger
            node.value = value
        }
    }
}

export default CompilerUtils
