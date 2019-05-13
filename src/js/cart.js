require(['./common'], common => {
    common.initCart()

    document.getElementById('btn').onclick = function () {
        console.log('btn.')
    }

    $(function () {
        console.log('cart jquery')
    })
})
