export interface HoleData {
  number: number;
  par: number;
  yardage: {
    tips?: number;
    white?: number;
    blue?: number;
  };
  description: string;
  features: string[];
  tips: string;
  signature?: boolean;
}

export const courseInfo = {
  name: "Whispering Pines Golf Course",
  tagline: "Where the pines meet the sky",
  description:
    "An 18-hole championship course located approximately 12 miles east of Eau Claire, Wisconsin on Highway 29 and 1½ miles west of Cadott on County Trunk X.",
  address: "24700 County Highway X, Cadott, WI 54727",
  phone: "(715) 289-4653",
  email: "todd@whisperingpinesgc.net",
  alternateEmail: "info@whisperingpinesgc.net",
  totalPar: 72,
  rating: 71.2,
  slope: 128,
};

export const holes: HoleData[] = [
  {
    number: 1,
    par: 4,
    yardage: { tips: 421, white: 356 },
    description:
      "A rather halcyon opening hole and one of the few easier holes on the front nine. This dogleg right offers a gentle start to your round.",
    features: [
      "Dogleg right",
      "Out of bounds along the right (typically not in play)",
      "Fairway bunker on the right side",
    ],
    tips: "Longer hitters need a substantial drive to reach the green in regulation from the tips. When the pin is at the back, approach shots are extremely difficult - over-the-green shots are nearly impossible to recover from.",
  },
  {
    number: 2,
    par: 4,
    yardage: { white: 340 },
    description:
      "A rather short par 4 doglegging to the right. The fairway slopes rightward, encouraging players to aim left.",
    features: [
      "Dogleg right",
      "Fairway slopes right to left",
      "Green has severe left-to-right slope",
    ],
    tips: "Aim down the left side whether your ball fades or flies straight. Position your approach to leave an uphill putt rather than a sidehill one.",
  },
  {
    number: 3,
    par: 4,
    yardage: { white: 429 },
    description:
      "Considered by many to be the most difficult par four on the front nine. The elevated tee sits approximately 20 feet above the fairway landing zone.",
    features: [
      "Elevated tee (20 feet above fairway)",
      "Out of bounds and pond right",
      "Dense trees left",
      "Sand and water left of green",
      "Water over the green",
      "Green slopes back to front",
    ],
    tips: "Precision from the tee is essential to reach the fairway safely. Even from the fairway, the approach shot presents significant challenges due to multiple hazards surrounding the green.",
  },
  {
    number: 4,
    par: 3,
    yardage: { white: 153, blue: 189 },
    description:
      "Features a very large green with undulations running from back right to front left. A small bunker guards the front left side.",
    features: [
      "Large undulating green",
      "Bunker front left",
      "Large pine trees frame the green",
    ],
    tips: "Large pine trees can be intimidating when attacking the green, particularly when the pin is tucked right. The spacious putting surface provides multiple landing areas.",
  },
  {
    number: 5,
    par: 4,
    yardage: { white: 320 },
    description:
      "The second shortest par 4 on the course, yet it produces numerous double bogeys due to strategic hazards.",
    features: [
      "Pond left of landing zone",
      "Narrow fairway (20-25 yards)",
      "Dense rough right",
      "Challenging green to navigate",
    ],
    tips: "Block out all the danger on the right and left to focus on the tee shot. Success depends heavily on driving accuracy, as the green itself presents additional navigational challenges.",
  },
  {
    number: 6,
    par: 3,
    yardage: { white: 145 },
    description:
      "The shortest hole on the course, but don't be fooled. The green is one of the most difficult to read with the most severe back-to-front slope.",
    features: [
      "Shortest hole on course",
      "Severe back-to-front slope on green",
      "Sand traps that attract balls",
      "Raised green",
      "Persistent headwind conditions",
    ],
    tips: "Beware of this 'easy' golf hole. Should you be left, right, or over the back, chipping to the stick is most difficult.",
  },
  {
    number: 7,
    par: 5,
    yardage: { tips: 493, white: 478 },
    description:
      "A straight-away and reachable par 5 that presents birdie opportunities for skilled players. Probably the most birdiable par five on the course.",
    features: [
      "Straight-away layout",
      "Narrow 15-yard opening between trees",
      "Double and triple breaking greens",
      "Severe slopes on putting surface",
    ],
    tips: "Second shot typically requires a 3-wood to 4-iron depending on wind conditions. Success requires a long initial drive, accurate approach through the narrow opening, and ability to handle severe green slopes.",
  },
  {
    number: 8,
    par: 4,
    yardage: { white: 290 },
    description:
      "The shortest par four at Whispering Pines and also rates consistently as one of the most difficult. This is the course's signature hole.",
    features: [
      "Signature hole",
      "Green reachable with 260-yard fade",
      "Creek/water hazard left of green",
      "Out-of-bounds right",
      "50-year-old pine trees",
      "Small pond beyond green with steep sides",
      "Two-tiered putting surface",
    ],
    tips: "The recommended strategy is to hit a 4-5 iron followed by an 8-PW to the green, then two-putt for par. Don't look back after completing this hole!",
    signature: true,
  },
  {
    number: 9,
    par: 5,
    yardage: { tips: 580, white: 545 },
    description:
      "The longest par 5 in the Chippewa Valley. This hole has never been reached in two by anyone playing by the Official Rules of Golf from the tips.",
    features: [
      "Longest par 5 in Chippewa Valley",
      "Minimal hazards between tee and green",
      "Largest and most difficult green on the course",
      "Multi-level putting surface",
    ],
    tips: "Most golfers require a fairway wood followed by an iron for their approach. If the pin and your ball are on opposing levels, plan on three putting. A nice ending to a challenging front nine.",
  },
  {
    number: 10,
    par: 4,
    yardage: { white: 356 },
    description:
      "The back nine begins with this dogleg right par four. A solid opening hole for the inward nine.",
    features: [
      "Dogleg right",
      "Lateral hazards in dense underbrush left",
      "Risk if drive goes too far and straight",
      "Small green relative to course standards",
    ],
    tips: "The ideal approach involves a drive of approximately 230 yards, followed by an approach shot using 9-iron to sand wedge. Go for the middle of the green due to its smaller size.",
  },
  {
    number: 11,
    par: 3,
    yardage: { white: 148, blue: 185 },
    description:
      "A hole that seems to play longer than the yardage. Select a club one higher than usual.",
    features: [
      "Plays longer than posted yardage",
      "Subtle breaks from left to right on green",
      "Deceptive distance",
    ],
    tips: "After choosing your initial club selection, opt for one club higher to better handle the perceived distance.",
  },
  {
    number: 12,
    par: 4,
    yardage: { white: 380 },
    description:
      "A straightaway par four with trouble on the right for faders and out of bounds left for those who draw the ball.",
    features: [
      "Pond at end of fairway",
      "Water over the green",
      "Drainage canal left of green",
      "Water guards right side of green",
      "35-yard deep green",
    ],
    tips: "Multiple water hazards surround the green. The 35-yard deep green allows players to select from multiple club options depending on pin placement. A straight shot remains preferable.",
  },
  {
    number: 13,
    par: 4,
    yardage: { white: 350 },
    description:
      "A straightaway par four with no trouble for the errant right drive, though the left side presents challenges with out-of-bounds markers.",
    features: [
      "Straightaway layout",
      "New bunker on right fairway",
      "Relatively small green",
      "Green sits within grove of maple trees",
    ],
    tips: "The hole's design rewards accuracy on the approach while the tree-lined green setting demands precision for completing the hole successfully.",
  },
  {
    number: 14,
    par: 5,
    yardage: { blue: 590, white: 560 },
    description:
      "One of the longest par 5's in the Chippewa Valley. No one is known to have reached this green in two strokes.",
    features: [
      "One of longest par 5s in Chippewa Valley",
      "Narrow creek 100 yards in front of green",
      "Large green prone to three-putts",
      "Water frequently claims aggressive second shots",
    ],
    tips: "It may be prudent to lay up short with a long iron for a mid-iron third to the green. Players attempting aggressive second shots typically find their balls in the creek.",
  },
  {
    number: 15,
    par: 3,
    yardage: { white: 165, blue: 190 },
    description:
      "A challenging par 3 with multiple hazards demanding confidence and concentration.",
    features: [
      "Water hazard behind green",
      "Dense brush and lateral hazard right",
      "Trees and brush left",
      "Stream across front of green",
      "Raised green makes chipping difficult",
    ],
    tips: "Have confidence, resolve and concentration, and don't pause at the top once you've selected your club. From the wrong side, chipping to the stick is most difficult.",
  },
  {
    number: 16,
    par: 4,
    yardage: { tips: 435, white: 410 },
    description:
      "The only par four measuring over 400 yards on the back nine. Multiple hazards require strategic play.",
    features: [
      "Longest par 4 on back nine",
      "Small reservoir right of fairway",
      "Trees lining the left side",
      "Meandering stream for longer drives pulled left",
      "Challenging when facing westerly winds",
    ],
    tips: "Demands accuracy from the tee. Even optimal approach shots may fall short of the putting surface, particularly when facing prevailing wind conditions from the west.",
  },
  {
    number: 17,
    par: 5,
    yardage: { white: 490 },
    description:
      "A deceptively challenging par 5 that defies typical course design expectations. A very difficult but short par 5.",
    features: [
      "Water hazard (reservoir) right from tee",
      "Dense rough left",
      "Creek bordering fairway left and in front of green",
      "Narrow landing areas",
    ],
    tips: "The artful golfer must make critical decisions about whether to attempt reaching the green or lay up safely. The narrow fairway creates risks even for conservative approach shots.",
  },
  {
    number: 18,
    par: 4,
    yardage: { white: 400 },
    description:
      "The finishing hole features a drive through a corridor of trees with minimal hazards on either side.",
    features: [
      "Tree-lined chute off the tee",
      "Greenside bunker on the right",
      "Relatively open fairway",
      "Green with very subtle breaks, practically flat",
    ],
    tips: "Length is what you're looking for here as it will make your approach shot easier. The pin typically sits on the right side near the greenside bunker. We hope you enjoyed your round at Whispering Pines!",
  },
];

export const simulatorInfo = {
  name: "Indoor Golf Simulator",
  equipment: "Uneekor EYE XO SwingBay Golf Simulator",
  description:
    "An all-in-one golf simulator package combining advanced launch monitor technology with a simulator enclosure, projector, and golf mat.",
  hours: "Wednesday through Sunday from 10:00 AM to Close (Winter Hours)",
  pricing: [
    { duration: "30 minutes", price: 20 },
    { duration: "1 hour", price: 40 },
  ],
  features: [
    "Access to hundreds of courses worldwide, including Whispering Pines",
    "Overhead launch monitor technology requiring no marked golf balls",
    "High-speed camera and doppler system for real-time data",
    "Extreme slow-motion replay capability through impact",
    "22+ data points including ball speed, club head speed, spin rates, launch angles, distance measurements, and impact location",
  ],
  booking: {
    system: "ForeUp",
    phone: "(715) 289-4653",
  },
};

export const amenities = [
  {
    title: "Pro Shop",
    description:
      "Full-service pro shop with the latest equipment, apparel, and accessories.",
    icon: "shopping-bag",
  },
  {
    title: "Restaurant & Bar",
    description:
      "Enjoy food and drinks before or after your round. Open Monday through Sunday 10 AM to Close.",
    icon: "utensils",
  },
  {
    title: "Indoor Simulator",
    description:
      "Play year-round with our state-of-the-art Uneekor EYE XO SwingBay Golf Simulator.",
    icon: "tv",
  },
  {
    title: "Golf Leagues",
    description:
      "Join our active golf leagues and compete with fellow golf enthusiasts.",
    icon: "users",
  },
  {
    title: "Club Championships",
    description: "Annual club championship events for members of all skill levels.",
    icon: "trophy",
  },
  {
    title: "Event Hosting",
    description:
      "Host your corporate outing, charity event, or private party at our beautiful facility.",
    icon: "calendar",
  },
];

export const frontNine = holes.filter((h) => h.number <= 9);
export const backNine = holes.filter((h) => h.number > 9);

export const getTotalPar = (holeList: HoleData[]) =>
  holeList.reduce((sum, h) => sum + h.par, 0);

export const getTotalYardage = (
  holeList: HoleData[],
  tee: "tips" | "white" | "blue" = "white"
) =>
  holeList.reduce((sum, h) => sum + (h.yardage[tee] || h.yardage.white || 0), 0);
