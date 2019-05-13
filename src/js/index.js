import '../scss/common.scss'

require(['./common'], function (common) {
    common.initIndex()
    
    $(document).on('click', () => {
        console.log('document click index.')
    })

    $(function () {
        console.log('index jquery')
    })
})
