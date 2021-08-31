export default {
  name: "availableMass",
  type: "document",
  title: "Ledig masse",
  fields: [
    {
      name: "massType",
      title: "Type på massen",
      type: "string",
      options: {
        list: ["Sprengstein", "Naturgrus", "Grus", "Pukk"],
      },
    },
    {
      name: "project",
      type: "project",
      type: "reference",
      to: [{ type: "project" }],
    },
    {
      name: "startDate",
      type: "date",
      title: "Kan hentes fra:",
    },
    {
      name: "endDate",
      type: "date",
      title: "Kan hentes til:",
    },
    {
      name: "price",
      type: "number",
      title: "Pris",
      description: "Oppgitt i pris per m^3",
    },
    {
      name: "documentation",
      type: "boolean",
      title: "Er dokumentasjon tilgjengelig?",
    },
    {
      name: "transportation",
      type: "boolean",
      title: "Kan massen transporteres av selger?",
    },
  ],
};
