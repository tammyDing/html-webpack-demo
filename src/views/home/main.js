import '../../assets/scss/common.scss'
import './style.scss'

import Boxlayer from '../../components/layer/layer'

const Home = function () {
    const boxLayer = new Boxlayer()
    
    // 插入
    $('#box').html(boxLayer.tpl)

    console.log('home.')
}

new Home() // 实例化Home函数
