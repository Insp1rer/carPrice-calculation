export const carBrand = document.getElementById('brand');
export const carModel = document.getElementById('model');
export const carYear = document.getElementById('manufacture-year');
export const carMileage = document.getElementById('mileage');
export const carFuel = document.getElementById('fuel');
export const carGearbox = document.getElementById('gearbox');
export const carOwners = document.getElementById('owner');
export const carAccidents = document.getElementById('accident');
export const modalButton = document.getElementById('myBtn');

export const engineButtons = document.querySelectorAll(
  'input[name="buttonGroupEngine"]'
);
export const cabButtons = document.querySelectorAll(
  'input[name="buttonGroupCab"]'
);
export const interiorButtons = document.querySelectorAll(
  'input[name="buttonGroupInterior"]'
);
export const suspensionButtons = document.querySelectorAll(
  'input[name="buttonGroupSuspension"]'
);

export function openModalWindow() {
  const modal = document.getElementById('myModal');
  const spanExit = document.querySelector('.closeBtn');
  const checkList = document.querySelector('.push-modal-info');

  let selectedButtonEngine;
  let selectedButtonCab;
  let selectedButtonInterior;
  let selectedButtonSuspension;

  console.log('Modal window is opening...');

  engineButtons.forEach(engineButtons => {
    if (engineButtons.checked) {
      selectedButtonEngine = engineButtons.nextElementSibling.textContent;
    }
  });

  cabButtons.forEach(cabButtons => {
    if (cabButtons.checked) {
      selectedButtonCab = cabButtons.nextElementSibling.textContent;
    }
  });

  interiorButtons.forEach(interiorButtons => {
    if (interiorButtons.checked) {
      selectedButtonInterior = interiorButtons.nextElementSibling.textContent;
    }
  });

  suspensionButtons.forEach(suspensionButtons => {
    if (suspensionButtons.checked) {
      selectedButtonSuspension =
        suspensionButtons.nextElementSibling.textContent;
    }
  });

  modal.style.display = 'block';

  checkList.innerHTML = ` <div class="parametrs-check">
              <ul class="price-check price-check-leftside">
                <li>Марка авто</li>
                <li>Модель авто</li>
                <li>Рік випуску</li>
                <li>Пробіг</li>
                <li>Вид палива</li>
                <li>КПП</li>
                <li>К-ть попередніх власників</li>
                <li>К-ть зареєстрованих ДТП</li>
                <li>Стан двигуна</li>
                <li>Стан кузова</li>
                <li>Стан салону</li>
                <li>Стан підвіски</li>
              </ul>
              <ul class="price-check">
                <li>${carBrand.value.toUpperCase()}</li>
                <li>${carModel.selectedOptions[0].label.toUpperCase()}</li>
                <li>${carYear.value}</li>
                <li>${carMileage.value} тис. км</li>
                <li>${carFuel.selectedOptions[0].label}</li>
                <li>${carGearbox.selectedOptions[0].label}</li>
                <li>${carOwners.value}</li>
                <li>${carAccidents.value}</li>
                <li>${selectedButtonEngine}</li>
                <li>${selectedButtonCab}</li>
                <li>${selectedButtonInterior}</li>
                <li>${selectedButtonSuspension}</li>
              </ul>
            </div>
            `;

  console.log('Modal window has opened');

  spanExit.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', event => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
}
