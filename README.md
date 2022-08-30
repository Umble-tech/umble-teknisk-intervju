# Teknisk intervju med Umble

Oppgaven i dag, blir å implementere en utsnitt av plattformen til Massflow. En tjeneste som selger grus, pukk og andre løsmasser på nett.

*Designskisser kan hentes [her](https://www.figma.com/file/dBl1AyxziLdH3rOjtkj883/Umble-teknisk-intervju?node-id=0%3A1)*

Oppgavene er som følger:
- Kode opp grensesnittet du ser i Figma.
- Hente reell data fra Sanity (API) (*[Dokumentasjon](https://www.sanity.io/docs/js-client)* `projectID: elxpf1tu` `dataset: production`)
- Implementere filteret du ser øverst i designet.

## Filer i prosjektet
Vedlagt i `web`-mappen finner du en fil som heter `styles/variables.css`. Der kan du finne design tokens eksportert fra Figma.

`studio`-mappen tar seg av oppsettet av APIet, denne trenger du ikke å bry deg om i dagens oppgave.

Ellers står du fritt til å opprette så mange filer og mapper du vil. Og du velger tech stacken helt selv.

## API-eksempel
Et kall til APIet for å hente ut ledige masse, vil kunne gi dette:
```
{
  "_createdAt": "2021-08-31T07:27:39Z",
  "_id": "a130a963-7cf5-4f56-8116-e2708b317e10",
  "_rev": "dWFfJLCovGPkcwYl22Oi1F",
  "_type": "availableMass",
  "_updatedAt": "2021-08-31T07:27:39Z",
  "documentation": false,
  "endDate": "2022-08-19",
  "massType": "Pukk",
  "price": 10,
  "project": {
    "_ref": "c5e8c340-a987-4fc3-be06-7c5788b69acd",
    "_type": "reference"
  },
  "startDate": "2022-08-14",
  "transportation": true
}
```
