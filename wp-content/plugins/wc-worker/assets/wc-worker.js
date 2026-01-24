(function($){
  const CLIENT_KEY = 'wc_worker_client_id';
  let clientId = localStorage.getItem(CLIENT_KEY);
  if (!clientId) {
    clientId = 'c_' + Math.random().toString(36).substring(2);
    localStorage.setItem(CLIENT_KEY, clientId);
  }

  // add to cart
  $(document).on('click', '.wc-worker-add-to-cart', function(e){
    alert('kosong');
    e.preventDefault();
    const $btn = $(this);
    const productId = $btn.data('product_id');
    const productName = $btn.data('product_name');
    const productPrice = $btn.data('product_price'); // simpan di data- attr dari php

    fetch(WC_WORKER_CFG.workerUrl + '/cart/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        client_id: clientId,
        product_id: productId,
        product_name: productName,
        product_price: productPrice,
        quantity: 1
      })
    })
    .then(r => r.json())
    .then(res => {
      console.log(res);
      alert('Produk ditambah ke cart (worker).');
    });
  });

  // checkout
  
  $('.wc-block-components-checkout-place-order-button').on('click', function(e){
    alert('cinfong');
    e.preventDefault();
    fetch(WC_WORKER_CFG.workerUrl + '/checkout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ client_id: clientId })
    })
    .then(r => r.json())
    .then(res => {
      if (res.ok) {
        alert('Order dibuat #'+res.order_id+' total: '+res.total);
        // kamu bisa redirect ke halaman orders kamu di WP
        // window.location.href = '/my-orders/?order_id=' + res.order_id;
      } else {
        alert('Checkout gagal: ' + (res.error || ''));
      }
    });
  });

  $(document).on('click', '.wc-block-components-checkout-place-order-button', function(e){
    e.preventDefault();
    alert('coping');
    fetch(WC_WORKER_CFG.workerUrl + '/checkout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ client_id: clientId })
    })
    .then(r => r.json())
    .then(res => {
      if (res.ok) {
        alert('Order dibuat #'+res.order_id+' total: '+res.total);
        // kamu bisa redirect ke halaman orders kamu di WP
        // window.location.href = '/my-orders/?order_id=' + res.order_id;
      } else {
        alert('Checkout gagal: ' + (res.error || ''));
      }
    });
  });

})(jQuery);
