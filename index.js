/*Information in variables*/
    let playoffStartMsg=`====================================================
    === COMIENZAN LAS FASES ELIMINATORIAS DEL TORNEO ===
    ====================================================`;

/*Playoffs initial teams*/
const initGroups=[['Inglaterra','Austria','Noruega','Irlanda'],['Alemania','Dinamarca','España','Finlandia'],['Holanda','Suecia','Rusia','Suiza'],['Francia','Italia','Bélgica','Islandia']];
const initGroupsLength=initGroups.length;
const fakeIndex=[];
const playoffsTeams=[];
let num, num2, tempArray;

// Fake index for random teams
for (let i = 0; i < initGroupsLength; i++) {
    num=randomNumber(4);
    tempArray=[num];
    /*Junto con la función devuelve undefined
    num2=getNewNumber(num);*/
    num2=randomNumber(4);
    if (num===num2) {
        do{
            num2=randomNumber(4);
        }
        while(num===num2)
    }
    tempArray.push(num2);
    fakeIndex.push(tempArray);
}

// Random selected teams for playoffs
for (let i = 0; i < initGroupsLength; i++) {
    const tempArray=[];
    for (let j = 0; j < fakeIndex[i].length; j++) {
        let aa=fakeIndex[i][j];
        tempArray.push(initGroups[i][aa]);
    }
    playoffsTeams.push(tempArray);
}



// Random number function for select playoffs teams and for goals too
function randomNumber(max){
    return Math.floor(Math.random() * max);
}

// Así devuelve undefined si hay un número repetido
/*function getNewNumber(a){
    newNumber=randomNumber(2);
    if (a===newNumber) {
        getNewNumber(num);
    }
    else{
        return newNumber;
    }
}*/


// Worldcup knockout stages begin
console.log(playoffStartMsg);
console.log(fakeIndex);
console.log(playoffsTeams);