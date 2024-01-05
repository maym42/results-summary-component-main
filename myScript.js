const myContainer = document.getElementById("containerOflabels");

fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    let str = "";
    for (let i = 0; i < json.length; i++) {
      str += `<div class="label" id=${json[i].category.toLowerCase()}>
                <div class="textPlusIcon">
                  <img src="${json[i].icon}" class="icon"></img>
                  <span>${json[i].category}</span>
                </div>
                <div class="numbers"> <span class="labelNum">${
                  json[i].score
                }</span> / 100</div>
              </div>`;
    }
    //console.log(str);
    myContainer.innerHTML = str;
  });
