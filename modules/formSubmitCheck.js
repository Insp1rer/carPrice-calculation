import iziToast from 'izitoast';
import { openModalWindow } from './modalWindow';
import {
  carBrand,
  carModel,
  carYear,
  carMileage,
  carFuel,
  carGearbox,
  carOwners,
  carAccidents,
} from './components.js';

export function handleShowPrice(event) {
  event.preventDefault();

  // yo
  const radioButton1 = document.getElementById('button1');
  const radioButton2 = document.getElementById('button2');
  const radioButton3 = document.getElementById('button3');
  const radioButton4 = document.getElementById('button4');
  const radioButton5 = document.getElementById('button5');
  const radioButton6 = document.getElementById('button6');
  const radioButton7 = document.getElementById('button7');
  const radioButton8 = document.getElementById('button8');
  const radioButton9 = document.getElementById('button9');
  const radioButton10 = document.getElementById('button10');
  const radioButton11 = document.getElementById('button11');
  const radioButton12 = document.getElementById('button12');

  if (
    carBrand.value.trim() === '' ||
    carModel.value === '' ||
    carYear.value === '' ||
    carMileage.value === '' ||
    carFuel.value === '' ||
    carGearbox.value === '' ||
    carAccidents.value === '' ||
    carOwners.value === '' ||
    !(
      (radioButton1.checked || radioButton2.checked || radioButton3.checked) &&
      (radioButton4.checked || radioButton5.checked || radioButton6.checked) &&
      (radioButton7.checked || radioButton8.checked || radioButton9.checked) &&
      (radioButton10.checked || radioButton11.checked || radioButton12.checked)
    )
  ) {
    iziToast.error({
      position: 'topRight',
      title: 'Помилка',
      message: `Оберіть всі можливі параметри!`,
    });
  } else {
    openModalWindow();
    iziToast.success({
      position: 'topRight',
      title: '',
      message: `Обраховуємо середню ціну...`,
    });
  }
}
