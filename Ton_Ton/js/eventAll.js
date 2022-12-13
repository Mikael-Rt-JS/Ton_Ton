$('lang').addEventListener('change',e=>{
  nowlang=e.target.value;
  categorie.idCategoriesToHTML(categories[nowlang],$('categories'),categories['EN']);
  // product.nowCategorie='tosts';
  product.idMain_menuToHTML(menu[product.nowCategorie],$('products_block'),nowlang,{
    order_phone:order_phone[nowlang],
    price:price[nowlang],
    ingredients:ingredients[nowlang]
  });
});

$('categories').addEventListener('click',e=>{
  if(e.target.dataset.categorie){
    product.nowCategorie=e.target.dataset.categorie;
    categorie.idCategoriesToHTML(categories[nowlang],$('categories'),categories['EN']);
    product.idMain_menuToHTML(menu[product.nowCategorie],$('products_block'),nowlang,{
      order_phone:order_phone[nowlang],
      price:price[nowlang],
      ingredients:ingredients[nowlang]
    });
    // categorie.idCategoriesToHTML(categories[nowlang],$('categories'));
    
  }
})
