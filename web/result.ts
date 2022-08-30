interface Props {
  documentation: boolean;
  endDate: string;
  startDate: string;
  transportation: boolean;
  massType: "Sprengstein" | "Pukk" | "Grus";
  price: number;
  project: {
    name: string;
  };
}

const result = [
  {
    _createdAt: "2021-08-31T07:21:12Z",
    _id: "3ed111df-81ae-43d5-b188-10d47e62bf2f",
    _rev: "dWFfJLCovGPkcwYl22OdzZ",
    _type: "availableMass",
    _updatedAt: "2021-08-31T07:26:40Z",
    documentation: true,
    endDate: "2022-08-12",
    massType: "Sprengstein",
    price: 50,
    project: {
      name: "Helgeland sør",
    },
    startDate: "2022-08-08",
    transportation: true,
  },
  {
    _createdAt: "2021-08-31T07:27:39Z",
    _id: "a130a963-7cf5-4f56-8116-e2708b317e10",
    _rev: "dWFfJLCovGPkcwYl22Oi1F",
    _type: "availableMass",
    _updatedAt: "2021-08-31T07:27:39Z",
    documentation: false,
    endDate: "2022-08-19",
    massType: "Pukk",
    price: 10,
    project: {
      name: "Helgeland sør",
    },
    startDate: "2022-08-14",
    transportation: true,
  },
  {
    _createdAt: "2021-08-31T07:26:12Z",
    _id: "af7d3476-e53c-427b-8ccf-5642399da581",
    _rev: "dWFfJLCovGPkcwYl22Oa3R",
    _type: "availableMass",
    _updatedAt: "2021-08-31T07:26:12Z",
    documentation: true,
    endDate: "2022-08-05",
    massType: "Naturgrus",
    price: 50,
    project: {
      name: "Helgeland sør",
    },
    startDate: "2022-08-01",
    transportation: false,
  },
  {
    _createdAt: "2021-08-31T07:27:07Z",
    _id: "c2bb0399-c3a5-4e3f-a2e0-9c1bff72340b",
    _rev: "PaYypp5eJ3aGfBF2x9BR4R",
    _type: "availableMass",
    _updatedAt: "2021-08-31T07:27:07Z",
    documentation: false,
    endDate: "2021-08-04",
    massType: "Grus",
    price: 20,
    project: {
      name: "Helgeland sør",
    },
    startDate: "2022-08-02",
    transportation: false,
  },
];
