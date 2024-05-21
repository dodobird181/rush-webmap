const Question = {
  key: 'eat-local',
  title: "Eat Local",
  question: "My corner store is charging $6.29 for potato chips! Can somebody call food security?",
  image: require('../png/EatLocal.png'),
  sections: {
    one: [
      {
        heading: 'Plenty of low-hanging fruit if...',
        items: [
          'you see Agricultural Land Reserves near you.',
          'you see pollinator gardens connecting green spaces providing vital uninterrupted habitat for the pollinators critical to local food production.',
          'you can easily buy directly from the folks who are growing your food at nearby farmer’s markets and farms with CSA or box programs.',
          'community garden plots provide space for you and your neighbours to grow your own.',
        ]
      },
      {
        heading: 'It\'s another can of beans if...',
        items: [
          'nearby stores and restaurants aren’t serving up a selection of locally-sourced and cultural foods.',
          'there aren’t any groups providing food banks and hampers to offer free local food to those in need.',
          'you can’t find a place to plant a little garden.',
          'finding healthy food means a road trip.',
        ]
      },
    ],
    two: {
      heading: 'Grow your food system; know your farmer.',
      items: [
        'Use your Open Green Map account to plot local food initiatives that are missing from the map.',
        'Eat foods that are grown in season. Follow Nature’s rhythm and keep local farmers in business all year round.',
        'Buy local food at grocery stores, through CSA box programs, and farmer’s markets to promote community self-reliance and food security in the region.',
        'Eat it fresh and enjoy every last crumb. 33% of overall food waste entering the Hartland Landfill is avoidable or donatable.',
        'Get your hands in the earth and your feet on the ground. Grow some food at home or in a community garden.',
        'Plant a pollinator garden and plot it on the RUSH Naturehood map.',
        'Don’t treat the soil like dirt. Compost in your backyard or through a collection service and contribute to the terroire of the region.',
        'Volunteer with a local food group and add your strength to the system.',
        'Find ways that your community can support policies and action for food security and that make cultural harvesting on land and water everything it should be',
      ]
    },
    three: {
      items: [
        'When we rely on food that comes from far away, we are supporting a shipping industry that puts large amounts of greenhouse gasses into the planet’s atmosphere and oceans. Of the food imported to Canada, fruits and vegetables incur the most food miles and result in emissions amounting to 3.3 million metric tonnes of CO2. Shipping traffic also disrupts marine life.',
        'The more we depend on imported food, the more vulnerable we become if the import system can’t deliver. In an emergency, our food supply chain can be compromised. This ratchets up the price of groceries or leaves the grocery shelves bare.',
        'Only 10% of food consumed in the CRD is produced here. With a growing population comes development pressures on agricultural land and green spaces. Although only 50% of ALR land is in production, more land in ALR means greater potential for local food production. A local food network means a healthier economy, more nutritious food, and a reduction in the greenhouse gasses associated with food import.',
        'Food waste is banned from the Hartland Landfill because when it rots it creates methane which is a very powerful greenhouse gas. Soil is key to regulating the atmosphere so the more we compost and plant native plants, the better our ecosystem can function. Feed the soil that feeds the foods that feed you. Check out the Victoria Compost Education Centre for resources on how to garden sustainably, without herbicides and pesticides.',
        'Make local food more affordable. The BC Alliance for Healthy Living Society found that one third of the BC population said that healthy food was not affordable. Farming is a difficult business with the price of land and access to tools and processing facilities. If we can strengthen the system, the market will improve. Growing cultural foods locally makes it easier to access them through food banks and community programs.',
        'Our efforts to divert food waste from the landfill are beginning to work due to composting services, people and programs. The payoff is an endless supply of local soil.',
        'Shellfish harvesting closures are the result of pollutants in the watershed. Fertilizers, pesticides and leaky septic tanks are the things we need to eliminate to fix this problem. When cultural harvesting is restored, it will be a sign of ecosystem health and food security',
        'Forage fish lay their eggs on fine sand beaches and are foundational to the food chain. Advocating for shoreline set backs will let Nature sculpt the beaches and refine the sand so that our seafood chain is well linked.',
      ]
    },
  },
  act: {
    initiatives: [
      {
        title: "Our Food Future",
        image: require('../png/OurFoodFuture.png'),
        link: "https://biomimicryfrontiers.com/our-food-future",
        description: 'Biomimicry reminds us that there is no waste out in nature, and to truly imitate nature, we must eliminate waste. Biomimicry Frontiers brings a biomimetic lens to the Our Food Future initiative.'
      },
      {
        title: 'Iyé Creative',
        image: require('../png/IyeCreative.png'),
        link: 'https://www.iyeherstories.com/',
        description: 'Iyé Creative is a food justice and grassroots collective nurturing reciprocal relations and mutual aid systems. Their work involves supporting the healthy and culturally informed food needs of disenfranchised communities, raising awareness of food accessibility, and uplifting racialized voices in food production and distribution.'
      },
      {
        title: 'Greater Victoria Cultural Food Community Map',
        image: require('../png/GVCulturalFoodMap.png'),
        link: 'https://storymaps.arcgis.com/stories/06ee241047d8455bbb02230f453f2edc',
        description: 'The Greater Victoria Cultural Food Community Map illustrates many ways in which food is a critical component of cultural well-being. The Map emphasizes that while Cultural foods help individuals maintain a sense of belonging and identity, there is a lack of culturally relevant foods being grown and sold at affordable prices in the Victoria and Saanich regions for IBPOC, refugees, and community members experiencing marginalization. The Map recommends allocating more resources towards the local production of culturally appropriate foods, as well as to cultural food events and other avenues to help folks navigate the local food scene.'
      },
      {
        title: 'BC Farmers’ Market - Food coupons',
        image: require('../png/BCFarmersMarket.png'),
        link: 'https://bcfarmersmarket.org/coupon-program/where-it-operates/',
        description: 'The Farmers’ Market Nutrition Coupon Program is "a healthy eating initiative that supports farmers’ markets and strengthens food security across British Columbia." Community partner organizations provide coupons to lower-income families, pregnant people and seniors. These coupons can be spent at all participating member farmers’ markets. Households enrolled in the program may receive $27/week in coupons for up to 16 weeks. Get in touch with your local community partner (identified on the website) to access coupons. There is high demand and limited funding for this program across BC, and capacity will vary from partner to partner.'
      },
      {
        title: 'Cascadia Seaweed',
        image: require('../png/CascadiaSeaweed.png'),
        link: 'https://www.cascadiaseaweed.com/about-us-4-0',
        description: 'Cultivated kelp provides a nature-based solution to climate change and food security. Cascadia Seaweed cultivates local species of seaweed on low-impact ocean farms in partnership with coastal First Nations, harvests the seaweed, and manufactures products for land-based farmers. Cascadia operations use biological solutions to increase food production, mitigate climate change, improve ocean ecosystems, and advance Indigenous reconciliation.  Cascadia describes their operation as "sustainable aquaculture supporting regenerative agriculture — a circular system where every touch point makes a positive impact."'
      },
      {
        title: 'Capital Region Food & Agriculture Initiatives Roundtable',
        image: require('../png/CRFAIR.png'),
        link: 'http://www.crfair.ca/',
        description: 'The Capital Region Food and Agricultural Initiatives Roundtable (CRFAIR) works to mobilize and connect efforts to develop healthy, equitable and sustainable food systems in the Capital Region. CRFAIR acts as a regional backbone organization, and offers a range of services to community organizations, government, and industry.'
      },
      {
        title: 'Cowichan Green Community',
        image: require('../png/CowichanGreen.png'),
        link: 'https://cowichangreencommunity.org/all-locations/',
        description: 'The Cowichan Green Communities local farm map features producers across Vancouver Island dedicated to adding value to their ecosystems and improving food security.'
      },
      {
        title: 'Foodlands Trust Business Case - CRD',
        image: require('../png/CRDFoodlands.png'),
        link: 'https://www.crd.bc.ca/docs/default-source/regional-planning-pdf/food-agriculture/foodlands-trust-business-case-february-2022.pdf',
        description: 'This 2022 business case seeks to understand the challenges and opportunities related to a Foodland Trust Incubator Program in the CRD. The aim of Foodland Trust is to increase access to agricultural land and provide start-up support for aspiring farmers, as well as to contribute to local food security. There are only a handful of incubator programs in Canada, including two in the capital region - Haliburton Community Farm in Saanich and Sandown Centre in North Saanich. Moving forward, the CRD and its partners intend to engage with neighbouring First Nations in decision making of the Foodland Trust, and invite them to incorporate traditional and Indigenous food systems on the parcels.'
      },
      {
        title: 'FED Urban Agriculture',
        image: require('../png/FEDUrbanAgriculture.png'),
        link: 'https://www.get-fed.ca/my-fed-farm',
        description: 'FED is a registered charity that partners with growers, restaurants, and others to transform the southern Van Isle cityscape into a vibrant foodscape. FED engages in advocacy and education as well as tackling the awesome dirty work of creating urban food gardens. FED projects include My FED Farm which provides free garden kits and support to vulnerable populations; the Urban Learning Garden in the courtyard of the downtown branch of the GVPL. Check out this site to find videos and resources to learn to grow your own food, as well as everything you need to know about starting a community garden.'
      },
      {
        title: 'Food Rescue Project',
        image: require('../png/FoodRescueProject.png'),
        link: 'https://victoriafoundation.bc.ca/food-rescue-project/',
        description: 'The Food Rescue Project recovers and redistributes fresh food to food insecure communities in the CRD.  Since March 2017, the project has been collecting over 2,000kg of fresh food daily and distributing it through a network of more than 50 organizations including non-profits, First Nations and public schools. The Food Rescue Project estimates that it nourishes about 35,000 people monthly with good food that otherwise would be destined for the landfill.'
      },
      {
        title: 'Vancouver Island\'s 100-Mile Diet',
        image: require('../png/VanIsland100MileDiet.png'),
        link: 'https://bcfarmsandfood.com/vancouver-island-farms-local-food-map/',
        description: 'BC Farms & Food created this interactive farm map to connect people with locally grown foods in 16 Vancouver Island regions. This map guides users to farm stands, u-picks, CSA farm box programs and farmers markets, and highlights farms that offer tours, workshops, wine tasting, earth-to-table restaurants, events and overnight farm stays.'
      },
      {
        title: 'Community Food Hub',
        image: require('../png/CommunityFoodHub.png'),
        link: 'https://www.victoriacommunityfoodhub.com/',
        description: 'The Victoria Community Food Hub Society (VCFHS) works to strengthen the local food system, build community, and alleviate poverty and hunger by providing access to healthy food for all.'
      },
      {
        title: 'Sandown Centre for Regenerative Agriculture',
        image: 'https://static.wixstatic.com/media/0fd4be_5e90dfb6e65b42808d5f1deaa6d11c53~mv2.png/v1/fill/w_810,h_274,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sandown%20Centre%20Logo%20-%20Horizontal.png',
        link: 'https://www.sandowncentre.com/',
        description: 'The Sandown Centre for Regenerative Agriculture operates 83 acres made up of farmland, forest, wetlands, meadows, and community gardens. Sandown serves as a demonstration site and works with farmers, researchers, and community members to develop best practices in regenerative agriculture.'
      },
      {
        title: 'TOPSOIL',
        image: require('../png/TOPSOIL.png'),
        link: 'https://www.topsoileatlocal.com/',
        description: 'TOPSOIL is a great example of innovative urban agriculture. TOPSOIL transforms unused urban spaces – like rooftops, or vacant blocks awaiting development – into productive and profitable agricultural growing areas to support a sustainable, hyper-local food economy. TOPSOIL uses "innovative, light-footprint gardening technology" like geotextile planter containers to grow a variety of fruit, veggies, salad greens and herbs right in the heart of Victoria. The harvest is sold direct to restaurants and the local community.'
      },
    ],
  }
};
export default Question;