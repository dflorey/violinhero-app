# Violin Hero's samples

Made by `npm run samples` (`scripts/make-samples.mjs`), which downloads them from their sources.

- `piano/` — the **Salamander Grand Piano** by Alexander Holm, licensed under
  [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), as the MP3s hosted by Tone.js
  (https://tonejs.github.io/audio/salamander/), unchanged.
- `upright1/` — **Upright Nr1** from VSCO 2 Community Edition by Versilian Studios (CC0): pp, mf
  and f at every C and G from C1 to G7, mixed to mono, resampled to 32 kHz, trimmed from the onset
  until it dies away (shorter for higher keys), faded, normalised, MP3 at 112 kbps
  (`<key>-<layer>.mp3`, MIDI key, layer 1 the softest).
- `upright2/` — **Upright Piano** from VSCO 2 Community Edition, sampled by Simon Dalzell of Ivy
  Audio (Versilian Studios grants the right to redistribute it; credit to both is encouraged):
  three dynamics every major third, made as `upright1/`.
- `violin/` — the solo violin of **VSCO 2 Community Edition** by Versilian Studios
  (https://github.com/sgossner/VSCO-2-CE), released under
  [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/): arco with vibrato, p and f
  (`<note>-p|f.wav`), mixed to mono, resampled to 32 kHz, cut to 4.5 s, crossfaded so that they
  loop from 1.2 s, normalised, with each note's own recorded ending cut from the same recording
  (`release-<note>-p|f.wav`); pizzicato (`pizz-<note>-p|f-1|2.wav`, where VSCO has them) and
  tremolo (`trem-<note>-p|f.wav`, made loopable, renamed an octave up like spiccato), listed with
  the rest in `index.json` for the engine; and spiccato, p and f with two round robins each
  (`spic-<note>-p|f-1|2.wav`, renamed an octave up: VSCO names them an octave low), cut where
  they have died away and faded out.
