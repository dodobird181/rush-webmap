const CircularEcon = {
  key: 'circular-economy',
  title: 'Circular Economy',
  question: 'Shape up your triple bottom line. Close the loop on waste and eliminate the guilt with the garbage of consumerism.',
  image: require('../png/CircularEconomy.png'),
  sections: {
    one: [
      {
        heading: 'Your region is turning waste into a resource if...',
        items: [
          'you notice Circular Economy Businesses near you.',
          'you see convenient places to recycle unwanted household materials and medications.',
          'your municipality has a ban on plastic bags and single-use items, and businesses are on board.',
          'you can find a convenient way to get rid of your stuff on the RCBC website.',
          'when you arrive at the landfill with a truckload, you can easily dispose responsibly - and drive away feeling flush and free.',
        ]
      },
      {
        heading: 'It’s a vicious circle if...',
        items: [
          'when you shop or get take out, you end up with a bail of plastic and styrofoam that you don’t know what to do with.',
          'your municipality doesn’t have a ban on single use items.',
          'there are no convenient places to recycle or re-purpose your stuff.',
          'when you arrive at the landfill with a truckload, you spend your day and empty your wallet sorting out how to dispose responsibly.',
        ]
      },
    ]
  },
  description_new: [
    {type: 'h2', content: 'Your region is turning waste into a resource if...'},
    {type: 'ul', content: [
      'you notice Circular Economy Businesses near you.',
      'you see convenient places to recycle unwanted household materials and medications.',
      'your municipality has a ban on plastic bags and single-use items, and businesses are on board.',
      'you can find a convenient way to get rid of your stuff on the RCBC website.',
      'when you arrive at the landfill with a truckload, you can easily dispose responsibly - and drive away feeling flush and free.',
    ]},
    {type: 'h2', content: 'It’s a vicious circle if...'},
    {type: 'ul', content: [
      'when you shop or get take out, you end up with a bail of plastic and styrofoam that you don’t know what to do with.',
      'your municipality doesn’t have a ban on single use items.',
      'there are no convenient places to recycle or re-purpose your stuff.',
      'when you arrive at the landfill with a truckload, you spend your day and empty your wallet sorting out how to dispose responsibly.',
    ]},
    {type: 'spacer'},
    {type: 'h2', content: 'Make your move. Turn trash into treasure.'},
    {type: 'ul', content: [
      'Plot your favourite circular economy business on the map with your open greenmap account.',
      'Shop and drop things into your own reusable bag. Refuse single use items including checkout bags, straws, stir-sticks, and take-away food containers.',
      'Take the time to digest good food and surroundings at your local eatery.',
      'Understand the options at your local depot for returning unwanted paints, electronics, soft plastics, batteries, lightbulbs, and styrofoam.',
      'Get a free tour of the Hartland landfill to witness next level waste reduction and circular production.',
      'Enjoy treasure hunting at yard sales, thrift stores, and internet sites that facilitate the exchange of used items. Support community services by donating good quality household items that you no longer need.',
      'Check out Project Zero and BC Green Business for companies who are closing the loop on waste. Shop from businesses that have a zero waste strategy and are committed to climate action and social justice.',
      'Consult the Recycling Council of BC website if you don’t know how to safely and productively get rid of something.',
    ]},
    {type: 'spacer'},
    {type: 'h2', content: 'Down the rabbit hole.'},
    {type: 'p', content: 'About 340,000 tonnes of plastic and packaging was thrown away in 2019 in BC. 40% of plastic is used only once. Businesses often must pay for disposal, and also lose the potential value of keeping valuable waste in circulation.'},
    {type: 'p', content: 'When we turn trash into treasure, we improve the local economy, limit pollution and greenhouse gas emissions, divert waste from the landfill, reduce stress on our environment, encourage innovation, and invest in health and wellbeing.'},
    {type: 'p', content: 'Municipalities are now empowered to ban plastic bags and single-use plastics without provincial approval - a change led by Esquimalt, Saanich and Victoria. The Town of Sidney is now leading the pack in banning plastic bags, straws, polystyrene foam serviceware, and single-use plastic utensils.'},
    {type: 'p', content: 'BC is a leader in "take back programs" known as Extended Producer Responsibility (EPR) which require producers to account for the lifecycle of the products and packaging they sell. From medications to batteries, to packaging and paint, our community is well set up for a high level of recycling and reuse. BC’s EPR programs currently recapture 315,000 tonnes of plastics found in various products. You are in a good place to look again at what you’ve been calling “garbage.”'},
    {type: 'p', content: 'If you shop at thrift stores that fund community organizations you are getting more bang.'},
  ],
  act: {
    initiatives: [
      {
        title: 'Indigenomics',
        description: 'Economics from an Indigenous Worldview. The Indigenomics Institute is a leading research, education, and engagement platform that supports the rebuilding and design of Indigenous economies of Inidigenous peoples worldwide.',
        link: 'https://indigenomicsinstitute.com/',
        image: require('../png/Indigenomics.png'),
      },
      { 
        title: "Project Zero",
        description: "Launched in 2019, Project Zero is an initiative of the Synergy Foundation focused on implementing circular economy concepts in British Columbia through incubation, innovation, and education.",
        link: "https://www.project-zero.ca/",
        image: require('../png/ProjectZero.png'),
      },
      {
        title: "Recycling Council of BC",
        description: "BC’s trusted source of information on local curbside recycling services, province-wide Extended Producer Responsibility and stewardship programs, share, reuse and repair options, as well as best practices from around the world.",
        link: "https://rcbc.ca/",
        image: require('../png/RecycleCBC.png'),
      },
      {
        title: "South Island Prosperity Partnership",
        description: 'The South Island Prosperity Partnership (SIPP) is an alliance of over 70 public and private-sector partners in Greater Victoria, including 11 local governments, nine First Nations, three post-secondary institutions, nine industry associations and nonprofits, and more than 30 major employers. SIPP works to bolster our region\'s economic and social prosperity. This will happen by catalyzing the creation of high-quality, household-sustaining jobs, so that more families can afford to live, work and build a life here.',
        link: "https://southislandprosperity.ca/who-is-sipp/",
        image: require('../png/SIPP.png'),
      },
      {
        title: 'Salt Legacy',
        description: 'Ecostar award winner, Salt Legacy upcycles sailclothg into outdoor gear bags that set you up to live the good life!',
        link: 'https://www.saltlegacy.com/',
        image: require('../png/SaltLegacy.png'),
      },
      {
        title: 'Extended Producer Responsibility BC',
        description: 'BC is a leader in Extended Producer Responsibility (EPR) or take-back programs to make sure that manufacturers, distributors, and retailers are accountable for their products for the full life cycle in terms of cost and design. Inspired by the bottle depot concept, these programs range from medications return to tire recycling.',
        link: 'https://www2.gov.bc.ca/gov/content/environment/waste-management/recycling/extended-producer-responsibility',
        image: require('../png/ExtendedProducerResponsibility.png'),
      },
      {
        title: 'Pacific Mobile Depot',
        description: 'Pacific Mobile Depots provide one of the most complete plastics recycling services in Greater Victoria & Metro Vancouver. They currently run four Greater Victoria depot locations, as well as two more mobile depot locations in Metro Vancouver, providing a place for residents to bring in their (sorted or unsorted) plastics for a small fee.',
        link: 'http://pmdrecycling.com/',
        image: require('../png/PacificMobileDepot.png'),
      },
      {
        title: "BC Green Business",
        description: "BC Green Business provides sustainability certification for member businesses, and works with them to identify unique opportunities for environmental and community friendly practices. Browse their member directory to find sustainable businesses in your area.",
        image: require('../png/BCGreenBusiness.png'),
        link: "https://bcgreenbusiness.ca/",
      },
      {
        title: "Zero Waste Victoria Storymap",
        description: "A Storymap collecting the locations of zero waste intitiatives and businesses in the Greater Victoria area. Project completed by Aislyn King, Ege Kaymaz, Katie Wilson, Katrina Laube as part of a Community Based Participatory Research course in the UVic Geography Department.",
        link: "https://storymaps.arcgis.com/stories/dc6ffc4f93b64815989f762178467827",
        image: require('../png/ZeroWasteVictoria.png'),
      },
      {
        title: 'Mapping the Flow of the World\'s Plastic',
        description: 'This infographic produced by visual capitalist and created by Iman Ghosh in 2019 is easy to follow and argues for recycling infrastructure, reducing throwaway culture, and banning single-use plastics.',
        link: 'https://www.visualcapitalist.com/mapping-the-flow-of-the-worlds-plastic-waste/',
        image: require('../png/OutOfSight.png'),
      },
      {
        title: 'Explore Circular Economy Initiatives',
        description: 'This Government of Canada webpage summarizes and links to all of the federal initiatives that support circular economy efforts across the provinces, territories, and internationally.',
        link: 'https://www.canada.ca/en/services/environment/conservation/sustainability/circular-economy/circular-economy-initiatives.html',
        image: require('../png/CanadaCircularEcon.png'),
      },
      {
        title: 'Soap for Hope Canada',
        description: 'Soap for Hope Canada repurposes discarded hygiene products from hotels. These products are then transformed and redistributed to support the health and dignity of people in need.',
        link: 'https://www.soapforhopecanada.ca/',
        image: require('../png/SoapForHope.png'),
      },
    ],
  },
};
export default CircularEcon;