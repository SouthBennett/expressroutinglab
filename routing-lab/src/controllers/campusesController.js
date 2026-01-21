
// controllers/campusesController.js

export const campuses = [
  { id: 1, code: "AUB", name: "Auburn Campus", city: "Auburn", open: true, programs: ["CS", "IT", "Nursing"] },
  { id: 2, code: "KCC", name: "Kent Campus", city: "Kent", open: true, programs: ["CS", "Business"] },
  { id: 3, code: "SEA", name: "Seattle Center", city: "Seattle", open: false, programs: ["Continuing Ed"] },
  { id: 4, code: "TAC", name: "Tacoma Site", city: "Tacoma", open: true, programs: ["Trades", "IT"] },
  { id: 5, code: "REN", name: "Renton Annex", city: "Renton", open: false, programs: ["ESL", "GED"] }
];

export const campusesById = (req, res) => {
  const id = Number(req.params.id); // convert to number

  const campus = campuses.find((el) => el.id === id);

  if (campus) {
    return res.status(200).json({ campus }); // 
  }

  return res.status(404).json({ message: "campus not found" }); 
};

export const search = (req, res) => {
    const { city, open, program } = req.query;

    let results = campuses

    if(program) {
        results = results.filter(el => el.programs.includes(program));
    }
    if (open) {
        results = results.filter(el => el.open === open);
    }
    if (city) {
        results = results.filter(el => el.city === city);
    }

    res.status(200).json(results)
}

// export { campuses };
