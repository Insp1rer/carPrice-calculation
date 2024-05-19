import {
  carOwners,
  carAccidents,
  carMileage,
  carBrand,
} from './components.js';

export function setupFieldsCheck() {
  carOwners.onkeydown = event => {
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
  carAccidents.onkeydown = event => {
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
  carMileage.onkeydown = event => {
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
  carBrand.onkeydown = event => {
    if (event.key === '/' || event.key === '?') {
      return false;
    }
  };
  carOwners.addEventListener('input', () => {
    if (carOwners.value.length > 3) {
      carOwners.value = carOwners.value.slice(0, 3);
    }
  });
  carMileage.addEventListener('input', () => {
    if (carMileage.value.length > 4) {
      carMileage.value = carMileage.value.slice(0, 4);
    }
  });
  carAccidents.addEventListener('input', () => {
    if (carAccidents.value.length > 3) {
      carAccidents.value = carAccidents.value.slice(0, 3);
    }
  });
}
