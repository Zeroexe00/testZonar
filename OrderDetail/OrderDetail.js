class OrderDetail extends ZCustomController {
  onThis_init(options) {
     this.itemsList = JSON.parse(localStorage.getItem('items'))
     this.itemsList.forEach((e) => {
      let item = document.createElement('div')
      item.id = 'itemDetails' + e.id.toString()
      item.setAttribute('data-z-component',encodeURI('../ItemDetails/ItemDetails'))
      this.find('div#orderDetails').appendChild(item)
      ZVC.fromElement('itemDetails' + e.id.toString(),{...e})
      // console.log(this.find('div#itemDetails' + e.id.toString()))
    })
    this.onItemDetails_getTotal()
    // console.log(this.findAll('#itemDetails'))
  }

  onItemDetails_getTotal(){
    console.log('llegue')
    let total = 0;
    this.itemsList.forEach((e) => {
      total = Number(e.internetPrice.replace('.','')) + total
    })
    this.totalPrice.text = 'Total a pagar $ ' + total.toString()
  }
}

ZVC.export(OrderDetail);