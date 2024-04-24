import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { openModalWindow } from "./modules/modalWindow";
import { showDropDown } from "./modules/dropdown";
import { handleShowPrice } from "./modules/formSubmitCheck";

const carCalculatiionForm = document.querySelector(".form");
const carBrand = document.getElementById("brand");
const carModel = document.getElementById("model");
const fart = document.getElementById("fart");

showDropDown();
carCalculatiionForm.addEventListener("submit", handleShowPrice);

let markaIdValue;

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
    markaIdValue = data.markaValue;
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
    console.log(data);

    if (data.code !== 200) {
      iziToast.error({
        position: "topRight",
        title: "Помилка",
        message: `Невірна модель`,
      });
      return;
    }
  } catch (error) {
    console.log(error);
  }
});

console.log("Modal window is opening...");
openModalWindow();

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
