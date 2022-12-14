let l=console.log;
let $=(ip,d=document)=>
  d.querySelector(`#${ip}`) || d.querySelector(`.${ip}`);

// let categories={
//   'EN':['tosts','drinks','salads','snacks'],
//   'RU':['тосты','выпивки','салаты','закуски'],
//   'AM':['տոստեր','խմիչքներ','աղցաններ','խորտիկներ']
// };
let categories={
  'EN':['tosts','salads','snacks'],
  'RU':['тосты','салаты','закуски'],
  'AM':['տոստեր','աղցաններ','խորտիկներ']
};
let order_phone={
  'EN':'We work from 08:00-20:00.<br> Order by phone number',
  'RU':'Работаем от 08:00-20:00.<br> Заказ по номеру телефона',
  'AM':'Աշխատում ենք 08:00-20:00:<br> Պատվիրեք հեռախոսահամարով'
};
let ingredients={
  'EN':'Ingredients',
  'RU':'Ингредиенты',
  'AM':'Բաղադրիչներ'
}
let price={
  'EN':'Price',
  'RU':'Цена',
  'AM':'Գին'
}
  
let menu={
  'tosts':[
    {
      "name":"Egg and Avocado Toast",
      "ingredientsEN":"Avocado, DillCucumber, Refrigerated, Eggs, Condiments, Lime juice, Mayonnaise, Tabasco sauce, Oils & Vinegars, Olive oil",
      "ingredientsRU":"Авокадо, Укроп, Огурец, Охлажденныйяйца, Приправы, Лаймовый сок, Майонез, соус табаско, Масла и уксусы, Оливковое масло",
      "ingredientsAM":"Ավոկադո, սամիթ, վարունգ, սառնարանային ձու, համեմունքներ, կրաքարի հյութ, մայոնեզ, տաբասկո սոուս, յուղեր և քացախներ, ձիթապտղի յուղ",
      "price":1200,
      "imgs":"./imgs/tosts/tosts_1.jpg",
      "active":true
    },
    {
      "name":"Creamy Mushroom Toast",
      "ingredientsEN":"Chili flakes, Garlic clove, Onion,Parsley, Mushroom, Rocket leaves, Condiments, Balsamic Vinegar, Baking & Spices, Salt and pepper, Oils & Vinegars, Olive oil, Bread & Baked Goods, Whole grain toasted, Dairy, Cheese",
      "ingredientsRU":"Хлопья чили, зубчик чеснока, лук, петрушка, грибы, листья рукколы, Приправы, Бальзамический уксус, Выпечка и специи, Соль и перец, Масла и уксусы, Оливковое масло, Хлеб и выпечка, Цельнозерновые тосты, Молочные продукты, Сыр",
      "ingredientsAM":"Չիլիի փաթիլներ, սխտորի մեխակ, սոխ, մաղադանոս, սունկ, հրթիռի տերևներ, Համեմունքներ, Բալզամիկ քացախ, Թխում և համեմունքներ, Աղ և պղպեղ ,Յուղեր և քացախներ, Ձիթապտղի յուղ , Հաց և թխած ապրանքներ, Ամբողջ հացահատիկով տապակած, Կաթնամթերք, Պանիր",
      "price":1200,
      "imgs":"./imgs/tosts/tosts_2.jpg",
      "active":true
    },
    {
      "name":"Avocado Toast with Fried Egg",
      "ingredientsEN":"Avocado, Tomato, Refrigerated, Egg, Baking & Spices, Black pepper and salt, Oils & Vinegars, 1/2 tsp Olive oil, Bread & Baked Goods, 2 slices Bread, toasted",
      "ingredientsRU":"Авокадо, томат, Охлажденный, Яйцо, Выпечка и специи, Черный перец и соль, Масла и уксусы, 1/2 чайной ложки оливкового масла, Хлеб и выпечка, 2 ломтика хлеба, поджаренный",
      "ingredientsAM":"Ավոկադո, լոլիկ, Սառնարան, ձու, Թխում և համեմունքներ, Սև պղպեղ և աղ, Յուղեր և քացախներ, 1/2 թ/գ Ձիթապտղի յուղ, Հաց և խմորեղեն, 2 կտոր Հաց, տապակած",
      "price":1200,
      "imgs":"./imgs/tosts/tosts_3.jpg",
      "active":true
    },
    {
      "name":"Hummus Toast",
      "ingredientsEN":"Cherry tomatoes, Cucumber, Green onions, Greens, Parsley,  fresh, Humus, Condiments, 1 tbsp Lemon juice, Oils & Vinegars, 1 tbsp Olive oil, Bread & Baked Goods, 2 pieces Toast, Dairy, 2 tbsp cheese",
      "ingredientsRU":"Помидоры черри, Огурец, Лук зеленый, Зелень, Петрушка свежая, Гумус, Приправы, 1 столовая ложка лимонного сока, масла и уксусы, 1 столовая ложка оливкового масла, хлеб ивыпечка, 2 шт. Тост, Молочные продукты, 2 ст.л. сыра",
      "ingredientsAM":"Չերի լոլիկ, վարունգ, կանաչ սոխ, կանաչի, մաղադանոս, թարմ, հումուս, համեմունքներ, 1 ճաշի գդալ կիտրոնի հյութ, յուղեր և քացախներ, 1 ճաշի գդալ ձիթապտղի յուղ, հաց և թխում, 2 հատ Տոստ, Կաթնամթերք,2ճ/գ պանիր",
      "price":1300,
      "imgs":"./imgs/tosts/tosts_4.jpg",
      "active":true
    },
    {
      "name":"Pizza Toast",
      "ingredientsEN":"Cheese, Sausages, Backing & Spices, Paper and Salt, Condiments, Tomato Souse, Oils & Vinegars, 1/2 Olive,Bread & Baked Goods, 2 slices Bread, Toasted",
      "ingredientsRU":"Сыр, Колбасы, Подложка и специи, Бумага и соль, Приправы, Томатный соус, Масла и уксусы, 1/2 маслины, Хлеб и выпечка, 2 ломтика хлеба, Поджаренный",
      "ingredientsAM":"Պանիր, Երշիկեղեն,Թուղթ և համեմունքներ, Թուղթ և աղ, Համեմունքներ, Տոմատի սոուս, Յուղեր և քացախներ, 1/2 ձիթապտուղ, Հաց և թխած ապրանքներ, 2 կտոր Հաց, Տոստ",
      "price":800,
      "imgs":"./imgs/tosts/tosts_5.jpg",
      "active":true
    },
    {
      "name":"Rice Toast",
      "ingredientsEN":"Basmati, Rice, Cucumber, Walnuts, Refrigerate, Egg, Baking & Spices, Black pepper & Salt,Oils & Vinegars, 1 tbsp Olive oil, Bread & Baked Goods, 1 Bread, toasted, Dairy, Armenian cheesek",
      "ingredientsRU":"Рис басмати, огурец, грецкий орех, охлажденный, яйцо, Выпечка и специи, Черный перец и соль, Масла и уксусы, 1 столовая ложка оливкового масла, Хлеб и выпечка, 1 Хлеб поджаренный, Молочные продукты, Армянский творог",
      "ingredientsAM":"Բասմատի բրինձ, վարունգ, ընկույզ, սառնարանային ձու, Թխում և համեմունքներ, Սև պղպեղ և աղՅուղեր և քացախներ, 1 ճ/գ ձիթապտղի յուղ, Հաց և թխած ապրանքներ, 1 Հաց, տապակած, Կաթնամթերք, Հայկական պանիր",
      "price":1200,
      "imgs":"./imgs/tosts/tosts_7.jpg",
      "active":true
    },
    {
      "name":"Cheese Sandwich",
      "ingredientsEN":"Green onions, fresh, Cheese, Tomato’s, Dill, Parsley, Baking & Spices, Black pepper & salt",
      "ingredientsRU":"Зеленый лук, свежий, Сыр, Помидоры, Укроп, Петрушка, Выпечка и специи, Черный перец и соль",
      "ingredientsAM":"Կանաչ սոխ, թարմ, Պանիր, լոլիկ, սամիթ, մաղադանոս, խմորեղեն և համեմունքներ, սև պղպեղ և աղ",
      "price":900,
      "imgs":"./imgs/tosts/tosts_8.jpg",
      "active":true
    }
  ],
  'drinks':[
    {
      "name":"Orange Juce",
      "imgs":"./imgs/drinks/drinks_1.jpg",
      "price":600,
      "active": true
    },
    {
      "name":"Lemonade",
      "imgs":"./imgs/drinks/drinks_2.jpg",
      "price":500,
      "active": true
    }
  ],
  'salads':[
    {
      "name":"Avocado Greek Salad",
      "ingredientsEN":"Tomato’s, Cucumber, Red onion, Avocado, Green pepper, Olives, Baking & Spices, Black pepper & Salt, Dried oregano, Oils & Vinegars, 1 tbsp Olive oil, Lemon Juice",
      "ingredientsRU":"Помидор, Огурец, Красный лук, Авокадо, Зеленый перец, Оливки, Выпечка и специи, Черный перец и соль, Сушеный орегано, Масла и уксусы, 1 ст.л. оливкового масла, лимонный сок",
      "ingredientsAM":"Լոլիկ, վարունգ, կարմիր սոխ, ավոկադո, կանաչ պղպեղ, ձիթապտուղ, Թխում և համեմունքներ, Սև պղպեղ և աղ, չոր սուսամբար Յուղեր և քացախներ, 1 ճաշի գդալ ձիթապտղի յուղ, կիտրոնի հյութ",
      "price":700,
      "imgs":"./imgs/salads/salads_1.jpg",
      "active":true
    },
    {
      "name":"Black Bean & Corn Salsa Salad",
      "ingredientsEN":"Black beans, Cilantro, Corn, Cucumbers, Green pepper, Red onion, Tomatoes, Condiments, 1 tbsp Honey, Baking & Spices, Salt & black pepper, Oils & Vinegars, 1/4 cup Apple cider vinegar, 2 tbsp Olive oil",
      "ingredientsRU":"Черная фасоль, Кинза, Кукуруза, Огурцы, Зеленый перец, Красный лук, Помидоры, Приправы,1 ст.л. Мед, Выпечка и специи, Соль и черный перец, Масла и уксусы, 1/4 стакана яблочного уксуса, 2 ст. л. оливкового масла.",
      "ingredientsAM":"Սև լոբի, մոխիր, եգիպտացորեն, վարունգ, կանաչ պղպեղ, կարմիր սոխ, լոլիկ, Համեմունքներ, 1 ճ/գ մեղր, Թխում և համեմունքներ, Աղ և սև պղպեղ Յուղեր և քացախներ, 1/4 բաժակ խնձորի քացախ, 2 ճաշի գդալ ձիթապտղի յուղ",
      "price":800,
      "imgs":"./imgs/salads/salads_2.jpg",
      "active":true
    }
  ],
  'snacks':[
    {
      "name":"Guacamole Ingredients",
      "ingredientsEN":"Avocados, Cilantro, Jalapeno, Red onion, Tomatoes, Condiments, Lime (juice only), Baking & Spices, Salt",
      "ingredientsRU":"Авокадо, кинза, халапеньо, красный лук, помидоры, приправы, лайм (только сок), выпечка и специи, соль",
      "ingredientsAM":"Ավոկադո, կիլանտրո, հալապենո, կարմիր սոխ, լոլիկ, համեմունքներ, լայմ (միայն հյութ), թխում և համեմունքներ, աղ",
      "price":1000,
      "imgs":"./imgs/snacks/snacks_1.jpg",
      "active":false
    }
  ]
};
/*
tosts
{
      "name":"French Bread Pesto Chicken Pizza",
      "ingredientsEN":"Chicken breast medium, boneless skinless, Cherry tomatoes, Condiments, 1/3 cup Basil pesto, Baking & Spices, Salt, Oils & Vinegars, 1 tbsp Olive oil, Bread & Baked Goods, 1 Baguette, Dairy, Mozzarella cheese, Parmesan cheese",
      "ingredientsRU":"Куриная грудка среднего размера, без костей без кожи, помидоры Черри, Приправы, 1/3 стакана песто с базиликом, Выпечка и специи, Соль, Масла и уксусы, 1 столовая ложка оливкового масла, Хлеб и выпечка, 1 Багет, Молочные продукты, Сыр Моцарелла, Сыр Пармезан",
      "ingredientsAM":"Հավի կրծքամիս միջին, առանց ոսկորների, առանց մաշկի, Չերի լոլիկ, Համեմունքներ, 1/3 բաժակ ռեհանի պեստո, Թխում և համեմունքներ, ԱղՅուղեր և քացախներ, 1 ճ/գ ձիթապտղի յուղ, Հաց և թխում, 1 բագետ,Կաթնամթերք, Մոցարելլա պանիր, Պարմեզան պանիր",
      "price":1500,
      "imgs":"./imgs/tosts/tosts_6.jpg",
      "active":true
    },
    */

