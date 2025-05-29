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
  {
    page_name: "Vessel Spares & Parts",
    slug: "agri-products",
    products: [
      // Focus Products
      {
        main_title: "Agriculture & Products",
        product_detail: [
          {
            title: "Micro Nutrients",
            image: "/productSectionImage/agriculture/nutrient.webp",
          },
          {
            title: "Water Soluble",
            image: "/productSectionImage/agriculture/water-sol.webp",
          },
          {
            title: "Organic & Bio Products",
            image: "/productSectionImage/agriculture/bio.webp",
          },
          {
            title: "High Density",
            image: "/productSectionImage/agriculture/hd.webp",
          },
          {
            title: "Crop Specific",
            image: "/productSectionImage/agriculture/crop.webp",
          },
          {
            title: "Fertilizer Pastilles",
            image: "/productSectionImage/agriculture/fertilizer.webp",
          },
          {
            title: "Plant Protection",
            image: "/productSectionImage/agriculture/protection.webp",
          },
          {
            title: "Aqua Culture & Animal Nutrition",
            image: "/productSectionImage/agriculture/cultural.webp",
          },
        ],
      },
    ],
  },
  {
    page_name: "Vessel Spares & Parts",
    slug: "paper-pulp",
    products: [
      // Focus Products
      {
        main_title: "Paper & Pulp",
        product_detail: [
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
  {
    page_name: "Vessel Spares & Parts",
    slug: "steel",
    products: [
      // Focus Products
      {
        main_title: "Paper & Pulp",
        product_detail: [
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
];
