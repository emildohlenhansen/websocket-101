# Oppgave spillerliste

## Del 1

### Backend

#### 1) Legg til spillere

Gjør endringer i `backend/server.ts`

Koble socketen til rommet `players`. Dette kan gjøres ved hjelp av funksjonen `socket.join(..)`

Lag ett globalt array `players` av typen `Player[]`, der nye spillere legges til ved tilkobling. Bruk `socket.id` som `id` for en den nye spilleren.

Send ut den oppdaterte spillerlisten til de andre spillerne som er tilkoblet `players` rommet. Bruk emit meldingen `playerlist`
eks:

```
io.to(navn på rom).emit('emit_melding', oppdatertSpillerArray)
```

### Frontend

#### 2) Vis spillere

Gjør endringer i `frontend/src/PlayerList.js`

Legg til en mottaker funksjon som lytter på endringer av typen `playerlist`.

```
socket.on(EMIT_MELDING, players => {
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

**BONUS:** Utmerk/Marker den spiller id'en som tilhører din klient. Her kan man bruke `socket.id` for å hente ut id som er knyttet til din klient. Du kan bruke css-klassen `this-is-me` på den `<dt>` som innkapsulerer den aktuelle id'en.

## Del 2

// TODO: Legg til beskrivelse for opprettelse av nickname
