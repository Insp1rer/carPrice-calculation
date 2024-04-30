export function showDropDown() {
  const manufactureYearDropDown = document.getElementById("manufacture-year");
  const currentYear = new Date().getFullYear();
  const html = [];
  for (let i = 0; i <= 50; i++) {
    const year = currentYear - i;
    html.push(`<option name="${year}">${year}</option>`);
  }
  manufactureYearDropDown.insertAdjacentHTML("beforeend", html.join(""));
}
