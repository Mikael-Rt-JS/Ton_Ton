// $('lang').addEventListener('change',e=>{
//   nowlang=e.target.value;
//   categorie.idCategoriesToHTML(categories[nowlang],$('categories'),categories['EN']);
//   // product.nowCategorie='tosts';
//   product.idMain_menuToHTML(menu[product.nowCategorie],$('products_block'),nowlang,{
//     order_phone:order_phone[nowlang],
//     price:price[nowlang],
//     ingredients:ingredients[nowlang]
//   });
// });

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
window.addEventListener('change',e=>{
   if(e.target.id==='lang'){
     nowlang=e.target.value;  
     categorie.idCategoriesToHTML(categories[nowlang],$('categories'),categories['EN' ]);
      product.idMain_menuToHTML(menu[product.nowCategorie],$('products_block'),nowlang,{
        order_phone:order_phone[nowlang],
        price:price[nowlang],
        ingredients:ingredients[nowlang]
      });
   }
 })
$('products_block').addEventListener('click',e=>{
  if(e.target.localName==='img'){
    if($('show_imgs').classList.contains('close_imgs')){
      $('show_imgs').classList.replace('close_imgs','show_imgs');
      $('show_imgs').innerHTML=`
      <button id="showimg_close" title="close">x</button>
      <img id="product_imgs" src="${e.target.src}"/>`;
      $('showimg_close').addEventListener('click',()=>{
        $('show_imgs').classList.replace('show_imgs','close_imgs');
        $('show_imgs').innerHTML=``;
      });
    }
  }
  
})
