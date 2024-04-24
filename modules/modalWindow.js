export function openModalWindow() {
  const modal = document.getElementById("myModal");
  const modalButton = document.getElementById("myBtn");
  const spanExit = document.querySelector(".closeBtn");
  const checkList = document.querySelector(".push-modal-info");
  const fart = document.getElementById("fart");
  const carBrand = document.getElementById("brand");
  const carModel = document.getElementById("model");
  const carYear = document.getElementById("manufacture-year");
  const carMileage = document.getElementById("mileage");
  const carFuel = document.getElementById("fuel");
  const carGearbox = document.getElementById("gearbox");
  const carOwners = document.getElementById("owner");
  const carAccidents = document.getElementById("accident");
  const engineButtons = document.querySelectorAll(
    'input[name="buttonGroupEngine"]'
  );
  const cabButtons = document.querySelectorAll('input[name="buttonGroupCab"]');
  const interiorButtons = document.querySelectorAll(
    'input[name="buttonGroupInterior"]'
  );
  const suspensionButtons = document.querySelectorAll(
    'input[name="buttonGroupCab"]'
  );

  let selectedButtonEngine;
  let selectedButtonCab;
  let selectedButtonInterior;
  let selectedButtonSuspension;

  modalButton.addEventListener("click", () => {
    fart.playbackRate = 2;
    fart.play();

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

    console.log("Modal window has opened");
    modal.style.display = "block";
    checkList.innerHTML = ` <div class="parametrs-check">
              <ul class="price-check">
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
                <li>${carBrand.value}</li>
                <li>${carModel.value}</li>
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
            <div>
              <p class="overall-check-price">Остаточна вартість -</p>
            </div> `;
  });

  spanExit.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}
