class ItemInCart extends ZCustomController {
  onThis_init(options) {
    // this.productImage.view.title = (options && options.name) ? options.name : ''
    this.insertItem(options)
  }
  insertItem(item) {
    // console.log('llegue')
    let img = document.createElement('img')
    img.src =  item ? item.imgUrl : ''
    img.id = 'img'
    img.classList.add('m-2')
    img.setAttribute('data-toggle','tooltip')
    img.setAttribute('data-placement','bottom')
    img.setAttribute('title', item ? item.name : '')
    // console.log(this.find('div#imgContainer'))
    this.find('div#imgContainer').appendChild(img)
  }
}

ZVC.export(ItemInCart);