import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { openModalWindow } from "./modules/modalWindow";
import { showDropDown } from "./modules/dropdown";

const carCalculatiionForm = document.querySelector(".form");
const selectedCab = document.getElementById("cab");
const selectedFuel = document.getElementById("fuel");
const selectedGearbox = document.getElementById("gearbox");
const radioButton = document.querySelector(".button-label span");
const carBrand = document.getElementById("brand");

showDropDown();

carBrand.addEventListener("change", async () => {
  try {
    console.log(carBrand.value);
    const response = await fetch(
      `http://localhost:3000/dai-meni-brand/${carBrand.value}`,
      {
        method: "GET",
      }
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (data.code !== 200) {
      iziToast.error({
        position: "topRight",
        title: "Помилка",
        message: `Невірна марка`,
      });
    }
  } catch (error) {
    if (carBrand.value.length > 0) {
      console.log(error);
    }
  }
});

console.log("Modal window is opening...");
openModalWindow();

carCalculatiionForm.addEventListener("submit", handleShowPrice);

radioButton.addEventListener("click", () => {
  console.log(radioButton.textContent);
});

function handleShowPrice(event) {
  event.preventDefault();
  if (
    selectedCab.value === "" ||
    selectedFuel.value === "" ||
    selectedGearbox.value === ""
  ) {
    alert("Будь ласка, заповніть всі поля");
    return;
  }
  getSomething();
}

const autoData = {
  inputMark: "Audi",
  inputModel: "A4",
  inputYear: 2016,
};

let markValue;
let modelValue;

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
