import { image } from "./imageController";

export const appName = "Study Material";
export const MENU_OPTION = [{ name: "Home", url: "/pizza" },
{ name: "Menu", url: "/pizza/menu" }, { name: "Blog", url: "/pizza/blog" },
{ name: "About", url: "/pizza/about" }, { name: "Contact", url: "/pizza/contact" }];

export const welcomeMessage = {
  title: "Welcome",
  subTitle: "try something amazing",
  describion: "Ordering your fave Pizza is quick and easy with our app or on our website.",
};

export const welcomeDescription = `Founded in 1982 we bring pizza slice by slice to the next level!
Unique branding and being in the pizza industry is the formula to out success.
We do understand what people want and convert desires to unique experiences of taste.
Freshness, orignality and quality is only the small part of out priorities. Affortable
costs, located almost anywhere you go, amazing online operational system to order food
in one click. Easy to navigate pre-order options and amazing options for corporate parties! At
Pizaa Time we care about you because you are the one who makes us special!`

export const serviceMsg = {
  title: "our service",
  describe: `Pizza Time provides services across all states - various foods and drinks, 
  you choose! What makes us special is our teams of professionals 
  with extensive knowledge of all cuisine that we have to offer.`
}

export const service = [
  {
    bg: image.OrganicFood,
    title: "Organic Food",
    description: `Pure and healthy organic food is our lifestyle. The products we consume has 
    impact on out future and we do everything to keep the future healthy`
  },
  {
    bg: image.ExpressDelivery,
    title: "Express Delivery",
    description: `Choose from a variety of express delivery services depending on your needs. 
     Whether in a hurry to eat or have some plans tomorrow, we have got you covered`
  },
  {
    bg: image.UnforgableTaste,
    title: "Unforgable Taste",
    description: `Our goal is to provide our customers with excellent service, great taste and 
    unforgettable experiences. This will be a mind-blowing experience for your taste buds`
  }
];

export const hotMeal = {
  title: "hot pizza meals",
  description: `Pizza Time holds the market of the pizza 
  industry and continuously offers more than pizza. 
  Check out our hottest menu options with cheese, meat, chicken and veggies!`,
  menu1: [
    {
      dish: "Cheese Pizza",
      image: image.CheesePizza,
      description: `It should be no shocker that a classic is the statistical
      favorite. Cheese pizza is one of the most popular choices. It will always 
      be a simple, unadorned masterpiece on its own.`,
      price: "$5",
    }, {
      dish: "Veggie Pizza",
      image: image.VeggiePizza,
      description: `When you want to jazz up your cheese pizza with color and 
      texture, veggies are the perfect topping. And you’re only limited by your imagination.`,
      price: "$9",
    },
    {
      dish: "Pepperoni Pizza",
      image: image.PepperoniPizza,
      description: `There’s a reason this is one of the most popular types of pizza. Who doesn’t 
      love biting into a crispy, salty round of pepperoni?`,
      price: "$5",
    },
  ],
  menu2: [
    {
      dish: "Meat Pizza",
      image: image.MeatPizza,
      description: `If pepperoni just isn’t enough, and you’re looking for a pie with a bit more heft, 
      a meat pizza is a perfect and popular choice.`,
      price: "$10",
    },
    {
      dish: "Margherita Pizza",
      image: image.MargheritaPizza,
      description: `Deceptively simple, the Margherita pizza is made with basil, fresh mozzarella, and 
      tomatoes. There’s a reason it’s an Italian staple and one of the most popular types of pizza in 
      the country.`,
      price: "$8",
    },
    {
      dish: "BBQ Chicken Pizza",
      image: image.VeggiePizza,
      description: `If you love BBQ chicken and you love pizza, why not put them together? This has long 
      been a cult favorite of sports fans and college kids.`,
      price: "$10",
    }
  ]
};

export const menu = {
  title: "menu pricing",
  description: `MENU PRICING
  Every bite of every meal is different and special. You will never get bored 
  and you will always be able to find something new and interesting for you. 
  Discover every mouthwatering option we have to offer`,
  dish: [
    {
      image: image.home.menu.CheesePizza,
      dish: "Cheese Pizza",
      description: `Mozzarella is a classic cheese for pizza. However, feel free 
    to change things up with additional toppings.`,
      price: "$5"
    },
    {
      image: image.home.menu.VeggiePizza,
      dish: "Veggie Pizza",
      description: `Crescent-roll dough, baked in a log, becomes the perch for a 
      ranch-dressing spread and fresh, crunchy vegetables.`,
      price: "$9"
    },
    {
      image: image.home.menu.PepperoniPizza,
      dish: "Pepperoni Pizza",
      description: `Traditional pepperoni pizza is made with pizza sauce, mozzarella 
      cheese, and pepperoni.`,
      price: "$5"
    },
    {
      image: image.home.menu.MeatPizza,
      dish: "Meat Pizza",
      description: `The meat toppings can vary, but often include cooked and crumbled 
      Italian sausage or ground beef, bacon, pepperoni, and sometimes sliced ham.`,
      price: "$10"
    },
    {
      image: image.home.menu.MargheritaPizza,
      dish: "Margherita Pizza",
      description: `This margherita pizza recipe tastes like a woodfired pie from Italy! 
      It stars a flavor-popping pizza sauce and perfectly chewy pizza crust.`,
      price: "$8"
    },
    {
      image: image.home.menu.BbqChickenPizza,
      dish: "BBQ Chicken Pizza",
      description: `Spicy barbecue sauce, diced chicken, cilantro, peppers, and onion all covered 
      with cheese and baked to bubbly goodness!`,
      price: "$10"
    }
  ]
}