// Our Service Catalog

use ('own_business');

db.dropDatabase();

db.services.insertMany([
{
    name: "Live Cooking Counter",
    category: "Catering",
    price_range: { min: 10000, max: 50000 },   // per counter
    ratings: 4.7,
    tags: ["live station", "interactive", "chef on site"],
    createdAt: new Date()
},
{
 name: "Flower Decoration",
 category: "Tent House",
 price_range: { min: 10000, max: 50000 },
 ratings: 4.6,
 tags: ["wedding", "stage decor", "mandap"],
 createdAt: new Date()
},
{
 name: "Light Decoration",
 category: "Tent House",
 price_range: { min: 8000, max: 30000 },
 ratings: 4.5,
 tags: ["LED lights", "outdoor lights"],
 createdAt: new Date()
},
{
 name: "Balloon Decoration",
 category: "Party Decoration",
 price_range: { min: 5000, max: 20000 },
 ratings: 4.4,
 tags: ["birthday", "anniversary"],
 createdAt: new Date()
},
{
 name: "Mandap Decoration",
 category: "Wedding Special",
 price_range: { min: 20000, max: 100000 },
 ratings: 4.8,
 tags: ["royal setup", "traditional decor"],
 createdAt: new Date()
},
{
 name: "Outdoor Lawn Setup",
 category: "Lawn",
 price_range: { min: 30000, max: 150000 },
 ratings: 4.7,
 tags: ["garden wedding", "night event"],
 createdAt: new Date()
},
{
 name: "Veg Catering Service",
 category: "Catering",
 price_range: { min: 400, max: 1200 },   // per plate
 ratings: 4.6,
 tags: ["pure veg", "buffet"],
 createdAt: new Date()
},
{
 name: "Non-Veg Catering Service",
 category: "Catering",
 price_range: { min: 600, max: 1500 },   // per plate
 ratings: 4.8,
 tags: ["chicken", "biryani"],
 createdAt: new Date()
},
{
 name: "Banquet Hall Booking",
 category: "Banquet",
 price_range: { min: 50000, max: 300000 },
 ratings: 4.9,
 tags: ["AC hall", "wedding", "party"],
 createdAt: new Date()
}
])

// Contact Information

db.contact.insertMany([
{
 name: "Rohit Sharma",
 message: "Mujhe wedding catering aur flower decoration ke liye quotation chahiye.",
 phone: "9876543210",
 service_interest: "Wedding Catering",
 event_date: new Date("2026-04-25"),
 createdAt: new Date()
},
{
 name: "Priya Singh",
 message: "Banquet hall booking ke charges kya hain?",
 phone: "9123456789",
 service_interest: "Banquet Hall",
 event_date: new Date("2026-05-10"),
 createdAt: new Date()
},
{
 name: "Aman Verma",
 message: "Birthday party ke liye balloon decoration available hai kya?",
 phone: "9988776655",
 service_interest: "Balloon Decoration",
 event_date: new Date("2026-03-18"),
 createdAt: new Date()
},
{
 name: "Neha Gupta",
 message: "Outdoor lawn wedding package ka full details bhejiye.",
 phone: "9012345678",
 service_interest: "Outdoor Lawn Setup",
 event_date: new Date("2026-06-15"),
 createdAt: new Date()
}
]);

//Insert Orders

db.orders.insertMany([
{
 orderId: "ORD001",
 user: "Rohit Sharma",
 services: [
   { name: "Wedding Catering (Veg)", quantity: 300, price: 800 },
   { name: "Flower Decoration", quantity: 1, price: 40000 }
 ],
 total: 280000,
 status: "Delivered",
 createdAt: new Date()
},
{
 orderId: "ORD002",
 user: "Priya Singh",
 services: [
   { name: "Banquet Hall Booking", quantity: 1, price: 150000 },
   { name: "Light Decoration", quantity: 1, price: 25000 }
 ],
 total: 175000,
 status: "Pending",
 createdAt: new Date()
},
{
 orderId: "ORD003",
 user: "Aman Verma",
 services: [
   { name: "Balloon Decoration", quantity: 1, price: 15000 },
   { name: "Live Cooking Counter", quantity: 2, price: 10000 }
 ],
 total: 35000,
 status: "Confirmed",
 createdAt: new Date()
}
]);

