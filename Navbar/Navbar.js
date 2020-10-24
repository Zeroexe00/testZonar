class Navbar extends ZCustomController {
  onThis_init(options) {
    this.counter = 0;
    this.cart.hide()
    this.find('span#itemCounter').innerText = this.counter;
    this.listItems = []
    if(!!localStorage.getItem('items')) {
      this.listItems = JSON.parse(localStorage.getItem('items'))
      this.counter = this.listItems.length
      this.find('span#itemCounter').innerText = this.counter;
      this.listItems.forEach((e) => {
      this.cart.show()
      this.cart.content.insertItem(e)
      })
  }
  }
  add(item) {
    this.counter++;
    this.find('span#itemCounter').innerText = this.counter;
    this.cart.show()
    if(this.listItems.length === 0) {
      this.cart.load("../ItemInCart/ItemInCart",{...item})
    }
    this.cart.content.insertItem(item)
    this.listItems.push(item)
  }
  remove(id) {
    if(this.counter !== 0){
      this.counter--;
      this.listItems.forEach((e,i)=>{
        if(e.id === id) {
          this.listItems.splice(i,1)
        }
      })
    }else {
      this.counter = 0
    }
    this.find('span#itemCounter').innerText = this.counter;
  }
}

ZVC.export(Navbar);