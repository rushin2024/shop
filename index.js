const products = {
   1:{id:1,name:"Odorex - Spray",size:"500ml",img_src:"./images/001_Odorex_Spray.jpg",price_cod:"R60.00",price_me:"R70.00",cat:"fresheners",description:"Removes offensive odours from clothing, fabric, and carpets. Neutralizes tobacco smoke odours. Spray onto fabrics for a fresh clean smell. May be used on curtains, blankets, bedding, mattresses and cloth upholstery."},
   3:{id:3,name:"Toilet Fresh - Powder",size:"500g",img_src:"./images/003_Toilet_Fresh_Powder.jpg",price_cod:"R50.00",price_me:"R60.00",cat:"fresheners",description:"Sprinkle the Toilet Fresh Powder in toilet for a fresh smell. "},
   4:{id:4,name:"Toilet Fresh - Spray",size:"250ml",img_src:"./images/004_Toilet_Fresh_Spray.jpg",price_cod:"R55.00",price_me:"R65.00",cat:"fresheners",description:"Spray Toilet Fresh Spray to freshen airborne odors."},
   5:{id:5,name:"Carpert Fresh - Powder",size:"500g",img_src:"./images/005_Carpet_Fresh_Powder.jpg",price_cod:"R50.00",price_me:"R60.00",cat:"fresheners",description:"A crystal powder that eliminates stale odours. Simply sprinkle on carpets and rugs, leave for a few minutes in order for the crystals to absorb odours, then vacuum."},
   6:{id:6,name:"Room Fresh - Spray",size:"250ml",img_src:"./images/006_Room_Fresh_Spray.jpg",price_cod:"R55.00",price_me:"R65.00",cat:"fresheners",description:"Delicate fresh fragrance."},
   13:{id:13,name:"Lavender - Disinfectant",size:"750ml",img_src:"./images/013_Lavender_Disinfectant_750ml.jpg",price_cod:"R60.00",price_me:"R70.00",cat:"disinfectants",description:"Sanitol Antibacterial Lavender Disinfectant eliminates bacteria and bad odours and is used for disinfecting floors and surfaces, bathrooms, toilets, drains, dustbins and general disinfecting. It has a fresh lavendar fragrance."},
   14:{id:14,name:"Lavender - Disinfectant",size:"2L",img_src:"./images/014_Lavender_Disinfectant_2L.jpg",price_cod:"R70.00",price_me:"R80.00",cat:"disinfectants",description:"Sanitol Antibacterial Lavender Disinfectant eliminates bacteria and bad odours and is used for disinfecting floors and surfaces, bathrooms, toilets, drains, dustbins and general disinfecting. It has a fresh lavendar fragrance."},
   15:{id:15,name:"Lavender - Disinfectant",size:"5L",img_src:"./images/015_Lavender_Disinfectant_5L.jpg",price_cod:"R120.00",price_me:"R130.00",cat:"disinfectants",description:"Sanitol Antibacterial Lavender Disinfectant eliminates bacteria and bad odours and is used for disinfecting floors and surfaces, bathrooms, toilets, drains, dustbins and general disinfecting. It has a fresh lavendar fragrance."},
   16:{id:16,name:"Pine - Disinfectant",size:"750ml",img_src:"./images/016_Pine_Disinfectant_750ml.jpg",price_cod:"R60.00",price_me:"R70.00",cat:"disinfectants",description:"Sanitol Antibacterial Pine Disinfectant eliminates bacteria and bad odours and is used for disinfecting floors and surfaces, bathrooms, toilets, drains, dustbins and general disinfecting. It has a fresh pine fragrance."},
   17:{id:17,name:"Pine - Disinfectant",size:"2L",img_src:"./images/017_Pine_Disinfectant_2L.jpg",price_cod:"R70.00",price_me:"R80.00",cat:"disinfectants",description:"Sanitol Antibacterial Pine Disinfectant eliminates bacteria and bad odours and is used for disinfecting floors and surfaces, bathrooms, toilets, drains, dustbins and general disinfecting. It has a fresh pine fragrance."},
   18:{id:18,name:"Pine - Disinfectant",size:"5L",img_src:"./images/018_Pine_Disinfectant_5L.jpg",price_cod:"R120.00",price_me:"R130.00",cat:"disinfectants",description:"Sanitol Antibacterial Pine Disinfectant eliminates bacteria and bad odours and is used for disinfecting floors and surfaces, bathrooms, toilets, drains, dustbins and general disinfecting. It has a fresh pine fragrance."},
   19:{id:19,name:"Antibacterial Kitchen Cleaner",size:"750ml",img_src:"./images/019_Antibacterial_Kitchen_Cleaner_750ml.jpg",price_cod:"R60.00",price_me:"R70.00",cat:"kitchen",description:"Sanitol Antibacterial Kitchen Cleaner has been specially formulated to ensure a hygienically clean kitchen by destroying 99.9% of germs and leaving surfaces shiny and clean. It can be used on all work surfaces, appliances, counter tops, sinks, microwave ovens and tiles."},
   22:{id:22,name:"Dandy Clean",size:"2L",img_src:"./images/022_Dandy_Clean_2L.jpg",price_cod:"R55.00",price_me:"R65.00",cat:"kitchen",description:"A cream cleaner with ammonia that cleans without scratching. Can be used on stoves, baths, sinks, floors and walls."},
   23:{id:23,name:"Dandy Clean",size:"5L",img_src:"./images/023_Dandy_Clean_5L.jpg",price_cod:"R90.00",price_me:"R100.00",cat:"kitchen",description:"A cream cleaner with ammonia that cleans without scratching. Can be used on stoves, baths, sinks, floors and walls."},
   25:{id:25,name:"Dishwashing Liquid",size:"2L",img_src:"./images/025_Dishwashing_Liquid_2L.jpg",price_cod:"R60.00",price_me:"R70.00",cat:"kitchen",description:"A fresh lemon scented washing liquid that is gentle on your hands."},
   26:{id:26,name:"Dishwashing Liquid",size:"5L",img_src:"./images/026_Dishwashing_Liquid_5L.jpg",price_cod:"R95.00",price_me:"R105.00",cat:"kitchen",description:"A fresh lemon scented washing liquid that is gentle on your hands."},
   28:{id:28,name:"Extra Active - Dishwashing Liquid",size:"2L",img_src:"./images/028_Dishwashing_Liquid_Extra_Active_2L.jpg",price_cod:"R80.00",price_me:"R90.00",cat:"kitchen",description:"A thick fresh lemon scented washing liquid that is gentle on your hands.",custom_data:"Extra Active"},
   29:{id:29,name:"Extra Active - Dishwashing Liquid",size:"5L",img_src:"./images/029_Dishwashing_Liquid_Extra_Active_5L.jpg",price_cod:"R140.00",price_me:"R150.00",cat:"kitchen",description:"A thick fresh lemon scented washing liquid that is gentle on your hands.",custom_data:"Extra Active"},
   30:{id:30,name:"Grillex Oven Cleaner - Spray",size:"500ml",img_src:"./images/030_Grillex_Oven_Cleaner_Spray_500ml.jpg",price_cod:"R55.00",price_me:"R65.00",cat:"kitchen",description:"Cuts grease & lifts dirt fast. Very effective on oven grids and baking trays."},
   33:{id:33,name:"Antibacterial Bathroom Cleaner",size:"750ml",img_src:"./images/033_Antibacterial_Bathroom_Cleaner_750ml.jpg",price_cod:"R60.00",price_me:"R70.00",cat:"toilet_bathroom",description:"Sanitol Antibacterial Bathroom Cleaner cleans and disinfects all bathroom surfaces, fixtures, sinks, and tiles leaving surfaces with a sparkling shine and lasting fragrance whilst destroying 99.9% of germs. The advanced non-abrasive formula penetrates and loosens soap scum and grime and removes mould and mildew."},
   35:{id:35,name:"Drain Boy",size:"1L",img_src:"./images/035_Drain_Boy_1L.jpg",price_cod:"R55.00",price_me:"R65.00",cat:"toilet_bathroom",description:"An overnight alkaline drain cleaner. It dissolves the sludge build up in drains and removes bad drain smells."},
   36:{id:36,name:"Emerald Cherry",size:"750ml",img_src:"./images/036_Emerald_Cherry_750ml.jpg",price_cod:"R50.00",price_me:"R60.00",cat:"toilet_bathroom",description:"Bathroom & floor cleaner that can also effectively clean toilets, basins, taps, showers and floor and wall tiles. Does not leave a sticky residue."},
   39:{id:39,name:"Pine Gel",size:"500g",img_src:"./images/039_Pine_Gel_500g.jpg",price_cod:"R55.00",price_me:"R65.00",cat:"toilet_bathroom",description:"A concentrated, non-abrasive, thick cleaner that shines and deodorises. Clings to surfaces for easy cleaning. Dissolves soap scum, ground-in dirt and grime. Ideal for cleaning toilet and bathroom surfaces."},
   42:{id:42,name:"Thick Bleach",size:"5L",img_src:"./images/042_Thick_Bleach_5L.jpg",price_cod:"R105.00",price_me:"R115.00",cat:"toilet_bathroom",description:"Sanitol Antibacterial Thick Bleach cleans and disinfects toilets, drains and sinks. It has a greater clinging power to increase effectiveness, leaving a visible shine whilst killing 99.9% of germs. It can also be used in kitchens, on lime scale and acts as an active stain remover."},
   43:{id:43,name:"Toilet Bowl Cleaner",size:"750ml",img_src:"./images/043_Toilet_Bowl_Cleaner_750ml.jpg",price_cod:"R45.00",price_me:"R55.00",cat:"toilet_bathroom",description:"Sanitol Toilet Bowl Cleaner is an acid cleaner. It removes lime scale and stains from the toilet bowl. It is non-abrasive and will not scour the porcelain or ceramics."},
   46:{id:46,name:"Urinal Tabs",size:"500g",img_src:"./images/046_Urinal_Tabs_500g.jpg",price_cod:"R85.00",price_me:"R95.00",cat:"toilet_bathroom",description:"Perfumed crystals for use primarily in urinals as a deodoriser."},
   47:{id:47,name:"Urinal Tabs",size:"4kg",img_src:"./images/047_Urinal_Tabs_4kg.jpg",price_cod:"R425.00",price_me:"R435.00",cat:"toilet_bathroom",description:"Perfumed crystals for use primarily in urinals as a deodoriser."},
   49:{id:49,name:"Floorbrite Liquid Floor Polish",size:"750ml",img_src:"./images/049_Floorbrite_Liquid_Floor_Polish_750ml.jpg",price_cod:"R65.00",price_me:"R75.00",cat:"floors_tiles_and_carpets",description:"A dry to shine floor polish. Just pour on and spread evenly, no buffing required. Can be used on all floor types except unsealed wood and cork."},
   52:{id:52,name:"Stride Heavy Duty Floor Cleaner",size:"750ml",img_src:"./images/052_Stride_Heavy_Duty_Floor_Cleaner_750ml.jpg",price_cod:"R55.00",price_me:"R65.00",cat:"floors_tiles_and_carpets",description:""},
   55:{id:55,name:"Tilex Floor Tile Cleaner",size:"750ml",img_src:"./images/055_Tilex_Floor_Tile_Cleaner_750ml.jpg",price_cod:"R50.00",price_me:"R60.00",cat:"floors_tiles_and_carpets",description:"A floor and wall tile cleaner for ceramic and linoleum tiles that does not leave a sticky residue. Can also be used on terracotta, marble and sealed wood."},
   57:{id:57,name:"Laminated Wood Floor Cleaner",size:"750ml",img_src:"./images/057_Laminated_Wood_Floor_Cleaner_750ml.jpg",price_cod:"R55.00",price_me:"R65.00",cat:"general_household",description:""},
   58:{id:58,name:"Metal Polish",size:"250ml",img_src:"./images/058_Metal_Polish_250ml.jpg",price_cod:"R65.00",price_me:"R75.00",cat:"general_household",description:""},
   59:{id:59,name:"Furniture Oil",size:"500ml",img_src:"./images/059_Furniture_Oil_500ml.jpg",price_cod:"R95.00",price_me:"R105.00",cat:"general_household",description:""},
   61:{id:61,name:"Window Cleaner - Spray",size:"750ml",img_src:"./images/061_Window_Cleaner_Spray_750ml.jpg",price_cod:"R55.00",price_me:"R655.00",cat:"general_household",description:"Cleans dirt and dust with ease, leaving your windows and glass surfaces sparkling. Can also be used on windscreens, mirrors, tiles, taps, fridges, washing machines and enamel surfaces."},
   64:{id:64,name:"Antibacterial Hand Wash",size:"250ml",img_src:"./images/064_Antibacterial_Hand_Wash_250ml.jpg",price_cod:"R50.00",price_me:"R60.00",cat:"hand_care",description:""},
   66:{id:64,name:"Hand Gel Sanitizer",size:"250ml",img_src:"./images/066_Hand_Sanitizer_Gel_250ml.jpg",price_cod:"R55.00",price_me:"R65.00",cat:"hand_care",description:""},   
   71:{id:71,name:"Household Bleach",size:"2L",img_src:"./images/071_Household_Bleach_2L.jpg",price_cod:"R45.00",price_me:"R55.00",cat:"laundry_clothing_care",description:"Bleach brightens and whitens fabrics and help remove stubborn stains. It cleans as well as whiten."},
   72:{id:72,name:"Household Bleach",size:"5L",img_src:"./images/072_Household_Bleach_5L.jpg",price_cod:"R65.00",price_me:"R75.00",cat:"laundry_clothing_care",description:"Bleach brightens and whitens fabrics and help remove stubborn stains. It cleans as well as whiten."},
   77:{id:77,name:"Low Foam Washing Powder",size:"2kg",img_src:"./images/077_Low_Foam_Washing_Powder_2kg.jpg",price_cod:"R100.00",price_me:"R110.00",cat:"laundry_clothing_care",description:"For a clean and extra soft machine wash."},
   79:{id:79,name:"Fabric Soft",size:"2L",img_src:"./images/079_Fabric_Soft_2L.jpg",price_cod:"R55.00",price_me:"R65.00",cat:"laundry_clothing_care",description:"Fabric Soft is a conditioner used to make fabric softer and prevent static cling. For use in machine and hand wash."},
   85:{id:85,name:"Car Polish",size:"500ml",img_src:"./images/085_Car_Polish_500ml.jpg",price_cod:"R65.00",price_me:"R75.00",cat:"car_care",description:"With German Wax for extra protection leaving your car with a high gloss finish which also protects against rain, salt and sun damage."},
   87:{id:87,name:"Car Shampoo",size:"750ml",img_src:"./images/087_Car_Shampoo_750ml.jpg",price_cod:"R50.00",price_me:"R60.00",cat:"car_care",description:"A concentrated formulation for superior cleaning of dirt and grime. pH balanced, contains no salt, is safe for all paint finishes and will not strip away the protective car wax."},
   89:{id:89,name:"Dashboard Shine",size:"500ml",img_src:"./images/089_Dashboard_Shine_500ml.jpg",price_cod:"R55.00",price_me:"R65.00",cat:"car_care",description:"Cleans and shines dashboards, interior trim, leather and leatherette easily with silicone for extra shine."},
   91:{id:91,name:"Tire Brite",size:"500ml",img_src:"./images/091_Tire_Brite_500ml.jpg",price_cod:"R55.00",price_me:"R65.00",cat:"car_care",description:"Shines tyres and exterior black trim. Simply apply with a cloth."},
   93:{id:93,name:"MotoWax",size:"500ml",img_src:"./images/093_MotoWax_500ml.jpg",price_cod:"R60.00",price_me:"R70.00",cat:"car_care",description:"Motex Motowax makes cleaning easier, simply spray on and wipe to shine, no water needed. Removes dirt, grease and grime and produces an instant high gloss finish which protects your car against rain, salt and sun damage."},
   // :{id:,name:"",size:"",img_src:"./images/.jpg",price_cod:"R55.00",price_me:"R65.00",cat:"",description:""},
};

let products_container = document.getElementById("products-container");

// List all items
for (let value in products){
   let product = products[value];

   if(product.custom_data == null){
      products_container.innerHTML +=
         `<div class="group" id="${product.cat}">`+
         `<div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">`+
         `<img src="${product.img_src}" alt="${product.name}" class="h-full w-full object-cover object-center" >`+
         `</div>`+
         `<h3 class='mt-4 text-base font-medium'>${product.name}</h3>`+
         `<h3 class='mt-1 text-base text-gray-700'>${product.size}</h3>`+
         `<div class="bg-white py-3 sm:flex sm:flex-row-reverse">`+
         `<button type="button" class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-3 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto" onclick="show_modal(${product.id})">View Product</button>`+
         `</div>`+
         `</div>`;
   }
   else if (product.custom_data !== null){
      products_container.innerHTML +=
         `<div class="group" id="${product.cat}">`+
         `<div class="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">`+
         `<img src="${product.img_src}" alt="${product.name}" class="h-full w-full object-cover object-center" >`+
         `<span class="absolute top-0 left-0 p-2 bg-red-200 rounded-lg text-lg">${product.custom_data}</span>`+
         `</div>`+
         `<h3 class='mt-4 text-base font-medium'>${product.name}</h3>`+
         `<h3 class='mt-1 text-base text-gray-700'>${product.size}</h3>`+
         `<div class="bg-white py-3 sm:flex sm:flex-row-reverse">`+
         `<button type="button" class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-3 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto" onclick="show_modal(${product.id})">View Product</button>`+
         `</div>`+
         `</div>`;
   } 
}

let modal = document.getElementById("modal");
let modal_bg = document.getElementById("modal--bg");

let modal_open_btn = document.getElementById("modal-open-btn"); 
let modal_cls_btn = document.getElementById("modal-cls-btn");


// Close the product modal
function show_modal(product_id){
   document.getElementById("product--img").src = products[product_id].img_src;
   document.getElementById("product--title").innerText = products[product_id].name;
   document.getElementById("product--size").innerText = products[product_id].size;
   document.getElementById("product--cod").innerText = products[product_id].price_cod;
   document.getElementById("product--me").innerText = products[product_id].price_me;

   document.getElementsByTagName("body")[0].classList.remove("overflow-auto");
   modal_bg.classList.remove("hidden");
   modal.classList.remove("hidden");

   document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
   modal_bg.classList.add("block");
   modal.classList.add("block");
}

function close_modal(){
   document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");
   modal_bg.classList.remove("block")
   modal.classList.remove("block")

   document.getElementsByTagName("body")[0].classList.add("overflow-auto");
   modal_bg.classList.add("hidden");
   modal.classList.add("hidden");
}
