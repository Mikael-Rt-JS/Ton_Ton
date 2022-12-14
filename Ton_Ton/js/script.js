let categorie=new Categories();
let product=new Products();
let nowlang='EN';
// let menuPage='';
  
window.onload=()=>{
//   nowlang=$('lang').value;
  categorie.idCategoriesToHTML(categories[nowlang],$('categories'),categories['EN']);
  product.nowCategorie='tosts';
  product.idMain_menuToHTML(menu['tosts'],$('products_block'),nowlang,{
    order_phone:order_phone[nowlang],
    price:price[nowlang],
    ingredients:ingredients[nowlang]
  });
}
