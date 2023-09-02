const products = {
   "001":{name:"Odorex - Spray",size:"500ml",img_src:"./images/001_Odorex_Spray.jpg",price_cod:"R60.00",price_mo:"R70.00",cat:"fresheners",description:"Removes offensive odours from clothing, fabric, and carpets. Neutralizes tobacco smoke odours. Spray onto fabrics for a fresh clean smell. May be used on curtains, blankets, bedding, mattresses and cloth upholstery."},
   "003":{name:"Toilet Fresh - Powder",size:"500g",img_src:"./images/003_Toilet_Fresh_Powder.jpg",price_cod:"R50.00",price_mo:"R60.00",cat:"fresheners",description:"Sprinkle the Toilet Fresh Powder in toilet for a fresh smell. "},
   "004":{name:"Toilet Fresh - Spray",size:"250ml",img_src:"./images/004_Toilet_Fresh_Spray.jpg",price_cod:"R55.00",price_mo:"R65.00",cat:"fresheners",description:"Spray Toilet Fresh Spray to freshen airborne odors."},
   "005":{name:"Carpert Fresh - Powder",size:"500g",img_src:"./images/005_Carpet_Fresh_Powder.jpg",price_cod:"R50.00",price_mo:"R60.00",cat:"fresheners",description:"A crystal powder that eliminates stale odours. Simply sprinkle on carpets and rugs, leave for a few minutes in order for the crystals to absorb odours, then vacuum."},
   "006":{name:"Room Fresh - Spray",size:"250ml",img_src:"./images/006_Room_Fresh_Spray.jpg",price_cod:"R55.00",price_mo:"R65.00",cat:"fresheners",description:"Delicate fresh fragrance."},
   "013":{name:"Lavender - Disinfectant",size:"750ml",img_src:"./images/013_Lavender_Disinfectant_750ml.jpg",price_cod:"R60.00",price_mo:"R70.00",cat:"disinfectants",description:"Sanitol Antibacterial Lavender Disinfectant eliminates bacteria and bad odours and is used for disinfecting floors and surfaces, bathrooms, toilets, drains, dustbins and general disinfecting. It has a fresh lavendar fragrance."},
   "014":{name:"Lavender - Disinfectant",size:"2L",img_src:"./images/014_Lavender_Disinfectant_2L.jpg",price_cod:"R70.00",price_mo:"R80.00",cat:"disinfectants",description:"Sanitol Antibacterial Lavender Disinfectant eliminates bacteria and bad odours and is used for disinfecting floors and surfaces, bathrooms, toilets, drains, dustbins and general disinfecting. It has a fresh lavendar fragrance."},
   "015":{name:"Lavender - Disinfectant",size:"5L",img_src:"./images/015_Lavender_Disinfectant_5L.jpg",price_cod:"R120.00",price_mo:"R130.00",cat:"disinfectants",description:"Sanitol Antibacterial Lavender Disinfectant eliminates bacteria and bad odours and is used for disinfecting floors and surfaces, bathrooms, toilets, drains, dustbins and general disinfecting. It has a fresh lavendar fragrance."},
   "016":{name:"Pine - Disinfectant",size:"750ml",img_src:"./images/016_Pine_Disinfectant_750ml.jpg",price_cod:"R60.00",price_mo:"R70.00",cat:"disinfectants",description:"Sanitol Antibacterial Pine Disinfectant eliminates bacteria and bad odours and is used for disinfecting floors and surfaces, bathrooms, toilets, drains, dustbins and general disinfecting. It has a fresh pine fragrance."},
   "017":{name:"Pine - Disinfectant",size:"2L",img_src:"./images/017_Pine_Disinfectant_2L.jpg",price_cod:"R70.00",price_mo:"R80.00",cat:"disinfectants",description:"Sanitol Antibacterial Pine Disinfectant eliminates bacteria and bad odours and is used for disinfecting floors and surfaces, bathrooms, toilets, drains, dustbins and general disinfecting. It has a fresh pine fragrance."},
   "018":{name:"Pine - Disinfectant",size:"5L",img_src:"./images/018_Pine_Disinfectant_5L.jpg",price_cod:"R120.00",price_mo:"R130.00",cat:"disinfectants",description:"Sanitol Antibacterial Pine Disinfectant eliminates bacteria and bad odours and is used for disinfecting floors and surfaces, bathrooms, toilets, drains, dustbins and general disinfecting. It has a fresh pine fragrance."},
   "019":{name:"Antibacterial Kitchen Cleaner",size:"750ml",img_src:"./images/019_Antibacterial_Kitchen_Cleaner_750ml.jpg",price_cod:"R60.00",price_mo:"R70.00",cat:"kitchen",description:"Sanitol Antibacterial Kitchen Cleaner has been specially formulated to ensure a hygienically clean kitchen by destroying 99.9% of germs and leaving surfaces shiny and clean. It can be used on all work surfaces, appliances, counter tops, sinks, microwave ovens and tiles."},
   "022":{name:"Dandy Clean",size:"2L",img_src:"./images/022_Dandy_Clean_2L.jpg",price_cod:"R55.00",price_mo:"R65.00",cat:"kitchen",description:"A cream cleaner with ammonia that cleans without scratching. Can be used on stoves, baths, sinks, floors and walls."},
   "023":{name:"Dandy Clean",size:"5L",img_src:"./images/023_Dandy_Clean_5L.jpg",price_cod:"R90.00",price_mo:"R100.00",cat:"kitchen",description:"A cream cleaner with ammonia that cleans without scratching. Can be used on stoves, baths, sinks, floors and walls."},
   "025":{name:"Dishwashing Liquid",size:"2L",img_src:"./images/025_Dishwashing_Liquid_2L.jpg",price_cod:"R60.00",price_mo:"R70.00",cat:"kitchen",description:"A fresh lemon scented washing liquid that is gentle on your hands."},
   "026":{name:"Dishwashing Liquid",size:"5L",img_src:"./images/026_Dishwashing_Liquid_5L.jpg",price_cod:"R95.00",price_mo:"R105.00",cat:"kitchen",description:"A fresh lemon scented washing liquid that is gentle on your hands."},
   "028":{name:"Extra Active - Dishwashing Liquid",size:"2L",img_src:"./images/028_Dishwashing_Liquid_Extra_Active_2L.jpg",price_cod:"R80.00",price_mo:"R90.00",cat:"kitchen",description:"A thick fresh lemon scented washing liquid that is gentle on your hands.",custom_data:"Extra Active"},
   "029":{name:"Extra Active - Dishwashing Liquid",size:"5L",img_src:"./images/029_Dishwashing_Liquid_Extra_Active_5L.jpg",price_cod:"R140.00",price_mo:"R150.00",cat:"kitchen",description:"A thick fresh lemon scented washing liquid that is gentle on your hands.",custom_data:"Extra Active"},
   "030":{name:"Grillex Oven Cleaner - Spray",size:"5L",img_src:"./images/030_Grillex_Oven_Cleaner_Spray_500ml.jpg",price_cod:"R55.00",price_mo:"R65.00",cat:"kitchen",description:"Cuts grease & lifts dirt fast. Very effective on oven grids and baking trays."},
   "033":{name:"Antibacterial Bathroom Cleaner",size:"750ml",img_src:"./images/033_Antibacterial_Bathroom_Cleaner_750ml.jpg",price_cod:"R60.00",price_mo:"R70.00",cat:"toilet_bathroom",description:"Sanitol Antibacterial Bathroom Cleaner cleans and disinfects all bathroom surfaces, fixtures, sinks, and tiles leaving surfaces with a sparkling shine and lasting fragrance whilst destroying 99.9% of germs. The advanced non-abrasive formula penetrates and loosens soap scum and grime and removes mould and mildew."},
   "035":{name:"Drain Boy",size:"1L",img_src:"./images/035_Drain_Boy_1L.jpg",price_cod:"R55.00",price_mo:"R65.00",cat:"toilet_bathroom",description:"An overnight alkaline drain cleaner. It dissolves the sludge build up in drains and removes bad drain smells."},
   "036":{name:"Emerald Cherry",size:"750ml",img_src:"./images/036_Emerald_Cherry_750ml.jpg",price_cod:"R50.00",price_mo:"R60.00",cat:"toilet_bathroom",description:"Bathroom & floor cleaner that can also effectively clean toilets, basins, taps, showers and floor and wall tiles. Does not leave a sticky residue."},
   "039":{name:"Pine Gel",size:"",img_src:"./images/039_Pine_Gel_500g.jpg",price_cod:"R55.00",price_mo:"R65.00",cat:"toilet_bathroom",description:"A concentrated, non-abrasive, thick cleaner that shines and deodorises. Clings to surfaces for easy cleaning. Dissolves soap scum, ground-in dirt and grime. Ideal for cleaning toilet and bathroom surfaces."},
   "042":{name:"Thick Bleach",size:"5L",img_src:"./images/042_Thick_Bleach_5L.jpg",price_cod:"R105.00",price_mo:"R115.00",cat:"toilet_bathroom",description:"Sanitol Antibacterial Thick Bleach cleans and disinfects toilets, drains and sinks. It has a greater clinging power to increase effectiveness, leaving a visible shine whilst killing 99.9% of germs. It can also be used in kitchens, on lime scale and acts as an active stain remover."},
   "043":{name:"Toilet Bowl Cleaner",size:"750ml",img_src:"./images/043_Toilet_Bowl_Cleaner_750ml.jpg",price_cod:"R45.00",price_mo:"R55.00",cat:"toilet_bathroom",description:"Sanitol Toilet Bowl Cleaner is an acid cleaner. It removes lime scale and stains from the toilet bowl. It is non-abrasive and will not scour the porcelain or ceramics."},
   "046":{name:"Urinal Tabs",size:"500g",img_src:"./images/046_Urinal_Tabs_500g.jpg",price_cod:"R85.00",price_mo:"R95.00",cat:"toilet_bathroom",description:"Perfumed crystals for use primarily in urinals as a deodoriser."},
   "047":{name:"Urinal Tabs",size:"4kg",img_src:"./images/047_Urinal_Tabs_4kg.jpg",price_cod:"R425.00",price_mo:"R435.00",cat:"toilet_bathroom",description:"Perfumed crystals for use primarily in urinals as a deodoriser."},
   // "":{name:"",size:"",img_src:"./images/.jpg",price_cod:"R55.00",price_mo:"R65.00",cat:"",description:""},
};

let products_container = document.getElementById("products-container");

for (let value in products){
   let product = products[value];

   if(product.custom_data == null){
      products_container.innerHTML +=
         `<div class="group" id="${product.cat}">`+
         `<div class="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">`+
         `<img src="${product.img_src}" alt="${product.name}" class="h-full w-full object-cover object-center" >`+
         `</div>`+
         `<h3 class='mt-4 text-base font-medium'>${product.name}</h3>`+
         `<h3 class='mt-1 text-base text-gray-700'>${product.size}</h3>`+
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
         `</div>`;
   } 
}