window.interopSamples = {
    subscribeToProductChange: function(elem, ref) {
        elem.addEventListener('productSelected',
            p => ref.invokeMethodAsync('SelectProduct', p.detail));
    },
    updateProduct: function (elem, product) {
        elem.product = product;
    }
};
