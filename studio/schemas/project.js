export default {
  name: "project",
  type: "document",
  title: "Prosjekt",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Prosjektnavn",
    },
    {
      name: "company",
      type: "string",
      title: "Bedrift",
    },
    {
      name: "location",
      type: "geopoint",
      title: "Lokasjon",
    },
  ],
};
