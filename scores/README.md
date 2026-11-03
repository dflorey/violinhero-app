# Violin Hero's scores

Public-domain works for violin and piano (composers who died long enough ago, or traditional
music), each engraved on musescore.com by a user who released the score under
[CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). Taken from
[PDMX](https://zenodo.org/records/15571083) (the public-domain MusicXML of musescore.com) and
unpacked by `npm run scores` (`scripts/make-scores.mjs`, which lists each file's PDMX path).
Uploads of works still under copyright (modern pop and film music, Kreisler, recent hymns) are
left out, even where marked CC0: the uploader's licence covers the engraving, not the music.

One score is transcribed rather than taken from PDMX: `thais.musicxml`, Massenet's Méditation
from Thaïs in Martin Marsick's arrangement for violin and piano (both died over 100 years ago),
from the public-domain edition scanned on IMSLP (IMSLP04323). It was written bar by bar in a
compact notation and generated as MusicXML, checked against the scan, so a wrong note is
possible; the inner voices of bars 32–37 and the closing chords (bars 65–71) are the least sure.

One score was supplied as a MusicXML file: `czardas.musicxml`, Monti's Czardas (Monti died in
1922) in Richard Czerwonky's edition, as engraved on musescore.com, unpacked by `npm run scores`
from `sources/czardas-by-vittorio-monti.mxl` (not published itself).

The pieces by genre, as `src/pieces.ts` lists them with their titles, composers and levels:

- **Baroque**: Bach (Air on the G String, Arioso), Vivaldi (Largo cantabile, Summer), Purcell
  (Shepherd, Leave Decoying), F. Benda (Tempo di Menuetto), Vitali (Chaconne, arr. Charlier)
- **Classical**: Beethoven (Minuet in G, Kreutzer Sonata 1st mvt., Adagio), Schubert
  (Sonatina Op. 137 No. 1), Mozart (Sonata KV 14)
- **Romantic**: Bach / Gounod (Ave Maria), Saint-Saëns (Le Cygne), Tchaikovsky (Mélodie), Elgar
  (Salut d'Amour), Dvořák (Romance Op. 11), Schumann (The Happy Farmer), Mascagni (Intermezzo),
  Drdla (Souvenir), Bohm (La Zingana), L. Boulanger (Nocturne), Massenet (Méditation from
  Thaïs, arr. Marsick), Monti (Czardas), Rieding (Concerto in B minor,
  3rd mvt.), Dancla (Variations on a Theme by Pacini), Frank Bridge (Cradle Song), Ravel
  (Berceuse sur le nom de Fauré)
- **Folk**: The Irish Washerwoman, Morrison's Jig, Drunken Sailor (traditional), Niel Gow's
  Lament, Battle Cry of Freedom (G. F. Root)
- **Carols & hymns**: The First Noel, Angels We Have Heard on High (traditional), Silent Night
  (Gruber), Jingle Bells (Pierpont), And Can It Be (Campbell), From Heav'n O Praise the Lord
  (Palmer)
- **Études**: Wohlfahrt, Op. 45 Nos. 1–8
