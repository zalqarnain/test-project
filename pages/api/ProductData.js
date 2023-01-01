export default function handler(req, res) {
    res.status(200).json([
      {
        id: 1,
        title: "Pavo CVI",
        date: "12/10/2021",
      },
      {
        id: 2,
        title: "Pavo DVI",
        date: "11/11/2021",
      },
      {
        id: 3,
        title: "Assettag",
        date: "5/09/2020",
      },
      {
        id: 4,
        title: "DeepRoad",
        date: "12/10/2021",
      },
      
    ]);
  }