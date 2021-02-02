db.trips.aggregate([
  {
    $group: {
      _id: "$usertype",
      duracaoMedia: {
        $avg: { $subtract: ["$stopTime", "$startTime"] },
      },
    },
  },
  {
    $project: {
      _id: false,
      tipo: "$_id",
      duracaoMedia: {
        $round: [
          { $divide: ["$duracaoMedia", 3.6e+6] }, 2,
        ],
      },
    },
  },
  {
    $sort: { duracaoMedia: 1 },
  },
]);
