class ItemsList extends ZCustomController {
  onThis_init(options) {
    this.counter1 = 0;
  }
  onItemCard_add(item){
    this.triggerEvent("addToCart", item);
  }
  onItemCard_remove(id) {
    this.triggerEvent('removeFromCart',id)
  }
}

ZVC.export(ItemsList);