import CompilerUtils from './updater'
export default class Tplcompiler {
    constructor(el, vm) {
        this.node = el.nodeType === 1 ? el : document.querySelector(el)
        this.vm = vm
        if (this.node) {
            var fragment = this.node2fragment(this.node)
            this.compiler(fragment)
            this.node.appendChild(fragment)
        }
        
    }
    
    // DOM节点转文档片段
    node2fragment(node) {
        var fragment = document.createDocumentFragment()
        var child
        while (child = node.firstChild) {
            fragment.appendChild(child)
        }
        return fragment
        
    }
    // 编译文档片段
    compiler(parent) {
        var childNodes = parent.childNodes
        Array.from(childNodes).forEach(node => {
            if (node.nodeType === 1) {
                this.compilerElement(node)
            } else {
                this.compilerText(node)
            }
        })
    }
    // 编译元素节点
    compilerElement(node) {
        var attrs = node.attributes
        Array.from(attrs).forEach(attr => {
            debugger
            var attrName = attr.name
            var expr = attr.value
            debugger
            if (this.isDirective(attrName)) {
                var directive = attrName.split('-')[1]
                CompilerUtils[directive](node, this.vm, expr)
            }
        })

    }

    // 编译文本节点
    compilerText(node) {
        var textReg = /\{\{(.+)\}\}/
        var expr = node.textContent
        if (textReg.test(expr)) {
            expr = RegExp.$1
            CompilerUtils['text'](node, this.vm, expr)
        }
    }

    // 判断属性是否是指令
    isDirective(attr) {
        var directiveReg = /^t-([a-z]+)$/
        return directiveReg.test(attr)
    }
}
