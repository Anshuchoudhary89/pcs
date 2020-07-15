export default [
  {//0
    title: ' Click to Choose from multiple pest control services',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFYuPdJN1d_q62Im-AGEJG8FlAHeSUlOEqvwGGeyDN_UbPD70KuQ&s',
    cta: 'Pest Control',
    navigate: 'PestType'
  },
  {//1
    title: 'Click to apply for Space Booking',
    image: 'https://i.pinimg.com/originals/e3/0c/1e/e30c1eb6fd5d15eb28bb08b7e398b37f.jpg',
    cta: 'Space Booking',
    navigate: 'LoginSpaceBooking'
  },
  {//2
    title: 'Click to track your Requests',
    image: 'https://image.freepik.com/free-photo/health-worker-fumigation-fogging-mosquitoes-carriers-dengue-zika-virus-malaria_38363-163.jpg',
    cta: 'Track Reference',
    navigate: 'TrackReference'

  },
  //Under Pest Type
  {//3
    title: '',
    image: 'https://image.freepik.com/free-vector/pest-control-service-illustration_1284-8981.jpg',
    cta: 'General Pest Control',
    navigate: 'PestServiceType',
    pestvalue: 1,
    pestrate:1000
  }, 
  {//4
    title: ' ',
    image: 'https://image.freepik.com/free-photo/health-worker-fumigation-fogging-mosquitoes-carriers-dengue-zika-virus-malaria_38363-163.jpg',
    cta: 'Fumigation Services',
    navigate: 'PestServiceType',
    pestvalue: 2,
    pestrate:1200

  },
  {//5
    title: ' ',
    image: 'https://image.freepik.com/free-photo/health-worker-fumigation-fogging-mosquitoes-carriers-dengue-zika-virus-malaria_38363-163.jpg',
    cta: 'Rodent Control',
    navigate: 'PestServiceType',
    pestvalue: 3,
    pestrate:1500

  },
  {//6
    title: ' ',
    image: 'https://image.freepik.com/free-photo/health-worker-fumigation-fogging-mosquitoes-carriers-dengue-zika-virus-malaria_38363-163.jpg',
    cta: 'Termite Control',
    navigate: 'PestServiceType',
    pestvalue: 4,
    pestrate:1600

  },
  {//7
    title: ' ',
    image: 'https://image.freepik.com/free-vector/pest-control-service-illustration_1284-8981.jpg',
    cta: 'Vector Control',
    navigate: 'PestServiceType',
    pestvalue: 5,
    pestrate:1300
  },
  {//8
    title: ' ',
    image: 'https://image.freepik.com/free-photo/man-work-fogging-eliminate-mosquito-preventing-spread-dengue-fever-zika-virus_35018-317.jpg',
    cta: 'Weed Control',
    navigate: 'PestServiceType',
    pestvalue: 6,
    pestrate:1400
  }, 
   
  ////////////////////////////Pest Services Type//////////////////////////////
  
  {//9 
    title: 'Sprays are used to control insects, mites, mosquitoes, cockroaches and fungous and bacterial diseases of plants; insects, such as lice and flies, and weeds, by means of chemical weed killers or herbicides.',
    image: 'https://cdn4.vectorstock.com/i/1000x1000/07/83/pest-control-exterminator-spraying-side-view-vector-1590783.jpg',    
    cta: 'Spraying',
    navigate: 'PestApply',
    pestvalue: 1,
    pestrate:1500,
    servicenm:'General Pest Control Service',
    composition:'Chemical Used (As per the requirement)',
    chemical:'Cyphenothrin 5% EC, Deltamethrin 2.5%SC, BetaCyfluthrin 2.45%, Propoxur 20%EC, Cyfluthrin, Malathion , Lambda Cyhalothrin 10 % WP, etc',
    frequency:'Weekly',
    note:''
  },
  {//10 
    servicenm:'General Pest Control Service',
    cta: 'Gel Treatment',
    title: 'The method works by enticing the pests to eat gel bait, which it thinks is a source of food, so it consumes the insecticide contained within. The typical way to apply gel baits for cockroaches involves placing small dots of bait into cracks and around other places where they are located.',
    image: 'https://cdn4.vectorstock.com/i/1000x1000/07/83/pest-control-exterminator-spraying-side-view-vector-1590783.jpg',
    navigate: 'PestApply',
    pestvalue: 1,
    pestrate:1500,
    composition:'Chemical Used (As per the requirement)',
    chemical:'Fipronil Gel , Imidachlorprid Gel , etc',
    frequency:'Weekly',
    note:''
  },
  {//11 
    servicenm:'General Pest Control Service',
    cta: 'Fogging ',
    title: 'Fogging is a technique used for killing insects/mosquitoes that involves using a fine pesticide spray (aerosol) which is directed by a blower. In some cases, a hot vapour may be used to carry the spray and keep it airborne for longer. ',
    image: 'https://cdn4.vectorstock.com/i/1000x1000/07/83/pest-control-exterminator-spraying-side-view-vector-1590783.jpg',
    navigate: 'PestApply',
    pestvalue: 1,
    pestrate:1500,
    composition:'Chemical Used (As per the requirement)',
    chemical:'Deltamethrin 2.25% ULV, Cphenothrin 5% EC ',
    frequency:'Weekly',
    note:''
  },
   {//12 
    servicenm:'Fumigation  Services ',
    cta: 'Fumigation ',
    title: 'Fumigation is a method of pest control that completely fills an area with gaseous pesticides—or fumigants—to suffocate or poison the pests within. It is used to control pests in buildings (structural fumigation), food grains (commodity fumigation) and is also used to fumigate containers (imported or exported), buses, ships, aircrafts , etc. ',
    image: 'https://cdn4.vectorstock.com/i/1000x1000/07/83/pest-control-exterminator-spraying-side-view-vector-1590783.jpg',
    navigate: 'PestApply',
    pestvalue: 2,
    pestrate:1500,
    composition:'Chemical Used (As per the requirement)',
    chemical:'Methyl Bromide , Aluminium Phosphide  ',
    frequency:'As & when required',
    note:''
  },
   {//13 
    servicenm:'Rodent Control Treatment',
    cta: 'Rodent Control Treatment',
    title: 'Rodents can be very destructive pests that can contaminate foods and preparation areas, cause costly structural damage, and even cause house fires by chewing on electrical wires. Most importantly, rodents are reservoirs and vectors for numerous diseases. Type of rodent control treatments: 1. •	Burrow Fumigation  2.  •	Poison Baiting 3. •	Glue Trap  4. •	Herbal Treatment ',
    image: 'https://cdn4.vectorstock.com/i/1000x1000/07/83/pest-control-exterminator-spraying-side-view-vector-1590783.jpg',
    navigate: 'PestApply',
    pestvalue: 3,
    pestrate:1500,
    composition:'Chemical Used (As per the requirement)',
    chemical:'Zinc Phosphide, Glue trap , Bromadiolone,  Aluminium Phosphide (AlP)  ',
    frequency:'As & when required',
    note:''
  },
  {//14
    servicenm:'Termite Treatment',
    cta: 'Anti-termite treatment',
    title: 'Anti-termite treatment is a chemical procedure carried out for soil, masonry, wood, and electrical fixtures to provide the building with a chemical barrier against the subterranean termites before and after construction. ',
    image: 'https://cdn4.vectorstock.com/i/1000x1000/07/83/pest-control-exterminator-spraying-side-view-vector-1590783.jpg',
    navigate: 'PestApply',
    pestvalue: 4,
    pestrate:1500,
    composition:'Chemical Used (As per the requirement)',
    chemical:'Fipronil 5% EC , Glycol , etc ',
    frequency:'Weekly',
    note:''
  }, 
   {//15
    servicenm:'Vector Control',
    cta: 'Vector Control',
    title: 'Vector is an organism that does not cause disease itself but which spreads infection by conveying pathogens from one host to another. Species of mosquito, for example, serve as vectors for the deadly disease Malaria. Tyep of vector control treatment: 1. Larvicide treatment  2. Fogging 3. Surface treatment ',
    image: 'https://cdn4.vectorstock.com/i/1000x1000/07/83/pest-control-exterminator-spraying-side-view-vector-1590783.jpg',
    navigate: 'PestApply',
    pestvalue: 5,
    pestrate:1500,
    composition:'Chemical Used (As per the requirement)',
    chemical:'Deltamethrin 2.25% ULV, Cphenothrin 5% EC ',
    frequency:'Weekly',
    note:''
  },
  {//16
    servicenm:'Weed Control Treatment',
    cta: 'Weed Control Treatment',
    title: 'Weed control is the botanical component of pest control, which attempts to stop weeds, especially noxious weeds from competing with desired flora and fauna including domesticated plants and livestock and in natural settings preventing non native species competing with native species. ',
    image: 'https://cdn4.vectorstock.com/i/1000x1000/07/83/pest-control-exterminator-spraying-side-view-vector-1590783.jpg',
    navigate: 'PestApply',
    pestvalue: 6,
    pestrate:1500,
    composition:'Chemical Used (As per the requirement)',
    chemical:'Fipronil 5% EC , Glycol , etc ',
    frequency:'Weekly',
    note:''
  },


////////////////Home2////////////////////////////////////////////////
{//17
  title: 'Select Area',
  image: 'https://theconstructor.org/wp-content/uploads/2014/10/private-dwelling-450x242.jpg',
  cta: 'For Residential',
  navigate: 'residentialservice'

},
 {//18
  title: ' Select Area',
  image: 'https://cdn.propane.com/wp-content/uploads/2018/10/Propane-Homepage-Other-Uses-Commercial-Buildings-Marquee-1800x1200-Modern-Commercial-Building.jpg',
  cta: 'For Commercial',
  navigate: 'SelectService'
  

},
{//19
  title: ' Select services',
  image: 'https://cdn.gharoffice.com/assets/propertyimages/5022/2.jpg',
  cta: '1 BHK',
 
  navigate: 'SelectSeviceArea'
 
},
{//20
  title: ' Select services',
  image: 'https://img.staticmb.com/mbimages/project/Photo_h310_w462/2019/04/10/Project-Photo-7-Prime-Luxury-Builder-Floor-New-Delhi-5123379_545_1050_310_462.jpg',
  cta: '2 BHK',
  navigate: 'SelectSeviceArea2BHK',


},{//21
  title: ' Select Services',
  image: 'https://img.staticmb.com/mbimages/project/Photo_h310_w462/2018/12/06/Project-Photo-33-Unity-The-Amaryllis-New-Delhi-5087861_380_750_310_462.jpg',
  cta: '3 BHK',
  navigate: 'SelectSeviceArea3BHK',


},
{//22
  title: ' Know more',
  image: 'https://img.staticmb.com/mbimages/project/Photo_h310_w462/2019/12/11/Project-Photo-25-Hero-Homes-Mohali-Mohali-5086287_563_1000_310_462.jpg',
  cta: 'Other',
  navigate: 'SelectSeviceAreaother',


},
{//23
  title: ' 500 sq ft to 900 sq ft',
  image: 'https://static.wixstatic.com/media/72cf6390afb346699e228bf792dafcbd.jpg/v1/fill/w_980,h_606,al_c,q_85,usm_0.66_1.00_0.01/72cf6390afb346699e228bf792dafcbd.webp',
  cta: '1 BHK',
  navigate: 'pestType',


},
{//24
  title: '',
  image: 'http://www.priorycars.co.uk/wp-content/uploads/2012/02/Priory_Cars_Contact_Us_Image_by_PrioryCars._co._uk.jpg',
  cta: 'Contact Us',
  navigate: 'Contactus'

},


];