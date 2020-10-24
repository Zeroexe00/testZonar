class ItemsList extends ZCustomController {
  onThis_init(options) {
    this.counter1 = 0;
  }
  onItemCard_add(item){
    // console.log(item,'itemlist')
    this.triggerEvent("addToCart", item);
  }
  onItemCard_remove(id) {
    // console.log('remover',id)
    this.triggerEvent('removeFromCart',id)
  }
}

ZVC.export(ItemsList);