use("own_business");

// Updation Examples

db.services.updateOne(
 { name: "Flower Decoration" },
 { $set: { "price_range.min": 15000 } }
)

db.services.updateMany(
 { $and: [ { name: "Veg Catering Service" } ] },
 { $set: { "price_range.min": 500, "price_range.max": 2000 } }
)

db.services.updateOne(
 { name: "Non-Veg Catering Service" },
 { $set: { "price_range.min": 1000, "price_range.max": 3000 } }
)

db.services.updateMany(
    {category: "Tent House"},
    {$push: {tags: "Ring Ceremony"}}
)