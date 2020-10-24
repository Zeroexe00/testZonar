class Application extends ZCustomController {
  onThis_init() {
    this.listItems = []

  }
  onItemsList_addToCart(item){
    this.listItems.push(item)
    localStorage.setItem('items',JSON.stringify(this.listItems))
    this.navbar.add(item)
  }
  onItemsList_removeFromCart(id) {
    let listItems = JSON.parse(localStorage.getItem('items'))
    if(listItems.length) {
      listItems.forEach((e,i)=>{
        if(e.id === id) {
          listItems.splice(i,1)
        }
      })
    }
    localStorage.removeItem('items')
    localStorage.setItem('items',listItems)
    this.navbar.remove(id)
  }
}

ZVC.export(Application);