import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { openModalWindow } from "./modalWindow";

export function handleShowPrice(event) {
  const selectedYear = document.getElementById("manufacture-year");
  const selectedGearbox = document.getElementById("gearbox");
  const selectedFuel = document.getElementById("fuel");
  const radioButton1 = document.getElementById("button1");
  const radioButton2 = document.getElementById("button2");
  const radioButton3 = document.getElementById("button3");
  const radioButton4 = document.getElementById("button4");
  const radioButton5 = document.getElementById("button5");
  const radioButton6 = document.getElementById("button6");
  const radioButton7 = document.getElementById("button7");
  const radioButton8 = document.getElementById("button8");
  const radioButton9 = document.getElementById("button9");
  const radioButton10 = document.getElementById("button10");
  const radioButton11 = document.getElementById("button11");
  const radioButton12 = document.getElementById("button12");

  event.preventDefault();
  if (
    selectedYear.value === "" ||
    selectedFuel.value === "" ||
    selectedGearbox.value === "" ||
    !(
      (radioButton1.checked || radioButton2.checked || radioButton3.checked) &&
      (radioButton4.checked || radioButton5.checked || radioButton6.checked) &&
      (radioButton7.checked || radioButton8.checked || radioButton9.checked) &&
      (radioButton10.checked || radioButton11.checked || radioButton12.checked)
    )
  ) {
    iziToast.error({
      position: "topRight",
      title: "Помилка",
      message: `Оберіть всі можливі параметри!`,
    });
  } else {
    openModalWindow();
    iziToast.success({
      position: "topRight",
      title: "Maxim:",
      message: `Все нормас`,
    });
  }
}