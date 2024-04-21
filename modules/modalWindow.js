export function openModalWindow() {
  const modal = document.getElementById("myModal");
  const modalButton = document.getElementById("myBtn");
  const spanExit = document.querySelector(".closeBtn");
  const carBrand = document.getElementById("brand");
  const checkList = document.querySelector(".push-modal-info");

  modalButton.addEventListener("click", () => {
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
