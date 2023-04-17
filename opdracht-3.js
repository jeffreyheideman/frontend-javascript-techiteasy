//Opdracht 3a

const brands = inventory.map((brand) =>{
    return brand.brand
})

const brandList = document.getElementById("tv-brands")

// brands.forEach(brand => {
//     const listItem = document.createElement("li");
//     listItem.textContent = brand;
//     brandList.appendChild(listItem);
// })

//Opdracht 3b

function displayTvBrands(brands) {
    brands.forEach(brand => {
        const listItem = document.createElement('li');
        listItem.textContent = brand;
        brandList.appendChild(listItem);
    });
}

displayTvBrands(brands)