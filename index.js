/*Information in variables*/
let phaseGroupsStartMsg=`Grupos y equipos\n===============================\n`;
let startWorldCup=`===============================================
======== COMIENZA LA EURO WOMEN’s CUP =========
===============================================
`;
let matchesJourneys=``;

let playoffStartMsg=`====================================================
=== COMIENZAN LAS FASES ELIMINATORIAS DEL TORNEO ===
====================================================`;
let teams4PlayoffMsg, quarterTeamsMsg, quarterGoals, semiTeamsMsg, semisGoals, consolTeamsMsg, consolGoals,finalTeamsMsg, finalGoals, winnerMsg;


/*Groups matches teams raw (not in groups)*/
const originalGroups=['Inglaterra','Austria','Noruega','Irlanda','Alemania','Dinamarca','España','Finlandia','Holanda','Suecia','Rusia','Suiza','Francia','Italia','Bélgica','Islandia'];
const originalGroupsLength=originalGroups.length;
const groupsAvailable=['A','B','C','D'];
const schemeMatches=[[0,3,1,2],[3,2,0,1],[1,3,2,0]];
const orderingJourneys=[];
const journeyMatches=[];
const journeyGoals=[];
let templateResults=`\nPosición       Equipo        Puntos        Goles Favor       Goles Contra        Dif. Goles\n---------------------------------------------------------------------------------------------------\n`;
const journeyResults1=[];
const journeyResults2=[];
const journeyResults3=[];
const totalResult=[];

const initGroupsPO=[];


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
const temporalConsol=[];
const consolWinnerTeam=[];
const finalTeams=[];
const temporalFinal=[];
const finalWinnerTeam=[];
const buffer1=[];
const buffer2=[];
const temporalLoosers=[];
let num, num2, tempArray, winner;


/*==============================================================
                Groups phase code below here
 ==============================================================*/

//  Calculating groups
// Creating a fake index using Fisher Yates Shuffle method
for (let i = 0; i < originalGroupsLength; i++) {
    fakeIndex.push(i);
}

// Fisher Yates Shuffle method
for (let i = fakeIndex.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = fakeIndex[i];
    fakeIndex[i] = fakeIndex[j];
    fakeIndex[j] = k;
} 

// Random selected teams for groups phase
function randomTeamsGPhase(){
    let j=0;
    const tempArray=[];
    for (let i = 0; i < originalGroupsLength; i++) {
        let aa=fakeIndex[i];
        tempArray.push(originalGroups[aa]);
        j++;
        if (j>3) {
            const a=tempArray.slice();
            initGroupsPO.push(a);
            j=0;
            tempArray.length=0;
        }
    }
}
randomTeamsGPhase();
// console.log(initGroupsPO);
// console.log(fakeIndex);
fakeIndex.length=0;

for (let i = 0; i < initGroupsPO.length; i++) {
    const journeyMatchesTemp=[];
    const journeyGoalsTemp=[];
    let a = groupsAvailable[i];
    phaseGroupsStartMsg+=`\nGrupo ${a}\n--------------------`;
    for (let j = 0; j < initGroupsPO[i].length; j++) {
        phaseGroupsStartMsg+=`\n${initGroupsPO[i][j]}`;
        
    }
    phaseGroupsStartMsg+=`\n`;

    // Creating matches between group teams
    for (let k = 0; k < schemeMatches.length; k++) {
        const journeyMatchesTemp1=[];
        // const journeyGoalsTemp1=[];
        phaseGroupsStartMsg+=`\nJornada ${k+1}:`;
        for (let m = 0; m < schemeMatches[k].length; m++) {
            if (m%2===0) {
                const journeyMatchesTemp2=[];
                // const journeyGoalsTemp2=[];
                let aa=schemeMatches[k][m];
                let bb=schemeMatches[k][m+1];
                phaseGroupsStartMsg+=`\n - ${initGroupsPO[i][aa]} vs ${initGroupsPO[i][bb]}`;
                journeyMatchesTemp2.push(initGroupsPO[i][aa],initGroupsPO[i][bb]);
                journeyMatchesTemp1.push(journeyMatchesTemp2);
                
                // journeyGoalsTemp2.push(goals(schemeMatches[k].length,2),goals(schemeMatches[k].length,2));
                // journeyGoalsTemp1.push(journeyGoalsTemp2);
            }
        }
        journeyMatchesTemp.push(journeyMatchesTemp1);
        // journeyGoalsTemp1.push(goals(schemeMatches.length/2,2));
        // journeyGoalsTemp.push(journeyGoalsTemp1);
        phaseGroupsStartMsg+=`\n`;
    }

    journeyMatches.push(journeyMatchesTemp);
    // journeyGoalsTemp.push(goals(initGroupsPO.length/2,2));
    // journeyGoals.push(journeyGoalsTemp);
    phaseGroupsStartMsg+=`\n`;

}

// console.log(journeyMatches);
// console.log(journeyGoals);
console.log(phaseGroupsStartMsg);

// Start group matches
console.log(startWorldCup);

// Groups and journeys
// Creating order journeys with 4 groups
function createJourneys(a){
    const journeyTemp=[];
    for (let i = 0; i < journeyMatches.length; i++) {
        journeyTemp.push(journeyMatches[i][a]);
    }
    return journeyTemp;
}

for (let i = 0; i < journeyMatches[i].length; i++) {
    orderingJourneys.push(createJourneys(i));
}

//  console.log(orderingJourneys);

// Playing journey matches
for (let i = 0; i < orderingJourneys.length; i++) {
    const tempResults=[];
    for (let j = 0; j < orderingJourneys[i].length; j++) {
        matchesJourneys+=`\nGrupo ${groupsAvailable[j]} - Jornada ${(i+1)}:\n------------------------------\n`;
        
        
        const tempResults3=[];
        for (let k = 0; k < orderingJourneys[i][j].length; k++) {
            for (let l = 0; l < orderingJourneys[i][j][k].length; l++) {
                if (l%2===0) {
                    const tempResults1=[];
                    const tempResults2=[];
                    let goalsTemp=goals(orderingJourneys[i][j][k].length/2,8);
                    matchesJourneys+=`${orderingJourneys[i][j][k][l]} ${goalsTemp[0][0]} - ${goalsTemp[0][1]} ${orderingJourneys[i][j][k][l+1]} \n`;

                    tempResults1.push(orderingJourneys[i][j][k][l],calculatingPoints(goalsTemp[0][0],goalsTemp[0][1]),goalsTemp[0][0],goalsTemp[0][1],(goalsTemp[0][0]-goalsTemp[0][1]));

                    tempResults2.push(orderingJourneys[i][j][k][l+1],calculatingPoints(goalsTemp[0][1],goalsTemp[0][0]),goalsTemp[0][1],goalsTemp[0][0],(goalsTemp[0][1]-goalsTemp[0][0]));

                    tempResults3.push(tempResults1,tempResults2);
                    
                } 
            }
        }
        tempResults.push(tempResults3);
        // tempResults.push(tempResults2);

        
        // Table results of journey
        // matchesJourneys+=templateResults;
        // matchesJourneys+=tempResults+'\n';
        matchesJourneys+='\n';
        
        /*for (let i = 0; i < tempResults.length; i++) {
            for (let j = 0; j < tempResults[i].length; j++) {
                let tempData=``;
                for (let k = 0; k < tempResults[i][j].length; k++) {
                    if (i===0) {
                        tempData+=`      ${tempResults[i][j][k]}          `;
                        
                    } 
                }
                matchesJourneys+=`   ${tempData}\n`;
            }
        }*/
    }
    // console.log(tempResults);
    
}

console.log(matchesJourneys);
console.log();




/*==============================================================
                    Playoffs code below here
 ==============================================================*/
// Fake index for random teams for playoffs
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
//  console.log(fakeIndex);

// Random selected teams for playoffs
for (let i = 0; i < initGroupsLength; i++) {
    const tempArray=[];
    for (let j = 0; j < fakeIndex[i].length; j++) {
        let aa=fakeIndex[i][j];
        tempArray.push(initGroups[i][aa]);
    }
    playoffsTeams.push(tempArray);
}


/*==============================================================
                        FUNCTIONS below here
 ==============================================================*/

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

// Calculating points
function calculatingPoints(a,b){
    let points;
    if (a>b) {
        points=3;
    }
    else if(a<b){
        points=0;
    }
    else{
        points=1;
    }
    return points;
}

// Calculating winners and next round teams
function winnerTeamsRounds(goalsArray,winnersArray,nextRoundArray,temporalRoundArray,temporalLoosers){
    for (let i = 0; i < goalsArray.length; i++) {
        let difGoals;
        for (let j = 0; j < goalsArray[i].length; j++) {
            if (j === 0) {
                difGoals=goalsArray[i][j]-goalsArray[i][j+1];
        
                if (difGoals>0) {
                    nextRoundArray.push(winnersArray[i][0]);
                    temporalRoundArray.push(winnersArray[i][0]);
                    if (temporalLoosers) {
                        temporalLoosers.push(winnersArray[i][1]);
                    }
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
                            if (temporalLoosers) {
                                temporalLoosers.push(winnersArray[i][1]);
                            }
                        }
                        else{
                            nextRoundArray.push(winnersArray[i][1]+' (Penaltis: '+tempGoals+' - '+ tempGoals2+')');
                            temporalRoundArray.push(winnersArray[i][1]);
                            if (temporalLoosers) {
                                temporalLoosers.push(winnersArray[i][0]);
                            }
                        }
                    }
                    else{
                        if (tempGoals>tempGoals2) {
                            nextRoundArray.push(winnersArray[i][0]+' (Penaltis: '+tempGoals+' - '+ tempGoals2+')');
                            temporalRoundArray.push(winnersArray[i][0]);
                            if (temporalLoosers) {
                                temporalLoosers.push(winnersArray[i][1]);
                            }
                        }
                        else{
                            nextRoundArray.push(winnersArray[i][1]+' (Penaltis: '+tempGoals+' - '+ tempGoals2+')');
                            temporalRoundArray.push(winnersArray[i][1]);
                            if (temporalLoosers) {
                                temporalLoosers.push(winnersArray[i][0]);
                            }
                        }
                    }
                }
                
                else {
                    nextRoundArray.push(winnersArray[i][1]);
                    temporalRoundArray.push(winnersArray[i][1]);
                    if (temporalLoosers) {
                        temporalLoosers.push(winnersArray[i][0]);
                    }
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
winnerTeamsRounds(semisGoals,semiTeams,semisWinnerTeams,temporalSemis,temporalLoosers);

semiTeamsMsg=`===== SEMIFINALES =====
    ${semiTeams[0][0]} ${semisGoals[0][0]} - ${semisGoals[0][1]} ${semiTeams[0][1]} => ${semisWinnerTeams[0]}
    ${semiTeams[1][0]} ${semisGoals[1][0]} - ${semisGoals[1][1]} ${semiTeams[1][1]} => ${semisWinnerTeams[1]}
`;
console.log(semiTeamsMsg);



consolTeams.push(temporalLoosers);
// Calculating winners consolation
consolGoals=goals(consolTeams.length,2);
winnerTeamsRounds(consolGoals,consolTeams,consolWinnerTeam,temporalConsol);
consolTeamsMsg=`===== TERCER Y CUARTO PUESTO =====
    ${consolTeams[0][0]} ${consolGoals[0][0]} - ${consolGoals[0][1]} ${consolTeams[0][1]} => ${consolWinnerTeam[0]}
`;
console.log(consolTeamsMsg);


finalTeams.push(temporalSemis);
// Calculating final winners
finalGoals=goals(finalTeams.length,2);
winnerTeamsRounds(finalGoals,finalTeams,finalWinnerTeam,temporalFinal);
finalTeamsMsg=`===== FINAL =====
    ${finalTeams[0][0]} ${finalGoals[0][0]} - ${finalGoals[0][1]} ${finalTeams[0][1]} => ${finalWinnerTeam[0]}
`;
console.log(finalTeamsMsg);

winnerMsg=`
==============================================================
       ¡${temporalFinal} campeona de la EURO WOMEN’S CUP!
==============================================================`;
console.log(winnerMsg);