class ItemDetails extends ZCustomController {
  onThis_init(options) {
    // console.log(options)
    if(options){
      this.productName.text = options.name
      this.productImage.view.src = options.imgUrl 
      this.productQuantity.value = 1
      this.productPrice.text = '$ ' + Number(options.internetPrice.replace('.','')) * this.productQuantity.value
      // this.triggerEvent("getTotal");
    }
    // console.log(this)
  }
  onProductQuantity_change() {
    this.productPrice.text = '$ ' + Number(this.productPrice.text.replace('$ ','').replace('.','')) * this.productQuantity.value
    // this.triggerEvent("getTotal",Number(this.productPrice.text.replace('$ ','').replace('.','')) * this.productQuantity.value);
    document.getElementById('totalPrice').innerText = 'Total a pagar $ '+ Number(this.productPrice.text.replace('$ ','').replace('.','')) * this.productQuantity.value
  }
}

ZVC.export(ItemDetails);