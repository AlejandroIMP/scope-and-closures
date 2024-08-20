// @parameter string
// @returns array with pets

function createPetLIst(){
    const myPets = []

    return (newPet) => {
        if(newPet){
            myPets.push(newPet)
        }
        return myPets
    }
}

const JuanPets = createPetLIst()

JuanPets('dog')
JuanPets('cat')

console.log(JuanPets()) // ['dog', 'cat']