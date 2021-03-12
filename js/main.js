const pageViews = document.querySelector(".page-views");
const viewsPrice = document.querySelector(".views-price");
const checkboxElement = document.querySelector(".checkbox-input");

const priceRanges = [
  { views: "10K PAGEVIEWS", price: 8 },
  { views: "50K PAGEVIEWS", price: 12 },
  { views: "100K PAGEVIEWS", price: 16 },
  { views: "500K PAGEVIEWS", price: 24 },
  { views: "1M PAGEVIEWS", price: 36 },
];

let discount = 0;
pageViews.textContent = priceRanges[2].views;
viewsPrice.textContent = `$${priceRanges[2].price.toFixed(2)}`;

function rangeToTakeFiveValues(slider) {
  value = (slider.value - slider.min) / (slider.min - slider.max);
  slider.style.background =
    "linear-gradient(to right, var(--full-slider-bar) 0%, var(--full-slider-bar) " +
    value +
    "%, var(--empty-slider-bar) " +
    value +
    "%, var(--empty-slider-bar) 100%)";

  calculateRange(value);
}

function calculateRange(value) {
  if (value === -1) {
    pageViews.textContent = priceRanges[4].views;
    viewsPrice.textContent = `$${priceRanges[4].price.toFixed(2)}`;
  } else if (value === -0.75) {
    pageViews.textContent = priceRanges[3].views;
    viewsPrice.textContent = `$${priceRanges[3].price.toFixed(2)}`;
  } else if (value === -0.5) {
    pageViews.textContent = priceRanges[2].views;
    viewsPrice.textContent = `$${priceRanges[2].price.toFixed(2)}`;
  } else if (value === -0.25) {
    pageViews.textContent = priceRanges[1].views;
    viewsPrice.textContent = `$${priceRanges[1].price.toFixed(2)}`;
  } else if (value === -0) {
    pageViews.textContent = priceRanges[0].views;
    viewsPrice.textContent = `$${priceRanges[0].price.toFixed(2)}`;
  }
  
}

discount = 75;
checkboxElement.addEventListener("click", toggleCheckBox);
const discountElement = document.querySelector('.discount');
function toggleCheckBox() {

  if (checkboxElement.checked) {
    viewsPrice.textContent = `$${(discount / 100) * priceRanges[4].price}`;
    discountElement.classList.add('discount-checked');
    discountElement.classList.remove('discount');
    // viewsPrice.textContent = (discount / 100) * priceRanges[3].price;
    // viewsPrice.textContent = (discount / 100) * priceRanges[2].price;
    // viewsPrice.textContent = (discount / 100) * priceRanges[1].price;
    // viewsPrice.textContent = (discount / 100) * priceRanges[0].price;
  }
}
