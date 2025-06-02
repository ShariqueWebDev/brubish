// import { productsData } from "@/app/layout";
export interface ProductDetails {
  title: string;
  image: string;
}

export interface ProductsProps {
  main_title: string;
  product_detail: ProductDetails[];
}

export interface GalleryItem3 {
  page_name: string;
  slug: string;
  products: ProductsProps[];
}

export const galleryItems: GalleryItem3[] = [
  // Vessel Spares & Parts
  {
    page_name: "Vessel Spares & Parts",
    slug: "vessel-spares",
    products: [
      // Focus Products
      {
        main_title: "Focus Products",
        product_detail: [
          { title: "Main Engine", image: "/focus-product_img/main-engine.jpg" },
          {
            title: "Main Engine Spares",
            image: "/focus-product_img/main-engine-spares.jpg",
          },
          { title: "Generator", image: "/focus-product_img/generator.jpg" },
          {
            title: "Generator Spares",
            image: "/focus-product_img/generator-spares.jpg",
          },
          {
            title: "Refrigeration Compressor",
            image: "/focus-product_img/referigation-compressor.jpg",
          },
          {
            title: "Refrigeration Compressor Spares",
            image: "/focus-product_img/referigation-compressor-spares.jpg",
          },
          {
            title: "Oil Purifier",
            image: "/focus-product_img/oil-purifier.jpg",
          },
          {
            title: "Oil Purifier Spares",
            image: "/focus-product_img/oil-purifier-spares.jpg",
          },
          {
            title: "Fresh Water Generators",
            image: "/focus-product_img/fresh-water-generator.jpg",
          },
          {
            title: "Breathing Compressor",
            image: "/focus-product_img/breathing-compressor.jpg",
          },
          {
            title: "Emergency Generator",
            image: "/focus-product_img/emergency-generator.jpg",
          },
          {
            title: "Heat Exchanger",
            image: "/focus-product_img/heat-exchanger.jpg",
          },
          {
            title: "Hydraulic Motors",
            image: "/focus-product_img/hydraulic-motors.jpg",
          },
          {
            title: "Hydraulic Pumps",
            image: "/focus-product_img/hydraulic-pumps.jpg",
          },
          {
            title: "Air Compressor",
            image: "/focus-product_img/air-compressor.jpg",
          },
          {
            title: "Turbo Charger",
            image: "/focus-product_img/turbo-charger.jpg",
          },

          {
            title: "Engine Governor",
            image: "/focus-product_img/governor.jpg",
          },
          {
            title: "Auxiliary Engine & its Spares",
            image: "/focus-product_img/aux-engine.jpg",
          },
          {
            title: "Radar",
            image: "/focus-product_img/radar.jpg",
          },
          {
            title: "Anchor",
            image: "/focus-product_img/anchor.jpg",
          },
          {
            title: "Deck Crane & its Spares",
            image: "/focus-product_img/cranes.jpg",
          },
        ],
      },
      // Various Control Equipment
      {
        main_title: "Various Control Equipment",
        product_detail: [
          {
            title: "Pressure Switch, Transmitter & Control",
            image: "/various-control-equipment_img/pressure-switch.jpg",
          },
          {
            title: "Tempratur & Pressure Calibrator",
            image: "/various-control-equipment_img/temperature-calibrator.jpg",
          },
          {
            title: "Float & Level Switch",
            image: "/various-control-equipment_img/float-level-switch.jpg",
          },
          {
            title: "Positioner",
            image: "/various-control-equipment_img/positioner.jpg",
          },
          {
            title: "Differential Pressure Transmitter",
            image:
              "/various-control-equipment_img/differential-pressure-transmitter.jpg",
          },
          {
            title: "Pneumatic Valves",
            image: "/various-control-equipment_img/pneumatic-valve.jpg",
          },
        ],
      },
      // Control & Detection Equipment
      {
        main_title: "Control & Detection Equipment",
        product_detail: [
          {
            title: "Bilge Alarm",
            image: "/control-detection-equipment_img/bilge-alarm.jpg",
          },
          {
            title: "Oxygen Analyzer",
            image: "/control-detection-equipment_img/oxygen-analyzer.jpg",
          },
          {
            title: "Oil Mist Detector",
            image: "/control-detection-equipment_img/oil-mist-detector.jpg",
          },
          {
            title: "Tank Gauging Tape",
            image: "/control-detection-equipment_img/tank-guaging-tape.jpg",
          },
          {
            title: "ODME",
            image: "/control-detection-equipment_img/odme.jpg",
          },
          {
            title: "Pressure Controller & Transmitter",
            image: "/control-detection-equipment_img/pressure-controller.jpg",
          },
        ],
      },
      //   Marine Equpmt
      {
        main_title: "Marine Equipements",
        product_detail: [
          {
            title: "Speed Boat",
            image: "/marine-equipment_img/speed-boat.jpg",
          },
          {
            title: "Speed Boat Engine",
            image: "/marine-equipment_img/speed-boat-engine.jpg",
          },
          {
            title: "Fender",
            image: "/marine-equipment_img/fender.jpg",
          },
          {
            title: "SMAG Grab",
            image: "/marine-equipment_img/smag-grab.jpg",
          },
          {
            title: "Horn",
            image: "/marine-equipment_img/horn.jpg",
          },
          {
            title: "Tank Cleaning Machine",
            image: "/marine-equipment_img/tank-cleaning-machine.jpg",
          },
          {
            title: "ACB",
            image: "/marine-equipment_img/acb.jpg",
          },
          {
            title: "Framo Pump",
            image: "/marine-equipment_img/framo-pump.jpg",
          },
        ],
      },
      //Industrial & Marine Valves
      {
        main_title: "Industrial & Marine Valves",
        product_detail: [
          {
            title: "SS Ball Valve",
            image: "/industrial-marine-valves_img/ss-ball-valve-1.jpg",
          },
          {
            title: "Brass Angle Valve",
            image: "/industrial-marine-valves_img/brass-angle-valve-1.jpg",
          },
          {
            title: "Brass Glob Valve",
            image: "/industrial-marine-valves_img/brass-glob-valve-2.jpg",
          },
          {
            title: "Brass Glob Valve",
            image: "/industrial-marine-valves_img/brass-glob-valve-1.jpg",
          },
          {
            title: "Brass Glob Valve",
            image: "/industrial-marine-valves_img/brass-glob-valve.jpg",
          },
          {
            title: "Brass Angle Valve",
            image: "/industrial-marine-valves_img/brass-angle-valve.jpg",
          },
          {
            title: "SS Ball Valve",
            image: "/industrial-marine-valves_img/ss-ball-valve.jpg",
          },
          {
            title: "Gate Valve",
            image: "/industrial-marine-valves_img/gate-valve.jpg",
          },

          {
            title: "Glob Valve",
            image: "/industrial-marine-valves_img/glob-valve-1.jpg",
          },
          {
            title: "Glob Valve",
            image: "/industrial-marine-valves_img/glob-valve.jpg",
          },
          {
            title: "Strom Valve",
            image: "/industrial-marine-valves_img/storm-valve.jpg",
          },
          {
            title: "Angle Valve",
            image: "/industrial-marine-valves_img/angle-valve.jpg",
          },
        ],
      },
      {
        main_title: "Fire Fighting Equipment",
        product_detail: [
          {
            title: "Fire Trolley",
            image: "/fire-fighting-equipment_img/fire-trolley.jpg",
          },
          {
            title: "Fire Extinguishers",
            image: "/fire-fighting-equipment_img/fire-extinguishers.jpg",
          },
          {
            title: "Hose Reel",
            image: "/fire-fighting-equipment_img/hose-reel-2.jpg",
          },
          {
            title: "Hose Reel",
            image: "/fire-fighting-equipment_img/hose-reel-1.jpg",
          },
          {
            title: "Male – Female Coupling",
            image: "/fire-fighting-equipment_img/male-female-coupling.jpg",
          },
          {
            title: "Fire Hose Box",
            image: "/fire-fighting-equipment_img/fire-hose-box.jpg",
          },
          {
            title: "Double Fire Hose Box",
            image: "/fire-fighting-equipment_img/double-fire-hose-box.jpg",
          },
          {
            title: "Fire Blanket",
            image: "/fire-fighting-equipment_img/fire-blanket.jpg",
          },
          {
            title: "Fire Axe",
            image: "/fire-fighting-equipment_img/fire-axe.jpg",
          },

          {
            title: "Hose Pipe",
            image: "/fire-fighting-equipment_img/hose-pipe.jpg",
          },
          {
            title: "Fire Nozel",
            image: "/fire-fighting-equipment_img/fire-nozel.jpg",
          },
          {
            title: "Hose Reel",
            image: "/fire-fighting-equipment_img/horse-reel.jpg",
          },
        ],
      },
      //Industrial Material
      {
        main_title: "Industrial Material",
        product_detail: [
          {
            title: "Cup Brush and Wheels",
            image: "/industrial-material_img/cup-brush-wheels.jpg",
          },
          {
            title: "Blower Duck Pipe",
            image: "/industrial-material_img/blower-duck-pipe-1.jpg",
          },
          {
            title: "Blower Duck Pipe",
            image: "/industrial-material_img/blower-duck-pipe.jpg",
          },
          {
            title: "Exhaust Fan Blower",
            image: "/industrial-material_img/exhaust-fan-blower.jpg",
          },
          {
            title: "Siren",
            image: "/industrial-material_img/siren.jpg",
          },
          {
            title: "Drill Spanner",
            image: "/industrial-material_img/drill-spanner.jpg",
          },
          {
            title: "Box Socket Spanner",
            image: "/industrial-material_img/box-socket-spanner.jpg",
          },
          {
            title: "Chain Block / Hoist",
            image: "/industrial-material_img/chain-block.jpg",
          },
          {
            title: "Open End Spanner",
            image: "/industrial-material_img/open-end-spanner.jpg",
          },

          {
            title: "Industrial Tools",
            image: "/industrial-material_img/industrial-tools.jpg",
          },
          {
            title: "Blower",
            image: "/industrial-material_img/blower.jpg",
          },
        ],
      },
      //Safety Equipment
      {
        main_title: "Safety Equipment",
        product_detail: [
          {
            title: "Safety Equipment",
            image: "/safety-equipment_img/safety-equipment.jpg",
          },
          {
            title: "Hand Gloves",
            image: "/safety-equipment_img/hand-gloves.jpg",
          },
          {
            title: "Full Face Mask",
            image: "/safety-equipment_img/full-face-mask.jpg",
          },
          {
            title: "Full Body Harness",
            image: "/safety-equipment_img/full-body-harness.jpg",
          },
          {
            title: "Chemical Suit",
            image: "/safety-equipment_img/chemical-suit.jpg",
          },
          {
            title: "Boiler Suit",
            image: "/safety-equipment_img/boiler-suit.jpg",
          },
          {
            title: "Breathing Apparatus",
            image: "/safety-equipment_img/breathing-apparatus.jpg",
          },
          {
            title: "Bauer Compressor",
            image: "/safety-equipment_img/bauer-compressor.jpg",
          },
          {
            title: "Rubber Hand Gloves",
            image: "/safety-equipment_img/rubber-hand-gloves.jpg",
          },
          {
            title: "Nose Mask",
            image: "/safety-equipment_img/nose-mask.jpg",
          },

          {
            title: "Dust Mask",
            image: "/safety-equipment_img/dust-mask-1.jpg",
          },
          {
            title: "Dust Mask",
            image: "/safety-equipment_img/dust-mask.jpg",
          },
        ],
      },
      //   Measuring Instruments
      {
        main_title: "Measuring Instruments",
        product_detail: [
          {
            title: "Micro Meter",
            image: "/measuring-instruments_img/micro-meter.jpg",
          },
          {
            title: "Vernier",
            image: "/measuring-instruments_img/vernier.jpg",
          },
          {
            title: "Bore Gauge",
            image: "/measuring-instruments_img/bore-guage.jpg",
          },
          {
            title: "Dial Gauge",
            image: "/measuring-instruments_img/dial-guage.jpg",
          },
        ],
      },
    ],
  },
  // Agriculture & Products
  {
    page_name: "Vessel Spares & Parts",
    slug: "agri-products",
    products: [
      // Focus Products
      {
        main_title: "Agriculture & Products",
        product_detail: [
          {
            title: "Cocoa",
            image: "/productSectionImage/agriculture/coca.webp",
          },
          {
            title: "Coconut",
            image: "/productSectionImage/agriculture/coconut.webp",
          },
          {
            title: "Coffee",
            image: "/productSectionImage/agriculture/Coffee.webp",
          },
          {
            title: "Corn",
            image: "/productSectionImage/agriculture/corn.webp",
          },
          {
            title: "Ground Nuts",
            image: "/productSectionImage/agriculture/groundnut.webp",
          },
          {
            title: "Spices",
            image: "/productSectionImage/agriculture/spices.webp",
          },
          {
            title: "Sugar",
            image: "/productSectionImage/agriculture/sugar.webp",
          },
          {
            title: "Tabacoo",
            image: "/productSectionImage/agriculture/tabacoo.webp",
          },
          {
            title: "Tea",
            image: "/productSectionImage/agriculture/tea.webp",
          },
          {
            title: "Onion",
            image: "/productSectionImage/agriculture/onion.webp",
          },
        ],
      },
    ],
  },
  // Paper & Pulp
  {
    page_name: "Vessel Spares & Parts",
    slug: "paper-pulp",
    products: [
      // Focus Products
      {
        main_title: "Paper & Pulp",
        product_detail: [
          {
            title: "Corrugated Materials",
            image: "/productSectionImage/paper-pulp/corrugate-prod.webp",
          },
          {
            title: "Bio-Based Textile fibres",
            image: "/productSectionImage/paper-pulp/bio-based.webp",
          },
          {
            title: "Board & Packaging",
            image: "/productSectionImage/paper-pulp/board-pack.webp",
          },
          {
            title: "Paper Industry",
            image: "/productSectionImage/paper-pulp/paper-indus.webp",
          },
          {
            title: "Pulp Industry",
            image: "/productSectionImage/paper-pulp/pulp-indus.webp",
          },
          {
            title: "Tissue & Sanitary Products",
            image: "/productSectionImage/paper-pulp/tissue.webp",
          },
        ],
      },
    ],
  },
  // Brubish Steel
  {
    page_name: "Vessel Spares & Parts",
    slug: "steel",
    products: [
      // Focus Products
      {
        main_title: "Brubish Steel",
        product_detail: [
          {
            title: "Carbon Steel",
            image: "/productSectionImage/steel/carbon.webp",
          },
          {
            title: "Alloy Steel",
            image: "/productSectionImage/steel/alloy.webp",
          },
          {
            title: "Mild Steel",
            image: "/productSectionImage/steel/mild.webp",
          },
          {
            title: "Stainless Steel",
            image: "/productSectionImage/steel/stainless.webp",
          },
          {
            title: "Structural Steel",
            image: "/productSectionImage/steel/structral.webp",
          },
        ],
      },
    ],
  },
  // Consumer Goods
  {
    page_name: "Vessel Spares & Parts",
    slug: "consumer-goods",
    products: [
      // Focus Products
      {
        main_title: "Consumer Goods",
        product_detail: [
          {
            title: "Domestic Appliance",
            image: "/productSectionImage/consumer/domestic-app.webp",
          },
          {
            title: "Electronics",
            image: "/productSectionImage/consumer/electronics.webp",
          },
          {
            title: "Furniture",
            image: "/productSectionImage/consumer/furniture.webp",
          },
          {
            title: "FMCG",
            image: "/productSectionImage/consumer/fmcg.webp",
          },
        ],
      },
    ],
  },
  // Metal
  {
    page_name: "Vessel Spares & Parts",
    slug: "metal",
    products: [
      // Focus Products
      {
        main_title: "Metals",
        product_detail: [
          {
            title: "Carbon Steel",
            image: "/productSectionImage/metal/ferrous.webp",
          },
          {
            title: "Non Ferrous Metals",
            image: "/productSectionImage/metal/non.webp",
          },
          {
            title: "Alloy Metals",
            image: "/productSectionImage/metal/alloy-metal.webp",
          },
          {
            title: " Sheet Metals",
            image: "/productSectionImage/metal/sheet.webp",
          },
          {
            title: " Structural Steel",
            image: "/productSectionImage/metal/structural-metal.webp",
          },
        ],
      },
    ],
  },
  // Household Appliances
  {
    page_name: "Vessel Spares & Parts",
    slug: "household-appliances",
    products: [
      // Focus Products
      {
        main_title: "Household Appliances",
        product_detail: [
          {
            title: "Mixer",
            image: "/productSectionImage/household/mixer.webp",
          },
          {
            title: "Air Conditioners",
            image: "/productSectionImage/household/ac.webp",
          },
          {
            title: "Grinders",
            image: "/productSectionImage/household/grinders.webp",
          },
          {
            title: " Heater",
            image: "/productSectionImage/household/heater.webp",
          },
          {
            title: "Microwave Ovens",
            image: "/productSectionImage/household/oven.webp",
          },
          {
            title: "Washing Machines",
            image: "/productSectionImage/household/w-machine.webp",
          },
          {
            title: "Blender",
            image: "/productSectionImage/household/blendor.webp",
          },
          {
            title: "Hair Dryer",
            image: "/productSectionImage/household/dryer.webp",
          },
          {
            title: "Fan",
            image: "/productSectionImage/household/fan.webp",
          },
          {
            title: "induction",
            image: "/productSectionImage/household/induction.webp",
          },
          {
            title: "TV",
            image: "/productSectionImage/household/tv.webp",
          },
          {
            title: "Refrigerator",
            image: "/productSectionImage/household/frigde.webp",
          },
          {
            title: "Juicer",
            image: "/productSectionImage/household/juicer.webp",
          },
          {
            title: "Electric Kettle",
            image: "/productSectionImage/household/kettle.webp",
          },
          {
            title: "Toaster",
            image: "/productSectionImage/household/toaster.webp",
          },
          {
            title: "Vaccum Cleaner",
            image: "/productSectionImage/household/vaccum.webp",
          },
          {
            title: "Water Purifier",
            image: "/productSectionImage/household/water-pur.webp",
          },
        ],
      },
    ],
  },
  // Fasion
  {
    page_name: "Vessel Spares & Parts",
    slug: "fashion",
    products: [
      // Focus Products
      {
        main_title: "Our Products",
        product_detail: [
          {
            title: "Clothing",
            image: "/productSectionImage/fashion/clothing.webp",
          },
          {
            title: "Makeup Accessories",
            image: "/productSectionImage/fashion/accessories.webp",
          },
          {
            title: "Lip Products",
            image: "/productSectionImage/fashion/lipstick.webp",
          },
          {
            title: "Footwear",
            image: "/productSectionImage/fashion/footwear.webp",
          },
          {
            title: "Foudations & Base Products",
            image: "/productSectionImage/fashion/foundation.webp",
          },
          {
            title: "Seasonal & Occasion Wear",
            image: "/productSectionImage/fashion/occasion.webp",
          },
          {
            title: "Eye Makeup",
            image: "/productSectionImage/fashion/eyeliner.webp",
          },
          {
            title: "Face Enhancers",
            image: "/productSectionImage/fashion/enhancer.webp",
          },
          {
            title: "Makeup Tools",
            image: "/productSectionImage/fashion/tools.webp",
          },
          {
            title: "Makeup Removers & Cleansers",
            image: "/productSectionImage/fashion/cleaner.webp",
          },
          {
            title: "Kids Wear",
            image: "/productSectionImage/fashion/kids.webp",
          },
          {
            title: "Denims Wear",
            image: "/productSectionImage/fashion/denim.webp",
          },

          {
            title: " Luxury & Designer Wear",
            image: "/productSectionImage/fashion/luxury.webp",
          },
        ],
      },
    ],
  },
];
