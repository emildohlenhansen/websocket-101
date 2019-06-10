# Oppgave spillerliste

## Del 1

### Backend

#### 1) Legg til spillere

Gjør endringer i `backend/server.ts`

Koble socketen til rommet `players`. Dette kan gjøres ved hjelp av funksjonen `socket.join(..)`

Lag ett globalt array `players` av typen `Player[]`, der nye spillere legges til ved tilkobling. Bruk `socket.id` som `id` for en den nye spilleren.

Send ut den oppdaterte spillerlisten til de andre spillerne som er tilkoblet `players` rommet. Bruk eventnavn `playerlist`
eks:

```
io.to(navn på rom).emit(EVENT_NAVN, oppdatertSpillerArray)
```

### Frontend

#### 2) Vis spillere

Gjør endringer i `frontend/src/PlayerList.js`

Legg til en mottaker funksjon som lytter på hendelsen `playerlist`.

```
socket.on(EVENT_NAVN, players => {
    /* lagre den oppdaterte spiller listen i f.eks en hook */
  });
```

Map over og vis alle spillerne som ligger i listen

```
<section className="player-list">
    <dl>
        {players.map(player => (
            <dt>
                /* SPILLER ID */
            </dt>
          ))}
    </dl>
</section>
```

**BONUS:** Utmerk/Marker den spiller id'en som tilhører din klient. Her kan man bruke `socket.id` for å hente ut id som er knyttet til din klient. Du kan bruke css-klassen `.this-is-me` på den `<dt>` som innkapsulerer den aktuelle id'en.

## Del 2

### Backend

#### 1) Legg til kallenavn

Gjør endringer i `backend/server.ts`

Opprett en lytter på eventet `nickname`, som tar imot parameteret `player` av typen `Player`. Oppdater `Players` arrayet slik at kallenaven blir lagt til på den aktuelle spilleren.

Deretter kan du sende ut den oppdaterte spillerlisten til de andre spillerne som er tilkoblet `players` rommet. Bruk eventnavn `playerlist`

### Frontend

#### 2) Send inn kallenavn

Gjør endringer i `frontend/src/PlayerList.js`

Utvid `PlayerList` komponenten slik at brukeren kan skrive og sende inn sitt kallenavn. bruk eventnavn `nickname` og send inn ett object av formatet
`{id, nickname}`
