var layoutInfo = {
    startTab: "none",
    startNavTab: "tree-tab",
	showTree: true,

    treeLayout: ""

  
}

function audio() {
    if (options.SFX == false) return
    if (player.prev === C1_LIST[1]){ player['tree-tab'].audioR = Math.floor(Math.random()*3)
    if (player['tree-tab'].audioR === 0) tmp['tree-tab'].audioRock1.loop = false, tmp['tree-tab'].audioRock1.play()
    if (player['tree-tab'].audioR === 1) tmp['tree-tab'].audioRock2.loop = false, tmp['tree-tab'].audioRock2.play()
    if (player['tree-tab'].audioR === 2) tmp['tree-tab'].audioRock3.loop = false, tmp['tree-tab'].audioRock3.play()}

    if (player.prev === C2_LIST[0] || player.prev === C2_LIST[5]){ player['tree-tab'].audioR = Math.floor(Math.random()*3)
    if (player['tree-tab'].audioR === 0) tmp['tree-tab'].audioDirt1.loop = false, tmp['tree-tab'].audioDirt1.play()
    if (player['tree-tab'].audioR === 1) tmp['tree-tab'].audioDirt2.loop = false, tmp['tree-tab'].audioDirt2.play()
    if (player['tree-tab'].audioR === 2) tmp['tree-tab'].audioDirt3.loop = false, tmp['tree-tab'].audioDirt3.play()}

    if (player.prev === C2_LIST[2]){ player['tree-tab'].audioR = Math.floor(Math.random()*3)
    if (player['tree-tab'].audioR === 0) tmp['tree-tab'].audioWood1.loop = false, tmp['tree-tab'].audioWood1.play()
    if (player['tree-tab'].audioR === 1) tmp['tree-tab'].audioWood2.loop = false, tmp['tree-tab'].audioWood2.play()
    if (player['tree-tab'].audioR === 2) tmp['tree-tab'].audioWood3.loop = false, tmp['tree-tab'].audioWood3.play()}

    if (player.prev === C2_LIST[4]) tmp['tree-tab'].audioSand.loop = false, tmp['tree-tab'].audioSand.play()
}

function save1() {
if (player.Zone === -1) localStorage.setItem('-1', JSON.stringify(player));
if (player.Zone === 1) localStorage.setItem('1', JSON.stringify(player));
if (player.Zone === 2) localStorage.setItem('2', JSON.stringify(player));
if (player.Zone === 3) localStorage.setItem('3', JSON.stringify(player));
}

function save2(){
    localStorage.setItem('saveU', localStorage.getItem('save')),
    localStorage.setItem('save', JSON.stringify(player));
}

function import2(){
    player = Object.assign(getStartPlayer(), JSON.parse(localStorage.getItem('saveU')));
    player.versionType = modInfo.id;
    fixSave();
    versionCheck();
    NaNcheck(save)
    player.intervaeae = false
    player.intervaea = false
    player.intervae = false
    player.interva = false
    localStorage.setItem('save', JSON.stringify(player));
    save();
    window.location.reload();
}

function import1() {
    if (player.Zone === -1){player = Object.assign(getStartPlayer(), JSON.parse(localStorage.getItem('-1')));
    player.versionType = modInfo.id;
    fixSave();
    versionCheck();
    NaNcheck(save)
    player.intervaeae = false
    player.intervaea = false
    player.intervae = false
    player.interva = false
    if (player.prev === C2_LIST[2]) player.prev = C2_LIST[5], player.Fourtynine = C2_LIST[2]
    save();
    window.location.reload();}

    if (player.Zone === 1){player = Object.assign(getStartPlayer(), JSON.parse(localStorage.getItem('1')));
        player.versionType = modInfo.id;
        fixSave();
        versionCheck();
        NaNcheck(save)
        player.intervaeae = false
    player.intervaea = false
    player.intervae = false
    player.interva = false
        if (player.Thirty === C2_LIST[2] && localStorage.getItem('prev1') === '2') player.Twentynine = C2_LIST[2]

        if (localStorage.getItem('prev1') === '1') player.Fourty = C1_LIST[3], player.North = 0, player.South = 0
        if (localStorage.getItem('prev1') !== '1') player.Fourty = C2_LIST[0]

        if (localStorage.getItem('prev1') === '2') player.Thirty = C1_LIST[3], player.North = 1, player.South = -1
        if (localStorage.getItem('prev1') !== '2' && player.Thirty !== C2_LIST[2]) player.Thirty = C2_LIST[0]

        if (localStorage.getItem('prev1') === '3') player.Twenty = C1_LIST[3], player.North = 2, player.South = -2
        if (localStorage.getItem('prev1') !== '3') player.Twenty = C2_LIST[0]

        if (localStorage.getItem('prev1') === '4') player.L11 = C1_LIST[3], player.North = -1, player.South = 1, player.prev = C3_LIST[1]
        if (localStorage.getItem('prev1') !== '4') player.L11 = C3_LIST[1], player.prev = C2_LIST[0]

        if (localStorage.getItem('prev1') === '5') player.Fourtyone = C1_LIST[3], player.prev = C1_LIST[1], player.North = -1, player.South = 1
        if (localStorage.getItem('prev1') !== '5') player.Fourtyone = C1_LIST[1]
        
        if (localStorage.getItem('prevTab') === '1' && localStorage.getItem('prev1') === '2') player.Twentynine = C2_LIST[2], localStorage.setItem('prevTab', null)
        if (localStorage.getItem('prevTab') === '1' && localStorage.getItem('prev1') !== '2') player.Thirty = C2_LIST[2], localStorage.setItem('prevTab', null)
        save();
        window.location.reload();}
    if (player.Zone === 2){player = Object.assign(getStartPlayer(), JSON.parse(localStorage.getItem('2')));
        player.versionType = modInfo.id;
        fixSave();
        versionCheck();
        NaNcheck(save)
        player.interva = false
        player.intervae = false
        
        if (localStorage.getItem('prevZone') === '1'){
      
            if (player.Twentyone === C2_LIST[2] && localStorage.getItem('prev') === '2') player.Twentytwo = C2_LIST[2]
        if (localStorage.getItem('prev') === '1') player.Thirtyone = C1_LIST[3], player.North = 0, player.South = 0
        if (localStorage.getItem('prev') !== '1') player.Thirtyone = C2_LIST[0]

        if (localStorage.getItem('prev') === '2') player.Twentyone = C1_LIST[3], player.North = 1, player.South = -1
        if (localStorage.getItem('prev') !== '2' && player.Twentyone !== C2_LIST[2]) player.Twentyone = C2_LIST[0]

        if (localStorage.getItem('prev') === '3') player.Eleven = C1_LIST[3], player.North = 2, player.South = -2
        if (localStorage.getItem('prev') !== '3') player.Eleven = C2_LIST[0]

        if (localStorage.getItem('prev') === '4') player.L2 = C1_LIST[3], player.North = -1, player.South = 1, player.prev = C3_LIST[1]
        if (localStorage.getItem('prev') !== '4') player.L2 = C3_LIST[1], player.prev = C2_LIST[0]

        if (localStorage.getItem('prevTab') === '1' && localStorage.getItem('prev') === '2') player.Twentytwo = C2_LIST[2], localStorage.setItem('prevTab', null)
        if (localStorage.getItem('prevTab') === '1' && localStorage.getItem('prev') !== '2') player.Twentyone = C2_LIST[2], localStorage.setItem('prevTab', null)}

        if (localStorage.getItem('prevZone') === '3'){

            if (localStorage.getItem('prevTab') === '1') player.Twentynine = C2_LIST[2], localStorage.setItem('prevTab', null)

          }
        save();
        window.location.reload();}
    if (player.Zone === 3){player = Object.assign(getStartPlayer(), JSON.parse(localStorage.getItem('3')));
        player.versionType = modInfo.id;
        fixSave();
        versionCheck();
        NaNcheck(save)
        player.interva = false
        player.intervae = false

        if (localStorage.getItem('prevTab') === '1') player.Twentytwo = C2_LIST[2], localStorage.setItem('prevTab', null)
        save();
        window.location.reload();}
}

function moveLeft(){
    if (player.ML == false) return

    if (player.L2 === C1_LIST[3] && player.L1 === C3_LIST[1]) player.L2 = player.prev, player.prev = player.L1, player.L1 = C1_LIST[3],  player.East -= 1,  player.West += 1
     if (player.L3 === C1_LIST[3] && player.L2 === C3_LIST[1]) player.L3 = player.prev, player.prev = player.L2, player.L2 = C1_LIST[3],  player.East -= 1,  player.West += 1
    if (player.L4 === C1_LIST[3] && player.L3 === C3_LIST[1]) player.L4 = player.prev, player.prev = player.L3, player.L3 = C1_LIST[3],  player.East -= 1,  player.West += 1
    if (player.L5 === C1_LIST[3] && player.L4 === C3_LIST[1]) player.L5 = player.prev, player.prev = player.L4, player.L4 = C1_LIST[3],  player.East -= 1,  player.West += 1
    if (player.L6 === C1_LIST[3] && player.L5 === C3_LIST[1]) player.L6 = player.prev, player.prev = player.L5, player.L5 = C1_LIST[3],  player.East -= 1,  player.West += 1
    if (player.L7 === C1_LIST[3] && player.L6 === C3_LIST[1]) player.L7 = player.prev, player.prev = player.L6, player.L6 = C1_LIST[3],  player.East -= 1,  player.West += 1
    if (player.L8 === C1_LIST[3] && player.L7 === C3_LIST[1]) player.L8 = player.prev, player.prev = player.L7, player.L7 = C1_LIST[3],  player.East -= 1,  player.West += 1
    if (player.L9 === C1_LIST[3] && player.L8 === C3_LIST[1]) player.L9 = player.prev, player.prev = player.L8, player.L8 = C1_LIST[3],  player.East -= 1,  player.West += 1
   if (player.L10 === C1_LIST[3] && player.L9 === C3_LIST[1]) player.L10 = player.prev, player.prev = player.L9, player.L9 = C1_LIST[3],  player.East -= 1,  player.West += 1
    if (player.L11 === C1_LIST[3] && player.L10 === C3_LIST[1]) player.L11 = player.prev, player.prev = player.L10, player.L10 = C1_LIST[3],  player.East -= 1,  player.West += 1
    if (player.L12 === C1_LIST[3] && player.L11 === C3_LIST[1]) player.L12 = player.prev, player.prev = player.L11, player.L11 = C1_LIST[3],  player.East -= 1,  player.West += 1

   if (player.Two === C1_LIST[3] && player.One !== C1_LIST[0]) player.Two = player.prev, player.prev = player.One, player.One = C1_LIST[3],  player.East -= 1,  player.West += 1
  if (player.Two === C2_LIST[2] && player.Three === C1_LIST[3] && player.One !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.One) || player.One === C1_LIST[4]) player.Two = player.Sprev, player.Sprev = player.One, player.One = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.One = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Three === C1_LIST[3] && player.Two !== C1_LIST[0]) player.Three = player.prev, player.prev = player.Two, player.Two = C1_LIST[3],  player.East -= 1,  player.West += 1
 if (player.Three === C2_LIST[2] && player.Four === C1_LIST[3] && player.Two !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Two) || player.Two === C1_LIST[4]) player.Three = player.Sprev, player.Sprev = player.Two, player.Two = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Two = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Four === C1_LIST[3] && player.Three !== C1_LIST[0]) player.Four = player.prev, player.prev = player.Three, player.Three = C1_LIST[3],  player.East -= 1,  player.West += 1
  if (player.Four === C2_LIST[2] && player.Five === C1_LIST[3] && player.Three !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Three) || player.Three === C1_LIST[4]) player.Four = player.Sprev, player.Sprev = player.Three, player.Three = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Three = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Five === C1_LIST[3] && player.Four !== C1_LIST[0]) player.Five = player.prev, player.prev = player.Four, player.Four = C1_LIST[3],  player.East -= 1,  player.West += 1
if (player.Five === C2_LIST[2] && player.Six === C1_LIST[3] && player.Four !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Four) || player.Four === C1_LIST[4]) player.Five = player.Sprev, player.Sprev = player.Four, player.Four = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Four = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Six === C1_LIST[3] && player.Five !== C1_LIST[0]) player.Six = player.prev, player.prev = player.Five, player.Five = C1_LIST[3],  player.East -= 1,  player.West += 1
    if (player.Six === C2_LIST[2] && player.Seven === C1_LIST[3] && player.Five !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Five) || player.Five === C1_LIST[4]) player.Six = player.Sprev, player.Sprev = player.Five, player.Five = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Five = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Seven === C1_LIST[3] && player.Six !== C1_LIST[0]) player.Seven = player.prev, player.prev = player.Six, player.Six = C1_LIST[3],  player.East -= 1,  player.West += 1
if (player.Seven === C2_LIST[2] && player.Eight === C1_LIST[3] && player.Six !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Six) || player.Six === C1_LIST[4]) player.Seven = player.Sprev, player.Sprev = player.Six, player.Six = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Six = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Eight === C1_LIST[3] && player.Seven !== C1_LIST[0]) player.Eight = player.prev, player.prev = player.Seven, player.Seven = C1_LIST[3],  player.East -= 1,  player.West += 1
 if (player.Eight === C2_LIST[2] && player.Nine === C1_LIST[3] && player.Seven !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Seven) || player.Seven === C1_LIST[4]) player.Eight = player.Sprev, player.Sprev = player.Seven, player.Seven = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Seven = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Nine === C1_LIST[3] && player.Eight !== C1_LIST[0]) player.Nine = player.prev, player.prev = player.Eight, player.Eight = C1_LIST[3],  player.East -= 1,  player.West += 1
 if (player.Nine === C2_LIST[2] && player.Ten === C1_LIST[3] && player.Eight !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Eight) || player.Eight === C1_LIST[4]) player.Nine = player.Sprev, player.Sprev = player.Eight, player.Eight = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Eight = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
 if (player.Ten === C1_LIST[3] && player.Nine !== C1_LIST[0]) player.Ten = player.prev, player.prev = player.Nine, player.Nine = C1_LIST[3],  player.East -= 1,  player.West += 1

   if (player.Twelve === C1_LIST[3] && player.Eleven !== C1_LIST[0]) player.Twelve = player.prev, player.prev = player.Eleven, player.Eleven = C1_LIST[3],  player.East -= 1,  player.West += 1
 if (player.Twelve === C2_LIST[2] && player.Thirteen === C1_LIST[3] && player.Eleven !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Eleven) || player.Eleven === C1_LIST[4]) player.Twelve = player.Sprev, player.Sprev = player.Eleven, player.Eleven = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Eleven = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Thirteen === C1_LIST[3] && player.Twelve !== C1_LIST[0]) player.Thirteen = player.prev, player.prev = player.Twelve, player.Twelve = C1_LIST[3],  player.East -= 1,  player.West += 1
 if (player.Thirteen === C2_LIST[2] && player.Fourteen === C1_LIST[3] && player.Twelve !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Twelve) || player.Twelve === C1_LIST[4]) player.Thirteen = player.Sprev, player.Sprev = player.Twelve, player.Twelve = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twelve = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Fourteen === C1_LIST[3] && player.Thirteen !== C1_LIST[0]) player.Fourteen = player.prev, player.prev = player.Thirteen, player.Thirteen = C1_LIST[3],  player.East -= 1,  player.West += 1
 if (player.Fourteen === C2_LIST[2] && player.Fifteen === C1_LIST[3] && player.Thirteen !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Thirteen) || player.Thirteen === C1_LIST[4]) player.Fourteen = player.Sprev, player.Sprev = player.Thirteen, player.Thirteen = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirteen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Fifteen === C1_LIST[3] && player.Fourteen !== C1_LIST[0]) player.Fifteen = player.prev, player.prev = player.Fourteen, player.Fourteen = C1_LIST[3],  player.East -= 1,  player.West += 1
 if (player.Fifteen === C2_LIST[2] && player.Sixteen === C1_LIST[3] && player.Fourteen !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Fourteen) || player.Fourteen === C1_LIST[4]) player.Fifteen = player.Sprev, player.Sprev = player.Fourteen, player.Fourteen = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourteen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Sixteen === C1_LIST[3] && player.Fifteen !== C1_LIST[0]) player.Sixteen = player.prev, player.prev = player.Fifteen, player.Fifteen = C1_LIST[3],  player.East -= 1,  player.West += 1
  if (player.Sixteen === C2_LIST[2] && player.Seventeen === C1_LIST[3] && player.Fifteen !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Fifteen) || player.Fifteen === C1_LIST[4]) player.Sixteen = player.Sprev, player.Sprev = player.Fifteen, player.Fifteen = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fifteen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Seventeen === C1_LIST[3] && player.Sixteen !== C1_LIST[0]) player.Seventeen = player.prev, player.prev = player.Sixteen, player.Sixteen = C1_LIST[3],  player.East -= 1,  player.West += 1
if (player.Seventeen === C2_LIST[2] && player.Eighteen === C1_LIST[3] && player.Sixteen !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Sixteen) || player.Sixteen === C1_LIST[4]) player.Seventeen = player.Sprev, player.Sprev = player.Sixteen, player.Sixteen = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Sixteen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Eighteen === C1_LIST[3] && player.Seventeen !== C1_LIST[0]) player.Eighteen = player.prev, player.prev = player.Seventeen, player.Seventeen = C1_LIST[3],  player.East -= 1,  player.West += 1
   if (player.Eighteen === C2_LIST[2] && player.Nineteen === C1_LIST[3] && player.Seventeen !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Seventeen) || player.Seventeen === C1_LIST[4]) player.Eighteen = player.Sprev, player.Sprev = player.Seventeen, player.Seventeen = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Seventeen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Nineteen === C1_LIST[3] && player.Eighteen !== C1_LIST[0]) player.Nineteen = player.prev, player.prev = player.Eighteen, player.Eighteen = C1_LIST[3],  player.East -= 1,  player.West += 1
if (player.Nineteen === C2_LIST[2] && player.Twenty === C1_LIST[3] && player.Eighteen !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Eighteen) || player.Eighteen === C1_LIST[4]) player.Nineteen = player.Sprev, player.Sprev = player.Eighteen, player.Eighteen = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Eighteen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Twenty === C1_LIST[3] && player.Nineteen !== C1_LIST[0]) player.Twenty = player.prev, player.prev = player.Nineteen, player.Nineteen = C1_LIST[3],  player.East -= 1,  player.West += 1

   if (player.Twentytwo == C1_LIST[3] && player.Twentyone === C2_LIST[2] && player.Zone === 3) localStorage.setItem('prevTab', 1), localStorage.setItem('log', 2), localStorage.setItem('log1', 0),  player.Twentyone = C2_LIST[0]
   if (player.Twentytwo == C1_LIST[3] && player.Twentyone === C2_LIST[2] && player.Zone === 2) localStorage.setItem('prevTab', 1), localStorage.setItem('log', 1), player.Twentyone = C2_LIST[0]
   if (player.Twentytwo === C1_LIST[3] && player.Twentyone !== C1_LIST[0]) player.Twentytwo = player.prev, player.prev = player.Twentyone, player.Twentyone = C1_LIST[3],  player.East -= 1,  player.West += 1
 if (player.Twentytwo === C2_LIST[2] && player.Twentythree === C1_LIST[3] && player.Twentyone !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Twentyone) || player.Twentyone === C1_LIST[4]) player.Twentytwo = player.Sprev, player.Sprev = player.Twentyone, player.Twentyone = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentyone = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Twentythree === C1_LIST[3] && player.Twentytwo !== C1_LIST[0]) player.Twentythree = player.prev, player.prev = player.Twentytwo, player.Twentytwo = C1_LIST[3],  player.East -= 1,  player.West += 1
     if (player.Twentythree === C2_LIST[2] && player.Twentyfour === C1_LIST[3] && player.Twentytwo !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Twentytwo) || player.Twentytwo === C1_LIST[4]) player.Twentythree = player.Sprev, player.Sprev = player.Twentytwo, player.Twentytwo = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentytwo = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Twentyfour === C1_LIST[3] && player.Twentythree !== C1_LIST[0]) player.Twentyfour = player.prev, player.prev = player.Twentythree, player.Twentythree = C1_LIST[3],  player.East -= 1,  player.West += 1
 if (player.Twentyfour === C2_LIST[2] && player.Twentyfive === C1_LIST[3] && player.Twentythree !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Twentythree) || player.Twentythree === C1_LIST[4]) player.Twentyfour = player.Sprev, player.Sprev = player.Twentythree, player.Twentythree = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentythree = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Twentyfive === C1_LIST[3] && player.Twentyfour !== C1_LIST[0]) player.Twentyfive = player.prev, player.prev = player.Twentyfour, player.Twentyfour = C1_LIST[3],  player.East -= 1,  player.West += 1
 if (player.Twentyfive === C2_LIST[2] && player.Twentysix === C1_LIST[3] && player.Twentyfour !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Twentyfour) || player.Twentyfour === C1_LIST[4]) player.Twentyfive = player.Sprev, player.Sprev = player.Twentyfour, player.Twentyfour = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentyfour = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Twentysix === C1_LIST[3] && player.Twentyfive !== C1_LIST[0]) player.Twentysix = player.prev, player.prev = player.Twentyfive, player.Twentyfive = C1_LIST[3],  player.East -= 1,  player.West += 1
if (player.Twentysix === C2_LIST[2] && player.Twentyseven === C1_LIST[3] && player.Twentyfive !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Twentyfive) || player.Twentyfive === C1_LIST[4]) player.Twentysix = player.Sprev, player.Sprev = player.Twentyfive, player.Twentyfive = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentyfive = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Twentyseven === C1_LIST[3] && player.Twentysix !== C1_LIST[0]) player.Twentyseven = player.prev, player.prev = player.Twentysix, player.Twentysix = C1_LIST[3],  player.East -= 1,  player.West += 1
 if (player.Twentyseven === C2_LIST[2] && player.Twentyeight === C1_LIST[3] && player.Twentysix !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Twentysix) || player.Twentysix === C1_LIST[4]) player.Twentyseven = player.Sprev, player.Sprev = player.Twentysix, player.Twentysix = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentysix = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Twentyeight === C1_LIST[3] && player.Twentyseven !== C1_LIST[0]) player.Twentyeight = player.prev, player.prev = player.Twentyseven, player.Twentyseven = C1_LIST[3],  player.East -= 1,  player.West += 1
 if (player.Twentyeight === C2_LIST[2] && player.Twentynine === C1_LIST[3] && player.Twentyseven !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Twentyseven) || player.Twentyseven === C1_LIST[4]) player.Twentyeight = player.Sprev, player.Sprev = player.Twentyseven, player.Twentyseven = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentyseven = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Twentynine === C1_LIST[3] && player.Twentyeight !== C1_LIST[0]) player.Twentynine = player.prev, player.prev = player.Twentyeight, player.Twentyeight = C1_LIST[3],  player.East -= 1,  player.West += 1
   if (player.Twentynine === C2_LIST[2] && player.Thirty === C1_LIST[3] && player.Twentyeight !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Twentyeight) || player.Twentyeight === C1_LIST[4]) player.Twentynine = player.Sprev, player.Sprev = player.Twentyeight, player.Twentyeight = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentyeight = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
 if (player.Thirty === C1_LIST[3] && player.Twentynine !== C1_LIST[0]) player.Thirty = player.prev, player.prev = player.Twentynine, player.Twentynine = C1_LIST[3],  player.East -= 1,  player.West += 1

   if (player.Thirtytwo === C1_LIST[3] && player.Thirtyone !== C1_LIST[0]) player.Thirtytwo = player.prev, player.prev = player.Thirtyone, player.Thirtyone = C1_LIST[3],  player.East -= 1,  player.West += 1
 if (player.Thirtytwo === C2_LIST[2] && player.Thirtythree === C1_LIST[3] && player.Thirtyone !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Thirtyone) || player.Thirtyone === C1_LIST[4]) player.Thirtytwo = player.Sprev, player.Sprev = player.Thirtyone, player.Thirtyone = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtyone = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Thirtythree === C1_LIST[3] && player.Thirtytwo !== C1_LIST[0]) player.Thirtythree = player.prev, player.prev = player.Thirtytwo, player.Thirtytwo = C1_LIST[3],  player.East -= 1,  player.West += 1
    if (player.Thirtythree === C2_LIST[2] && player.Thirtyfour === C1_LIST[3] && player.Thirtytwo !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Thirtytwo) || player.Thirtytwo === C1_LIST[4]) player.Thirtythree = player.Sprev, player.Sprev = player.Thirtytwo, player.Thirtytwo = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtytwo = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Thirtyfour === C1_LIST[3] && player.Thirtythree !== C1_LIST[0]) player.Thirtyfour = player.prev, player.prev = player.Thirtythree, player.Thirtythree = C1_LIST[3],  player.East -= 1,  player.West += 1
  if (player.Thirtyfour === C2_LIST[2] && player.Thirtyfive === C1_LIST[3] && player.Thirtythree !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Thirtythree) || player.Thirtythree === C1_LIST[4]) player.Thirtyfour = player.Sprev, player.Sprev = player.Thirtythree, player.Thirtythree = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtythree = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Thirtyfive === C1_LIST[3] && player.Thirtyfour !== C1_LIST[0]) player.Thirtyfive = player.prev, player.prev = player.Thirtyfour, player.Thirtyfour = C1_LIST[3],  player.East -= 1,  player.West += 1
  if (player.Thirtyfive === C2_LIST[2] && player.Thirtysix === C1_LIST[3] && player.Thirtyfour !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Thirtyfour) || player.Thirtyfour === C1_LIST[4]) player.Thirtyfive = player.Sprev, player.Sprev = player.Thirtyfour, player.Thirtyfour = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtyfour = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Thirtysix === C1_LIST[3] && player.Thirtyfive !== C1_LIST[0]) player.Thirtysix = player.prev, player.prev = player.Thirtyfive, player.Thirtyfive = C1_LIST[3],  player.East -= 1,  player.West += 1
  if (player.Thirtysix === C2_LIST[2] && player.Thirtyseven === C1_LIST[3] && player.Thirtyfive !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Thirtyfive) || player.Thirtyfive === C1_LIST[4]) player.Thirtysix = player.Sprev, player.Sprev = player.Thirtyfive, player.Thirtyfive = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtyfive = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Thirtyseven === C1_LIST[3] && player.Thirtysix !== C1_LIST[0]) player.Thirtyseven = player.prev, player.prev = player.Thirtysix, player.Thirtysix = C1_LIST[3],  player.East -= 1,  player.West += 1
 if (player.Thirtyseven === C2_LIST[2] && player.Thirtyeight === C1_LIST[3] && player.Thirtysix !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Thirtysix) || player.Thirtysix === C1_LIST[4]) player.Thirtyseven = player.Sprev, player.Sprev = player.Thirtysix, player.Thirtysix = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtysix = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Thirtyeight === C1_LIST[3] && player.Thirtyseven !== C1_LIST[0]) player.Thirtyeight = player.prev, player.prev = player.Thirtyseven, player.Thirtyseven = C1_LIST[3],  player.East -= 1,  player.West += 1
 if (player.Thirtyeight === C2_LIST[2] && player.Thirtynine === C1_LIST[3] && player.Thirtyseven !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Thirtyseven) || player.Thirtyseven === C1_LIST[4]) player.Thirtyeight = player.Sprev, player.Sprev = player.Thirtyseven, player.Thirtyseven = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtyseven = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Thirtynine === C1_LIST[3] && player.Thirtyeight !== C1_LIST[0]) player.Thirtynine = player.prev, player.prev = player.Thirtyeight, player.Thirtyeight = C1_LIST[3],  player.East -= 1,  player.West += 1
if (player.Thirtynine === C2_LIST[2] && player.Fourty === C1_LIST[3] && player.Thirtyeight !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Thirtyeight) || player.Thirtyeight === C1_LIST[4]) player.Thirtynine = player.Sprev, player.Sprev = player.Thirtyeight, player.Thirtyeight = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtyeight = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
     if (player.Fourty === C1_LIST[3] && player.Thirtynine !== C1_LIST[0]) player.Fourty = player.prev, player.prev = player.Thirtynine, player.Thirtynine = C1_LIST[3],  player.East -= 1,  player.West += 1

   if (player.Fourtytwo === C1_LIST[3] && player.Fourtyone !== C1_LIST[0]) player.Fourtytwo = player.prev, player.prev = player.Fourtyone, player.Fourtyone = C1_LIST[3],  player.East -= 1,  player.West += 1
  if (player.Fourtytwo === C2_LIST[2] && player.Fourtythree === C1_LIST[3] && player.Fourtyone !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Fourtyone) || player.Fourtyone === C1_LIST[4]) player.Fourtytwo = player.Sprev, player.Sprev = player.Fourtyone, player.Fourtyone = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtyone = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Fourtythree === C1_LIST[3] && player.Fourtytwo !== C1_LIST[0]) player.Fourtythree = player.prev, player.prev = player.Fourtytwo, player.Fourtytwo = C1_LIST[3],  player.East -= 1,  player.West += 1
 if (player.Fourtythree === C2_LIST[2] && player.Fourtyfour === C1_LIST[3] && player.Fourtytwo !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Fourtytwo) || player.Fourtytwo === C1_LIST[4]) player.Fourtythree = player.Sprev, player.Sprev = player.Fourtytwo, player.Fourtytwo = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtytwo = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Fourtyfour === C1_LIST[3] && player.Fourtythree !== C1_LIST[0]) player.Fourtyfour = player.prev, player.prev = player.Fourtythree, player.Fourtythree = C1_LIST[3],  player.East -= 1,  player.West += 1
     if (player.Fourtyfour === C2_LIST[2] && player.Fourtyfive === C1_LIST[3] && player.Fourtythree !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Fourtythree) || player.Fourtythree === C1_LIST[4]) player.Fourtyfour = player.Sprev, player.Sprev = player.Fourtythree, player.Fourtythree = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtythree = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Fourtyfive === C1_LIST[3] && player.Fourtyfour !== C1_LIST[0]) player.Fourtyfive = player.prev, player.prev = player.Fourtyfour, player.Fourtyfour = C1_LIST[3],  player.East -= 1,  player.West += 1
 if (player.Fourtyfive === C2_LIST[2] && player.Fourtysix === C1_LIST[3] && player.Fourtyfour !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Fourtyfour) || player.Fourtyfour === C1_LIST[4]) player.Fourtyfive = player.Sprev, player.Sprev = player.Fourtyfour, player.Fourtyfour = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtyfour = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Fourtysix === C1_LIST[3] && player.Fourtyfive !== C1_LIST[0]) player.Fourtysix = player.prev, player.prev = player.Fourtyfive, player.Fourtyfive = C1_LIST[3],  player.East -= 1,  player.West += 1
 if (player.Fourtysix === C2_LIST[2] && player.Fourtyseven === C1_LIST[3] && player.Fourtyfive !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Fourtyfive) || player.Fourtyfive === C1_LIST[4]) player.Fourtysix = player.Sprev, player.Sprev = player.Fourtyfive, player.Fourtyfive = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtyfive = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Fourtyseven === C1_LIST[3] && player.Fourtysix !== C1_LIST[0]) player.Fourtyseven = player.prev, player.prev = player.Fourtysix, player.Fourtysix = C1_LIST[3],  player.East -= 1,  player.West += 1
    if (player.Fourtyseven === C2_LIST[2] && player.Fourtyeight === C1_LIST[3] && player.Fourtysix !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Fourtysix) || player.Fourtysix === C1_LIST[4]) player.Fourtyseven = player.Sprev, player.Sprev = player.Fourtysix, player.Fourtysix = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtysix = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Fourtyeight === C1_LIST[3] && player.Fourtyseven !== C1_LIST[0]) player.Fourtyeight = player.prev, player.prev = player.Fourtyseven, player.Fourtyseven = C1_LIST[3],  player.East -= 1,  player.West += 1
if (player.Fourtyeight === C2_LIST[2] && player.Fourtynine === C1_LIST[3] && player.Fourtyseven !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Fourtyseven) || player.Fourtyseven === C1_LIST[4]) player.Fourtyeight = player.Sprev, player.Sprev = player.Fourtyseven, player.Fourtyseven = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtyseven = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Fourtynine === C1_LIST[3] && player.Fourtyeight !== C1_LIST[0]) player.Fourtynine = player.prev, player.prev = player.Fourtyeight, player.Fourtyeight = C1_LIST[3],  player.East -= 1,  player.West += 1
   if (player.Fourtynine === C2_LIST[2] && player.Fifty === C1_LIST[3] && player.Fourtyeight !== C2_LIST[2]){ 
    if (C2_LIST.includes(player.Fourtyeight) || player.Fourtyeight === C1_LIST[4]) player.Fourtynine = player.Sprev, player.Sprev = player.Fourtyeight, player.Fourtyeight = C2_LIST[2]
if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtyeight = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
   if (player.Fifty === C1_LIST[3] && player.Fourtynine !== C1_LIST[0]) player.Fifty = player.prev, player.prev = player.Fourtynine, player.Fourtynine = C1_LIST[3],  player.East -= 1,  player.West += 1
   audio()
   save2()
}

function moveRight(){
    if (player.MR == false) return
    
    if (player.L11 === C1_LIST[3] && player.L12 === C3_LIST[1]) player.L11 = player.prev, player.prev = player.L12, player.L12 = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.L10 === C1_LIST[3] && player.L11 === C3_LIST[1]) player.L10 = player.prev, player.prev = player.L11, player.L11 = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.L9 === C1_LIST[3] && player.L10 === C3_LIST[1]) player.L9 = player.prev, player.prev = player.L10, player.L10 = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.L8 === C1_LIST[3] && player.L9 === C3_LIST[1]) player.L8 = player.prev, player.prev = player.L9, player.L9 = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.L7 === C1_LIST[3] && player.L8 === C3_LIST[1]) player.L7 = player.prev, player.prev = player.L8, player.L8 = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.L6 === C1_LIST[3] && player.L7 === C3_LIST[1]) player.L6 = player.prev, player.prev = player.L7, player.L7 = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.L5 === C1_LIST[3] && player.L6 === C3_LIST[1]) player.L5 = player.prev, player.prev = player.L6, player.L6 = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.L4 === C1_LIST[3] && player.L5 === C3_LIST[1]) player.L4 = player.prev, player.prev = player.L5, player.L5 = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.L3 === C1_LIST[3] && player.L4 === C3_LIST[1]) player.L3 = player.prev, player.prev = player.L4, player.L4 = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.L2 === C1_LIST[3] && player.L3 === C3_LIST[1]) player.L2 = player.prev, player.prev = player.L3, player.L3 = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.L1 === C1_LIST[3] && player.L2 === C3_LIST[1]) player.L1 = player.prev, player.prev = player.L2, player.L2 = C1_LIST[3], player.East += 1,  player.West -= 1

    if (player.Fourtynine === C1_LIST[3] && player.Fifty !== C1_LIST[0]) player.Fourtynine = player.prev, player.prev = player.Fifty, player.Fifty = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Fourtynine === C2_LIST[2] && player.Fourtyeight === C1_LIST[3] && player.Fifty !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Fifty) || player.Fifty === C1_LIST[4]) player.Fourtynine = player.Sprev, player.Sprev = player.Fifty, player.Fifty = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fifty = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Fourtyeight === C1_LIST[3] && player.Fourtynine !== C1_LIST[0]) player.Fourtyeight = player.prev, player.prev = player.Fourtynine, player.Fourtynine = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Fourtyeight === C2_LIST[2] && player.Fourtyseven === C1_LIST[3] && player.Fourtynine !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Fourtynine) || player.Fourtynine === C1_LIST[4]) player.Fourtyeight = player.Sprev, player.Sprev = player.Fourtynine, player.Fourtynine = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtynine = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Fourtyseven === C1_LIST[3] && player.Fourtyeight !== C1_LIST[0]) player.Fourtyseven = player.prev, player.prev = player.Fourtyeight, player.Fourtyeight = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Fourtyseven === C2_LIST[2] && player.Fourtysix === C1_LIST[3] && player.Fourtyeight !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Fourtyeight) || player.Fourtyeight === C1_LIST[4]) player.Fourtyseven = player.Sprev, player.Sprev = player.Fourtyeight, player.Fourtyeight = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtyeight = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Fourtysix === C1_LIST[3] && player.Fourtyseven !== C1_LIST[0]) player.Fourtysix = player.prev, player.prev = player.Fourtyseven, player.Fourtyseven = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Fourtysix === C2_LIST[2] && player.Fourtyfive === C1_LIST[3] && player.Fourtyseven !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Fourtyseven) || player.Fourtyseven === C1_LIST[4]) player.Fourtysix = player.Sprev, player.Sprev = player.Fourtyseven, player.Fourtyseven = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtyseven = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Fourtyfive === C1_LIST[3] && player.Fourtysix !== C1_LIST[0]) player.Fourtyfive = player.prev, player.prev = player.Fourtysix, player.Fourtysix = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Fourtyfive === C2_LIST[2] && player.Fourtyfour === C1_LIST[3] && player.Fourtysix !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Fourtysix) || player.Fourtysix === C1_LIST[4]) player.Fourtyfive = player.Sprev, player.Sprev = player.Fourtysix, player.Fourtysix = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtysix = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Fourtyfour === C1_LIST[3] && player.Fourtyfive !== C1_LIST[0]) player.Fourtyfour = player.prev, player.prev = player.Fourtyfive, player.Fourtyfive = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Fourtyfour === C2_LIST[2] && player.Fourtythree === C1_LIST[3] && player.Fourtyfive !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Fourtyfive) || player.Fourtyfive === C1_LIST[4]) player.Fourtyfour = player.Sprev, player.Sprev = player.Fourtyfive, player.Fourtyfive = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtyfive = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Fourtythree === C1_LIST[3] && player.Fourtyfour !== C1_LIST[0]) player.Fourtythree = player.prev, player.prev = player.Fourtyfour, player.Fourtyfour = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Fourtythree === C2_LIST[2] && player.Fourtytwo === C1_LIST[3] && player.Fourtyfour !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Fourtyfour) || player.Fourtyfour === C1_LIST[4]) player.Fourtythree = player.Sprev, player.Sprev = player.Fourtyfour, player.Fourtyfour = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtyfour = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Fourtytwo === C1_LIST[3] && player.Fourtythree !== C1_LIST[0]) player.Fourtytwo = player.prev, player.prev = player.Fourtythree, player.Fourtythree = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Fourtytwo === C2_LIST[2] && player.Fourtyone === C1_LIST[3] && player.Fourtythree !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Fourtythree) || player.Fourtythree === C1_LIST[4]) player.Fourtytwo = player.Sprev, player.Sprev = player.Fourtythree, player.Fourtythree = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtythree = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Fourtyone === C1_LIST[3] && player.Fourtytwo !== C1_LIST[0]) player.Fourtyone = player.prev, player.prev = player.Fourtytwo, player.Fourtytwo = C1_LIST[3], player.East += 1,  player.West -= 1

    if (player.Thirtynine === C1_LIST[3] && player.Fourty !== C1_LIST[0]) player.Thirtynine = player.prev, player.prev = player.Fourty, player.Fourty = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Thirtynine === C2_LIST[2] && player.Thirtyeight === C1_LIST[3] && player.Fourty !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Fourty) || player.Fourty === C1_LIST[4]) player.Thirtynine = player.Sprev, player.Sprev = player.Fourty, player.Fourty = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourty = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Thirtyeight === C1_LIST[3] && player.Thirtynine !== C1_LIST[0]) player.Thirtyeight = player.prev, player.prev = player.Thirtynine, player.Thirtynine = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Thirtyeight === C2_LIST[2] && player.Thirtyseven === C1_LIST[3] && player.Thirtynine !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Thirtynine) || player.Thirtynine === C1_LIST[4]) player.Thirtyeight = player.Sprev, player.Sprev = player.Thirtynine, player.Thirtynine = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtynine = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Thirtyseven === C1_LIST[3] && player.Thirtyeight !== C1_LIST[0]) player.Thirtyseven = player.prev, player.prev = player.Thirtyeight, player.Thirtyeight = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Thirtyseven === C2_LIST[2] && player.Thirtysix === C1_LIST[3] && player.Thirtyeight !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Thirtyeight) || player.Thirtyeight === C1_LIST[4]) player.Thirtyseven = player.Sprev, player.Sprev = player.Thirtyeight, player.Thirtyeight = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtyeight = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Thirtysix === C1_LIST[3] && player.Thirtyseven !== C1_LIST[0]) player.Thirtysix = player.prev, player.prev = player.Thirtyseven, player.Thirtyseven = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Thirtysix === C2_LIST[2] && player.Thirtyfive === C1_LIST[3] && player.Thirtyseven !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Thirtyseven) || player.Thirtyseven === C1_LIST[4]) player.Thirtysix = player.Sprev, player.Sprev = player.Thirtyseven, player.Thirtyseven = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtyseven = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Thirtyfive === C1_LIST[3] && player.Thirtysix !== C1_LIST[0]) player.Thirtyfive = player.prev, player.prev = player.Thirtysix, player.Thirtysix = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Thirtyfive === C2_LIST[2] && player.Thirtyfour === C1_LIST[3] && player.Thirtysix !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Thirtysix) || player.Thirtysix === C1_LIST[4]) player.Thirtyfive = player.Sprev, player.Sprev = player.Thirtysix, player.Thirtysix = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtysix = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Thirtyfour === C1_LIST[3] && player.Thirtyfive !== C1_LIST[0]) player.Thirtyfour = player.prev, player.prev = player.Thirtyfive, player.Thirtyfive = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Thirtyfour === C2_LIST[2] && player.Thirtythree === C1_LIST[3] && player.Thirtyfive !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Thirtyfive) || player.Thirtyfive === C1_LIST[4]) player.Thirtyfour = player.Sprev, player.Sprev = player.Thirtyfive, player.Thirtyfive = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtyfive = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Thirtythree === C1_LIST[3] && player.Thirtyfour !== C1_LIST[0]) player.Thirtythree = player.prev, player.prev = player.Thirtyfour, player.Thirtyfour = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Thirtythree === C2_LIST[2] && player.Thirtytwo === C1_LIST[3] && player.Thirtyfour !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Thirtyfour) || player.Thirtyfour === C1_LIST[4]) player.Thirtythree = player.Sprev, player.Sprev = player.Thirtyfour, player.Thirtyfour = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtyfour = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Thirtytwo === C1_LIST[3] && player.Thirtythree !== C1_LIST[0]) player.Thirtytwo = player.prev, player.prev = player.Thirtythree, player.Thirtythree = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Thirtytwo === C2_LIST[2] && player.Thirtyone === C1_LIST[3] && player.Thirtythree !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Thirtythree) || player.Thirtythree === C1_LIST[4]) player.Thirtytwo = player.Sprev, player.Sprev = player.Thirtythree, player.Thirtythree = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtythree = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Thirtyone === C1_LIST[3] && player.Thirtytwo !== C1_LIST[0]) player.Thirtyone = player.prev, player.prev = player.Thirtytwo, player.Thirtytwo = C1_LIST[3], player.East += 1,  player.West -= 1

    if (player.Twentynine == C1_LIST[3] && player.Thirty === C2_LIST[2] && player.Zone === 2) localStorage.setItem('prevTab', 1), localStorage.setItem('log1', 1), player.Thirty = C2_LIST[0]
    if (player.Twentynine == C1_LIST[3] && player.Thirty === C2_LIST[2] && player.Zone === 1) localStorage.setItem('prevTab', 1), localStorage.setItem('log', 2), player.Thirty = C2_LIST[0]
    if (player.Twentynine === C1_LIST[3] && player.Thirty !== C1_LIST[0]) player.Twentynine = player.prev, player.prev = player.Thirty, player.Thirty = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Twentynine === C2_LIST[2] && player.Twentyeight === C1_LIST[3] && player.Thirty !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Thirty) || player.Thirty === C1_LIST[4]) player.Twentynine = player.Sprev, player.Sprev = player.Thirty, player.Thirty = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirty = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twentyeight === C1_LIST[3] && player.Twentynine !== C1_LIST[0]) player.Twentyeight = player.prev, player.prev = player.Twentynine, player.Twentynine = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Twentyeight === C2_LIST[2] && player.Twentyseven === C1_LIST[3] && player.Twentynine !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Twentynine) || player.Twentynine === C1_LIST[4]) player.Twentyeight = player.Sprev, player.Sprev = player.Twentynine, player.Twentynine = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentynine = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twentyseven === C1_LIST[3] && player.Twentyeight !== C1_LIST[0]) player.Twentyseven = player.prev, player.prev = player.Twentyeight, player.Twentyeight = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Twentyseven === C2_LIST[2] && player.Twentysix === C1_LIST[3] && player.Twentyeight !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Twentyeight) || player.Twentyeight === C1_LIST[4]) player.Twentyseven = player.Sprev, player.Sprev = player.Twentyeight, player.Twentyeight = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentyeight = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twentysix === C1_LIST[3] && player.Twentyseven !== C1_LIST[0]) player.Twentysix = player.prev, player.prev = player.Twentyseven, player.Twentyseven = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Twentysix === C2_LIST[2] && player.Twentyfive === C1_LIST[3] && player.Twentyseven !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Twentyseven) || player.Twentyseven === C1_LIST[4]) player.Twentysix = player.Sprev, player.Sprev = player.Twentyseven, player.Twentyseven = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentyseven = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twentyfive === C1_LIST[3] && player.Twentysix !== C1_LIST[0]) player.Twentyfive = player.prev, player.prev = player.Twentysix, player.Twentysix = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Twentyfive === C2_LIST[2] && player.Twentyfour === C1_LIST[3] && player.Twentysix !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Twentysix) || player.Twentysix === C1_LIST[4]) player.Twentyfive = player.Sprev, player.Sprev = player.Twentysix, player.Twentysix = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentysix = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twentyfour === C1_LIST[3] && player.Twentyfive !== C1_LIST[0]) player.Twentyfour = player.prev, player.prev = player.Twentyfive, player.Twentyfive = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Twentyfour === C2_LIST[2] && player.Twentythree === C1_LIST[3] && player.Twentyfive !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Twentyfive) || player.Twentyfive === C1_LIST[4]) player.Twentyfour = player.Sprev, player.Sprev = player.Twentyfive, player.Twentyfive = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentyfive = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twentythree === C1_LIST[3] && player.Twentyfour !== C1_LIST[0]) player.Twentythree = player.prev, player.prev = player.Twentyfour, player.Twentyfour = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Twentythree === C2_LIST[2] && player.Twentytwo === C1_LIST[3] && player.Twentyfour !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Twentyfour) || player.Twentyfour === C1_LIST[4]) player.Twentythree = player.Sprev, player.Sprev = player.Twentyfour, player.Twentyfour = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentyfour = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twentytwo === C1_LIST[3] && player.Twentythree !== C1_LIST[0]) player.Twentytwo = player.prev, player.prev = player.Twentythree, player.Twentythree = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Twentytwo === C2_LIST[2] && player.Twentyone === C1_LIST[3] && player.Twentythree !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Twentythree) || player.Twentythree === C1_LIST[4]) player.Twentytwo = player.Sprev, player.Sprev = player.Twentythree, player.Twentythree = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentythree = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twentyone === C1_LIST[3] && player.Twentytwo !== C1_LIST[0]) player.Twentyone = player.prev, player.prev = player.Twentytwo, player.Twentytwo = C1_LIST[3], player.East += 1,  player.West -= 1

    if (player.Nineteen === C1_LIST[3] && player.Twenty !== C1_LIST[0]) player.Nineteen = player.prev, player.prev = player.Twenty, player.Twenty = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Nineteen === C2_LIST[2] && player.Eighteen === C1_LIST[3] && player.Twenty !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Twenty) || player.Twenty === C1_LIST[4]) player.Nineteen = player.Sprev, player.Sprev = player.Twenty, player.Twenty = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twenty = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Eighteen === C1_LIST[3] && player.Nineteen !== C1_LIST[0]) player.Eighteen = player.prev, player.prev = player.Nineteen, player.Nineteen = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Eighteen === C2_LIST[2] && player.Seventeen === C1_LIST[3] && player.Nineteen !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Nineteen) || player.Nineteen === C1_LIST[4]) player.Eighteen = player.Sprev, player.Sprev = player.Nineteen, player.Nineteen = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Nineteen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Seventeen === C1_LIST[3] && player.Eighteen !== C1_LIST[0]) player.Seventeen = player.prev, player.prev = player.Eighteen, player.Eighteen = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Seventeen === C2_LIST[2] && player.Sixteen === C1_LIST[3] && player.Eighteen !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Eighteen) || player.Eighteen === C1_LIST[4]) player.Seventeen = player.Sprev, player.Sprev = player.Eighteen, player.Eighteen = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Eighteen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Sixteen === C1_LIST[3] && player.Seventeen !== C1_LIST[0]) player.Sixteen = player.prev, player.prev = player.Seventeen, player.Seventeen = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Sixteen === C2_LIST[2] && player.Fifteen === C1_LIST[3] && player.Seventeen !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Seventeen) || player.Seventeen === C1_LIST[4]) player.Sixteen = player.Sprev, player.Sprev = player.Seventeen, player.Seventeen = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Seventeen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Fifteen === C1_LIST[3] && player.Sixteen !== C1_LIST[0]) player.Fifteen = player.prev, player.prev = player.Sixteen, player.Sixteen = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Fifteen === C2_LIST[2] && player.Fourteen === C1_LIST[3] && player.Sixteen !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Sixteen) || player.Sixteen === C1_LIST[4]) player.Fifteen = player.Sprev, player.Sprev = player.Sixteen, player.Sixteen = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Sixteen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Fourteen === C1_LIST[3] && player.Fifteen !== C1_LIST[0]) player.Fourteen = player.prev, player.prev = player.Fifteen, player.Fifteen = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Fourteen === C2_LIST[2] && player.Thirteen === C1_LIST[3] && player.Fifteen !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Fifteen) || player.Fifteen === C1_LIST[4]) player.Fourteen = player.Sprev, player.Sprev = player.Fifteen, player.Fifteen = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fifteen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Thirteen === C1_LIST[3] && player.Fourteen !== C1_LIST[0]) player.Thirteen = player.prev, player.prev = player.Fourteen, player.Fourteen = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Thirteen === C2_LIST[2] && player.Twelve === C1_LIST[3] && player.Fourteen !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Fourteen) || player.Fourteen === C1_LIST[4]) player.Thirteen = player.Sprev, player.Sprev = player.Fourteen, player.Fourteen = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourteen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twelve === C1_LIST[3] && player.Thirteen !== C1_LIST[0]) player.Twelve = player.prev, player.prev = player.Thirteen, player.Thirteen = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Twelve === C2_LIST[2] && player.Eleven === C1_LIST[3] && player.Thirteen !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Thirteen) || player.Thirteen === C1_LIST[4]) player.Twelve = player.Sprev, player.Sprev = player.Thirteen, player.Thirteen = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirteen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Eleven === C1_LIST[3] && player.Twelve !== C1_LIST[0]) player.Eleven = player.prev, player.prev = player.Twelve, player.Twelve = C1_LIST[3], player.East += 1,  player.West -= 1
    
    if (player.Nine === C1_LIST[3] && player.Ten !== C1_LIST[0]) player.Nine = player.prev, player.prev = player.Ten, player.Ten = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Nine === C2_LIST[2] && player.Eight === C1_LIST[3] && player.Ten !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Ten) || player.Ten === C1_LIST[4]) player.Nine = player.Sprev, player.Sprev = player.Ten, player.Ten = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Ten = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Eight === C1_LIST[3] && player.Nine !== C1_LIST[0]) player.Eight = player.prev, player.prev = player.Nine, player.Nine = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Eight === C2_LIST[2] && player.Seven === C1_LIST[3] && player.Nine !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Nine) || player.Nine === C1_LIST[4]) player.Eight = player.Sprev, player.Sprev = player.Nine, player.Nine = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Nine = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Seven === C1_LIST[3] && player.Eight !== C1_LIST[0]) player.Seven = player.prev, player.prev = player.Eight, player.Eight = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Seven === C2_LIST[2] && player.Six === C1_LIST[3] && player.Eight !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Eight) || player.Eight === C1_LIST[4]) player.Seven = player.Sprev, player.Sprev = player.Eight, player.Eight = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Eight = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Six === C1_LIST[3] && player.Seven !== C1_LIST[0]) player.Six = player.prev, player.prev = player.Seven, player.Seven = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Six === C2_LIST[2] && player.Five === C1_LIST[3] && player.Seven !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Seven) || player.Seven === C1_LIST[4]) player.Six = player.Sprev, player.Sprev = player.Seven, player.Seven = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Seven = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Five === C1_LIST[3] && player.Six !== C1_LIST[0]) player.Five = player.prev, player.prev = player.Six, player.Six = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Five === C2_LIST[2] && player.Four === C1_LIST[3] && player.Six !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Six) || player.Six === C1_LIST[4]) player.Five = player.Sprev, player.Sprev = player.Six, player.Six = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Six = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Four === C1_LIST[3] && player.Five !== C1_LIST[0]) player.Four = player.prev, player.prev = player.Five, player.Five = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Four === C2_LIST[2] && player.Three === C1_LIST[3] && player.Five !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Five) || player.Five === C1_LIST[4]) player.Four = player.Sprev, player.Sprev = player.Five, player.Five = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Five = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Three === C1_LIST[3] && player.Four !== C1_LIST[0]) player.Three = player.prev, player.prev = player.Four, player.Four = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Three === C2_LIST[2] && player.Two === C1_LIST[3] && player.Four !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Four) || player.Four === C1_LIST[4]) player.Three = player.Sprev, player.Sprev = player.Four, player.Four = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Four = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Two === C1_LIST[3] && player.Three !== C1_LIST[0]) player.Two = player.prev, player.prev = player.Three, player.Three = C1_LIST[3], player.East += 1,  player.West -= 1
    if (player.Two === C2_LIST[2] && player.One === C1_LIST[3] && player.Three !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Three) || player.Three === C1_LIST[4]) player.Two = player.Sprev, player.Sprev = player.Three, player.Three = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Three = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.One === C1_LIST[3] && player.Two !== C1_LIST[0]) player.One = player.prev, player.prev = player.Two, player.Two = C1_LIST[3], player.East += 1,  player.West -= 1
    audio()
    save2()
}

function moveUp(){
      if (player.MU == false) return 
      
    


      if (player.Twenty === C1_LIST[3] && player.Ten !== C1_LIST[0]) player.Twenty = player.prev, player.prev = player.Ten, player.Ten = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Nineteen === C1_LIST[3] && player.Nine !== C1_LIST[0]) player.Nineteen = player.prev, player.prev = player.Nine, player.Nine = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Eighteen === C1_LIST[3] && player.Eight !== C1_LIST[0]) player.Eighteen = player.prev, player.prev = player.Eight, player.Eight = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Seventeen === C1_LIST[3] && player.Seven !== C1_LIST[0]) player.Seventeen = player.prev, player.prev = player.Seven, player.Seven = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Sixteen === C1_LIST[3] && player.Six !== C1_LIST[0]) player.Sixteen = player.prev, player.prev = player.Six, player.Six = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Fifteen === C1_LIST[3] && player.Five !== C1_LIST[0]) player.Fifteen = player.prev, player.prev = player.Five, player.Five = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Fourteen === C1_LIST[3] && player.Four !== C1_LIST[0]) player.Fourteen = player.prev, player.prev = player.Four, player.Four = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Thirteen === C1_LIST[3] && player.Three !== C1_LIST[0]) player.Thirteen = player.prev, player.prev = player.Three, player.Three = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Twelve === C1_LIST[3] && player.Two !== C1_LIST[0]) player.Twelve = player.prev, player.prev = player.Two, player.Two = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Eleven === C1_LIST[3] && player.One !== C1_LIST[0]) player.Eleven = player.prev, player.prev = player.One, player.One = C1_LIST[3], player.North += 1,  player.South -= 1
      
      if (player.Twenty === C2_LIST[2] && player.Thirty === C1_LIST[3] && player.Ten !== C2_LIST[2]){
        if (C2_LIST.includes(player.Ten) || player.Ten === C1_LIST[4]) player.Twenty = player.Sprev, player.Sprev = player.Ten, player.Ten = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Ten = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Thirty === C1_LIST[3] && player.Twenty !== C1_LIST[0]) player.Thirty = player.prev, player.prev = player.Twenty, player.Twenty = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Nineteen === C2_LIST[2] && player.Twentynine === C1_LIST[3] && player.Nine !== C2_LIST[2]){
        if (C2_LIST.includes(player.Nine) || player.Nine === C1_LIST[4]) player.Nineteen = player.Sprev, player.Sprev = player.Nine, player.Nine = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Nine = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Twentynine === C1_LIST[3] && player.Nineteen !== C1_LIST[0]) player.Twentynine = player.prev, player.prev = player.Nineteen, player.Nineteen = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Eighteen === C2_LIST[2] && player.Twentyeight === C1_LIST[3] && player.Eight !== C2_LIST[2]){
        if (C2_LIST.includes(player.Eight) || player.Eight === C1_LIST[4]) player.Eighteen = player.Sprev, player.Sprev = player.Eight, player.Eight = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Eight = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Twentyeight === C1_LIST[3] && player.Eighteen !== C1_LIST[0]) player.Twentyeight = player.prev, player.prev = player.Eighteen, player.Eighteen = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Seventeen === C2_LIST[2] && player.Twentyseven === C1_LIST[3] && player.Seven !== C2_LIST[2]){
        if (C2_LIST.includes(player.Seven) || player.Seven === C1_LIST[4]) player.Seventeen = player.Sprev, player.Sprev = player.Seven, player.Seven = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Seven = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Twentyseven === C1_LIST[3] && player.Seventeen !== C1_LIST[0]) player.Twentyseven = player.prev, player.prev = player.Seventeen, player.Seventeen = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Sixteen === C2_LIST[2] && player.Twentysix === C1_LIST[3] && player.Six !== C2_LIST[2]){
        if (C2_LIST.includes(player.Six) || player.Six === C1_LIST[4]) player.Sixteen = player.Sprev, player.Sprev = player.Six, player.Six = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Six = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Twentysix === C1_LIST[3] && player.Sixteen !== C1_LIST[0]) player.Twentysix = player.prev, player.prev = player.Sixteen, player.Sixteen = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Fifteen === C2_LIST[2] && player.Twentyfive === C1_LIST[3] && player.Five !== C2_LIST[2]){
        if (C2_LIST.includes(player.Five) || player.Five === C1_LIST[4]) player.Fifteen = player.Sprev, player.Sprev = player.Five, player.Five = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Five = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Twentyfive === C1_LIST[3] && player.Fifteen !== C1_LIST[0]) player.Twentyfive = player.prev, player.prev = player.Fifteen, player.Fifteen = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Fourteen === C2_LIST[2] && player.Twentyfour === C1_LIST[3] && player.Four !== C2_LIST[2]){
        if (C2_LIST.includes(player.Four) || player.Four === C1_LIST[4]) player.Fourteen = player.Sprev, player.Sprev = player.Four, player.Four = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Four = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Twentyfour === C1_LIST[3] && player.Fourteen !== C1_LIST[0]) player.Twentyfour = player.prev, player.prev = player.Fourteen, player.Fourteen = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Thirteen === C2_LIST[2] && player.Twentythree === C1_LIST[3] && player.Three !== C2_LIST[2]){
        if (C2_LIST.includes(player.Three) || player.THree === C1_LIST[4]) player.Thirteen = player.Sprev, player.Sprev = player.Three, player.Three = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Three = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Twentythree === C1_LIST[3] && player.Thirteen !== C1_LIST[0]) player.Twentythree = player.prev, player.prev = player.Thirteen, player.Thirteen = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Twelve === C2_LIST[2] && player.Twentytwo === C1_LIST[3] && player.Two !== C2_LIST[2]){
        if (C2_LIST.includes(player.Two) || player.Two === C1_LIST[4]) player.Twelve = player.Sprev, player.Sprev = player.Two, player.Two = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Two = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Twentytwo === C1_LIST[3] && player.Twelve !== C1_LIST[0]) player.Twentytwo = player.prev, player.prev = player.Twelve, player.Twelve = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Eleven === C2_LIST[2] && player.Twentyone === C1_LIST[3] && player.One !== C2_LIST[2]){
        if (C2_LIST.includes(player.One) || player.One === C1_LIST[4]) player.Eleven = player.Sprev, player.Sprev = player.One, player.One = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.One = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Twentyone === C1_LIST[3] && player.Eleven !== C1_LIST[0]) player.Twentyone = player.prev, player.prev = player.Eleven, player.Eleven = C1_LIST[3], player.North += 1,  player.South -= 1

      if (player.Thirty === C2_LIST[2] && player.Fourty === C1_LIST[3] && player.Twenty !== C2_LIST[2]){
        if (C2_LIST.includes(player.Twenty) || player.Twenty === C1_LIST[4]) player.Thirty = player.Sprev, player.Sprev = player.Twenty, player.Twenty = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twenty = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Fourty === C1_LIST[3] && player.Thirty !== C1_LIST[0]) player.Fourty = player.prev, player.prev = player.Thirty, player.Thirty = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Twentynine === C2_LIST[2] && player.Thirtynine === C1_LIST[3] && player.Nineteen !== C2_LIST[2]){
        if (C2_LIST.includes(player.Nineteen) || player.Nineteen === C1_LIST[4]) player.Twentynine = player.Sprev, player.Sprev = player.Nineteen, player.Nineteen = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Nineteen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Thirtynine === C1_LIST[3] && player.Twentynine !== C1_LIST[0]) player.Thirtynine = player.prev, player.prev = player.Twentynine, player.Twentynine = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Twentyeight === C2_LIST[2] && player.Thirtyeight === C1_LIST[3] && player.Eighteen !== C2_LIST[2]){
        if (C2_LIST.includes(player.Eighteen) || player.Eighteen === C1_LIST[4]) player.Twentyeight = player.Sprev, player.Sprev = player.Eighteen, player.Eighteen = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Eighteen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Thirtyeight === C1_LIST[3] && player.Twentyeight !== C1_LIST[0]) player.Thirtyeight = player.prev, player.prev = player.Twentyeight, player.Twentyeight = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Twentyseven === C2_LIST[2] && player.Thirtyseven === C1_LIST[3] && player.Seventeen !== C2_LIST[2]){
        if (C2_LIST.includes(player.Seventeen) || player.Seventeen === C1_LIST[4]) player.Twentyseven = player.Sprev, player.Sprev = player.Seventeen, player.Seventeen = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Seventeen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Thirtyseven === C1_LIST[3] && player.Twentyseven !== C1_LIST[0]) player.Thirtyseven = player.prev, player.prev = player.Twentyseven, player.Twentyseven = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Twentysix === C2_LIST[2] && player.Thirtysix === C1_LIST[3] && player.Sixteen !== C2_LIST[2]){
        if (C2_LIST.includes(player.Sixteen) || player.Sixteen === C1_LIST[4]) player.Twentysix = player.Sprev, player.Sprev = player.Sixteen, player.Sixteen = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Sixteen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Thirtysix === C1_LIST[3] && player.Twentysix !== C1_LIST[0]) player.Thirtysix = player.prev, player.prev = player.Twentysix, player.Twentysix = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Twentyfive === C2_LIST[2] && player.Thirtyfive === C1_LIST[3] && player.Fifteen !== C2_LIST[2]){
        if (C2_LIST.includes(player.Fifteen) || player.Fifteen === C1_LIST[4]) player.Twentyfive = player.Sprev, player.Sprev = player.Fifteen, player.Fifteen = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fifteen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Thirtyfive === C1_LIST[3] && player.Twentyfive !== C1_LIST[0]) player.Thirtyfive = player.prev, player.prev = player.Twentyfive, player.Twentyfive = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Twentyfour === C2_LIST[2] && player.Thirtyfour === C1_LIST[3] && player.Fourteen !== C2_LIST[2]){
        if (C2_LIST.includes(player.Fourteen) || player.Fourteen === C1_LIST[4]) player.Twentyfour = player.Sprev, player.Sprev = player.Fourteen, player.Fourteen = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourteen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Thirtyfour === C1_LIST[3] && player.Twentyfour !== C1_LIST[0]) player.Thirtyfour = player.prev, player.prev = player.Twentyfour, player.Twentyfour = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Twentythree === C2_LIST[2] && player.Thirtythree === C1_LIST[3] && player.Thirteen !== C2_LIST[2]){
        if (C2_LIST.includes(player.Thirteen) || player.Thirteen === C1_LIST[4]) player.Twentythree = player.Sprev, player.Sprev = player.Thirteen, player.Thirteen = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirteen = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Thirtythree === C1_LIST[3] && player.Twentythree !== C1_LIST[0]) player.Thirtythree = player.prev, player.prev = player.Twentythree, player.Twentythree = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Twentytwo === C2_LIST[2] && player.Thirtytwo === C1_LIST[3] && player.Twelve !== C2_LIST[2]){
        if (C2_LIST.includes(player.Twelve) || player.Twelve === C1_LIST[4]) player.Twentytwo = player.Sprev, player.Sprev = player.Twelve, player.Twelve = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twelve = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Thirtytwo === C1_LIST[3] && player.Twentytwo !== C1_LIST[0]) player.Thirtytwo = player.prev, player.prev = player.Twentytwo, player.Twentytwo = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Twentyone === C2_LIST[2] && player.Thirtyone === C1_LIST[3] && player.Eleven !== C2_LIST[2]){
        if (C2_LIST.includes(player.Eleven) || player.Eleven === C1_LIST[4]) player.Twentyone = player.Sprev, player.Sprev = player.Eleven, player.Eleven = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Eleven = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Thirtyone === C1_LIST[3] && player.Twentyone !== C1_LIST[0]) player.Thirtyone = player.prev, player.prev = player.Twentyone, player.Twentyone = C1_LIST[3], player.North += 1,  player.South -= 1

      if (player.Fourty === C2_LIST[2] && player.Fifty === C1_LIST[3] && player.Thirty !== C2_LIST[2]){
        if (C2_LIST.includes(player.Thirty) || player.Thirty === C1_LIST[4]) player.Fourty = player.Sprev, player.Sprev = player.Thirty, player.Thirty = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirty = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Fifty === C1_LIST[3] && player.Fourty !== C1_LIST[0]) player.Fifty = player.prev, player.prev = player.Fourty, player.Fourty = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Thirtynine === C2_LIST[2] && player.Fourtynine === C1_LIST[3] && player.Twentynine !== C2_LIST[2]){
        if (C2_LIST.includes(player.Twentynine) || player.Twentynine === C1_LIST[4]) player.Thirtynine = player.Sprev, player.Sprev = player.Twentynine, player.Twentynine = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentynine = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Fourtynine === C1_LIST[3] && player.Thirtynine !== C1_LIST[0]) player.Fourtynine = player.prev, player.prev = player.Thirtynine, player.Thirtynine = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Thirtyeight === C2_LIST[2] && player.Fourtyeight === C1_LIST[3] && player.Twentyeight !== C2_LIST[2]){
        if (C2_LIST.includes(player.Twentyeight) || player.Twentyeight === C1_LIST[4]) player.Thirtyeight = player.Sprev, player.Sprev = player.Twentyeight, player.Twentyeight = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentyeight = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Fourtyeight === C1_LIST[3] && player.Thirtyeight !== C1_LIST[0]) player.Fourtyeight = player.prev, player.prev = player.Thirtyeight, player.Thirtyeight = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Thirtyseven === C2_LIST[2] && player.Fourtyseven === C1_LIST[3] && player.Twentyseven !== C2_LIST[2]){
        if (C2_LIST.includes(player.Twentyseven) || player.Twentyseven === C1_LIST[4]) player.Thirtyseven = player.Sprev, player.Sprev = player.Twentyseven, player.Twentyseven = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentyseven = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Fourtyseven === C1_LIST[3] && player.Thirtyseven !== C1_LIST[0]) player.Fourtyseven = player.prev, player.prev = player.Thirtyseven, player.Thirtyseven = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Thirtysix === C2_LIST[2] && player.Fourtysix === C1_LIST[3] && player.Twentysix !== C2_LIST[2]){
        if (C2_LIST.includes(player.Twentysix) || player.Twentysix === C1_LIST[4]) player.Thirtysix = player.Sprev, player.Sprev = player.Twentysix, player.Twentysix = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentysix = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Fourtysix === C1_LIST[3] && player.Thirtysix !== C1_LIST[0]) player.Fourtysix = player.prev, player.prev = player.Thirtysix, player.Thirtysix = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Thirtyfive === C2_LIST[2] && player.Fourtyfive === C1_LIST[3] && player.Twentyfive !== C2_LIST[2]){
        if (C2_LIST.includes(player.Twentyfive) || player.Twentyfive === C1_LIST[4]) player.Thirtyfive = player.Sprev, player.Sprev = player.Twentyfive, player.Twentyfive = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentyfive = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Fourtyfive === C1_LIST[3] && player.Thirtyfive !== C1_LIST[0]) player.Fourtyfive = player.prev, player.prev = player.Thirtyfive, player.Thirtyfive = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Thirtyfour === C2_LIST[2] && player.Fourtyfour === C1_LIST[3] && player.Twentyfour !== C2_LIST[2]){
        if (C2_LIST.includes(player.Twentyfour) || player.Twentyfour === C1_LIST[4]) player.Thirtyfour = player.Sprev, player.Sprev = player.Twentyfour, player.Twentyfour = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentyfour = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Fourtyfour === C1_LIST[3] && player.Thirtyfour !== C1_LIST[0]) player.Fourtyfour= player.prev, player.prev = player.Thirtyfour, player.Thirtyfour = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Thirtythree === C2_LIST[2] && player.Fourtythree === C1_LIST[3] && player.Twentythree !== C2_LIST[2]){
        if (C2_LIST.includes(player.Twentythree) || player.Twentythree === C1_LIST[4]) player.Thirtythree = player.Sprev, player.Sprev = player.Twentythree, player.Twentythree = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentythree = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Fourtythree === C1_LIST[3] && player.Thirtythree !== C1_LIST[0]) player.Fourtythree = player.prev, player.prev = player.Thirtythree, player.Thirtythree = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Thirtytwo === C2_LIST[2] && player.Fourtytwo === C1_LIST[3] && player.Twentytwo !== C2_LIST[2]){
        if (C2_LIST.includes(player.Twentytwo) || player.Twentytwo === C1_LIST[4]) player.Thirtytwo = player.Sprev, player.Sprev = player.Twentytwo, player.Twentytwo = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentytwo = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Fourtytwo === C1_LIST[3] && player.Thirtytwo !== C1_LIST[0]) player.Fourtytwo = player.prev, player.prev = player.Thirtytwo, player.Thirtytwo = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.Thirtyone === C2_LIST[2] && player.Fourtyone === C1_LIST[3] && player.Twentyone !== C2_LIST[2]){
        if (C2_LIST.includes(player.Twentyone) || player.Twentyone === C1_LIST[4]) player.Thirtyone = player.Sprev, player.Sprev = player.Twentyone, player.Twentyone = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentyone = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
      if (player.Fourtyone === C1_LIST[3] && player.Thirtyone !== C1_LIST[0]) player.Fourtyone = player.prev, player.prev = player.Thirtyone, player.Thirtyone = C1_LIST[3], player.North += 1,  player.South -= 1  
      
      if (player.L2 === C1_LIST[3] && player.Fourtyone !== C1_LIST[0]) player.L2 = player.prev, player.prev = player.Fourtyone, player.Fourtyone = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.L3 === C1_LIST[3] && player.Fourtytwo !== C1_LIST[0]) player.L3 = player.prev, player.prev = player.Fourtytwo, player.Fourtytwo = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.L4 === C1_LIST[3] && player.Fourtythree !== C1_LIST[0]) player.L4 = player.prev, player.prev = player.Fourtythree, player.Fourtythree = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.L5 === C1_LIST[3] && player.Fourtyfour !== C1_LIST[0]) player.L5 = player.prev, player.prev = player.Fourtyfour, player.Fourtyfour = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.L6 === C1_LIST[3] && player.Fourtyfive !== C1_LIST[0]) player.L6 = player.prev, player.prev = player.Fourtyfive, player.Fourtyfive = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.L7 === C1_LIST[3] && player.Fourtysix !== C1_LIST[0]) player.L7 = player.prev, player.prev = player.Fourtysix, player.Fourtysix = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.L8 === C1_LIST[3] && player.Fourtyseven !== C1_LIST[0]) player.L8 = player.prev, player.prev = player.Fourtyseven, player.Fourtyseven = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.L9 === C1_LIST[3] && player.Fourtyeight !== C1_LIST[0]) player.L9 = player.prev, player.prev = player.Fourtyeight, player.Fourtyeight = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.L10 === C1_LIST[3] && player.Fourtynine !== C1_LIST[0]) player.L10 = player.prev, player.prev = player.Fourtynine, player.Fourtynine = C1_LIST[3], player.North += 1,  player.South -= 1
      if (player.L11 === C1_LIST[3] && player.Fifty !== C1_LIST[0]) player.L11 = player.prev, player.prev = player.Fifty, player.Fifty = C1_LIST[3], player.North += 1,  player.South -= 1
      audio()
      save2()
}

function moveDown(){
    if (player.MD == false) return

    if (player.prev === C1_LIST[1] && player.Fifty === C1_LIST[3] && player.L11 === C3_LIST[1]) player.Fifty = player.prev, player.prev = player.L11, player.L11 = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.prev === C1_LIST[1] && player.Fourtynine === C1_LIST[3] && player.L10 === C3_LIST[1]) player.Fourtynine = player.prev, player.prev = player.L10, player.L10 = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.prev === C1_LIST[1] && player.Fourtyeight === C1_LIST[3] && player.L9 === C3_LIST[1]) player.Fourtyeight = player.prev, player.prev = player.L9, player.L9 = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.prev === C1_LIST[1] && player.Fourtyseven === C1_LIST[3] && player.L8 === C3_LIST[1]) player.Fourtyseven = player.prev, player.prev = player.L8, player.L8 = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.prev === C1_LIST[1] && player.Fourtysix === C1_LIST[3] && player.L7 === C3_LIST[1]) player.Fourtysix = player.prev, player.prev = player.L7, player.L7 = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.prev === C1_LIST[1] && player.Fourtyfive === C1_LIST[3] && player.L6 === C3_LIST[1]) player.Fourtyfive = player.prev, player.prev = player.L6, player.L6 = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.prev === C1_LIST[1] && player.Fourtyfour === C1_LIST[3] && player.L5 === C3_LIST[1]) player.Fourtyfour = player.prev, player.prev = player.L5, player.L5 = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.prev === C1_LIST[1] && player.Fourtythree === C1_LIST[3] && player.L4 === C3_LIST[1]) player.Fourtythree = player.prev, player.prev = player.L4, player.L4 = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.prev === C1_LIST[1] && player.Fourtytwo === C1_LIST[3] && player.L3 === C3_LIST[1]) player.Fourtytwo = player.prev, player.prev = player.L3, player.L3 = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.prev === C1_LIST[1] && player.Fourtyone === C1_LIST[3] && player.L2 === C3_LIST[1]) player.Fourtyone = player.prev, player.prev = player.L2, player.L2 = C1_LIST[3], player.North -= 1,  player.South += 1

    if (player.Fourty === C1_LIST[3] && player.Fifty !== C1_LIST[0]) player.Fourty = player.prev, player.prev = player.Fifty, player.Fifty = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Thirtynine === C1_LIST[3] && player.Fourtynine !== C1_LIST[0]) player.Thirtynine = player.prev, player.prev = player.Fourtynine, player.Fourtynine = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Thirtyeight === C1_LIST[3] && player.Fourtyeight !== C1_LIST[0]) player.Thirtyeight = player.prev, player.prev = player.Fourtyeight, player.Fourtyeight = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Thirtyseven === C1_LIST[3] && player.Fourtyseven !== C1_LIST[0]) player.Thirtyseven = player.prev, player.prev = player.Fourtyseven, player.Fourtyseven = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Thirtysix === C1_LIST[3] && player.Fourtysix !== C1_LIST[0]) player.Thirtysix = player.prev, player.prev = player.Fourtysix, player.Fourtysix = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Thirtyfive === C1_LIST[3] && player.Fourtyfive !== C1_LIST[0]) player.Thirtyfive = player.prev, player.prev = player.Fourtyfive, player.Fourtyfive = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Thirtyfour === C1_LIST[3] && player.Fourtyfour !== C1_LIST[0]) player.Thirtyfour = player.prev, player.prev = player.Fourtyfour, player.Fourtyfour = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Thirtythree === C1_LIST[3] && player.Fourtythree !== C1_LIST[0]) player.Thirtythree = player.prev, player.prev = player.Fourtythree, player.Fourtythree = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Thirtytwo === C1_LIST[3] && player.Fourtytwo !== C1_LIST[0]) player.Thirtytwo = player.prev, player.prev = player.Fourtytwo, player.Fourtytwo = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Thirtyone === C1_LIST[3] && player.Fourtyone !== C1_LIST[0]) player.Thirtyone = player.prev, player.prev = player.Fourtyone, player.Fourtyone = C1_LIST[3], player.North -= 1,  player.South += 1


    if (player.Fourty === C2_LIST[2] && player.Thirty === C1_LIST[3] && player.Fifty !== C2_LIST[2]){
        if (C2_LIST.includes(player.Fifty) || player.Fifty === C1_LIST[4]) player.Fourty = player.Sprev, player.Sprev = player.Fifty, player.Fifty = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.FIfty = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Thirty === C1_LIST[3] && player.Fourty !== C1_LIST[0]) player.Thirty = player.prev, player.prev = player.Fourty, player.Fourty = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Thirtynine === C2_LIST[2] && player.Twentynine === C1_LIST[3] && player.Fourtynine !== C2_LIST[2]){
        if (C2_LIST.includes(player.Fourtynine) || player.Fourtynine === C1_LIST[4]) player.Thirtynine = player.Sprev, player.Sprev = player.Fourtynine, player.Fourtynine = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtynine = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twentynine === C1_LIST[3] && player.Thirtynine !== C1_LIST[0]) player.Twentynine = player.prev, player.prev = player.Thirtynine, player.Thirtynine = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Thirtyeight === C2_LIST[2] && player.Twentyeight === C1_LIST[3] && player.Fourtyeight !== C2_LIST[2]){
        if (C2_LIST.includes(player.Fourtyeight) || player.Fourtyeight === C1_LIST[4]) player.Thirtyeight = player.Sprev, player.Sprev = player.Fourtyeight, player.Fourtyeight = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtyeight = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twentyeight === C1_LIST[3] && player.Thirtyeight !== C1_LIST[0]) player.Twentyeight = player.prev, player.prev = player.Thirtyeight, player.Thirtyeight = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Thirtyseven === C2_LIST[2] && player.Twentyseven === C1_LIST[3] && player.Fourtyseven !== C2_LIST[2]){
        if (C2_LIST.includes(player.Fourtyseven) || player.Fourtyseven === C1_LIST[4]) player.Thirtyseven = player.Sprev, player.Sprev = player.Fourtyseven, player.Fourtyseven = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtyseven = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twentyseven === C1_LIST[3] && player.Thirtyseven !== C1_LIST[0]) player.Twentyseven = player.prev, player.prev = player.Thirtyseven, player.Thirtyseven = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Thirtysix === C2_LIST[2] && C2_LIST.includes(player.Fourtysix) && player.Twentysix === C1_LIST[3] && player.Fourtysix !== C2_LIST[2]){
        if (C2_LIST.includes(player.Fourtysix) || player.Fourtysix === C1_LIST[4]) player.Thirtysix = player.Sprev, player.Sprev = player.Fourtysix, player.Fourtysix = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtysix = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twentysix === C1_LIST[3]  && player.Thirtysix !== C1_LIST[0]) player.Twentysix = player.prev, player.prev = player.Thirtysix, player.Thirtysix = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Thirtyfive === C2_LIST[2] && player.Twentyfive === C1_LIST[3] && player.Fourtyfive !== C2_LIST[2]){
        if (C2_LIST.includes(player.Fourtyfive) || player.Fourtyfive === C1_LIST[4]) player.Thirtyfive = player.Sprev, player.Sprev = player.Fourtyfive, player.Fourtyfive = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtyfive = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twentyfive === C1_LIST[3] && player.Thirtyfive !== C1_LIST[0]) player.Twentyfive = player.prev, player.prev = player.Thirtyfive, player.Thirtyfive = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Thirtyfour === C2_LIST[2] && player.Twentyfour === C1_LIST[3] && player.Fourtyfour !== C2_LIST[2]){
        if (C2_LIST.includes(player.Fourtyfour) || player.Fourtyfour === C1_LIST[4]) player.Thirtyfour = player.Sprev, player.Sprev = player.Fourtyfour, player.Fourtyfour = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtyfour = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twentyfour === C1_LIST[3] && player.Thirtyfour !== C1_LIST[0]) player.Twentyfour = player.prev, player.prev = player.Thirtyfour, player.Thirtyfour = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Thirtythree === C2_LIST[2] && player.Twentythree === C1_LIST[3] && player.Fourtythree !== C2_LIST[2]){
        if (C2_LIST.includes(player.Fourtythree) || player.Fourtythree === C1_LIST[4]) player.Thirtythree = player.Sprev, player.Sprev = player.Fourtythree, player.Fourtythree = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtythree = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twentythree === C1_LIST[3] && player.Thirtythree !== C1_LIST[0]) player.Twentythree = player.prev, player.prev = player.Thirtythree, player.Thirtythree = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Thirtytwo === C2_LIST[2] && player.Twentytwo === C1_LIST[3] && player.Fourtytwo !== C2_LIST[2]){
        if (C2_LIST.includes(player.Fourtytwo) || player.Fourtytwo === C1_LIST[4]) player.Thirtytwo = player.Sprev, player.Sprev = player.Fourtytwo, player.Fourtytwo = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtytwo = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twentytwo === C1_LIST[3] && player.Thirtytwo !== C1_LIST[0]) player.Twentytwo = player.prev, player.prev = player.Thirtytwo, player.Thirtytwo = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Thirtyone === C2_LIST[2] && player.Twentyone === C1_LIST[3] && player.Fourtyone !== C2_LIST[2]){
        if (C2_LIST.includes(player.Fourtyone) || player.Fourtyone === C1_LIST[4]) player.Thirtyone = player.Sprev, player.Sprev = player.Fourtyone, player.Fourtyone = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourtyone = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twentyone === C1_LIST[3]  && player.Thirtyone !== C1_LIST[0]) player.Twentyone = player.prev, player.prev = player.Thirtyone, player.Thirtyone = C1_LIST[3], player.North -= 1,  player.South += 1
    
    if (player.Thirty === C2_LIST[2] && player.Twenty === C1_LIST[3] && player.Fourty !== C2_LIST[2]){
        if (C2_LIST.includes(player.Fourty) || player.Fourty === C1_LIST[4]) player.Thirty = player.Sprev, player.Sprev = player.Fourty, player.Fourty = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Fourty = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twenty === C1_LIST[3] && player.Thirty !== C1_LIST[0]) player.Twenty = player.prev, player.prev = player.Thirty, player.Thirty = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Twentynine === C2_LIST[2] && player.Nineteen === C1_LIST[3] && player.Thirtynine !== C2_LIST[2]){
        if (C2_LIST.includes(player.Thirtynine) || player.Thirtynine === C1_LIST[4]) player.Twentynine = player.Sprev, player.Sprev = player.Thirtynine, player.Thirtynine = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtynine = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Nineteen === C1_LIST[3] && player.Twentynine !== C1_LIST[0]) player.Nineteen = player.prev, player.prev = player.Twentynine, player.Twentynine = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Twentyeight === C2_LIST[2] && player.Eighteen === C1_LIST[3] && player.Thirtyeight !== C2_LIST[2]){
        if (C2_LIST.includes(player.Thirtyeight) || player.Thirtyeight === C1_LIST[4]) player.Twentyeight = player.Sprev, player.Sprev = player.Thirtyeight, player.Thirtyeight = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtyeight = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Eighteen === C1_LIST[3] && player.Twentyeight !== C1_LIST[0]) player.Eighteen = player.prev, player.prev = player.Twentyeight, player.Twentyeight = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Twentyseven === C2_LIST[2] && player.Seventeen === C1_LIST[3] && player.Thirtyseven !== C2_LIST[2]){
        if (C2_LIST.includes(player.Thirtyseven) || player.Thirtyseven === C1_LIST[4]) player.Twentyseven = player.Sprev, player.Sprev = player.Thirtyseven, player.Thirtyseven = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtyseven = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Seventeen === C1_LIST[3] && player.Twentyseven !== C1_LIST[0]) player.Seventeen = player.prev, player.prev = player.Twentyseven, player.Twentyseven = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Twentysix === C2_LIST[2] && player.Sixteen === C1_LIST[3] && player.Thirtysix !== C2_LIST[2]){
        if (C2_LIST.includes(player.Thirtysix) || player.Thirtysix === C1_LIST[4]) player.Twentysix = player.Sprev, player.Sprev = player.Thirtysix, player.Thirtysix = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtysix = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Sixteen === C1_LIST[3] && player.Twentysix !== C1_LIST[0]) player.Sixteen = player.prev, player.prev = player.Twentysix, player.Twentysix = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Twentyfive === C2_LIST[2] && player.Fifteen === C1_LIST[3] && player.Thirtyfive !== C2_LIST[2]){
        if (C2_LIST.includes(player.Thirtyfive) || player.Thirtyfive === C1_LIST[4]) player.Twentyfive = player.Sprev, player.Sprev = player.Thirtyfive, player.Thirtyfive = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtyfive = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Fifteen === C1_LIST[3] && player.Twentyfive !== C1_LIST[0]) player.Fifteen = player.prev, player.prev = player.Twentyfive, player.Twentyfive = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Twentyfour === C2_LIST[2] && player.Fourteen === C1_LIST[3] && player.Thirtyfour !== C2_LIST[2]){
        if (C2_LIST.includes(player.Thirtyfour) || player.Thirtyfour === C1_LIST[4]) player.Twentyfour = player.Sprev, player.Sprev = player.Thirtyfour, player.Thirtyfour = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtyfour = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Fourteen === C1_LIST[3] && player.Twentyfour !== C1_LIST[0]) player.Fourteen = player.prev, player.prev = player.Twentyfour, player.Twentyfour = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Twentythree === C2_LIST[2] && player.Thirteen === C1_LIST[3] && player.Thirtythree !== C2_LIST[2]){
        if (C2_LIST.includes(player.Thirtythree) || player.Thirtythree === C1_LIST[4]) player.Twentythree = player.Sprev, player.Sprev = player.Thirtythree, player.Thirtythree = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtythree = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Thirteen === C1_LIST[3] && player.Twentythree !== C1_LIST[0]) player.Thirteen = player.prev, player.prev = player.Twentythree, player.Twentythree = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Twentytwo === C2_LIST[2] && player.Twelve === C1_LIST[3] && player.Thirtytwo !== C2_LIST[2]){
        if (C2_LIST.includes(player.Thirtytwo) || player.Thirtytwo === C1_LIST[4]) player.Twentytwo = player.Sprev, player.Sprev = player.Thirtytwo, player.Thirtytwo = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtytwo = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Twelve === C1_LIST[3] && player.Twentytwo !== C1_LIST[0]) player.Twelve = player.prev, player.prev = player.Twentytwo, player.Twentytwo = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Twentyone === C2_LIST[2] && player.Eleven === C1_LIST[3] && player.Thirtyone !== C2_LIST[2]){
        if (C2_LIST.includes(player.Thirtyone) || player.Thirtyone === C1_LIST[4]) player.Twentyone = player.Sprev, player.Sprev = player.Thirtyone, player.Thirtyone = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirtyone = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Eleven === C1_LIST[3] && player.Twentyone !== C1_LIST[0]) player.Eleven = player.prev, player.prev = player.Twentyone, player.Twentyone = C1_LIST[3], player.North -= 1,  player.South += 1

    if (player.Twenty === C2_LIST[2] && player.Ten === C1_LIST[3] && player.Thirty !== C2_LIST[2]){
        if (C2_LIST.includes(player.Thirty) || player.Thirty === C1_LIST[4]) player.Twenty = player.Sprev, player.Sprev = player.Thirty, player.Thirty = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Thirty = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Ten === C1_LIST[3] && player.Twenty !== C1_LIST[0]) player.Ten = player.prev, player.prev = player.Twenty, player.Twenty = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Nineteen === C2_LIST[2] && player.Nine === C1_LIST[3] && player.Twentynine !== C2_LIST[2]){
        if (C2_LIST.includes(player.Twentynine) || player.Twentynine === C1_LIST[4]) player.Nineteen = player.Sprev, player.Sprev = player.Twentynine, player.Twentynine = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentynine = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Nine === C1_LIST[3] && player.Nineteen !== C1_LIST[0]) player.Nine = player.prev, player.prev = player.Nineteen, player.Nineteen = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Eighteen === C2_LIST[2] && player.Eight === C1_LIST[3] && player.Twentyeight !== C2_LIST[2]){
        if (C2_LIST.includes(player.Twentyeight) || player.Twentyeight === C1_LIST[4]) player.Eighteen = player.Sprev, player.Sprev = player.Twentyeight, player.Twentyeight = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentyeight = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Eight === C1_LIST[3] && player.Eighteen !== C1_LIST[0]) player.Eight = player.prev, player.prev = player.Eighteen, player.Eighteen = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Seventeen === C2_LIST[2] && player.Seven === C1_LIST[3] && player.Twentyseven !== C2_LIST[2]){
        if (C2_LIST.includes(player.Twentyseven) || player.Twentyseven === C1_LIST[4]) player.Seventeen = player.Sprev, player.Sprev = player.Twentyseven, player.Twentyseven = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentyseven = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Seven === C1_LIST[3] && player.Seventeen !== C1_LIST[0]) player.Seven = player.prev, player.prev = player.Seventeen, player.Seventeen = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Sixteen === C2_LIST[2] && player.Six === C1_LIST[3] && player.Twentysix !== C2_LIST[2]){
        if (C2_LIST.includes(player.Twentysix) || player.Twentysix === C1_LIST[4]) player.Sixteen = player.Sprev, player.Sprev = player.Twentysix, player.Twentysix = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentysix = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Six === C1_LIST[3] && player.Sixteen !== C1_LIST[0]) player.Six = player.prev, player.prev = player.Sixteen, player.Sixteen = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Fifteen === C2_LIST[2] && player.Five === C1_LIST[3] && player.Twentyfive !== C2_LIST[2]){
        if (C2_LIST.includes(player.Twentyfive) || player.Twentyfive === C1_LIST[4]) player.Fifteen = player.Sprev, player.Sprev = player.Twentyfive, player.Twentyfive = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentyfive = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Five === C1_LIST[3] && player.Fifteen !== C1_LIST[0]) player.Five = player.prev, player.prev = player.Fifteen, player.Fifteen = C1_LIST[3], player.North -= 1,  player.South += 1    
    if (player.Fourteen === C2_LIST[2] && player.Four === C1_LIST[3] && player.Twentyfour !== C2_LIST[2]){
        if (C2_LIST.includes(player.Twentyfour) || player.Twentyfour === C1_LIST[4]) player.Fourteen = player.Sprev, player.Sprev = player.Twentyfour, player.Twentyfour = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentyfour = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Four === C1_LIST[3] && player.Fourteen !== C1_LIST[0]) player.Four = player.prev, player.prev = player.Fourteen, player.Fourteen = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Thirteen === C2_LIST[2] && player.Three === C1_LIST[3] && player.Twentythree !== C2_LIST[2]){
        if (C2_LIST.includes(player.Twentythree) || player.Twentythree === C1_LIST[4]) player.Thirteen = player.Sprev, player.Sprev = player.Twentythree, player.Twentythree = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentythree = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Three === C1_LIST[3] && player.Thirteen !== C1_LIST[0]) player.Three = player.prev, player.prev = player.Thirteen, player.Thirteen = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Twelve === C2_LIST[2] && player.Two === C1_LIST[3] && player.Twentytwo !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Twentytwo) || player.Twentytwo === C1_LIST[4]) player.Twelve = player.Sprev, player.Sprev = player.Twentytwo, player.Twentytwo = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentytwo = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.Two === C1_LIST[3] && player.Twelve !== C1_LIST[0]) player.Two = player.prev, player.prev = player.Twelve, player.Twelve = C1_LIST[3], player.North -= 1,  player.South += 1
    if (player.Eleven === C2_LIST[2] && player.One === C1_LIST[3] && player.Twentyone !== C2_LIST[2]){ 
        if (C2_LIST.includes(player.Twentyone) || player.Twentyone === C1_LIST[4]) player.Eleven = player.Sprev, player.Sprev = player.Twentyone, player.Twentyone = C2_LIST[2]
    if (player.Sprev === C1_LIST[4]) player.Sprev = `<span style='color: #74663b'>.</span>`, player.Twentyone = C2_LIST[4], tmp['tree-tab'].audioWater.loop = false, tmp['tree-tab'].audioWater.play()}
    if (player.One === C1_LIST[3] && player.Eleven !== C1_LIST[0]) player.One = player.prev, player.prev = player.Eleven, player.Eleven = C1_LIST[3], player.North -= 1,  player.South += 1
    audio()
    save2()
}

// A "ghost" layer which offsets other layers in the tree
addNode("blank", {
    layerShown: "ghost",
}, 
)


addLayer("tree-tab", {
    tabFormat: [["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}]],
    previousTab: "",
    leftTab: true,

    startData() {
        return {
	audioR: 0,
        }},
        audioRock1: new Audio('resources/Rock1.wav'),
        audioRock2: new Audio('resources/Rock2.wav'),
        audioRock3: new Audio('resources/Rock3.wav'),
        audioWood1: new Audio('resources/Wood1.wav'),
        audioWood2: new Audio('resources/Wood2.wav'),
        audioWood3: new Audio('resources/Wood3.wav'),
        audioDirt1: new Audio('resources/Dirt1.wav'),
        audioDirt2: new Audio('resources/Dirt2.wav'),
        audioDirt3: new Audio('resources/Dirt3.wav'),
        audioSand: new Audio('resources/Sand.wav'),
        audioWater: new Audio('resources/Water.wav'),
        
    clickables: {
        11: {
            unlocked(){
                if (localStorage.getItem('Mode') === '3') return true
            },
            canClick(){
                return true
            },
            title: "↑",
            style: { "background-color": "#808080" },
            onHold() {
                player.intervaeae = true
            },
        },
        21: {
            unlocked(){
                if (localStorage.getItem('Mode') === '3') return true
            },
            canClick(){
                return true
            },
            title: "←",
            style: { "background-color": "#808080" },
            onHold() {
                player.interva = true
            },
        },
        22: {
            unlocked(){
                if (localStorage.getItem('Mode') === '3') return true
            },
            canClick(){
                return true
            },
            title: "↓",
            style: { "background-color": "#808080" },
            onHold() {
                player.intervaea = true
            },
        },
        23: {
            unlocked(){
                if (localStorage.getItem('Mode') === '3') return true
            },
            canClick(){
                return true
            },
            title: "→",
            style: { "background-color": "#808080" },
            onHold() {
                player.intervae = true
            },
        },
        31: {
            unlocked(){
                if (localStorage.getItem('Mode') === '3') return true
            },
            canClick(){
                return true
            },
            title: "Reset Zone",
            style: { "background-color": "#808080" },
            onClick() {
                player.reset = true
            },
        },
        32: {
            unlocked(){
                if (localStorage.getItem('Mode') === '3') return true
            },
            canClick(){
                return true
            },
            title: "Undo ONE move",
            style: { "background-color": "#808080" },
            onClick() {
                import2()
            },
        },
    },

    hotkeys: [
        { key: "w", description: "W: Go Up One Space", onPress() { if (localStorage.getItem('Mode') === '1') player.intervaeae = true},
        unlocked() { if (localStorage.getItem('Mode') === '1') return true}},
        { key: "a", description: "A: Go Left One Space", onPress() { if (localStorage.getItem('Mode') === '1') player.interva = true},
        unlocked() { if (localStorage.getItem('Mode') === '1') return true}},
        { key: "s", description: "S: Go Down One Space", onPress() { if (localStorage.getItem('Mode') === '1') player.intervaea = true},
        unlocked() { if (localStorage.getItem('Mode') === '1') return true}},
        { key: "d", description: "D: Go Right One Space", onPress() { if (localStorage.getItem('Mode') === '1') player.intervae = true},
        unlocked() { if (localStorage.getItem('Mode') === '1') return true}},
        { key: "ArrowUp", description: "↑: Go Up One Space", onPress() { if (localStorage.getItem('Mode') === '2') player.intervaeae = true},
        unlocked() { if (localStorage.getItem('Mode') === '2') return true}},
        { key: "ArrowLeft", description: "←: Go Left One Space", onPress() { if (localStorage.getItem('Mode') === '2') player.interva = true},
        unlocked() { if (localStorage.getItem('Mode') === '2') return true}},
        { key: "ArrowDown", description: "↓: Go Down One Space", onPress() { if (localStorage.getItem('Mode') === '2') player.intervaea = true},
        unlocked() { if (localStorage.getItem('Mode') === '2') return true}},
        { key: "ArrowRight", description: "→: Go Right One Space", onPress() { if (localStorage.getItem('Mode') === '2') player.intervae = true},
        unlocked() { if (localStorage.getItem('Mode') === '2') return true}},
        { key: "r", description: "R: Reset Zone", onPress() { if (localStorage.getItem('Mode') === '1' || localStorage.getItem('Mode') === '2') player.reset = true},
        unlocked() { if (localStorage.getItem('Mode') === '1' || localStorage.getItem('Mode') === '2') return true}},
        { key: "u", description: "U: Undo ONE Move", onPress() { if (localStorage.getItem('Mode') === '1' || localStorage.getItem('Mode') === '2') import2()},
        unlocked() { if (localStorage.getItem('Mode') === '1' || localStorage.getItem('Mode') === '2') return true}},
    ],
    tabFormat: [
        'Map-row0',
        'Map-row1',
        'Map-row2',
        'Map-row3',
        'Map-row4',
        'Map-row5',
        'Map-row6',
        'clickables'
    ],

    update() {
        let current = new Date();
        let cDate = current.getFullYear() + '/' + (current.getMonth() + 1) + '/' + current.getDate();
        let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
        player.dateTime = cDate + ' ' + cTime;
 
        if (localStorage.getItem('Area') === '1') options.theme = themes[1], changeTheme()
       if (player.prev === C2_LIST[0] || player.prev === C2_LIST[1] || player.prev === C2_LIST[4] || player.prev === C2_LIST[5]) player.Level = 1
       if (player.prev === C1_LIST[1] || player.prev === C2_LIST[2] || player.prev === C3_LIST[1]) player.Level = 2

        if (player.One === C1_LIST[3] && C2_LIST.includes(player.Two ) || player.Two === C1_LIST[3] && C2_LIST.includes(player.Three ) || player.Three === C1_LIST[3] && C2_LIST.includes(player.Four ) || player.Four === C1_LIST[3] && C2_LIST.includes(player.Five ) || player.Five === C1_LIST[3] && C2_LIST.includes(player.Six ) || player.Six === C1_LIST[3] && C2_LIST.includes(player.Seven ) || player.Seven === C1_LIST[3] && C2_LIST.includes(player.Eight ) || player.Eight === C1_LIST[3] && C2_LIST.includes(player.Nine ) || player.Nine === C1_LIST[3] && C2_LIST.includes(player.Ten ) ||   player.Eleven === C1_LIST[3] && C2_LIST.includes(player.Twelve ) || player.Twelve === C1_LIST[3] && C2_LIST.includes(player.Thirteen ) || player.Thirteen === C1_LIST[3] && C2_LIST.includes(player.Fourteen ) || player.Fourteen === C1_LIST[3] && C2_LIST.includes(player.Fifteen ) || player.Fifteen === C1_LIST[3] && C2_LIST.includes(player.Sixteen ) || player.Sixteen === C1_LIST[3] && C2_LIST.includes(player.Seventeen ) || player.Seventeen === C1_LIST[3] && C2_LIST.includes(player.Eighteen ) || player.Eighteen === C1_LIST[3] && C2_LIST.includes(player.Nineteen ) || player.Nineteen === C1_LIST[3] && C2_LIST.includes(player.Twenty ) || player.Twentyone === C1_LIST[3] && C2_LIST.includes(player.Twentytwo ) || player.Twentytwo === C1_LIST[3] && C2_LIST.includes(player.Twentythree ) || player.Twentythree === C1_LIST[3] && C2_LIST.includes(player.Twentyfour ) || player.Twentyfour === C1_LIST[3] && C2_LIST.includes(player.Twentyfive ) || player.Twentyfive === C1_LIST[3] && C2_LIST.includes(player.Twentysix ) || player.Twentysix === C1_LIST[3] && C2_LIST.includes(player.Twentyseven ) || player.Twentyseven === C1_LIST[3] && C2_LIST.includes(player.Twentyeight ) || player.Twentyeight === C1_LIST[3] && C2_LIST.includes(player.Twentynine ) || player.Twentynine === C1_LIST[3] && C2_LIST.includes(player.Thirty ) || player.Thirtyone === C1_LIST[3] && C2_LIST.includes(player.Thirtytwo ) || player.Thirtytwo === C1_LIST[3] && C2_LIST.includes(player.Thirtythree ) || player.Thirtythree === C1_LIST[3] && C2_LIST.includes(player.Thirtyfour ) || player.Thirtyfour === C1_LIST[3] && C2_LIST.includes(player.Thirtyfive ) || player.Thirtyfive === C1_LIST[3] && C2_LIST.includes(player.Thirtysix ) || player.Thirtysix === C1_LIST[3] && C2_LIST.includes(player.Thirtyseven ) || player.Thirtyseven === C1_LIST[3] && C2_LIST.includes(player.Thirtyeight ) || player.Thirtyeight === C1_LIST[3] && C2_LIST.includes(player.Thirtynine ) || player.Thirtynine === C1_LIST[3] && C2_LIST.includes(player.Fourty ) || player.Fourtyone === C1_LIST[3] && C2_LIST.includes(player.Fourtytwo ) || player.Fourtytwo === C1_LIST[3] && C2_LIST.includes(player.Fourtythree ) || player.Fourtythree === C1_LIST[3] && C2_LIST.includes(player.Fourtyfour ) || player.Fourtyfour === C1_LIST[3] && C2_LIST.includes(player.Fourtyfive ) || player.Fourtyfive === C1_LIST[3] && C2_LIST.includes(player.Fourtysix ) || player.Fourtysix === C1_LIST[3] && C2_LIST.includes(player.Fourtyseven ) || player.Fourtyseven === C1_LIST[3] && C2_LIST.includes(player.Fourtyeight ) || player.Fourtyeight === C1_LIST[3] && C2_LIST.includes(player.Fourtynine ) || player.Fourtynine === C1_LIST[3] && C2_LIST.includes(player.Fifty) || player.Level === 2) player.MR = true
        else player.MR = false

        if (C2_LIST.includes(player.One) && player.Two === C1_LIST[3] || C2_LIST.includes(player.Two) && player.Three === C1_LIST[3] || C2_LIST.includes(player.Three) && player.Four === C1_LIST[3] || C2_LIST.includes(player.Four) && player.Five === C1_LIST[3] || C2_LIST.includes(player.Five) && player.Six === C1_LIST[3] || C2_LIST.includes(player.Six) && player.Seven === C1_LIST[3] || C2_LIST.includes(player.Seven) && player.Eight === C1_LIST[3] || C2_LIST.includes(player.Eight) && player.Nine === C1_LIST[3] || C2_LIST.includes(player.Nine) && player.Ten === C1_LIST[3] || C2_LIST.includes(  player.Eleven) && player.Twelve === C1_LIST[3] || C2_LIST.includes(player.Twelve) && player.Thirteen === C1_LIST[3] || C2_LIST.includes(player.Thirteen) && player.Fourteen === C1_LIST[3] || C2_LIST.includes(player.Fourteen) && player.Fifteen === C1_LIST[3] || C2_LIST.includes(player.Fifteen) && player.Sixteen === C1_LIST[3] || C2_LIST.includes(player.Sixteen) && player.Seventeen === C1_LIST[3] || C2_LIST.includes(player.Seventeen) && player.Eighteen === C1_LIST[3] || C2_LIST.includes(player.Eighteen) && player.Nineteen === C1_LIST[3] || C2_LIST.includes(player.Nineteen) && player.Twenty === C1_LIST[3] || C2_LIST.includes(player.Twentyone) && player.Twentytwo === C1_LIST[3] || C2_LIST.includes(player.Twentytwo) && player.Twentythree === C1_LIST[3] || C2_LIST.includes(player.Twentythree) && player.Twentyfour === C1_LIST[3] || C2_LIST.includes(player.Twentyfour) && player.Twentyfive === C1_LIST[3] || C2_LIST.includes(player.Twentyfive) && player.Twentysix === C1_LIST[3] || C2_LIST.includes(player.Twentysix) && player.Twentyseven === C1_LIST[3] || C2_LIST.includes(player.Twentyseven) && player.Twentyeight === C1_LIST[3] || C2_LIST.includes(player.Twentyeight) && player.Twentynine === C1_LIST[3] || C2_LIST.includes(player.Twentynine) && player.Thirty === C1_LIST[3] || C2_LIST.includes(player.Thirtyone) && player.Thirtytwo === C1_LIST[3] || C2_LIST.includes(player.Thirtytwo) && player.Thirtythree === C1_LIST[3] || C2_LIST.includes(player.Thirtythree) && player.Thirtyfour === C1_LIST[3] || C2_LIST.includes(player.Thirtyfour) && player.Thirtyfive === C1_LIST[3] || C2_LIST.includes(player.Thirtyfive) && player.Thirtysix === C1_LIST[3] || C2_LIST.includes(player.Thirtysix) && player.Thirtyseven === C1_LIST[3] || C2_LIST.includes(player.Thirtyseven) && player.Thirtyeight === C1_LIST[3] || C2_LIST.includes(player.Thirtyeight) && player.Thirtynine === C1_LIST[3] || C2_LIST.includes(player.Thirtynine) && player.Fourty === C1_LIST[3] || C2_LIST.includes(player.Fourtyone) && player.Fourtytwo === C1_LIST[3] || C2_LIST.includes(player.Fourtytwo) && player.Fourtythree === C1_LIST[3] || C2_LIST.includes(player.Fourtythree) && player.Fourtyfour === C1_LIST[3] || C2_LIST.includes(player.Fourtyfour) && player.Fourtyfive === C1_LIST[3] || C2_LIST.includes(player.Fourtyfive) && player.Fourtysix === C1_LIST[3] || C2_LIST.includes(player.Fourtysix) && player.Fourtyseven === C1_LIST[3] || C2_LIST.includes(player.Fourtyseven) && player.Fourtyeight === C1_LIST[3] || C2_LIST.includes(player.Fourtyeight) && player.Fourtynine === C1_LIST[3] || C2_LIST.includes(player.Fourtynine) && player.Fifty === C1_LIST[3] || player.Level === 2) player.ML = true
        else player.ML = false

        if (player.One === C1_LIST[3] && C2_LIST.includes(player.Eleven) || player.Two === C1_LIST[3] && C2_LIST.includes(player.Twelve ) || player.Three === C1_LIST[3] && C2_LIST.includes(player.Thirteen ) || player.Four === C1_LIST[3] && C2_LIST.includes(player.Fourteen ) || player.Five === C1_LIST[3] && C2_LIST.includes(player.Fifteen ) || player.Six === C1_LIST[3] && C2_LIST.includes(player.Sixteen ) || player.Seven === C1_LIST[3] && C2_LIST.includes(player.Seventeen ) || player.Eight === C1_LIST[3] && C2_LIST.includes(player.Eighteen ) || player.Nine === C1_LIST[3] && C2_LIST.includes(player.Nineteen ) ||  player.Ten === C1_LIST[3] && C2_LIST.includes(player.Twenty ) || player.Eleven === C1_LIST[3] && C2_LIST.includes(player.Twentyone ) || player.Twelve === C1_LIST[3] && C2_LIST.includes(player.Twentytwo ) || player.Thirteen === C1_LIST[3] && C2_LIST.includes(player.Twentythree ) || player.Fourteen === C1_LIST[3] && C2_LIST.includes(player.Twentyfour ) || player.Fifteen === C1_LIST[3] && C2_LIST.includes(player.Twentyfive ) || player.Sixteen === C1_LIST[3] && C2_LIST.includes(player.Twentysix ) || player.Seventeen === C1_LIST[3] && C2_LIST.includes(player.Twentyseven ) || player.Eighteen === C1_LIST[3] && C2_LIST.includes(player.Twentyeight ) || player.Nineteen === C1_LIST[3] && C2_LIST.includes(player.Twentynine ) || player.Twenty === C1_LIST[3] && C2_LIST.includes(player.Thirty ) || player.Twentyone === C1_LIST[3] && C2_LIST.includes(player.Thirtyone ) || player.Twentytwo === C1_LIST[3] && C2_LIST.includes(player.Thirtytwo ) || player.Twentythree === C1_LIST[3] && C2_LIST.includes(player.Thirtythree ) || player.Twentyfour === C1_LIST[3] && C2_LIST.includes(player.Thirtyfour ) || player.Twentyfive === C1_LIST[3] && C2_LIST.includes(player.Thirtyfive ) || player.Twentysix === C1_LIST[3] && C2_LIST.includes(player.Thirtysix ) || player.Twentyseven === C1_LIST[3] && C2_LIST.includes(player.Thirtyseven ) || player.Twentyeight === C1_LIST[3] && C2_LIST.includes(player.Thirtyeight ) || player.Twentynine === C1_LIST[3] && C2_LIST.includes(player.Thirtynine ) || player.Thirty === C1_LIST[3] && C2_LIST.includes(player.Fourty ) || player.Thirtyone === C1_LIST[3] && C2_LIST.includes(player.Fourtyone ) || player.Thirtytwo === C1_LIST[3] && C2_LIST.includes(player.Fourtytwo ) || player.Thirtythree === C1_LIST[3] && C2_LIST.includes(player.Fourtythree ) || player.Thirtyfour === C1_LIST[3] && C2_LIST.includes(player.Fourtyfour ) || player.Thirtyfive === C1_LIST[3] && C2_LIST.includes(player.Fourtyfive ) || player.Thirtysix === C1_LIST[3] && C2_LIST.includes(player.Fourtysix ) || player.Thirtyseven === C1_LIST[3] && C2_LIST.includes(player.Fourtyseven ) || player.Thirtyeight === C1_LIST[3] && C2_LIST.includes(player.Fourtyeight ) || player.Thirtynine === C1_LIST[3] && C2_LIST.includes(player.Fourtynine ) || player.Fourty === C1_LIST[3] && C2_LIST.includes(player.Fifty) || player.Level === 2) player.MD = true
        else player.MD = false

        if (C2_LIST.includes(player.One) && player.Eleven === C1_LIST[3] || C2_LIST.includes(player.Two) && player.Twelve === C1_LIST[3] || C2_LIST.includes(player.Three) && player.Thirteen === C1_LIST[3] || C2_LIST.includes(player.Four) && player.Fourteen === C1_LIST[3] || C2_LIST.includes(player.Five) && player.Fifteen === C1_LIST[3] || C2_LIST.includes(player.Six) && player.Sixteen === C1_LIST[3] || C2_LIST.includes(player.Seven) && player.Seventeen === C1_LIST[3] || C2_LIST.includes(player.Eight) && player.Eighteen === C1_LIST[3] || C2_LIST.includes(player.Nine) && player.Nineteen === C1_LIST[3] || C2_LIST.includes( player.Ten) && player.Twenty === C1_LIST[3] || C2_LIST.includes(player.Eleven) && player.Twentyone === C1_LIST[3] || C2_LIST.includes(player.Twelve) && player.Twentytwo === C1_LIST[3] || C2_LIST.includes(player.Thirteen) && player.Twentythree === C1_LIST[3] || C2_LIST.includes(player.Fourteen) && player.Twentyfour === C1_LIST[3] || C2_LIST.includes(player.Fifteen) && player.Twentyfive === C1_LIST[3] || C2_LIST.includes(player.Sixteen) && player.Twentysix === C1_LIST[3] || C2_LIST.includes(player.Seventeen) && player.Twentyseven === C1_LIST[3] || C2_LIST.includes(player.Eighteen) && player.Twentyeight === C1_LIST[3] || C2_LIST.includes(player.Nineteen) && player.Twentynine === C1_LIST[3] || C2_LIST.includes(player.Twenty) && player.Thirty === C1_LIST[3] || C2_LIST.includes(player.Twentyone) && player.Thirtyone === C1_LIST[3] || C2_LIST.includes(player.Twentytwo) && player.Thirtytwo === C1_LIST[3] || C2_LIST.includes(player.Twentythree) && player.Thirtythree === C1_LIST[3] || C2_LIST.includes(player.Twentyfour) && player.Thirtyfour === C1_LIST[3] || C2_LIST.includes(player.Twentyfive) && player.Thirtyfive === C1_LIST[3] || C2_LIST.includes(player.Twentysix) && player.Thirtysix === C1_LIST[3] || C2_LIST.includes(player.Twentyseven) && player.Thirtyseven === C1_LIST[3] || C2_LIST.includes(player.Twentyeight) && player.Thirtyeight === C1_LIST[3] || C2_LIST.includes(player.Twentynine) && player.Thirtynine === C1_LIST[3] || C2_LIST.includes(player.Thirty) && player.Fourty === C1_LIST[3] || C2_LIST.includes(player.Thirtyone) && player.Fourtyone === C1_LIST[3] || C2_LIST.includes(player.Thirtytwo) && player.Fourtytwo === C1_LIST[3] || C2_LIST.includes(player.Thirtythree) && player.Fourtythree === C1_LIST[3] || C2_LIST.includes(player.Thirtyfour) && player.Fourtyfour === C1_LIST[3] || C2_LIST.includes(player.Thirtyfive) && player.Fourtyfive === C1_LIST[3] || C2_LIST.includes(player.Thirtysix) && player.Fourtysix === C1_LIST[3] || C2_LIST.includes(player.Thirtyseven) && player.Fourtyseven === C1_LIST[3] || C2_LIST.includes(player.Thirtyeight) && player.Fourtyeight === C1_LIST[3] || C2_LIST.includes(player.Thirtynine) && player.Fourtynine === C1_LIST[3] || C2_LIST.includes(player.Fourty) && player.Fifty === C1_LIST[3] || player.Level === 2) player.MU = true
        else player.MU = false

        if (player.interva == true || player.intervae == true || player.intervaea == true || player.intervaeae == true){
            player.timeX += 1
            if (player.timeX >= 3 && player.interva == true) moveLeft(), player.timeX = 0
            if (player.timeX >= 3 && player.intervae == true) moveRight(), player.timeX = 0
            if (player.timeX >= 3 && player.intervaeae == true) moveUp(), player.timeX = 0
            if (player.timeX >= 3 && player.intervaea == true) moveDown(), player.timeX = 0
        }
        if (player.reset == true && player.Zone === 3){
        player.Sprev = `<span style='color: #74663b'>.</span>`
        player.prev = `<span style='color: #74663b'>.</span>`
        player.East = 19,
            player.West = -19,
            player.North = 1,
            player.South = -1,
        player.Zone = 3,
        player.One = C1_LIST[0],
        player.Two = C1_LIST[0],
        player.Three = C1_LIST[0],
        player.Four = C2_LIST[0],
        player.Five = C1_LIST[0],
        player.Six = C1_LIST[0],
        player.Seven = C2_LIST[0],
        player.Eight = C1_LIST[0],
        player.Nine = C1_LIST[0],
        player.Ten = C1_LIST[0],
        player.Eleven = C1_LIST[0],
        player.Twelve = C1_LIST[0],
        player.Thirteen = C2_LIST[2],
        player.Fourteen = C2_LIST[0],
        player.Fifteen = C2_LIST[2],
        player.Sixteen = C2_LIST[2],
        player.Seventeen = C2_LIST[0],
        player.Eighteen = C2_LIST[0]
        if (localStorage.getItem('log1') === '1') player.Nineteen = C2_LIST[2]
        player.Twenty = C2_LIST[2],
        player.Twentyone = C1_LIST[3],
        player.Twentytwo = C2_LIST[0],
        player.Twentythree = C2_LIST[0],
        player.Twentyfour = C2_LIST[0],
        player.Twentyfive = C1_LIST[0],
        player.Twentysix = C1_LIST[0],
        player.Twentyseven = C2_LIST[0],
        player.Twentyeight = C1_LIST[0],
        player.Twentynine = C1_LIST[0],
        player.Thirty = C1_LIST[0],
        player.Thirtyone = C2_LIST[0],
        player.Thirtytwo = C2_LIST[0],
        player.Thirtythree = C2_LIST[0],
        player.Thirtyfour = C2_LIST[0],
        player.Thirtyfive = C2_LIST[0],
        player.Thirtysix = C1_LIST[0],
        player.Thirtyseven = C2_LIST[0],
        player.Thirtyeight = C1_LIST[0],
        player.Thirtynine = C1_LIST[0],
        player.Fourty = C1_LIST[0],
        player.Fourtyone = C1_LIST[0],
        player.Fourtytwo = C2_LIST[0],
        player.Fourtythree = C1_LIST[0],
        player.Fourtyfour = C2_LIST[0],
        player.Fourtyfive = C1_LIST[0],
        player.Fourtysix = C1_LIST[0],
        player.Fourtyseven = C1_LIST[4],
        player.Fourtyeight = C1_LIST[0],
        player.Fourtynine = C1_LIST[0],
        player.Fifty = C1_LIST[0],
        localStorage.setItem('save', JSON.stringify(player)),
        localStorage.setItem('saveU', JSON.stringify(player)),
        player.reset = false}

        if (player.reset == true && player.Zone === -1){
            player.Sprev = C2_LIST[5]
            player.prev = C2_LIST[5]
            player.East = -2,
                player.West = 2,
                player.North = -1,
                player.South = 1,
            player.Zone = -1,
            player.One = C1_LIST[1],
            player.Two = C2_LIST[2],
            player.Three = C2_LIST[5],
            player.Four = C2_LIST[5],
            player.Five = C2_LIST[5],
            player.Six = C2_LIST[5],
            player.Seven = C2_LIST[5],
            player.Eight = C1_LIST[1],
            player.Nine = C2_LIST[5],
            player.Ten = C2_LIST[5],
            player.Eleven = C1_LIST[0],
            player.Twelve = C1_LIST[0],
            player.Thirteen = C1_LIST[0],
            player.Fourteen = C2_LIST[2],
            player.Fifteen = C1_LIST[0],
            player.Sixteen = C2_LIST[2],
            player.Seventeen = C1_LIST[0],
            player.Eighteen = C2_LIST[2],
            player.Nineteen = C1_LIST[0],
            player.Twenty = C1_LIST[0],
            player.Twentyone = C1_LIST[5],
            player.Twentytwo = C2_LIST[5],
            player.Twentythree = C1_LIST[1],
            player.Twentyfour = C2_LIST[5],
            player.Twentyfive = C1_LIST[1],
            player.Twentysix = C2_LIST[5],
            player.Twentyseven = C1_LIST[1],
            player.Twentyeight = C2_LIST[5],
            player.Twentynine = C1_LIST[1],
            player.Thirty = C1_LIST[1],
            player.Thirtyone = C1_LIST[0],
            player.Thirtytwo = C1_LIST[0],
            player.Thirtythree = C1_LIST[0],
            player.Thirtyseven = C1_LIST[0],
            player.Thirtyfive = C1_LIST[0],
            player.Thirtysix = C2_LIST[5],
            player.Thirtyfour = C2_LIST[5],
            player.Thirtyeight = C2_LIST[5],
            player.Thirtynine = C1_LIST[0],
            player.Fourty = C1_LIST[1],
            player.Fourtyone = C2_LIST[5],
            player.Fourtytwo = C2_LIST[5],
            player.Fourtythree = C2_LIST[5],
            player.Fourtyfour = C2_LIST[5],
            player.Fourtyfive = C2_LIST[5],
            player.Fourtysix = C2_LIST[5],
            player.Fourtyseven = C2_LIST[5],
            player.Fourtyeight = C2_LIST[5],
            player.Fourtynine = C2_LIST[2],
            player.Fifty = C1_LIST[3],
            player.L1 = C3_LIST[0],
            player.L2 = C3_LIST[0],
            player.L3 = C3_LIST[0],
            player.L4 = C3_LIST[0],
            player.L5 = C3_LIST[0],
            player.L6 = C3_LIST[0],
            player.L7 = C3_LIST[0],
            player.L8 = C3_LIST[0],
            player.L9 = C3_LIST[0],
            player.L10 = C3_LIST[0],
            player.L11 = C3_LIST[0],
            player.L12 = C3_LIST[0],
            localStorage.setItem('save', JSON.stringify(player)),
        localStorage.setItem('saveU', JSON.stringify(player)),
            player.reset = false}

             if (player.reset == true && player.Zone === 2){
        if (player.reset == true && player.Zone === 2){
            player.Sprev = `<span style='color: #74663b'>.</span>`
            player.prev = `<span style='color: #74663b'>.</span>`
            player.East = 9,
                player.West = -9,
                player.North = 1,
                player.South = -1,
            player.Zone = 2,
            player.One = C1_LIST[0],
        player.Two = C1_LIST[0],
        player.Three = C1_LIST[0],
        player.Four = C2_LIST[0],
        player.Five = C2_LIST[0],
        player.Six = C2_LIST[0],
        player.Seven = C2_LIST[0],
        player.Eight = C2_LIST[0],
        player.Nine = C1_LIST[4],
        player.Ten = C1_LIST[0],
        player.Eleven = C2_LIST[0],
        player.Twelve = C1_LIST[0],
        player.Thirteen = C1_LIST[0],
        player.Fourteen = C2_LIST[0],
        player.Fifteen = C2_LIST[0],
        player.Sixteen = C2_LIST[0],
        player.Seventeen = C1_LIST[0],
        player.Eighteen = C1_LIST[0],
        player.Nineteen = C2_LIST[0],
        player.Twenty = C1_LIST[0],
        player.Twentyone = C1_LIST[3],
        player.Twentytwo = C2_LIST[0],
        player.Twentythree = C2_LIST[0],
        player.Twentyfour = C2_LIST[0],
        player.Twentyfive = C2_LIST[0],
        player.Twentysix = C2_LIST[0],
        player.Twentyseven = C2_LIST[0],
        player.Twentyeight = C1_LIST[0],
        player.Twentynine = C2_LIST[0],
        player.Thirty = C2_LIST[0],
        player.Thirtyone = C2_LIST[0],
        player.Thirtytwo = C1_LIST[0],
        player.Thirtythree = C1_LIST[0],
        player.Thirtyseven = C2_LIST[2],
        player.Thirtyfive = C1_LIST[0],
        player.Thirtysix = C2_LIST[0]
        if (localStorage.getItem('log') === '2') player.Thirtyfour = C2_LIST[2]
        player.Thirtyeight = C1_LIST[0],
        player.Thirtynine = C2_LIST[0],
        player.Fourty = C1_LIST[1],
        player.Fourtyone = C1_LIST[0],
        player.Fourtytwo = C1_LIST[0],
        player.Fourtythree = C1_LIST[0],
        player.Fourtyfour = C1_LIST[4],
        player.Fourtyfive = C2_LIST[0],
        player.Fourtysix = C2_LIST[0],
        player.Fourtyseven = C2_LIST[0],
        player.Fourtyeight = C2_LIST[0],
        player.Fourtynine = C1_LIST[0],
        player.Fifty = C1_LIST[1],
        player.L1 = C3_LIST[2],
        player.L2 = C3_LIST[1],
        player.L3 = C3_LIST[1],
        player.L4 = C3_LIST[1],
        player.L5 = C3_LIST[1],
        player.L6 = C3_LIST[1],
        player.L7 = C3_LIST[1],
        player.L8 = C3_LIST[1],
        player.L9 = C3_LIST[1],
        player.L10 = C3_LIST[1],
        player.L11 = C3_LIST[1],
        player.L12 = C3_LIST[0]
        localStorage.setItem('log1', 1),
        localStorage.setItem('save', JSON.stringify(player)),
        localStorage.setItem('saveU', JSON.stringify(player)),
    player.reset = false}}

        if (player.reset == true && player.Zone === 1){
            if (localStorage.getItem('prevZone') === null || localStorage.getItem('prevZone') === '1') player.East = 0, player.North = 0, player.South = 0
            localStorage.setItem('log', 2) 
            player.Sprev = `<span style='color: #74663b'>.</span>`,
            player.prev = `<span style='color: #74663b'>.</span>`,
        player.Zone = 1,
        player.One = C1_LIST[0],
        player.Two = C1_LIST[0],
        player.Three = C1_LIST[0],
        player.Four = C1_LIST[0],
        player.Five = C1_LIST[0],
        player.Six = C1_LIST[0],
        player.Seven = C1_LIST[0],
        player.Eight = C1_LIST[0],
        player.Nine = C1_LIST[0],
        player.Ten = C1_LIST[0],
        player.Eleven = C1_LIST[0],
        player.Twelve = C2_LIST[0],
        player.Thirteen = C2_LIST[0],
        player.Fourteen = C2_LIST[0],
        player.Fifteen = C2_LIST[0],
        player.Sixteen = C1_LIST[4],
        player.Seventeen = C2_LIST[0],
        player.Eighteen = C2_LIST[0],
        player.Nineteen = C2_LIST[0],
        player.Twenty = C2_LIST[0],
        player.Twentyone = C1_LIST[0],
        player.Twentytwo = C1_LIST[0],
        player.Twentythree = C2_LIST[2],
        player.Twentyfour = C2_LIST[0],
        player.Twentyfive = C1_LIST[1],
        player.Twentysix = C1_LIST[1],
        player.Twentyseven = C1_LIST[0],
        player.Twentyeight = C2_LIST[0],
        player.Twentynine = C2_LIST[0],
        player.Thirty = C2_LIST[0],
        player.Thirtyone = C1_LIST[0],
        player.Thirtytwo = C1_LIST[3],
        player.Thirtythree = C2_LIST[0],
        player.Thirtyfour = C1_LIST[1],
        player.Thirtyfive = C1_LIST[1],
        player.Thirtysix = C1_LIST[1],
        player.Thirtyseven = C1_LIST[0],
        player.Thirtyeight = C1_LIST[0],
        player.Thirtynine = C1_LIST[0],
        player.Fourty = C2_LIST[0],
        player.Fourtyone = C1_LIST[1],
        player.Fourtytwo = C1_LIST[1],
        player.Fourtythree = C1_LIST[1],
        player.Fourtyfour = C1_LIST[1],
        player.Fourtyfive = C1_LIST[1],
        player.Fourtysix = C1_LIST[1],
        player.Fourtyseven = C1_LIST[1],
        player.Fourtyeight = C1_LIST[1],
        player.Fourtynine = C1_LIST[0],
        player.Fifty = C1_LIST[0]
        player.L1 = C3_LIST[0],
        player.L2 = C3_LIST[0],
        player.L3 = C3_LIST[0],
        player.L4 = C3_LIST[0],
        player.L5 = C3_LIST[0],
        player.L6 = C3_LIST[0],
        player.L7 = C3_LIST[0],
        player.L8 = C3_LIST[0],
        player.L9 = C3_LIST[1],
        player.L10 = C3_LIST[1],
        player.L11 = C3_LIST[1],
        player.L12 = C3_LIST[2],
        localStorage.setItem('save', JSON.stringify(player)),
        localStorage.setItem('saveU', JSON.stringify(player)),
        player.reset = false}

        if (player.Zone === 3 && player.interva == true && player.timeX >= 2){
            if (player.Twentyone === C1_LIST[3]){
                localStorage.setItem('prevZone', 3)
                player.Zone = 3
                  save1()
                player.Zone = 2
                import1()}}
                
        if (player.Zone === 2 && player.intervae == true && player.timeX >= 2){
            if (player.Thirty === C1_LIST[3]){
                save1()
                localStorage.setItem('prevZone', 2)
                if (localStorage.getItem('3') !== null && localStorage.getItem('3') !== 'null') return  player.Zone = 3, import1()
                player.Sprev = `<span style='color: #74663b'>.</span>`
                player.prev = `<span style='color: #74663b'>.</span>`
                player.East = 19,
                    player.West = -19,
                    player.North = 1,
                    player.South = -1,
                player.Zone = 3,
                player.One = C1_LIST[0],
                player.Two = C1_LIST[0],
                player.Three = C1_LIST[0],
                player.Four = C2_LIST[0],
                player.Five = C1_LIST[0],
                player.Six = C1_LIST[0],
                player.Seven = C2_LIST[0],
                player.Eight = C1_LIST[0],
                player.Nine = C1_LIST[0],
                player.Ten = C1_LIST[0],
                player.Eleven = C1_LIST[0],
                player.Twelve = C1_LIST[0],
                player.Thirteen = C2_LIST[2],
                player.Fourteen = C2_LIST[0],
                player.Fifteen = C2_LIST[2],
                player.Sixteen = C2_LIST[2],
                player.Seventeen = C2_LIST[0],
                player.Eighteen = C2_LIST[0],
                player.Nineteen = C2_LIST[2],
                player.Twenty = C2_LIST[2],
                player.Twentyone = C1_LIST[3],
                player.Twentytwo = C2_LIST[0],
                player.Twentythree = C2_LIST[0],
                player.Twentyfour = C2_LIST[0],
                player.Twentyfive = C1_LIST[0],
                player.Twentysix = C1_LIST[0],
                player.Twentyseven = C2_LIST[0],
                player.Twentyeight = C1_LIST[0],
                player.Twentynine = C1_LIST[0],
                player.Thirty = C1_LIST[0],
                player.Thirtyone = C2_LIST[0],
                player.Thirtytwo = C2_LIST[0],
                player.Thirtythree = C2_LIST[0],
                player.Thirtyfour = C2_LIST[0],
                player.Thirtyfive = C2_LIST[0],
                player.Thirtysix = C1_LIST[0],
                player.Thirtyseven = C2_LIST[0],
                player.Thirtyeight = C1_LIST[0],
                player.Thirtynine = C1_LIST[0],
                player.Fourty = C1_LIST[0],
                player.Fourtyone = C1_LIST[0],
                player.Fourtytwo = C2_LIST[0],
                player.Fourtythree = C1_LIST[0],
                player.Fourtyfour = C2_LIST[0],
                player.Fourtyfive = C1_LIST[0],
                player.Fourtysix = C1_LIST[0],
                player.Fourtyseven = C1_LIST[4],
                player.Fourtyeight = C1_LIST[0],
                player.Fourtynine = C1_LIST[0],
                player.Fifty = C1_LIST[0]
                player.L1 = C3_LIST[0],
                player.L2 = C3_LIST[0],
                player.L3 = C3_LIST[0],
                player.L4 = C3_LIST[0],
                player.L5 = C3_LIST[0],
                player.L6 = C3_LIST[0],
                player.L7 = C3_LIST[0],
                player.L8 = C3_LIST[0],
                player.L9 = C3_LIST[0],
                player.L10 = C3_LIST[0],
                player.L11 = C3_LIST[0],
                player.L12 = C3_LIST[0]}}

                if (player.Zone === 1 && player.interva == true && player.timeX >= 2){
                    if (player.Fourtyone === C1_LIST[3]){
                        save1()
                        localStorage.setItem('prevZone', 1)
                        if (localStorage.getItem('-1') !== null && localStorage.getItem('-1') !== 'null') return  player.Zone = -1, import1()
                        player.Sprev = C2_LIST[5]
            player.prev = C2_LIST[5]
            player.East = -2,
            player.West = 2,
            player.North = -1,
            player.South = 1,
            player.Zone = -1,
            player.One = C1_LIST[1],
            player.Two = C2_LIST[2],
            player.Three = C2_LIST[5],
            player.Four = C2_LIST[5],
            player.Five = C2_LIST[5],
            player.Six = C2_LIST[5],
            player.Seven = C2_LIST[5],
            player.Eight = C1_LIST[1],
            player.Nine = C2_LIST[5],
            player.Ten = C2_LIST[5],
            player.Eleven = C1_LIST[0],
            player.Twelve = C1_LIST[0],
            player.Thirteen = C1_LIST[0],
            player.Fourteen = C2_LIST[2],
            player.Fifteen = C1_LIST[0],
            player.Sixteen = C2_LIST[2],
            player.Seventeen = C1_LIST[0],
            player.Eighteen = C2_LIST[2],
            player.Nineteen = C1_LIST[0],
            player.Twenty = C1_LIST[0],
            player.Twentyone = C1_LIST[5],
            player.Twentytwo = C2_LIST[5],
            player.Twentythree = C1_LIST[1],
            player.Twentyfour = C2_LIST[5],
            player.Twentyfive = C1_LIST[1],
            player.Twentysix = C2_LIST[5],
            player.Twentyseven = C1_LIST[1],
            player.Twentyeight = C2_LIST[5],
            player.Twentynine = C1_LIST[1],
            player.Thirty = C1_LIST[1],
            player.Thirtyone = C1_LIST[0],
            player.Thirtytwo = C1_LIST[0],
            player.Thirtythree = C1_LIST[0],
            player.Thirtyseven = C1_LIST[0],
            player.Thirtyfive = C1_LIST[0],
            player.Thirtysix = C2_LIST[5],
            player.Thirtyfour = C2_LIST[5],
            player.Thirtyeight = C2_LIST[5],
            player.Thirtynine = C1_LIST[0],
            player.Fourty = C1_LIST[1],
            player.Fourtyone = C2_LIST[5],
            player.Fourtytwo = C2_LIST[5],
            player.Fourtythree = C2_LIST[5],
            player.Fourtyfour = C2_LIST[5],
            player.Fourtyfive = C2_LIST[5],
            player.Fourtysix = C2_LIST[5],
            player.Fourtyseven = C2_LIST[5],
            player.Fourtyeight = C2_LIST[5],
            player.Fourtynine = C2_LIST[2],
            player.Fifty = C1_LIST[3],
            player.L1 = C3_LIST[0],
            player.L2 = C3_LIST[0],
            player.L3 = C3_LIST[0],
            player.L4 = C3_LIST[0],
            player.L5 = C3_LIST[0],
            player.L6 = C3_LIST[0],
            player.L7 = C3_LIST[0],
            player.L8 = C3_LIST[0],
            player.L9 = C3_LIST[0],
            player.L10 = C3_LIST[0],
            player.L11 = C3_LIST[0],
            player.L12 = C3_LIST[0]}}


        if (player.Zone === 1 && player.intervae == true && player.timeX >= 2){
        if (player.Fourty === C1_LIST[3] || player.Thirty === C1_LIST[3] || player.Twenty === C1_LIST[3] || player.L11 === C1_LIST[3]){
            save1()
            localStorage.setItem('prevZone', 1)
            if (player.Fourty === C1_LIST[3]) localStorage.setItem('prev', 1)
            if (player.Thirty === C1_LIST[3]) localStorage.setItem('prev', 2)
            if (player.Twenty === C1_LIST[3]) localStorage.setItem('prev', 3)
            if (player.L11 === C1_LIST[3]) localStorage.setItem('prev', 4)

            if (localStorage.getItem('2') !== null && localStorage.getItem('2') !== 'null') return player.Zone = 2, import1()
            if (player.Fourty === C1_LIST[3]) player.Thirtyone = C1_LIST[3]
            else player.Thirtyone = C2_LIST[0]
            if (player.Thirty === C1_LIST[3]) player.Twentyone = C1_LIST[3]
            else player.Twentyone = C2_LIST[0]
            if (player.Twenty === C1_LIST[3]) player.Eleven = C1_LIST[3]
            else player.Eleven = C2_LIST[0]
        player.Sprev = `<span style='color: #74663b'>.</span>`
            player.prev = `<span style='color: #74663b'>.</span>`
            player.East += 1,
                player.West -= 1,
            player.Zone = 2,
            player.One = C1_LIST[0],
        player.Two = C1_LIST[0],
        player.Three = C1_LIST[0],
        player.Four = C2_LIST[0],
        player.Five = C2_LIST[0],
        player.Six = C2_LIST[0],
        player.Seven = C2_LIST[0],
        player.Eight = C2_LIST[0],
        player.Nine = C1_LIST[4],
        player.Ten = C1_LIST[0],
        player.Twelve = C1_LIST[0],
        player.Thirteen = C1_LIST[0],
        player.Fourteen = C2_LIST[0],
        player.Fifteen = C2_LIST[0],
        player.Sixteen = C2_LIST[0],
        player.Seventeen = C1_LIST[0],
        player.Eighteen = C1_LIST[0],
        player.Nineteen = C2_LIST[0],
        player.Twenty = C1_LIST[0],
        player.Twentytwo = C2_LIST[0],
        player.Twentythree = C2_LIST[0],
        player.Twentyfour = C2_LIST[0],
        player.Twentyfive = C2_LIST[0],
        player.Twentysix = C2_LIST[0],
        player.Twentyseven = C2_LIST[0],
        player.Twentyeight = C1_LIST[0],
        player.Twentynine = C2_LIST[0],
        player.Thirty = C2_LIST[0],
        player.Thirtytwo = C1_LIST[0],
        player.Thirtythree = C1_LIST[0],
        player.Thirtyseven = C2_LIST[2],
        player.Thirtyfive = C1_LIST[0],
        player.Thirtysix = C2_LIST[0]
        player.Thirtyfour = C2_LIST[2]
        player.Thirtyeight = C1_LIST[0],
        player.Thirtynine = C2_LIST[0],
        player.Fourty = C1_LIST[1],
        player.Fourtyone = C1_LIST[0],
        player.Fourtytwo = C1_LIST[0],
        player.Fourtythree = C1_LIST[0],
        player.Fourtyfour = C1_LIST[4],
        player.Fourtyfive = C2_LIST[0],
        player.Fourtysix = C2_LIST[0],
        player.Fourtyseven = C2_LIST[0],
        player.Fourtyeight = C2_LIST[0],
        player.Fourtynine = C1_LIST[0],
        player.Fifty = C1_LIST[1]
        player.L1 = C3_LIST[2],
        player.L2 = C3_LIST[1],
        player.L3 = C3_LIST[1],
        player.L4 = C3_LIST[1],
        player.L5 = C3_LIST[1],
        player.L6 = C3_LIST[1],
        player.L7 = C3_LIST[1],
        player.L8 = C3_LIST[1],
        player.L9 = C3_LIST[1],
        player.L10 = C3_LIST[1],
        player.L11 = C3_LIST[1],
        player.L12 = C3_LIST[0]}}

        if (player.Zone === -1 && player.intervae == true && player.timeX >= 2){
            if (player.Fifty === C1_LIST[3]){
                player.Zone = -1
                localStorage.setItem('prevZone', -1)
                  save1()
                player.Zone = 1
                localStorage.setItem('prev1', 5)
                import1()}
            }
        

        if (player.Zone === 2 && player.interva == true && player.timeX >= 2){
            if (player.Twentyone === C1_LIST[3] || player.Eleven === C1_LIST[3] || player.Thirtyone === C1_LIST[3] || player.L2 === C1_LIST[3]){
                player.Zone = 2
                localStorage.setItem('prevZone', 2)
                  save1()
                  if (player.Thirtyone === C1_LIST[3]) localStorage.setItem('prev1', 1)
                  if (player.Twentyone === C1_LIST[3]) localStorage.setItem('prev1', 2)
                  if (player.Eleven === C1_LIST[3]) localStorage.setItem('prev1', 3)
                  if (player.L2 === C1_LIST[3]) localStorage.setItem('prev1', 4)
                player.Zone = 1
                import1()}
            }
        }
})