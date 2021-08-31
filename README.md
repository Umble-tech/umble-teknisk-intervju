# umble-teknisk-intervju
Oppgaver til teknsik intervju med Umble

1. Layout
2. Hente data fra Sanity (projectID: elxpf1tu, dataset: production)

3. Implementere filteret

Design-skisser kan hentes [her](https://www.figma.com/file/dBl1AyxziLdH3rOjtkj883/Umble-teknisk-intervju?node-id=0%3A1)

```
  {
    name: "massType",
    type: "string",
  },
  {
    name: "project",
    type: {
      {
        name: "name"
        type: "string"
      },
      {
        name: "company",
        type: "string"
      }
    }
  },
  {
    name: "startDate",
    type: "date",
  },
  {
    name: "endDate",
    type: "date",
  },
  {
    name: "price",
    type: "number",
  },
  {
    name: "documentation",
    type: "boolean",
  },
  {
    name: "transportation",
    type: "boolean",
  },
```
