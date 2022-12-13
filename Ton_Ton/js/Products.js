class Products{
  nowCategorie="";
  get nowCategorie(){
    return this.nowCategorie;
  }
  
  set nowCategorie(nowCategorie){
    this.nowCategorie=nowCategorie;
  }
  
  idMain_menuToHTML(menu,element,langs,other){
    let imgPath=`./imgs/${this.nowCategorie}/${this.nowCategorie}_`;
    let str='';
    element.innerHTML='';
    
    for(let i=0;i<menu.length;i++){
      str+=`<div class="cards">
      <img class="img-left" src="${imgPath+(i+1)+'.jpg'}" title="${menu[i].name}" alt="${menu[i].name}"/>
      <div class="right">
        <div class="title_phone">
          <h3>${menu[i].name}</h3>
          <a class="order_link" href="tel:+37496969672">${other.order_phone
}<br> <span class="phones">+374-96-96-96-72</span></a>
        </div>

        <div class="produce">
          <b>${other.ingredients? other.ingredients: "-"}</b>
          <p>
            ${menu[i]['ingredients'+langs]? menu[i]['ingredients'+langs]:"-"}
          </p>
        </div>
        <div class="price_block">
          <span class="price">${other.price}: 1200 &#1423;</span>
        </div>
      </div>
    </div>`;
    }
    
    element.innerHTML=str;
  }
}