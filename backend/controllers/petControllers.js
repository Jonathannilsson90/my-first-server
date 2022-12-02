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
    message: "Success",
    data: petCollection,
  });
};
//          Get pets
// ROUTE    GET /api/pets/:id
const getPetsById = (req, res) => {
  const id = req.params.id * 1;
  const pet = petCollection.find((p) => p.id === id);

  if (!pet) {
    return res.status(400).json({
      status: "failed",
      message: "Unable to find pet-ID",
    });
  }
  res.status(200).json({
    status: "success",
    message: "Pet found",
    data: {
      users: pet,
    },
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
  const petId = req.params.id;

  const petName = req.body.name;

  const newPet = {
    id: petId,
    petName,
  };
  const petIndex = petCollection.findIndex((p) => p.id == petId);
  petCollection[petIndex] = newPet;

  if (req.params.id * 1 > petCollection.length)
    return res.status(400).json({
      status: "failed",
      data: {
        pet: newPet,
      },
    });
};

//          Delete pets
// ROUTE    delete /api/pets/:id
const deletePets = (req, res) => {
  /*   res.status(200).json({ message: `Delete pet ${req.params.id}` }); */
};

module.exports = {
  getPets,
  setPet,
  updatePets,
  deletePets,
  getPetsById,
};
