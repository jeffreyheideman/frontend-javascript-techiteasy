//Opdracht 1a
const tvTypes = inventory.map((tvType) => {
    return tvType.type;
});

console.log(tvTypes)


//opdracht 1b
const soldOutTvs = inventory.filter((soldOutTv)=> {
return soldOutTv.sold === soldOutTv.originalStock
});

console.log(soldOutTvs)

//Opdracht 1c
const ambiLightTvs = inventory.filter((ambiLighttv) => {
    return ambiLighttv.options.ambiLight === true
});

console.log(ambiLightTvs)

//Opdracht 1d
const sort = inventory.sort((a, b) => a.price - b.price)

console.log(sort)