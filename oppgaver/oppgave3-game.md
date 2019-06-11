# Oppgave Musepekerspill
I denne oppgaven skal vi sende og motta koordinater, 
og tegne opp musepekeren til alle klientene som er koblet til serveren.

## Del 1: sende og motta posisjoner
### Frontend
#### 1) Sende posisjon til serveren

Gjør endringer i fila `frontend/src/Game.js`

Oppdater metoden `mouseMove()` til å sende posisjon til serveren


### Backend
#### 2) Ta i mot posisjon.

Gjør endringer i fila `backend/server.ts`

Koble socketen til rommet `game`

Lag en eventlytter, denne lytteren skal
- Ta imot posisjonen du sendte i `1)` 
- Legge til posisjonen på lista `players` (som du opprettet i `oppgave1-spilleliste`)
- Sende en ny melding med `players` til alle i rommet `game`

## Del 2
### Frontend
#### 1) Tegn opp alle posisjonene

Ta imot meldingen med `players` og tegn opp alle posisjonene i `canvaset`

For å få hver bruker til å få forskjellig farge kan du bruke ColorHelper.js
```
context.fillStyle = ColorHelper.hashColor(player.id);
```

##Del 3: Optimalisering
### Frontend
#### 1)
Det kan hende du opplever at musepekeren lagger til tider,
og det er tre vanlige årsaker til dette:
1. Du bruker `console.log()` og det hoper seg opp med meldinger i nettleseren
2. X og Y koordinatene vises med desimalpresisjon, og dette fører til at 
det sendes veldig mange kall.
3. Man sender melding selv om ikke koordinatene har endret seg

Problem 2 og 3 kan man løse på flere måter, men her er et lite hint til deler av koden vi brukte:
```
Math.abs(xPostion - x) > updateRate
```

##Del 4: Kreativ oppgave :)
Du har nå vært gjennom alle oppgavene vi har satt opp. Bra jobba!

Nå har du en godt grunnlag til å lage mye kult!

Her er litt inspirasjon til hva du kan lage videre:

### - 'Dodge ball'
Lag et spill hvor man kan klikke på andre musepekere så de forsvinner! Den som er igjen til sist vinner!

### - 'Briefcase' 

Lag et spill hvor man kjemper om å holde en 'koffert' lengst mulig!

Man starter med en 'koffert' på en tilfeldig posisjon i canvaset. 
De som klikker på kofferten først plukker den opp.

For hvert sekund man holder kofferten får man ett poeng.


Om man blir klikket på av noen andre stjeler de kofferten fra deg.

### - Tegnespill
Man kan tegne i canvaset :)

Du kan lage det mer avansert om det er én person som er
 'tegnemester' og får et tilfeldig ord man skal tegne, 
 så gjetter alle i chatten hva ordet er. Gjetter man rett får man poeng.

### - Splatoon
Del alle spillerne inn i to lag, så skal hvert lag forsøke å dekke mest 
mulig av canvaset med 'sin lagfarge'
