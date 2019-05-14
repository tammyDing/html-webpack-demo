import '../../assets/scss/common.scss'
import './style.scss'

import Boxlayer from '../../components/layer/layer'

const Home = function () {
    let dom = document.getElementById('box')
    const boxLayer = new Boxlayer()
    dom.innerHTML = boxLayer.tpl

    console.log('home.')
}

new Home() // 实例化Home函数
