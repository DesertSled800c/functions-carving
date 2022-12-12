const createWoodBlock = (woodMaterial) => {
    // Return an object with 4 properties.
    const woodObject = {
        type: "wood block",
        length: 10,
        material: woodMaterial,
        purpose: "flute"
    }
    return woodObject

}

const createBeautifulCarving = (woodObject) => {
    // Return a string representation of the object
    const stringify = `The ${woodObject.length}-inch, ${woodObject.material} ${woodObject.type} was carved into a wooden ${woodObject.purpose}.`

    return stringify
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock("pine")

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

console.log(carvingString)

