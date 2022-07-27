/*Information in variables*/
let playoffStartMsg=`====================================================
=== COMIENZAN LAS FASES ELIMINATORIAS DEL TORNEO ===
====================================================`;
let teams4PlayoffMsg, quarterTeamsMsg, quarterGoals, semiTeamsMsg, semisGoals, consolTeamsMsg, finalTeamsMsg, winnerMsg;


/*Playoffs initial teams*/
const initGroups=[['Inglaterra','Austria','Noruega','Irlanda'],['Alemania','Dinamarca','España','Finlandia'],['Holanda','Suecia','Rusia','Suiza'],['Francia','Italia','Bélgica','Islandia']];
const initGroupsLength=initGroups.length;
const fakeIndex=[];
const playoffsTeams=[];
const quarterTeams=[];
const temporalQuarter=[];
const quarterWinnerTeams=[];
const semiTeams=[];
const temporalSemis=[];
const semisWinnerTeams=[];
const consolTeams=[];
const finalTeams=[];
const buffer1=[];
const buffer2=[];
let num, num2, tempArray, winner;

// Fake index for random teams
for (let i = 0; i < initGroupsLength; i++) {
    num=randomNumber(4);
    tempArray=[num];
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

// Generating goals for the matches
function goals(a,b){
    const allGoals=[];
    
    for (let i = 0; i < a; i++) {
        const pairGoals=[];
        // if (i%2===0) {
            pairGoals.push(randomNumber(b),randomNumber(b));
            allGoals.push(pairGoals);
        // }
    }
    return allGoals;
}

// Calculating winners and next round teams
function winnerTeamsRounds(goalsArray,winnersArray,nextRoundArray,temporalRoundArray){
    for (let i = 0; i < goalsArray.length; i++) {
        let difGoals;
        for (let j = 0; j < goalsArray[i].length; j++) {
            if (j === 0) {
                difGoals=goalsArray[i][j]-goalsArray[i][j+1];
        
                if (difGoals>0) {
                    nextRoundArray.push(winnersArray[i][0]);
                    temporalRoundArray.push(winnersArray[i][0]);
                }
        
                else if(difGoals===0){
                    let tempGoals = randomNumber(3);
                    let tempGoals2= randomNumber(3);
                    if (tempGoals===tempGoals2) {
                        do{
                            tempGoals2=randomNumber(3);
                        }
                        while(tempGoals===tempGoals2);
    
                        if (tempGoals>tempGoals2) {
                            nextRoundArray.push(winnersArray[i][0]+' (Penaltis: '+tempGoals+' - '+ tempGoals2+')');
                            temporalRoundArray.push(winnersArray[i][0]);
                        }
                        else{
                            nextRoundArray.push(winnersArray[i][1]+' (Penaltis: '+tempGoals+' - '+ tempGoals2+')');
                            temporalRoundArray.push(quarterTeams[i][1]);
                        }
                    }
                    else{
                        if (tempGoals>tempGoals2) {
                            nextRoundArray.push(winnersArray[i][0]+' (Penaltis: '+tempGoals+' - '+ tempGoals2+')');
                            temporalRoundArray.push(winnersArray[i][0]);
                        }
                        else{
                            nextRoundArray.push(winnersArray[i][1]+' (Penaltis: '+tempGoals+' - '+ tempGoals2+')');
                            temporalRoundArray.push(winnersArray[i][1]);
                        }
                    }
                }
                
                else {
                    nextRoundArray.push(winnersArray[i][1]);
                    temporalRoundArray.push(winnersArray[i][1]);
                }
            }
        }
        
    }
}


// Worldcup knockout stages begin
console.log(playoffStartMsg);

// Selecting and showing 8 playoffs teams
// console.log(fakeIndex);
// console.log(playoffsTeams);

teams4PlayoffMsg=`
Los equipos que participarán en el playoff son:
    GRUPO A: ${playoffsTeams[0][0]}, ${playoffsTeams[0][1]}
    GRUPO B: ${playoffsTeams[1][0]}, ${playoffsTeams[1][1]}
    GRUPO C: ${playoffsTeams[2][0]}, ${playoffsTeams[2][1]}
    GRUPO D: ${playoffsTeams[3][0]}, ${playoffsTeams[3][1]}
`;
console.log(teams4PlayoffMsg);


// Results of quarter final matches and teams
for (let i = 0; i < playoffsTeams.length; i++) {
    for (let j = 0; j < playoffsTeams[i].length; j++) {
        let tempArray=[];
        if (i%2 === 0) {
            if (j%2 === 0) {
                // tempArray+=`${playoffsTeams[i][j]} - ${playoffsTeams[i+1][j+1]} => Winner`;
                tempArray.push(playoffsTeams[i][j],playoffsTeams[i+1][j+1]);
                quarterTeams.push(tempArray);
            }
        }
        else{
            if (j%2 === 0) {
                // tempArray+=`${playoffsTeams[i][j]} - ${playoffsTeams[i-1][j+1]} => Winner`;
                tempArray.push(playoffsTeams[i][j],playoffsTeams[i-1][j+1]);
                quarterTeams.push(tempArray);
            }
        }
    }
}

quarterGoals=goals(quarterTeams.length,2);

// Calculating winners and semifinals teams
/*for (let i = 0; i < quarterGoals.length; i++) {
    let difGoals;
    for (let j = 0; j < quarterGoals[i].length; j++) {
        if (j === 0) {
            difGoals=quarterGoals[i][j]-quarterGoals[i][j+1];
    
            if (difGoals>0) {
                quarterWinnerTeams.push(quarterTeams[i][0]);
                temporalQuarter.push(quarterTeams[i][0]);
            }
    
            else if(difGoals===0){
                let tempGoals = randomNumber(3);
                let tempGoals2= randomNumber(3);
                if (tempGoals===tempGoals2) {
                    do{
                        tempGoals2=randomNumber(3);
                    }
                    while(tempGoals===tempGoals2);

                    if (tempGoals>tempGoals2) {
                        quarterWinnerTeams.push(quarterTeams[i][0]+' (Penaltis: '+tempGoals+' - '+ tempGoals2+')');
                        temporalQuarter.push(quarterTeams[i][0]);
                    }
                    else{
                        quarterWinnerTeams.push(quarterTeams[i][1]+' (Penaltis: '+tempGoals+' - '+ tempGoals2+')');
                        temporalQuarter.push(quarterTeams[i][1]);
                    }
                }
                else{
                    if (tempGoals>tempGoals2) {
                        quarterWinnerTeams.push(quarterTeams[i][0]+' (Penaltis: '+tempGoals+' - '+ tempGoals2+')');
                        temporalQuarter.push(quarterTeams[i][0]);
                    }
                    else{
                        quarterWinnerTeams.push(quarterTeams[i][1]+' (Penaltis: '+tempGoals+' - '+ tempGoals2+')');
                        temporalQuarter.push(quarterTeams[i][1]);
                    }
                }
            }
            
            else {
                quarterWinnerTeams.push(quarterTeams[i][1]);
                temporalQuarter.push(quarterTeams[i][1]);
            }
        }
    }
    
}*/
winnerTeamsRounds(quarterGoals,quarterTeams,quarterWinnerTeams,temporalQuarter);

quarterTeamsMsg=`
===== CUARTOS DE FINAL =====
    ${quarterTeams[0][0]} ${quarterGoals[0][0]} - ${quarterGoals[0][1]} ${quarterTeams[0][1]} => ${quarterWinnerTeams[0]}
    ${quarterTeams[1][0]} ${quarterGoals[1][0]} - ${quarterGoals[1][1]} ${quarterTeams[1][1]} => ${quarterWinnerTeams[1]}
    ${quarterTeams[2][0]} ${quarterGoals[2][0]} - ${quarterGoals[2][1]} ${quarterTeams[2][1]} => ${quarterWinnerTeams[2]}
    ${quarterTeams[3][0]} ${quarterGoals[3][0]} - ${quarterGoals[3][1]} ${quarterTeams[3][1]} => ${quarterWinnerTeams[3]}
`;
console.log(quarterTeamsMsg);

// Creating semifinals matches
// console.log(temporalQuarter);

for (let i = 0; i < temporalQuarter.length; i++) {
    if (i%2 === 0) {
        buffer1.push(temporalQuarter[i]);
    }
    else{
        buffer2.push(temporalQuarter[i]);
    }    
}
semiTeams.push(buffer1,buffer2);
// console.log(semiTeams);

// Calculating winners semifinals
semisGoals=goals(semiTeams.length,2);
winnerTeamsRounds(semisGoals,semiTeams,semisWinnerTeams,temporalSemis);

semiTeamsMsg=`===== SEMIFINALES =====
    ${semiTeams[0][0]} ${semisGoals[0][0]} - ${semisGoals[0][1]} ${semiTeams[0][1]} => ${semisWinnerTeams[0]}
    ${semiTeams[1][0]} ${semisGoals[1][0]} - ${semisGoals[1][1]} ${semiTeams[1][1]} => ${semisWinnerTeams[1]}
`;
console.log(semiTeamsMsg);