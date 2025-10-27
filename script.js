var searchInput = document.getElementById("searchInput");
var filterSelect = document.getElementById("filterSelect");
var products = document.querySelectorAll(".product");

// Search Function
if (searchInput) {
  searchInput.addEventListener("input", function() {
    var searchValue = searchInput.value.toLowerCase();
    products.forEach(function(product) {
      var name = product.querySelector("h3").textContent.toLowerCase();
      product.style.display = name.includes(searchValue) ? "block" : "none";
    });
  });
}

// Filter Function
if (filterSelect) {
  filterSelect.addEventListener("change", function() {
    var category = filterSelect.value;
    products.forEach(function(product) {
      var match = category === "all" || product.dataset.category === category;
      product.style.display = match ? "block" : "none";
    });
  });
}
