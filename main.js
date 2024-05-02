import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { setupFieldsCheck } from "./modules/fieldsCheck";
import { showDropDown } from "./modules/dropdown";
import { handleShowPrice } from "./modules/formSubmitCheck";
import {
  carBrand,
  carModel,
  carYear,
  carMileage,
  carFuel,
  carGearbox,
  carOwners,
  carAccidents,
  engineButtons,
  cabButtons,
  interiorButtons,
  suspensionButtons,
} from "./modules/modalWindow";

const modalButtonAvg = document.getElementById("myBtn");
const carCalculatiionForm = document.querySelector(".form");

showDropDown();
setupFieldsCheck();

carCalculatiionForm.addEventListener("submit", handleShowPrice);

let markaIdValue;
let modelIdValue;
let averagePrice;
let selectedButtonEngine;
let selectedButtonCab;
let selectedButtonInterior;
let selectedButtonSuspension;

carModel.addEventListener("focus", () => {
  if (carBrand.value.length === 0) {
    iziToast.error({
      position: "topRight",
      title: "Помилка",
      message: `Спочатку введіть марку!`,
    });
  }
});

carBrand.addEventListener("change", async () => {
  try {
    console.log(carBrand.value);

    const response = await fetch(
      `http://localhost:3000/dai-meni-brand/${carBrand.value}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();

    if (data.code !== 200) {
      iziToast.error({
        position: "topRight",
        title: "Помилка",
        message: `Некоректна назва авто`,
      });
      carModel.setAttribute("readonly", "");
      return;
    }
    markaIdValue = data.brandId;
    console.log(markaIdValue);

    if (markaIdValue) {
      carModel.removeAttribute("readonly");
    }
  } catch (error) {
    console.log(error);
  }
});

carModel.addEventListener("change", async () => {
  try {
    console.log(carModel.value);
    const response = await fetch(
      `http://localhost:3000/dai-meni-model/${markaIdValue}/${carModel.value}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();

    if (data.code !== 200) {
      iziToast.error({
        position: "topRight",
        title: "Помилка",
        message: `Невірна модель`,
      });
      return;
    }

    modelIdValue = data.modelId;
    console.log(modelIdValue);
  } catch (error) {
    console.log(error);
  }
});

modalButtonAvg.addEventListener("click", async () => {
  console.log("Modal window is opening...");

  engineButtons.forEach((engineButtons) => {
    if (engineButtons.checked) {
      selectedButtonEngine = engineButtons.nextElementSibling.textContent;
    }
  });

  cabButtons.forEach((cabButtons) => {
    if (cabButtons.checked) {
      selectedButtonCab = cabButtons.nextElementSibling.textContent;
    }
  });

  interiorButtons.forEach((interiorButtons) => {
    if (interiorButtons.checked) {
      selectedButtonInterior = interiorButtons.nextElementSibling.textContent;
    }
  });

  suspensionButtons.forEach((suspensionButtons) => {
    if (suspensionButtons.checked) {
      selectedButtonSuspension =
        suspensionButtons.nextElementSibling.textContent;
    }
  });

  const response = await fetch(`http://localhost:3000/dai-meni-average-price`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      brandId: markaIdValue,
      modelId: modelIdValue,
      year: carYear.value,
      gear: carGearbox.value,
      fuel: carFuel.value,
      mileage: carMileage.value,
      owners: carOwners.value,
      roadAccidents: carAccidents.value,
      engineState: selectedButtonEngine,
      carBodyState: selectedButtonCab,
      interiorState: selectedButtonInterior,
      suspensionState: selectedButtonSuspension,
    }),
  });

  const data = await response.json();
  console.log(data);

  averagePrice = data.average_price;

  console.log(averagePrice);

  const checkList = document.querySelector(".push-modal-info");

  checkList.insertAdjacentHTML(
    "beforeend",
    `<div>
    <p class="overall-check-price">Остаточна вартість - ${averagePrice.toFixed(
      2
    )} $</p>
  </div>`
  );

  console.log(averagePrice);
});

let userInput = "Passat CC";
let result = userInput.replace(/ /g, "-").toLowerCase();
console.log(result);
// export let avgPriceExp = averagePrice;

// openModalWindow();
// openModalWindow();

// window.addEventListener("click", () => {
//   fart.playbackRate = 2;
//   fart.play();
// });

// const autoData = {
//   inputMark: "Audi",
//   inputModel: "A4",
//   inputYear: 2016,
// };

// let markValue;
// let modelValue;

// async function getSomething() {
//   try {
//     const responseMark = await fetch("/message.json");
//     const responseModel = await fetch("/models.json");
//     const dataMark = await responseMark.json();
//     const dataModel = await responseModel.json();

//     dataMark.forEach((itemMark) => {
//       if (itemMark.name === autoData.inputMark) {
//         markValue = itemMark.value;
//       }
//     });

//     dataModel.forEach((itemModel) => {
//       if (itemModel.name === autoData.inputModel) {
//         modelValue = itemModel.value;
//       }
//     });

//     const BASE_URL =
//       "https://developers.ria.com/auto/average_price?api_key=CS5CXlWTH79BZcfO50D5PsP2iNdXGOKKdXC2A8Ne";

//     const url = `${BASE_URL}&marka_id=${markValue}&model_id=${modelValue}&yers=${
//       autoData.inputYear - 3
//     }&yers=${autoData.inputYear + 3}`;

//     const responseAutoData = await fetch(url);
//     if (!responseAutoData.ok) throw new Error("Network response was not ok");

//     const jsonData = await responseAutoData.json();
//     document.body.innerHTML = `<h1>${jsonData.arithmeticMean}</h1>`;
//   } catch (error) {
//     console.error("There was a problem with the fetch operation:", error);
//     throw error;
//   }
// }
