# Oppgave chat

## Del 1

### Backend

#### 1) Legg til chattefunksjonalitet

Opprett et global array av typen`Message[]` som kan holde på chattemeldinger.

Koble socket til rommet `chat`.

Lag en eventlytter for broadcasts med id `message`.

Ta i mot den nye meldingen av typen `userMessage`, koble den mot brukeren og legg den til i listen over meldinger.

Broadcast den nye listen av chattemeldinger til alle medlemmer av rommet `chat`.

### Frontend

// TODO
