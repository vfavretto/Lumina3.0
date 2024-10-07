use("lumina");
db.empresas.find({
  local: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [-46.7162, -23.6918],
      },
      $maxDistance: 50000, // 50 km
    },
  },
});

use("lumina");
db.empresas.find({
  local: {
    $geoWithin: {
      $geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-46.629, -23.5691],
            [-43.8947, -19.8492],
            [-46.5, -23.5],
            [-44.0, -23.5],
            [-46.629, -23.5691],
          ],
        ],
      },
    },
  },
});
