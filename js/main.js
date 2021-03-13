// DOM ELEMENTS
const pageViews = document.querySelector(".page-views");
const viewsPrice = document.querySelector(".views-price");
const checkboxElement = document.querySelector(".checkbox-input");
const rangeInputElement = document.querySelector(".range-input");

// VARIABLES
const priceRanges = [
  { views: "10K PAGEVIEWS", price: 8 },
  { views: "50K PAGEVIEWS", price: 12 },
  { views: "100K PAGEVIEWS", price: 16 },
  { views: "500K PAGEVIEWS", price: 24 },
  { views: "1M PAGEVIEWS", price: 36 },
];
pageViews.textContent = priceRanges[2].views;
viewsPrice.textContent = `$${priceRanges[2].price.toFixed(2)}`;
let discount = 75;

// FUNCTIONS
function rangeToTakeFiveValues(slider) {
  const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
  slider.style.background = 'linear-gradient(to right, var(--full-slider-bar) 0%, var(--full-slider-bar) ' + value + '%, var(--empty-slider-bar) ' + value + '%, var(--empty-slider-bar) 100%)'

  calculateRange(value);
}

function calculateRange(value) {
  if (value === 100) {
    pageViews.textContent = priceRanges[4].views;
    viewsPrice.textContent = `$${priceRanges[4].price.toFixed(2)}`;
  } else if (value === 75) {
    pageViews.textContent = priceRanges[3].views;
    viewsPrice.textContent = `$${priceRanges[3].price.toFixed(2)}`;
  } else if (value === 50) {
    pageViews.textContent = priceRanges[2].views;
    viewsPrice.textContent = `$${priceRanges[2].price.toFixed(2)}`;
  } else if (value === 25) {
    pageViews.textContent = priceRanges[1].views;
    viewsPrice.textContent = `$${priceRanges[1].price.toFixed(2)}`;
  } else if (value === 0) {
    pageViews.textContent = priceRanges[0].views;
    viewsPrice.textContent = `$${priceRanges[0].price.toFixed(2)}`;
  }
}

function toggleCheckBox() {
  const value = (rangeInputElement.value - rangeInputElement.min) / (rangeInputElement.max - rangeInputElement.min) * 100;
  
  if (value === 100 || checkboxElement.checked) { viewsPrice.textContent = `$${(discount / 100) * priceRanges[4].price.toFixed(2)}` }
  if (value === 75 || checkboxElement.checked) { viewsPrice.textContent = `$${(discount / 100) * priceRanges[3].price.toFixed(2)}` }
  if (value === 50 || checkboxElement.checked) { viewsPrice.textContent = `$${(discount / 100) * priceRanges[2].price.toFixed(2)}` }
  if (value === 25 || checkboxElement.checked) { viewsPrice.textContent = `$${(discount / 100) * priceRanges[2].price.toFixed(2)}` }
  if (value === 0 || checkboxElement.checked) { viewsPrice.textContent = `$${(discount / 100) * priceRanges[0].price.toFixed(2)}` }
}

// EVENT LISTENERS
checkboxElement.addEventListener("click", toggleCheckBox);
