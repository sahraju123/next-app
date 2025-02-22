import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


const originalData = {
    Alabama: [
      { name: "The University of Alabama, Tuscaloosa", domain: "ua.edu",detail:"" },
      { name: "Auburn University, Auburn", domain: "auburn.edu",detail:"" },
      { name: "University of Alabama at Birmingham", domain: "uab.edu",detail:"" },
      { name: "University of South Alabama, Mobile", domain: "southalabama.edu",detail:"" },
      { name: "Auburn University at Montgomery", domain: "aum.edu",detail:"" },
      { name: "Troy University, Troy", domain: "troy.edu",detail:"" },
    ],
    Arizona: [
      { name: "Arizona State University, Phoenix", domain: "asu.edu",detail:"" },
      { name: "University of Arizona, Tucson", domain: "arizona.edu",detail:"" },
      { name: "Northern Arizona University, Flagstaff", domain: "nau.edu",detail:"" },
      { name: "Embry-Riddle Aeronautical University, Prescott", domain: "erau.edu",detail:"" },
    ],
    Arkansas: [
      { name: "Arkansas State University, Jonesboro", domain: "astate.edu",detail:"" },
      { name: "University of Central Arkansas, Conway", domain: "uca.edu",detail:"" },
    ],
    California: [
      { name: "University of California, Berkeley Extension", domain: "berkeley.edu",detail:"" },
      { name: "University of California, Irvine, Division of Continuing Education", domain: "uci.edu",detail:"" },
      { name: "University of California, Riverside, Graduate Business Programs & College of Engineering and UCR Extension", domain: "ucr.edu",detail:"" },
      { name: "Claremont Graduate University", domain: "cgu.edu",detail:"" },
      { name: "University of the Pacific", domain: "pacific.edu",detail:"" },
      { name: "San Jose State University", domain: "sjsu.edu",detail:"" },
      { name: "San Francisco State University", domain: "sfsu.edu",detail:"" },
      { name: "California State University, Los Angeles", domain: "calstatela.edu",detail:"" },
      { name: "California State University, Northridge", domain: "csun.edu",detail:"" },
      { name: "California State University, Fresno", domain: "csufresno.edu",detail:"" },
      { name: "California State University, East Bay", domain: "csueastbay.edu",detail:"" },
      { name: "California State University, Channel Islands", domain: "csuci.edu",detail:"" },
      { name: "California State University, Sacramento", domain: "csus.edu",detail:"" },
      { name: "California State University, Bakersfield", domain: "csu-bakersfield.edu",detail:"" },
      { name: "California State University, Dominguez Hills", domain: "csudh.edu",detail:"" },
      { name: "California State University, Stanislaus", domain: "csustan.edu",detail:"" },
      { name: "California State University, San Bernardino", domain: "csusb.edu",detail:"" },
      { name: "University of California, Santa Cruz, Silicon Valley Extension", domain: "ucsc.edu",detail:"" },
      { name: "Sonoma State University", domain: "sonoma.edu",detail:"" },
      { name: "California State Polytechnic University, Pomona", domain: "cpp.edu",detail:"" },
      { name: "California Baptist University", domain: "calbaptist.edu",detail:"" },
      { name: "Whittier College", domain: "whittier.edu",detail:"" },
      { name: "Woodbury University", domain: "woodbury.edu",detail:"" },
      { name: "California Lutheran University", domain: "callutheran.edu",detail:"" },
      { name: "Saint Mary's College of California", domain: "stmarys-ca.edu",detail:"" },
      { name: "William Jessup University", domain: "jessup.edu",detail:"" },
      { name: "Golden Gate University", domain: "ggu.edu",detail:"" },
      { name: "Westcliff University", domain: "westcliff.edu",detail:"" },
      { name: "Academy of Art University", domain: "academyart.edu",detail:"" },
      { name: "Santa Monica College", domain: "smc.edu",detail:"" },
      { name: "San Mateo Colleges of Silicon Valley", domain: "smccd.edu",detail:"" },
      { name: "Santa Ana College", domain: "sac.edu",detail:"" },
      { name: "Santa Rosa Junior College", domain: "santarosa.edu",detail:"" },
      { name: "Contra Costa Community College District", domain: "4cd.edu",detail:"" },
      { name: "Foothill-De Anza College", domain: "fhda.edu",detail:"" },
      { name: "Hult International Business School, San Francisco", domain: "hult.edu",detail:"" },
      { name: "Culinary Institute of America, California", domain: "cia.edu",detail:"" },
    ],
    Colorado: [
      { name: "University of Denver, Colorado", domain: "du.edu",detail:"" },
    ],
    Connecticut: [
      { name: "University of Hartford, West Hartford", domain: "hartford.edu",detail:"" },
      { name: "Sacred Heart University, Fairfield", domain: "sacredheart.edu",detail:"" },
      { name: "University of New Haven, West Haven", domain: "newhaven.edu",detail:"" },
      { name: "University of Bridgeport, Bridgeport", domain: "bridgeport.edu",detail:"" },
      { name: "Post University, Waterbury", domain: "post.edu",detail:"" },
      { name: "Paier College, Bridgeport", domain: "paier.edu",detail:"" },
    ],
    Delaware: [
      { name: "University of Delaware, Newark", domain: "udel.edu",detail:"" },
    ],
    Florida: [
      { name: "University of South Florida, Tampa", domain: "usf.edu",detail:"" },
      { name: "University of Central Florida, Orlando", domain: "ucf.edu",detail:"" },
      { name: "Florida Institute of Technology, Melbourne", domain: "fit.edu",detail:"" },
      { name: "Florida International University, Miami", domain: "fiu.edu",detail:"" },
      { name: "University of North Florida, Jacksonville", domain: "unf.edu",detail:"" },
      { name: "Florida Atlantic University, Boca Raton", domain: "fau.edu",detail:"" },
      { name: "Nova Southeastern University, Davie", domain: "nova.edu",detail:"" },
      { name: "Care Hope College, Jupiter", domain: "carehopecollege.edu",detail:"" },
      { name: "Saint Leo University, St. Leo", domain: "saintleo.edu",detail:"" },
      { name: "University of Tampa, Tampa", domain: "ut.edu",detail:"" },
      { name: "Full Sail University, Winter Park", domain: "fullsail.edu",detail:"" },
      { name: "Embry-Riddle Aeronautical University, Daytona Beach", domain: "erau.edu",detail:"" },
      { name: "South University, Tampa", domain: "southuniversity.edu",detail:"" },
    ],
    Georgia: [
      { name: "Savannah College of Art and Design, Savannah and Atlanta Campus", domain: "scad.edu",detail:"" },
      { name: "Kennesaw State University, Kennesaw", domain: "kennesaw.edu",detail:"" },
      { name: "Georgia State University, Atlanta", domain: "gsu.edu",detail:"" },
      { name: "South University, Savannah", domain: "southuniversity.edu",detail:"" },
    ],
    Idaho: [
      { name: "University of Idaho, Moscow", domain: "uidaho.edu",detail:"" },
    ],
    Illinois: [
      { name: "University of Illinois at Chicago", domain: "uic.edu",detail:"" },
      { name: "Southern Illinois University, Carbondale", domain: "siu.edu",detail:"" },
      { name: "DePaul University, Chicago", domain: "depaul.edu",detail:"" },
      { name: "Illinois State University, Normal", domain: "ilstu.edu",detail:"" },
      { name: "University of Illinois Springfield", domain: "uis.edu",detail:"" },
      { name: "Governors State University, Chicago", domain: "govst.edu",detail:"" },
      { name: "Southern Illinois University, Edwardsville", domain: "siue.edu",detail:"" },
      { name: "Western Illinois University, Macomb", domain: "wiu.edu",detail:"" },
      { name: "DeVry University, Downers Grove", domain: "devry.edu",detail:"" },
      { name: "Lewis University, Romeoville", domain: "lewisu.edu",detail:"" },
    ],
    Indiana: [
      { name: "Ball State University, Muncie", domain: "bsu.edu",detail:"" },
      { name: "Purdue University Northwest", domain: "pnw.edu",detail:"" },
      { name: "Valparaiso University", domain: "valpo.edu",detail:"" },
      { name: "Trine University, Angola", domain: "trine.edu",detail:"" },
      { name: "Franklin College, Franklin", domain: "franklincollege.edu",detail:"" },
    ],
    Kansas: [
      { name: "University of Kansas, Lawrence", domain: "ku.edu",detail:"" },
      { name: "Wichita State University, Wichita", domain: "wichita.edu",detail:"" },
      { name: "Pittsburg State University, Pittsburg", domain: "pittstate.edu",detail:"" },
      { name: "Ottawa University, Kansas City Campus", domain: "ottawa.edu",detail:"" },
    ],
    Kentucky: [
      { name: "Western Kentucky University, Bowling Green", domain: "wku.edu",detail:"" },
      { name: "Murray State University, Murray", domain: "murraystate.edu",detail:"" },
      { name: "University of Louisville, Louisville", domain: "louisville.edu",detail:"" },
      { name: "Midway University, Midway", domain: "midway.edu",detail:"" },
    ],
    Louisiana: [
      { name: "Louisiana State University, Baton Rouge", domain: "lsu.edu",detail:"" },
    ],
    Maryland: [
      { name: "Johns Hopkins University, Baltimore", domain: "jhu.edu",detail:"" },
      { name: "University of Maryland, Baltimore County", domain: "umbc.edu",detail:"" },
    ],
    Massachusetts: [
      { name: "Worcester Polytechnic Institute, Worcester", domain: "wpi.edu",detail:"" },
      { name: "University of Massachusetts Amherst", domain: "umass.edu",detail:"" },
      { name: "University of Massachusetts Lowell", domain: "uml.edu",detail:"" },
    ],
    Michigan: [
      { name: "Central Michigan University, Mount Pleasant", domain: "cmich.edu",detail:"" },
      { name: "Eastern Michigan University, Ypsilanti", domain: "emich.edu",detail:"" },
      { name: "Grand Valley State University, Allendale", domain: "gvsu.edu",detail:"" },
      { name: "Lawrence Technological University, Southfield", domain: "ltu.edu",detail:"" },
      { name: "University of Michigan-Flint, Flint", domain: "umich.edu",detail:"" },
      { name: "Northwood University, Midland", domain: "northwood.edu",detail:"" },
      { name: "Saginaw Valley State University, University Center", domain: "svsu.edu",detail:"" },
    ],
    Minnesota: [
      { name: "University of St. Thomas, Saint Paul", domain: "stthomas.edu",detail:"" },
      { name: "Southwest Minnesota State University, Marshall", domain: "smsu.edu",detail:"" },
    ],
    Mississippi: [
      { name: "Mississippi State University, Oktibbeha County", domain: "msstate.edu",detail:"" },
      { name: "Mississippi College, Clinton", domain: "mc.edu",detail:"" },
    ], 
    Missouri: [
      { name: "Missouri University of Science and Technology, Rolla", domain: "mst.edu",detail:"Test" },
      { name: "Saint Louis University, St. Louis", domain: "slu.edu",detail:"" },
      { name: "Southeast Missouri State University, Cape Girardeau", domain: "semo.edu",detail:"" },
      { name: "Central Methodist University, Fayette", domain: "centralmethodist.edu",detail:"" },
      { name: "Northwest Missouri State University, Maryville", domain: "nwmissouri.edu",detail:"" },
      { name: "Missouri State University, Springfield", domain: "missouristate.edu",detail:"" },
      { name: "Maryville University, St. Louis", domain: "maryville.edu",detail:"" },
      { name: "Webster University, St. Louis Campus", domain: "webster.edu",detail:"Student from Nepal, No Scholarship Provided!. Proceed with Caution. <strong>COA : $23,000</strong>"  },
      { name: "Park University, Parkville (Missouri) and Gilbert (Arizona) Campus", domain: "park.edu",detail:"" },
      { name: "University of Missouri, St. Louis Campus", domain: "umsl.edu",detail:"" },
    ],
    Montana: [
      { name: "Montana State University, Bozeman", domain: "montana.edu",detail:"" },
    ],
    Nebraska: [
      { name: "University of Nebraska-Lincoln, Lincoln", domain: "unl.edu",detail:"" },
      { name: "Nebraska Wesleyan University, Lincoln", domain: "nebrwesleyan.edu",detail:"" },
      { name: "University of Nebraska at Omaha, Omaha", domain: "unomaha.edu",detail:"" },
    ],
    Nevada: [
      { name: "University of Nevada, Reno", domain: "unr.edu",detail:"" },
    ],
    "New Hampshire": [
      { name: "University of New Hampshire, Durham", domain: "unh.edu",detail:"" },
      { name: "Southern New Hampshire University, Manchester", domain: "snhu.edu",detail:"" },
      { name: "Rivier University, Nashua", domain: "rivier.edu",detail:"" },
      { name: "New England College, Henniker", domain: "nec.edu",detail:"" },
    ],
    "New Jersey": [
      { name: "Montclair State University, Montclair", domain: "montclair.edu",detail:"" },
      { name: "New Jersey Institute of Technology, Newark", domain: "njit.edu",detail:"" },
      { name: "Fairleigh Dickinson University, Teaneck", domain: "fdu.edu",detail:"" },
      { name: "Drew University, Madison", domain: "drew.edu",detail:"" },
      { name: "Rowan University, Glassboro", domain: "rowan.edu",detail:"" },
      { name: "Felician University, Rutherford", domain: "felician.edu",detail:"" },
      { name: "Rider University, Lawrenceville", domain: "rider.edu",detail:"" },
    ],
    "New Mexico": [
      { name: "University of New Mexico, Albuquerque", domain: "unm.edu",detail:"" },
      { name: "Lewis University, Albuquerque Campus", domain: "lewis.edu",detail:"" },
    ],
    "New York City": [
      { name: "Yeshiva University, New York City", domain: "yeshiva.edu",detail:"" },
      { name: "University of Albany, The State University of New York, Albany (SUNY Albany)", domain: "albany.edu",detail:"" },
      { name: "State University of New York at Geneseo (SUNY Geneseo)", domain: "geneseo.edu",detail:"" },
      { name: "SUNY Polytechnic Institute, Utica, New York", domain: "sunypoly.edu",detail:"" },
      { name: "The State University of New York at New Paltz (SUNY New Paltz)", domain: "newpaltz.edu",detail:"" },
      { name: "State University of New York at Plattsburgh (SUNY Plattsburgh)", domain: "plattsburgh.edu",detail:"" },
      { name: "State University of New York College at Old Westbury, New York", domain: "oldwestbury.edu",detail:"" },
      { name: "State University of New York Oswego (SUNY Oswego)", domain: "oswego.edu",detail:"" },
      { name: "Queens College, City University of New York", domain: "qc.cuny.edu",detail:"" },
      { name: "Adelphi University, New York-Garden City and Manhattan Campus", domain: "adelphi.edu",detail:"" },
      { name: "Rochester Institute of Technology, Rochester", domain: "rit.edu",detail:"" },
      { name: "Pace University, New York City", domain: "pace.edu",detail:"" },
      { name: "Hofstra University, Long Island, New York", domain: "hofstra.edu",detail:"" },
      { name: "Long Island University, Post, New York", domain: "liu.edu",detail:"" },
      { name: "Long Island University, Brooklyn, New York", domain: "liu.edu",detail:"" },
      { name: "NY Tech, New York (NYIT)", domain: "nyit.edu",detail:"" },
      { name: "New York Film Academy, New York City", domain: "nyfa.edu",detail:"" },
      { name: "Marist College, Poughkeepsie, New York", domain: "marist.edu",detail:"" },
      { name: "Monroe College, Bronx, New York", domain: "monroecollege.edu",detail:"" },
      { name: "Berkeley College, New York City Campus", domain: "berkeleycollege.edu",detail:"" },
      { name: "Finger Lakes Community College, Canandaigua, New York", domain: "flcc.edu",detail:"" },
      { name: "Culinary Institute of America, New York (Only UG)", domain: "cia.edu",detail:"" },
    ],
    "North Carolina": [
      { name: "East Carolina University, Greenville", domain: "ecu.edu",detail:"" },
    ],
    "South Carolina": [
      { name: "University of South Carolina, Columbia", domain: "sc.edu",detail:"" },
      { name: "University of South Carolina Upstate, Spartanburg", domain: "uscupstate.edu",detail:"" },
      { name: "Charleston Southern University, Charleston", domain: "csuniv.edu",detail:"" },
    ],
    Ohio: [
      { name: "Miami University, Oxford, Ohio", domain: "miamioh.edu",detail:"" },
      { name: "Miami University, Hamilton & Middletown Campus, Ohio", domain: "miamioh.edu",detail:"" },
      { name: "University of Cincinnati, Cincinnati, Ohio", domain: "uc.edu",detail:"" },
      { name: "Ohio University, Athens, Ohio", domain: "ohio.edu",detail:"" },
      { name: "University of Dayton, Dayton, Ohio", domain: "udayton.edu",detail:"" },
      { name: "Kent State University, Kent, Ohio", domain: "kent.edu",detail:"" },
      { name: "Cleveland State University, Cleveland, Ohio", domain: "csuohio.edu",detail:"" },
      { name: "Youngstown State University, Youngstown, Ohio", domain: "ysu.edu",detail:"" },
      { name: "Xavier University, Cincinnati, Ohio", domain: "xavier.edu",detail:"" },
      { name: "Tiffin University, Tiffin, Ohio", domain: "tiffin.edu",detail:"" },
      { name: "Franklin University, Columbus, Ohio", domain: "franklin.edu",detail:"" },
      { name: "The University of Findlay, Findlay, Ohio", domain: "findlay.edu",detail:"" },
    ],
    Oklahoma: [
      { name: "University of Tulsa, Tulsa, Oklahoma", domain: "utulsa.edu",detail:"" },
      { name: "The University of Oklahoma, Norman, Oklahoma", domain: "ou.edu",detail:"" },
      { name: "Oklahoma State University, Stillwater, Oklahoma", domain: "okstate.edu",detail:"" },
      { name: "University of Central Oklahoma, Edmond, Oklahoma", domain: "uco.edu",detail:"" },
      { name: "Spartan College of Aeronautics and Technology, Tulsa, Oklahoma", domain: "spartan.edu",detail:"" },
    ],
    Oregon: [
      { name: "Oregon State University, Corvallis, Oregon", domain: "oregonstate.edu",detail:"" },
      { name: "Portland State University, Portland, Oregon", domain: "pdx.edu",detail:"" },
      { name: "Western Oregon University, Monmouth, Oregon", domain: "wou.edu",detail:"" },
    ],
    Pennsylvania: [
      { name: "Lehigh University, Bethlehem, Pennsylvania", domain: "lehigh.edu",detail:"" },
      { name: "Drexel University, Philadelphia, Pennsylvania", domain: "drexel.edu",detail:"" },
      { name: "Lycoming College, Williamsport, Pennsylvania", domain: "lycoming.edu",detail:"" },
      { name: "Indiana University of Pennsylvania, Indiana, PA", domain: "iup.edu",detail:"" },
      { name: "The University of Scranton, Scranton, Pennsylvania", domain: "scranton.edu",detail:"" },
      { name: "Duquesne University, Pittsburgh, Pennsylvania", domain: "duq.edu",detail:"" },
      { name: "Thomas Jefferson University, Philadelphia, Pennsylvania", domain: "jefferson.edu",detail:"" },
      { name: "York College of Pennsylvania, York, Pennsylvania", domain: "ycp.edu",detail:"" },
      { name: "Slippery Rock University, Slippery Rock, Pennsylvania", domain: "sru.edu",detail:"" },
    ],
    RhodeIsland: [
      { name: "Bryant University, Smithfield, Rhode Island", domain: "bryant.edu",detail:"" },
      { name: "New England Institute of Technology, Warwick, Rhode Island", domain: "neit.edu",detail:"" },
      { name: "Johnson & Wales University, Providence", domain: "jwu.edu",detail:"" },
    ],
    "South Dakota": [
      { name: "University of South Dakota, Vermillion", domain: "usd.edu",detail:"" },
      { name: "South Dakota School of Mines & Technology, Rapid City", domain: "sdsmt.edu",detail:"" },
      { name: "Dakota State University, Madison", domain: "dsu.edu",detail:"" },
    ],
    Tennessee: [
      { name: "University of Tennessee at Chattanooga, Chattanooga", domain: "utc.edu",detail:"" },
      { name: "Middle Tennessee State University, Murfreesboro", domain: "mtsu.edu",detail:"" },
      { name: "The University of Memphis, Memphis", domain: "memphis.edu",detail:"" },
      { name: "Tennessee Tech University, Cookeville", domain: "tntech.edu",detail:"" },
      { name: "Lipscomb University, Nashville", domain: "lipscomb.edu",detail:"" },
    ],
    Texas: [
      { name: "University of North Texas, Denton & Frisco", domain: "unt.edu",detail:"" },
      { name: "Texas State University, San Marcos", domain: "txstate.edu",detail:"" },
      { name: "Texas A & M University, Corpus Christi", domain: "tamucc.edu",detail:"" },
      { name: "McMurry University, Abilene", domain: "mcm.edu",detail:"" },
      { name: "Midwestern State University, Wichita Falls", domain: "msutexas.edu",detail:"" },
      { name: "Texas A&M University - Kingsville, Kingsville", domain: "tamuk.edu",detail:"" },
      { name: "Texas Wesleyan University, Fort Worth", domain: "txwes.edu",detail:"" },
      { name: "Dallas Baptist University, Dallas", domain: "dbu.edu",detail:"" },
      { name: "Webster University (San Antonio Campus)", domain: "webster.edu",detail:"" },
      { name: "University of Mary Hardin-Baylor, Belton", domain: "umhb.edu",detail:"" },
      { name: "Culinary Institute of America, Texas Campus", domain: "cia.org",detail:"" },
    ],
    Utah: [
      { name: "Southern Utah University, Cedar", domain: "suutah.edu",detail:"" },
      { name: "University of Utah, Salt Lake City", domain: "utah.edu",detail:"" },
      { name: "Weber State University, Ogden", domain: "weber.edu",detail:"" },
    ],
    Virginia: [
      { name: "Virginia Tech Language and Culture Institute, Blacksburg", domain: "vt.edu",detail:"" },
      { name: "George Mason University, Fairfax County", domain: "gmu.edu",detail:"" },
      { name: "Virginia Commonwealth University, Richmond", domain: "vcu.edu",detail:"" },
      { name: "James Madison University, Harrisonburg", domain: "jmu.edu",detail:"" },
      { name: "Marymount University, Arlington", domain: "marymount.edu",detail:"" },
      { name: "University of the Potomac, Virginia Campus", domain: "potomac.edu",detail:"" },
    ],
    Washington: [
      { name: "Washington State University - Pullman, Tri Cities, Everett, Vancouver, Spokane", domain: "wsu.edu",detail:"" },
      { name: "Seattle University, Seattle", domain: "seattleu.edu",detail:"" },
      { name: "City University of Seattle, Seattle", domain: "cityu.edu",detail:"" },
      { name: "Western Washington University, Bellingham", domain: "wwu.edu",detail:"" },
      { name: "Green River College, Auburn", domain: "greenriver.edu",detail:"" },
      { name: "Seattle Colleges, Seattle", domain: "seattlecolleges.edu",detail:"" },
      { name: "Shoreline Community College, Shoreline", domain: "shoreline.edu",detail:"" },
    ],
    "Washington D.C.": [
      { name: "American University Washington D.C.", domain: "american.edu",detail:"" },
      { name: "The Catholic University of America, Washington D.C.", domain: "cua.edu",detail:"" },
      { name: "Bay Atlantic University, Washington D.C.", domain: "bayatlantic.edu",detail:"" },
    ],
    "West Virginia": [
      { name: "Marshall University Huntington", domain: "marshall.edu",detail:"" },
    ],
    Wisconsin: [
      { name: "University of Wisconsin-Madison", domain: "wisc.edu",detail:"" },
      { name: "University of Wisconsin Milwaukee", domain: "uwm.edu",detail:"" },
      { name: "Marquette University, Milwaukee", domain: "marquette.edu",detail:"" },
      { name: "Milwaukee School of Engineering", domain: "msoe.edu",detail:"" },
      { name: "University of Wisconsin-Superior", domain: "uwsuper.edu",detail:"" },
      { name: "University of Wisconsin-Eau Claire", domain: "uwec.edu",detail:"" },
      { name: "University of Wisconsin-La Crosse", domain: "uwlax.edu",detail:"" },
      { name: "University of Wisconsin-Stout", domain: "uwstout.edu",detail:"" },
    ],
  };
  
  function transformUniversityData(originalData) {
    const transformedData = [];
  
    // Iterate over each state in the dictionary
    for (const state in originalData) {
      // Iterate over each university in the current state
      originalData[state].forEach(university => {
        // Create a new object with the necessary fields
        const transformedUniversity = {
          name: university.name || '', // If missing, set blank
          domain: university.domain || '', // If missing, set blank
          detail: university.detail || '', // If missing, set blank
          state: state || '', // State is set from the key
          acceptanceRate: university.acceptanceRate || 0, // If missing, set to 0
          graduationRate: university.graduationRate || 0, // If missing, set to 0
          tuitionFee: university.tuitionFee || 0, // If missing, set to 0
          agent: "KC", // Set agent as KC for all universities
          smallNote: university.smallNote || '', // If missing, set blank
          costOfAttendance: university.costOfAttendance || 0, // If missing, set to 0
          scholarships: university.scholarships || '', // If missing, set blank
          applicationFee: university.applicationFee || 0 // If missing, set to 0
        };
  
        // Push the transformed university object to the result array
        transformedData.push(transformedUniversity);
      });
    }
  
    return transformedData;
  }
  
  // Example usage:
  const transformedUniversityData = transformUniversityData(originalData);
  console.log(transformedUniversityData);

  async function insertUniversityData() {
    try {
      // Use createMany to insert all universities at once
      const result = await prisma.university.createMany({
        data: transformedUniversityData, // Pass the transformed data here
      });
  
      console.log(`${result.count} universities inserted!`);
    } catch (error) {
      console.error('Error inserting universities:', error);
    } finally {
      await prisma.$disconnect(); // Disconnect Prisma Client
    }
  }
  
  // Call the function to insert data
  insertUniversityData();