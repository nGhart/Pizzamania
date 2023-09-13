const createRabbit = asyncHandler(async (req, res) => {
  const {
    nameRabbit,
    sex,
    dob,
    bred,
    breed,
    dame,
    sire,
    grandDame,
    grandSire,
    weaning,
    weightBirth,
    weightWean,
    weightEight,
    weightCurrent,
    weightSale,
    firstService,
    totalService,
    totalLitters,
    totalKits,
    aliveKits,
    deadKits,
    soldKits,
    butcheredKits,
    picRabbit,
  } = req.body;

  if (!nameRabbit || !sex || !dob || !bred || !dame || !sire) {
    res.status(400);
    throw new Error('Please fill required fields');
  } else {
    const rabbit = new Rabbit({
      user: req.user._id,
      nameRabbit,
      sex,
      dob,
      bred,
      breed,
      dame,
      sire,
      grandDame,
      grandSire,
      weaning,
      weightBirth,
      weightWean,
      weightEight,
      weightCurrent,
      weightSale,
      firstService,
      totalService,
      totalLitters,
      totalKits,
      aliveKits,
      deadKits,
      soldKits,
      butcheredKits,
      picRabbit,
    });
    const createdRabbit = await rabbit.save();
    res.status(201).json(createdRabbit);
  }
});
