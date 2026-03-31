use("own_business");

db.services.find({ category: "Catering" })

db.services.find({ ratings: { $gt: 4.5 } })

db.services.find({ price_range: { $gte: 15000, $lte: 50000 } } )

db.services.find({ tags: "wedding" })

db.services.find({ name: /Decoration/ })

db.services.find().sort({ ratings: -1 }).limit(3)

db.services.find().sort({ ratings: -1 }).skip(2).limit(3)

