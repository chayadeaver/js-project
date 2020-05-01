# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Menu.destroy_all
Item.destroy_all

# Menu
breakfast, lunch, dinner = Menu.create([
  {name: "Breakfast"}, {name: "Lunch"}, {name: "Dinner"}
])

# Breakfast Items

breakfast.items.create([
  {
    name: "Hot Coffee", 
    price: 1.50,
    description: "Hot coffee brewed via French press method served in a 12oz mug.",
    image_url: "assets/images/hot-coffee.jpg"
  },
  {
    name: "Iced Coffee", 
    price: 2.00,
    description: "Coffee brewed double-strength via French press method served in 16oz glass over ice.",
    image_url: "assets/images/iced-coffee.jpg"
  },
  {
    name: "Hot Tea", 
    price: 1.50, 
    description: "Hot English Breakfast tea served in 12oz mug.",
    image_url: "assets/images/hot-tea.jpg"
  },
  {
    name: "Butter Croissant", 
    price: 2.00, 
    description: "Flaky, layered French pastry.",
    image_url: "assets/images/butter-croissant.jpg"
  },
  {
    name: "Chocolate Croissant", 
    price: 2.25, 
    description: "Flaky, layered French pastry stuff with semi-sweet chocolate.",
    image_url: "assets/images/chocolate-croissant.jpg"
  },
  {
    name: "Strawberry Croissant", 
    price: 2.25, 
    description: "Flaky, layered French pastry filled with strawberry jam and whipped cream.",
    image_url: "assets/images/strawberry-croissant.jpg"
  },
  {
    name: "Blueberry Muffin", 
    price: 2.25, 
    description: "Blueberry muffin with streusel topping and served warm.",
    image_url: "assets/images/blueberry-muffin.jpg"
  },
  {
    name: "Lemon Poppy Seed Muffin", 
    price: 2.25, 
    description: "Lemon poppy seed muffin.",
    image_url: "assets/images/lemon-poppyseed-muffin.jpeg"
  },
  {
    name: "Chocolate Chip Muffin", 
    price: 2.25, 
    description: "Muffin filled with semi-sweet chocolate chunks",
    image_url: "assets/images/chocolate-chip-muffin.jpg"
  },
  {
    name: "Blueberry Scone", 
    price: 2.25, 
    description: "Buttery, crumbly blueberry scone",
    image_url: "assets/images/blueberry-scone.jpg"
  },
  {
    name: "Cranberry Orange Scone", 
    price: 2.25, 
    description: "Buttery, crumbly scone filled with cranberries and infused with orange zest.",
    image_url: "assets/images/Cranberry-Orange-Scones-1.jpg"
  },
  {
  name: "Vanilla Bean Scone", 
  price: 2.25, 
  description: "Vanilla bean scone with a light vanilla glaze.",
  image_url: "assets/images/vanilla_bean_scone.jpg"
  }
])

# Lunch Items

lunch.items.create([
  {
    name: "Iced Tea", 
    price: 2.00, 
    description: "Black tea brewed double strength served over ice in 16oz glass.",
    image_url: "assets/images/iced-tea.jpg"
  },
  {
    name: "Fountain Drinks", 
    price: 2.00, 
    description: "Coke, Diet Coke, Sprite, Barq's Root Beer, and Lemonade",
    image_url: "assets/images/soda.jpg"
  },
  {
    name: "Chips and Salsa", 
    price: 2.25, 
    description: "Homemade corn tortilla chips served with fresh tomato salsa.",
    image_url: "assets/images/chips-and-salsa.jpg"
  },
  {
    name: "Spinach Artichoke Dip", 
    price: 4.75, 
    description: "Creamy spinach artichoke topped with crunchy onion pieces and served with pita bread.",
    image_url: "assets/images/spinach-artichoke-dip.jpg"
  },
  {
    name: "Guacamole", 
    price: 3.50, 
    description: "Homemade guacamole served with homemade corn tortilla chips.",
    image_url: "assets/images/guacamole.jpg"
  },
  {
    name: "Zucchini Hummus", 
    price: 3.75, 
    description: "Housemade hummus made with grilled zuchinni instead of chickpeas.",
    image_url: "assets/images/zucchini-hummus.jpg"
  },
  {
    name: "Potato Chips", 
    price: 2.50, 
    description: "Housemade potato chips tossed in coarse salt.",
    image_url: "assets/images/potato-chips.jpg"
  },
  {
    name: "Tortilla Chips", 
    price: 2.50, 
    description: "Tortilla chips fried to order.",
    image_url: "assets/images/tortilla-chips.jpg"
  },
  {
    name: "Fries", 
    price: 2.50, 
    description: "Hand-cut fries served with housemade ketchup.",
    image_url: "assets/images/french_fries_in_paris_517260.jpg"
  },
  {
    name: "Onion Rings", 
    price: 2.50, 
    description: "Beer-battered onion rings served with horseradish dipping sauce.",
    image_url: "assets/images/onion-rings.jpg"
  },
  {
    name: "Ham and Swiss Sandwich", 
    price: 7.50, 
    description: "Ham and swiss topped with lettuce, tomato, red onions, and mayo.",
    image_url: "assets/images/ham-and-swiss-sandwich.jpg"
  },
  {
    name: "Roast Beef Sandwich", 
    price: 7.50, 
    description: "Roast beef sadnwich topped with horseradish cream sauce and caramelized onions.",
    image_url: "assets/images/roast-beef-sandwich.jpg"
  },
  {
    name: "Pork Banh Mi Sandwich", 
    price: 7.50, 
    description: "Sliced pork tenderloin marinated overnight topped with pickled carrots, English cucumber, cilantro, sliced jalepenos and seasoned mayo.",
    image_url: "assets/images/pork-banh-mi.jpeg"
  },
  {
    name: "Turkey Sandwich", 
    price: 7.50, 
    description: "Shaved turkey sandwich topped with zuchinni hummus, alfalfa sprouts and English cucumber.",
    image_url: "assets/images/turkey-sandwich-26176975.jpg"
  }
])

# Dinner Items

dinner.items.create([
  {
    name: "BBQ Nachos", 
    price: 6.75, 
    description: "Homemade corn tortillas layered with monterrey jack cheese, black beans, pulled pork and topped with more pulled pork and jalepeno peppers.",
    image_url: "assets/images/bbq-nachos.jpeg"
  },
  {
    name: "Loaded Fries", 
    price: 6.75, 
    description: "Hand-cut fries topped with cheddar cheese, bacon pieces, and sliced jalepenos.",
    image_url: "assets/images/loaded-fries.jpg"
  },
  {
    name: "Chicken Wings", 
    price: 7.25, 
    description: "Eight chicken wings baked then fried and tossed in secret spices and housemade hot sauce. Served with carrots and celery.",
    image_url: "assets/images/chicken-wings.jpg"
  },
  {
    name: "Classic Burger", 
    price: 8.00, 
    description: "A quarter-pound sirloin patty grilled and served with lettuce, tomato and red onions.",
    image_url: "assets/images/burger.jpeg"
  },
  {
    name: "Roasted Broccoli", 
    price: 2.50, 
    description: "Roasted broccoli drizzled with balsamic vinegar, olive oil, salt, and pepper.",
    image_url: "assets/images/roasted-broccoli.jpg"
  },
  {
    name: "Baked Macaroni and Cheese", 
    price: 3.50, 
    description: "Four cheese macaroni and cheese baked and roasted with a cripy cheese topping.",
    image_url: "assets/images/baked-mac-and-cheese.jpg"
  },
  {
    name: "Apple Pie", 
    price: 3.75, 
    description: "Apple pie with a caramelized, crumbly streusel topping.",
    image_url: "assets/images/apple-pie-slice.jpeg"
  },
  {
    name: "Chocolate Lava Cake", 
    price: 3.75, 
    description: "Chocolate cake with a soft-sauce throughout the middle.",
    image_url: "assets/images/chocolate-lava-cake.jpg"
  },
  {
    name: "Skillet Chocolate Chip Cookie", 
    price: 3.75, 
    description: "Chocolate chip cookie baked in cast-iron skillet topped with vanilla ice cream, whipped cream, chocolate drizzle and a cherry on top.",
    image_url: "assets/images/Skillet-Chocolate-Chip-Cookie-4-of-14.jpg"
  },
  {
    name: "Banana Pudding", 
    price: 3.75, 
    description: "Banana pudding made with vanilla wafers layered with whipped vanilla pudding.",
    image_url: "assets/images/banana-pudding.jpg"
  },
  {
    name: "Strawberry Cheesecake", 
    price: 3.75, 
    description: "New York style cheesecake served with strawberry compote.",
    image_url: "assets/images/strawberry-cheesecake.jpeg"
  }
])