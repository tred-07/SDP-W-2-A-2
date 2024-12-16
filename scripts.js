document.getElementById("searchBoxBtn").addEventListener("click", (e1) => {
  e1.preventDefault();
  console.log(document.getElementById("searchBox").value);
  const parent = document.getElementById("searchContainer");
  parent.innerHTML = ``;
  //   totalFound
  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${
      document.getElementById("searchBox").value
    }`
  )
    .then((data) => data.json())
    .then((data) => {
      if (data["meals"] === "no data found") {
        document.getElementById("totalFound").innerText = `Total 0 Found`;
        fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${
            document.getElementById("searchBox").value
          }`
        )
          .then((data) => data.json())
          .then((data) =>{
            document.getElementById(
              "totalFound"
            ).innerText = `Total ${data["meals"].length} Found`;
            data["meals"].forEach((element) => {
              const div = document.createElement("div");
              if (element.strTags === null) element.strTags = "Baking, Tart, Meat";
              div.innerHTML = `
                    <div class="img-center">
                    <img
                      src="${element["strMealThumb"]}"
                      alt=""
                      style="width:100%;height:250px"
                    />
                  </div>
                  <h1 style="text-align: center;width:100%">${element.strMeal.substring(
                    0,
                    16
                  )}</h1>
                  <h3 style="width: 100%;
                text-wrap: wrap;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: center;">
                    ${element.strTags}
                  </h3>
                  <div class="btns">
                    <button class="btn btn-primary" id="addToGroupBtnId-${
                      element.idMeal
                    }" onclick="addToGroup(${element.idMeal})">Add to group</button>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" 
                    onclick="details(${element.idMeal})">
                    Details</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <h3></h3>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                   </div>
                   </div>
                   </div>
                   </div>
                    `;
              div.classList.add("items");
              parent.appendChild(div);
            });
          })
          .catch((er) => console.log(er));
      } else {
        document.getElementById(
          "totalFound"
        ).innerText = `Total ${data["meals"].length} Found`;
        data["meals"].forEach((element) => {
          const div = document.createElement("div");
          if (element.strTags === null) element.strTags = "Baking, Tart, Meat";
          div.innerHTML = `
                <div class="img-center">
                <img
                  src="${element["strMealThumb"]}"
                  alt=""
                  style="width:100%;height:250px"
                />
              </div>
              <h1 style="text-align: center;width:100%">${element.strMeal.substring(
                0,
                16
              )}</h1>
              <h3 style="width: 100%;
            text-wrap: wrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;">
                ${element.strTags}
              </h3>
              <div class="btns">
                <button class="btn btn-primary" id="addToGroupBtnId-${
                  element.idMeal
                }" onclick="addToGroup(${element.idMeal})">Add to group</button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" 
                onclick="details(${element.idMeal})">
                Details</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <h3></h3>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
               </div>
               </div>
               </div>
               </div>
                `;
          div.classList.add("items");
          parent.appendChild(div);
        });
      }
    })
    .catch((er) => console.log(er));
});

const loadData = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
    .then((res) => res.json())
    .then((data) => {
      data["meals"].forEach((element) => {
        const parent = document.getElementById("allItemsContainer");
        const div = document.createElement("div");
        if (element.strTags === null) element.strTags = "Baking, Tart, Meat";
        div.innerHTML = `
            <div class="img-center">
            <img
              src="${element["strMealThumb"]}"
              alt=""
              style="width:100%;height:250px"
            />
          </div>
          <h1 style="text-align: center;width:100%">${element.strMeal.substring(
            0,
            16
          )}</h1>
          <h3 style="width: 100%;
        text-wrap: wrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;">
            ${element.strTags}
          </h3>
          <div class="btns">
            <button class="btn btn-primary" id="addToGroupBtnId-${
              element.idMeal
            }" onclick="addToGroup(${element.idMeal})">Add to group</button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="details(${
              element.idMeal
            })">
            Details</button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <h3></h3>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
           </div>
           </div>
           </div>
           </div>
            `;
        div.classList.add("items");
        parent.appendChild(div);
      });
    })
    .catch((err) => console.log("Something went wrong"));
  // .catch(err=>alert("Something went wrong."))
};
loadData();

const details = (id) => {
  console.log(id);
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((data) => data.json())
    .then((data) => {
      data["meals"].forEach((el) => {
        const parent = document.getElementById("exampleModal");
        if (el.strTags === null) el.strTags = "Baking, Tart, Meat";
        parent.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div style="display:flex;justify-content: center;width:100%;">
            <img src="${el.strMealThumb}" style="width:250px;height:250px">
            </div>
            <h1 class="modal-title" id="exampleModalLabel" style="text-align:center"><strong>Name:</strong> ${el.strMeal}</h1>
            <h3 style="text-align:center"><strong>Category:</strong> ${el.strCategory}</h3>
            <h3 style="text-align:center"><strong>Origin: </strong> ${el.strArea}</h3>
            <h3 style="text-align:center"><strong>Tags: </strong> ${el.strTags}</h3>
            <h3 style="text-align:center"><strong>Instruction: </strong>${el.strInstructions}</h3>
            </div>
            <div style="display:flex;gap:10px;justify-content:center">
            <a href="${el.strYoutube}"><img src="./icons/facebook-brands-solid (1).svg" alt="" style="height:20px;width:20px;"></a>
            <a href="${el.strYoutube}"><img src="./icons/youtube-brands-solid.svg" alt="" style="height:20px;width:20px;"></a>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
           </div>
           </div>
           </div>
        `;
      });
    })
    .catch((er) => console.log(er));
};

let totalGroupElCount = 0;

const addToGroup = (id) => {
  console.log(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((data) => data.json())
    .then((data) => {
      if (totalGroupElCount < 10) {
        totalGroupElCount++;
        document.getElementById(
          "totalGroupEl"
        ).innerText = `Total ${totalGroupElCount}`;
        data["meals"].forEach((element) => {
          const parent = document.getElementById("groupContainer");
          const div = document.createElement("div");
          console.log(element["strMeal"]);
          if (element.strTags === null) element.strTags = "Baking, Tart, Meat";
          div.innerHTML = `
        <div class="img-center">
                <img
                  src="${element["strMealThumb"]}"
                  alt=""
                  style="width:100%;height:250px"
                />
              </div>
              <h1 style="text-align: center;width:100%">${element.strMeal.substring(
                0,
                16
              )}</h1>
              <h3 style="width: 100%;
            text-wrap: wrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;">
                ${element.strTags}
            </h3>
            <h3 style="width: 100%;
            text-wrap: wrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;"><strong>Category:</strong> ${
              element.strCategory
            }</h3>
            <h3 style="width: 100%;
            text-wrap: wrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;"><strong>Origin: </strong> ${
              element.strArea
            }</h3>
        `;
          const btn = document.getElementById(
            `addToGroupBtnId-${element.idMeal}`
          );
          btn.classList.add("btn-danger");
          btn.classList.remove("btn-primary");
          btn.setAttribute("disabled", "");
          btn.innerText = "Added to group";
          parent.appendChild(div);
        });
      } else alert("Maximum number selected.");
    })
    .catch((er) => console.log(er));
};
