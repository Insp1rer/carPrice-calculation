export function setupFieldsCheck() {
  const carOwnerCheck = document.getElementById('owner');
  const carAccidentsCheck = document.getElementById('accident');
  const carMileageCheck = document.getElementById('mileage');
  const carBrandCheck = document.getElementById('brand');
  carOwnerCheck.onkeydown = event => {
    if (
      event.key === '-' ||
      event.key === '.' ||
      event.key === ',' ||
      event.key === 'e' ||
      event.key === '+'
    ) {
      return false;
    }
  };
  carAccidentsCheck.onkeydown = event => {
    if (
      event.key === '-' ||
      event.key === '.' ||
      event.key === ',' ||
      event.key === 'e' ||
      event.key === '+'
    ) {
      return false;
    }
  };
  carMileageCheck.onkeydown = event => {
    if (
      event.key === '-' ||
      event.key === '.' ||
      event.key === ',' ||
      event.key === 'e' ||
      event.key === '+'
    ) {
      return false;
    }
  };
  carBrandCheck.onkeydown = event => {
    if (event.key === '/' || event.key === '?') {
      return false;
    }
  };
  carOwnerCheck.addEventListener('input', () => {
    if (carOwnerCheck.value.length > 3) {
      carOwnerCheck.value = carOwnerCheck.value.slice(0, 3);
    }
  });
  carMileageCheck.addEventListener('input', () => {
    if (carMileageCheck.value.length > 4) {
      carMileageCheck.value = carMileageCheck.value.slice(0, 4);
    }
  });
  carAccidentsCheck.addEventListener('input', () => {
    if (carAccidentsCheck.value.length > 3) {
      carAccidentsCheck.value = carAccidentsCheck.value.slice(0, 3);
    }
  });
}
