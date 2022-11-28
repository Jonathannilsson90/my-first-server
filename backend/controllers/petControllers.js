var petCollection = [
  {
    id: "1",
    name: "Olov",
  },
];

//          Get pets
// ROUTE    GET /api/pets
const getPets = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Pet found!",
    data: petCollection,
  });
};

//          set pets
// ROUTE    POST /api/pets/:id
const setPet = (req, res) => {
  const name = {
    id: petCollection.length + 1,
    name: req.body.name,
  };
  petCollection.push(name);
  res.send(name);
};

//          Update pets
// ROUTE    PUT /api/pets
const updatePets = (req, res) => {
  res.status(200).json({ message: `Update pet ${req.params.id}` });
};

//          Delete pets
// ROUTE    delete /api/pets/:id
const deletePets = (req, res) => {
  res.status(200).json({ message: `Delete pet ${req.params.id}` });
};

module.exports = {
  getPets,
  setPet,
  updatePets,
  deletePets,
};
