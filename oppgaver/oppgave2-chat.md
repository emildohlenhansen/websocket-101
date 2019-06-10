# Oppgave chat

## Del 1

### Backend

#### 1) Legg til chattefunksjonalitet

Åpne filen `backend/server.ts`

Opprett et globalt array av typen`Message[]` som kan holde på chattemeldinger.

Koble socket til rommet `chat`.

Lag en eventlytter for eventer med id `message`, som tar imot den nye meldingen av typen `userMessage`. Legg den deretter til i listen over meldinger.

Send den nye listen av chattemeldinger til alle medlemmer av rommet `chat`.

### Frontend

Åpne filen `frontend/Chat.js`.

#### 1) Ta imot meldinger

Sett opp socketen til å lytte på events på id `messages`, og list ut de mottatte meldingene i vis. 

Gi chattemeldinger klassen `my-message` dersom socket.id og message.id er like slik at det blir tydelig hvilke meldinger som er fra deg og hvilke som er fra andre.

#### 2) Send meldinger

La brukeren sende chattemeldinger til alle brukere i rommet `chat` ved klikk på "Send melding"-knappen.

Ved klikk, send en event med id `message` og data til socketen. Husk at dataen må stemme overns med interfacet `userMessage`.

