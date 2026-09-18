# Prøveeksamen, Den Glade Skorpe - Backoffice

## Rapportage, 9/13/2026 - 9/18/2026

###Patryk Michel

---

## Vurdering af egen indsats

### Hvad gik godt?

Minimal backend troubleshooting.
Forholdt mig til tidslinjen og pushede til main mindst 2 gange hver dag.

### Hvad var udfordrende, hvordan løste du det?

Det tog tid at færdiggøre frontenden, når der var meget at implentere og forholde sig til. For at gøre det næmmere for mig selv genbrugte jeg kode. Fx, tog jeg udgangspunkt i en ældre form komponent og tilrettet den xtreme fitness hjemmesiden.

### Hvad ville du gøre anderledes?

Forhindre mig i at føle tidspresset for at holde bedre styr på de kodekonventioner, jeg havde etableret ved starten af opgaven. Det kan fx være mine class names eller at gøre bedre brug af mine root CSS-argumenter.

### Hvordan har du udviklet dig fagligt?

Jeg fik et bedre overblik for backend code og skærpede mit kendskab til de sammenhængende faglige begreber.

## Tidslinje

### 18. august 2026

Opretter GitHub issues og prioritering.
Skriver en rapportage for at dokumentere min arbejdsproces.
Hjemmesiden kodet færdigt og opdelt i komponenter.
Projektopsætning i VSCode.

### 19/23 august 2026

Koder homepage færdig.
Implementer komponenter fra figma filen.
Småt begynder jeg at koble backenden sammen med frontenden.

### 24 august 2026

Laver en login side.
Bygger en admin side der gør brug af CRUD.
Finpudser det sidste og tilretter styling.
Tjekker om backenden er rigtigt opsat, og bekræfte at der er forbindelse til frontenden.

### Tech stack

Projektet er lavet med React og vanilla CSS med komponentbaseret struktur. Planen var at bruge SCSS, men ændrede mening for ikke at gøre det sværere for mig selv, da jeg ikke er lige så bekendt med det.

Der er 4 NPM dependencies:

react
react-dom
react-icons
react-router-dom

### Faglige valg og dokumentation

Som sagt er der tale om en react projekt. Jeg anvender en komponent baseret struktur for at forholde siden dynamisk og komponenterne genadvendige.

API'et håndteres med hooks, useCRUD og useFetch. Derudover er der en authenticator, som tjekker, om brugeren er logget ind, før de kan redigere i backoffice via authContext.

### Valgfri opgaver

Jeg valgte at implementere login siden.

### Anvendelse af tredjepart og AI

Søgte inspiration fra et Github-projekt, som stemte overens med vores prøveeksamen. Jeg studerede den for at gøre mig klogere på, hvordan jeg selv kan løse opgaven.

Der er blevet brugt AI til at rette nogle fejl såsom i backoffice og CSS-moduler og deres tilhørende komponenter. Button-komponenten fx, for at gøre den mere dynamisk og genanvendelig.

---

Rapporten er skrevet færdig den 8/24/2026.
