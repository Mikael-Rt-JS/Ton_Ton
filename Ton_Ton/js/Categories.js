class Categories{
  
  idCategoriesToHTML(categories,element,en){
    let str=``;
    element.innerHTML='';
    for(let i=0;i<categories.length;i++){
      str+=`<li class="txt-upper" data-categorie="${en[i]}">${categories[i]}</li>`;
    }
    element.innerHTML=str;
  }
  
}
