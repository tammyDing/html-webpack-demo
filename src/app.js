import Layer from './components/layer/layer'

const App = function () {
    let dom = document.getElementById('app')
    const layer = new Layer()
    dom.innerHTML = layer.tpl
}

new App()
