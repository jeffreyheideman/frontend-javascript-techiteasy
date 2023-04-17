
//Opdracht 4a
function tvNameGenerator(tv) {
    const { brand, type, name } = tv
    return `${brand} ${type} - ${name}`
}

//Opdracht 4b
function priceFormatter(tv) {
    const { price } = tv;
    return `€${ price },-`
}

//Opdracht 4c

function convertToCm(size) {
    return size * 2.54;
}

function stringifySizes(item) {
    return item.availableSizes.map((size) => {
        return `${size} inch (${convertToCm(size).toFixed()} cm)`
    }).join(' | ')
}

//Opdracht 4d

// const tvArticle = document.getElementById("tv-article")
// tvArticle.innerHTML = `<p>${tvNameGenerator(inventory[4])}</p>
//                        <p>${priceFormatter(inventory[4])}</p>
//                        <p>${stringifySizes(inventory[4])}</p>`
//


//Opdracht 4e
const displayTvs = document.getElementById("tv-articles");

function displayTvInfo(tvs) {
    return tvs.map((tv) =>{
        const tvName = tvNameGenerator(tv)
        const tvPrice = priceFormatter(tv)
        const tvSizes = stringifySizes(tv)
        return `<p>${tvName}</p>
                <p>${tvPrice}</p>
                <p>${tvSizes}</p>`;
    }).join('');
}

displayTvs.innerHTML = displayTvInfo(inventory);