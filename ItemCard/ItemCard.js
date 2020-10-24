class ItemCard extends ZCustomController {
  onThis_init(options) {
    this.item = {};
    this.item.id = Math.round(Math.random() * 100)
    this.item.name = this.productName.text 
    this.item.imgUrl = this.productImage.view.src
    this.item.internetPrice = this.productInternetPrice.text
    this.item.normalPrice = this.productNormalPrice.text

    this.removeItem.hide()
  }
  onAddItem_click() {
    this.removeItem.show()
    this.addItem.hide()
    this.triggerEvent("add", this.item);
  }
  onRemoveItem_click() {
    this.addItem.show()
    this.removeItem.hide()
    this.triggerEvent('remove',this.item.id)
  }
}

ZVC.export(ItemCard);