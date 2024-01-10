let inpt = document.getElementById("inpt");
let submit = document.getElementById("btn");
let main = document.querySelector("main");
let ul = document.createElement("ul");
main.insertAdjacentElement("beforeend", ul);

submit.addEventListener("click", function () {
  let values = inpt.value;
  let li = document.createElement("li");
  ul.appendChild(li);
  li.innerText = values;
  let button = document.createElement("button");
  button.innerText = "DELETE";
  li.insertAdjacentElement("beforeend",button);
  inpt.value = "";

  button.addEventListener("click",function(){
     li.remove();
  })
});
