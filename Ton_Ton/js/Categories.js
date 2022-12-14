class Categories{
  
  idCategoriesToHTML(categories,element,en){
    let str=`<select id="lang">
      <option value="EN" selected="selected">EN</option>
      <option value="RU">RU</option>
      <option value="AM">AM</option>
    </select>`;
    element.innerHTML='';
    for(let i=0;i<categories.length;i++){
      str+=`<li class="txt-upper" data-categorie="${en[i]}">${categories[i]}</li>`;
    }
    element.innerHTML=str;
  }
  
}
