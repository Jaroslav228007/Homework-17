// 1)створити у index.html кнопку
// на цю кнопку додати прослуховувач дії "click"
// по кліку на цю кнопку має намалюватись один зі списків минулої ДЗ або можете створити новий список.

const addList = document.querySelector("#addList")
const list = document.querySelector("#list")
// приклад масиву з минулого ДЗ
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
  const ingredientsList = ingredients.map((item) => {
    const ingrEl = document.createElement("li");
    ingrEl.classList.add("item");
    ingrEl.textContent = `${item}`;
    return ingrEl;
  });
  addList.addEventListener("click", onClickAddList);

  function onClickAddList (event){
    list.append(...ingredientsList);
  }

  // 2) при натисканні на "Escape" має змінюватись фон сторінки на #420042
  // при натисканні комбінації клавіш ctrl + alt + S має змінюватись фон сторінки на #303030
  // при відпусканні ваших клавіш сторінка має знову ставати білою #ffffff
  addEventListener("keydown", onKeyDown);

  function onKeyDown({ key, code}){
    // console.log(code);
    if(code === "Escape"){
      console.log("Я натиснув Escape");
      document.body.style.backgroundColor = "#420042";
    }
  }
  addEventListener("keydown", onKeyDown1);
  addEventListener("keyup", onKeyUp);

  function onKeyDown1(e){
    console.log(e.code);
    console.log(e.key);

    if((e.altKey || e.ControlLeft) & (e.code === "Keys")){
      document.body.style.backgroundColor = "#303030";
    }
  }
  function onKeyUp(e){
    if((e.altKey || e.ControlLeft) & (e.code === "Keys")){
      document.body.style.backgroundColor = "#ffffff"
    }
  }
  // 3) (завдання не обов'язкове до виконання але з цікавинокою)
  // Уся середа та саме завдання для виконання знаходиться у папці task можете скопіювати їй собі та працювати тільки з JS
