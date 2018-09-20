export const isAdult = (person) => person >= 18   


export const canDrink = (bebado) => {
    if(bebado <= 17) {
        return "Sorry, you are not allowed to drink"
    } else {
        return "You cand drink as much as you can"
    }
} 

const isSenior = (senior) => senior >= 65 //is senior = true or false


export default isSenior