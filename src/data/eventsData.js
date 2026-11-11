/**
 * ZYREN'27 Event Catalog
 * Structured motorsport-inspired event database.
 * Easily modify event names, fees, rules, prizes, and schedules.
 */

export const technicalEvents = [
  {
    id: 'hackathon',
    number: '01',
    code: 'GP-TECH-01',
    name: 'HACKATHON',
    subtitle: 'The 24-Hour Code Sprint',
    category: 'TECHNICAL',
    day: 'DAY 01',
    date: 'Day 01 — November 12, 2027',
    time: '09:00 AM - Next Day',
    venue: 'Turing Innovation Paddock (Main Tech Hall)',
    teamSize: '2 - 4 Members',
    maxTeamSize: 4,
    minTeamSize: 2,
    fee: 500,
    feeDisplay: '₹500 / Team',
    featured: true,
    accent: 'red',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'A flagship 24-hour sprint pushing algorithmic endurance, system architecture, and bleeding-edge rapid prototyping from pit-stop to pole position.',
    fullDesc: 'The ZYREN Hackathon is our premier technical showdown. Over 24 relentless hours, teams will receive real-world problem statements spanning AI/ML, Cloud Infrastructure, Decentralized Systems, and Smart Mobility. Build, test, and ship a production-grade prototype under strict telemetry evaluation.',
    prizes: [
      { rank: '1st Place (Pole Position)', amount: '₹25,000', perk: 'Championship Trophy + Direct Incubator Fast-track' },
      { rank: '2nd Place (P2)', amount: '₹15,000', perk: 'Silver Shield + Merit Certificate' },
      { rank: '3rd Place (P3)', amount: '₹7,500', perk: 'Bronze Plaque + Merit Certificate' }
    ],
    rules: [
      'Teams must consist of 2 to 4 registered undergraduate/postgraduate students.',
      'All code must be written during the 24-hour window; pre-built templates are strictly prohibited.',
      'Open-source libraries and APIs are permitted provided they are properly documented and declared.',
      'Midway checkpoint telemetry review at hour 12 is mandatory for qualifying to the final stage.',
      'Judges will evaluate innovation (30%), technical complexity (30%), design & UX (20%), and execution feasibility (20%).'
    ]
  },
  {
    id: 'byteblitz',
    number: '02',
    code: 'GP-TECH-02',
    name: 'BYTEBLITZ',
    subtitle: 'Speed Competitive Programming',
    category: 'TECHNICAL',
    day: 'DAY 01',
    date: 'Day 01 — November 12, 2027',
    time: '10:30 AM',
    venue: 'Computing Grid 03 (CAD Lab)',
    teamSize: '1 Member (Solo)',
    maxTeamSize: 1,
    minTeamSize: 1,
    fee: 150,
    feeDisplay: '₹150 / Participant',
    featured: false,
    accent: 'gold',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'High-RPM algorithmic problem solving where millisecond execution time and memory limits dictate pole position.',
    fullDesc: 'Fast-paced coding rounds designed to test your mastery over data structures, dynamic programming, and computational geometry under extreme clock pressure. Three elimination sectors before the final shootout.',
    prizes: [
      { rank: '1st Place', amount: '₹8,000', perk: 'Winner Trophy + Certificate' },
      { rank: '2nd Place', amount: '₹4,000', perk: 'Silver Medal + Certificate' },
      { rank: '3rd Place', amount: '₹2,000', perk: 'Bronze Medal + Certificate' }
    ],
    rules: [
      'Individual participation only; no collaboration or external communication permitted.',
      'Supported languages: C++, Java, Python 3, and Rust.',
      'Submissions are scored on accuracy, time complexity, and submission speed (penalty on wrong attempts).',
      'Plagiarism checks via automated syntax tree comparisons will disqualify offenders immediately.'
    ]
  },
  {
    id: 'think2text',
    number: '03',
    code: 'GP-TECH-03',
    name: 'THINK2TEXT',
    subtitle: 'Technical Paper & Innovation Pitch',
    category: 'TECHNICAL',
    day: 'DAY 01',
    date: 'Day 01 — November 12, 2027',
    time: '11:30 AM',
    venue: 'Seminar Hall Alpha',
    teamSize: '1 - 3 Members',
    maxTeamSize: 3,
    minTeamSize: 1,
    fee: 250,
    feeDisplay: '₹250 / Team',
    featured: false,
    accent: 'red',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Transform visionary conceptual engineering and research into rigorous academic presentations.',
    fullDesc: 'Present your novel research, architectures, or hardware/software case studies before an esteemed panel of industry experts and academicians. Topics include Autonomous Systems, Renewable Grid Tech, Quantum Foundations, and Generative Intelligence.',
    prizes: [
      { rank: '1st Place', amount: '₹10,000', perk: 'Best Paper Trophy + Journal Recommendation' },
      { rank: '2nd Place', amount: '₹5,000', perk: 'Silver Trophy + Certificate' },
      { rank: '3rd Place', amount: '₹2,500', perk: 'Certificate of Excellence' }
    ],
    rules: [
      'Teams of 1 to 3 members. IEEE double-column format required for submissions.',
      'Presentation duration: 8 minutes pitch followed by 3 minutes Q&A with the jury.',
      'Hardware prototypes or live simulations earn significant bonus evaluation points.',
      'Slide decks must be submitted 2 hours prior to the event kickoff.'
    ]
  },
  {
    id: 'crime-decoding',
    number: '04',
    code: 'GP-TECH-04',
    name: 'CRIME DECODING',
    subtitle: 'Cyber Forensics & OSINT Challenge',
    category: 'TECHNICAL',
    day: 'DAY 01',
    date: 'Day 01 — November 12, 2027',
    time: '01:30 PM',
    venue: 'Cyber Security Operations Center Lab',
    teamSize: '2 Members',
    maxTeamSize: 2,
    minTeamSize: 2,
    fee: 300,
    feeDisplay: '₹300 / Team',
    featured: false,
    accent: 'gold',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Black box telemetry analysis, memory dump forensics, and cryptic puzzle decryption to solve a high-stakes crime case.',
    fullDesc: 'Step inside the shoes of a motorsport telemetry forensic investigator. Analyze corrupted ECU logs, decrypt stenographic transmissions, inspect network pcap captures, and track breadcrumbs across simulated cyber crime scenes.',
    prizes: [
      { rank: '1st Place', amount: '₹10,000', perk: 'Sherlock Telemetry Trophy + Certificate' },
      { rank: '2nd Place', amount: '₹5,000', perk: 'Runner-up Shield + Certificate' },
      { rank: '3rd Place', amount: '₹2,500', perk: 'Special Mention Certificate' }
    ],
    rules: [
      'Strict team size of 2 members.',
      'Participants must bring their own laptops with Wireshark, Volatility, and Python pre-installed.',
      'Attacking or probing unauthorized infrastructure outside the CTF environment leads to immediate disqualification.',
      'The team solving the highest number of mystery flags in the least amount of time wins.'
    ]
  }
];

export const culturalEvents = [
  {
    id: 'group-dance',
    number: '05',
    code: 'GP-CULT-01',
    name: 'GROUP DANCE',
    subtitle: 'Synchronized Stage Spectacle',
    category: 'CULTURAL',
    day: 'DAY 02',
    date: 'Day 02 — November 13, 2027',
    time: '09:30 AM',
    venue: 'Main Open-Air Amphitheatre',
    teamSize: '6 - 15 Members',
    maxTeamSize: 15,
    minTeamSize: 6,
    fee: 800,
    feeDisplay: '₹800 / Crew',
    featured: true,
    accent: 'red',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'High-energy crew choreography with pulse-pounding rhythm, theatrical storytelling, and max downforce execution.',
    fullDesc: 'Bring your dance troupe to the grandest stage of ZYREN\'27. Whether classical fusion, hip-hop, contemporary, or cinematic, unleash theatrical power, seamless transitions, and flawless synchronization.',
    prizes: [
      { rank: '1st Place (Championship Crew)', amount: '₹20,000', perk: 'Grand Golden Trophy + Certificates' },
      { rank: '2nd Place', amount: '₹12,000', perk: 'Silver Cup + Certificates' },
      { rank: '3rd Place', amount: '₹6,000', perk: 'Bronze Shield + Certificates' }
    ],
    rules: [
      'Team strength: 6 to 15 performers on stage at any given moment.',
      'Performance time limit: 6 to 8 minutes (including stage setup and clearance).',
      'Soundtracks must be submitted in MP3/WAV format on a flash drive 1 hour before scheduled call.',
      'Props are permitted; however, inflammable substances, liquids, and sharp objects are strictly prohibited.',
      'Judged on synchronization, choreography originality, energy, costume, and stage utilization.'
    ]
  },
  {
    id: 'ramp-walk',
    number: '06',
    code: 'GP-CULT-02',
    name: 'RAMP WALK',
    subtitle: 'High-Octane Fashion Runway',
    category: 'CULTURAL',
    day: 'DAY 02',
    date: 'Day 02 — November 13, 2027',
    time: '02:00 PM',
    venue: 'Grand Indoor Auditorium Stage',
    teamSize: '8 - 14 Members',
    maxTeamSize: 14,
    minTeamSize: 8,
    fee: 1000,
    feeDisplay: '₹1,000 / Team',
    featured: true,
    accent: 'gold',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Avant-garde styling, fierce poise, and synchronized elegance on an F1 pit-lane-inspired fashion runway.',
    fullDesc: 'The centerpiece cultural glamour event. Design coherent themed collections celebrating haute couture, cyber-mechanics, heritage revival, or high-speed motorsport aesthetics. Command the runway with precision walk formations.',
    prizes: [
      { rank: '1st Place (Fashion Crown)', amount: '₹25,000', perk: 'Couture Trophy + Portfolio Feature' },
      { rank: '2nd Place', amount: '₹15,000', perk: 'Silver Runway Trophy' },
      { rank: '3rd Place', amount: '₹8,000', perk: 'Bronze Award' }
    ],
    rules: [
      'Team capacity: 8 to 14 participants including models and designated backstage coordinator.',
      'Time slot: 10 minutes total on stage.',
      'Vulgarity, offensive messaging, or non-cohesive themes will result in immediate scoring deductions.',
      'Soundtrack and light cues must be submitted during technical briefing in the morning.'
    ]
  },
  {
    id: 'battle-dance',
    number: '07',
    code: 'GP-CULT-03',
    name: 'BATTLE DANCE',
    subtitle: '1v1 & 2v2 Street Cyphers',
    category: 'CULTURAL',
    day: 'DAY 02',
    date: 'Day 02 — November 13, 2027',
    time: '11:00 AM',
    venue: 'The Cypher Arena (Paddock Lawn)',
    teamSize: '1 - 2 Members',
    maxTeamSize: 2,
    minTeamSize: 1,
    fee: 200,
    feeDisplay: '₹200 / Entry',
    featured: false,
    accent: 'red',
    image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Raw street freestyle faceoffs: Popping, Locking, Krump, Breaking, and All-Styles cypher battles.',
    fullDesc: 'Step inside the circular cypher where DJ drops random beats and dancers exchange musicality, intricate freezes, and crowd control. Knockout bracket format to crown the Cypher King.',
    prizes: [
      { rank: '1st Place', amount: '₹7,000', perk: 'Battle Belt Trophy + Cash' },
      { rank: '2nd Place', amount: '₹3,500', perk: 'Medal + Certificate' }
    ],
    rules: [
      'Solo or Duo entries allowed.',
      'DJ will play spontaneous tracks; no personal music allowed.',
      'Each round consists of 2 entries of 45 seconds per side.',
      'Physical contact with opponents is strictly prohibited and results in a disqualification.'
    ]
  },
  {
    id: 'e-sports',
    number: '08',
    code: 'GP-CULT-04',
    name: 'E-SPORTS',
    subtitle: 'Valorant & BGMI Championship',
    category: 'CULTURAL / GAMING',
    day: 'DAY 02',
    date: 'Day 02 — November 13, 2027',
    time: '10:00 AM',
    venue: 'Esports Gaming Arena (Tech Block)',
    teamSize: '4 - 5 Members',
    maxTeamSize: 5,
    minTeamSize: 4,
    fee: 400,
    feeDisplay: '₹400 / Squad',
    featured: false,
    accent: 'red',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Tactical shooters and battle royale skirmishes across competitive custom lobbies with live shoutcasting.',
    fullDesc: 'Squad up for high-intensity gaming combat. Featuring bracket tournaments in Valorant (PC 5v5) and BGMI (Mobile Squads). Matches streamed live on auditorium screens with professional shoutcasting.',
    prizes: [
      { rank: '1st Place', amount: '₹15,000', perk: 'Golden Gaming Cup + Merch' },
      { rank: '2nd Place', amount: '₹8,000', perk: 'Silver Gaming Trophy' }
    ],
    rules: [
      'Squad of 4 active players plus 1 optional substitute.',
      'Players must bring their own peripherals (headphones, mice, mobile devices). Tournament PCs provided for PC bracket.',
      'Use of emulators, hacks, third-party crosshairs, or exploiting glitches yields instant lifetime ban.',
      'Standard esports tournament rules and maps apply.'
    ]
  },
  {
    id: 'memory-riddle',
    number: '09',
    code: 'GP-CULT-05',
    name: 'MEMORY RIDDLE',
    subtitle: 'High-Speed Cognitive Recall',
    category: 'CULTURAL',
    day: 'DAY 02',
    date: 'Day 02 — November 13, 2027',
    time: '10:30 AM',
    venue: 'Paddock Room 102',
    teamSize: '1 - 2 Members',
    maxTeamSize: 2,
    minTeamSize: 1,
    fee: 150,
    feeDisplay: '₹150 / Team',
    featured: false,
    accent: 'gold',
    image: 'https://images.unsplash.com/photo-1580584126903-c17d41830450?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'A battle of mnemonic reflexes, visual recall, and rapid riddle decryption under pressure.',
    fullDesc: 'Can your brain process fleeting glimpses at Formula 1 speeds? Witness rapid-fire flash sequences, pattern anomalies, and cryptic riddles that test visual memory and deductive logic.',
    prizes: [
      { rank: '1st Place', amount: '₹5,000', perk: 'Mastermind Trophy + Certificate' },
      { rank: '2nd Place', amount: '₹2,500', perk: 'Runner-up Medal + Certificate' }
    ],
    rules: [
      'Teams of 1 or 2 participants.',
      '3 distinct rounds: Flash Visuals, Auditory Sequences, and Cryptic Logic Matrix.',
      'No pens, paper, or electronic devices permitted during observation periods.',
      'Highest cumulative score across all three rounds wins.'
    ]
  },
  {
    id: 'rc-drive',
    number: '10',
    code: 'GP-CULT-06',
    name: 'RC DRIVE',
    subtitle: 'Miniature Grand Prix Circuit',
    category: 'CULTURAL / MOTORSPORT',
    day: 'DAY 02',
    date: 'Day 02 — November 13, 2027',
    time: '12:00 PM',
    venue: 'Circuit de Zyren (Custom RC Asphalt Track)',
    teamSize: '1 - 2 Members',
    maxTeamSize: 2,
    minTeamSize: 1,
    fee: 250,
    feeDisplay: '₹250 / Pilot',
    featured: true,
    accent: 'red',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Precision radio-controlled car racing on a custom track with chicanes, hairpins, and flying laps.',
    fullDesc: 'Pure motorsport spirit in scale. Navigate miniature F1 / RC drift machines across a technical circuit featuring kerbs, chicanes, and speed traps. Compete in Time Trials and Wheel-to-Wheel Sprint Finals.',
    prizes: [
      { rank: '1st Place (GP Winner)', amount: '₹10,000', perk: 'Formula Wreath + Golden Trophy' },
      { rank: '2nd Place', amount: '₹5,000', perk: 'P2 Trophy + Certificate' },
      { rank: '3rd Place', amount: '₹2,500', perk: 'Fastest Lap Award' }
    ],
    rules: [
      'Bring your own electric RC vehicle (1:10, 1:12, or 1:16 scale) or drive provided event-standard car.',
      'Time Trial qualifying determines grid positions for the final 10-lap sprint.',
      'Aggressive corner cutting or unsporting intentional collisions penalize 5 seconds per infraction.',
      'Telemetry lap sensors determine official lap times.'
    ]
  },
  {
    id: 'lyrics-hub',
    number: '11',
    code: 'GP-CULT-07',
    name: 'LYRICS HUB',
    subtitle: 'Musical Telemetry & Verse Trivia',
    category: 'CULTURAL / MUSIC',
    day: 'DAY 02',
    date: 'Day 02 — November 13, 2027',
    time: '01:00 PM',
    venue: 'Music Conservatory & Lounge',
    teamSize: '1 - 2 Members',
    maxTeamSize: 2,
    minTeamSize: 1,
    fee: 150,
    feeDisplay: '₹150 / Team',
    featured: false,
    accent: 'gold',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Test your musical ear: Reverse melodies, missing lyric dropouts, multilingual audio puzzles.',
    fullDesc: 'From international chart-toppers to regional masterpieces, test how fast you can identify the song, finish the lyric, or translate rhythm into words in buzzer rounds.',
    prizes: [
      { rank: '1st Place', amount: '₹5,000', perk: 'Golden Mic Trophy + Certificate' },
      { rank: '2nd Place', amount: '₹2,500', perk: 'Runner-up Medal' }
    ],
    rules: [
      'Teams of 1 or 2 participants.',
      'Rounds: Reverse Audio Decode, Fill in the Blanks, Album Art Blitz, and Sudden Death Buzzer.',
      'Buzzer mistakes deduct points; timing is strictly monitored.'
    ]
  },
  {
    id: 'short-film',
    number: '12',
    code: 'GP-CULT-08',
    name: 'SHORT FILM',
    subtitle: 'Cinematic Storytelling Showcase',
    category: 'CULTURAL / MEDIA',
    day: 'DAY 02',
    date: 'Day 02 — November 13, 2027',
    time: '11:30 AM',
    venue: 'Audi-Vision Theater Hall',
    teamSize: '2 - 6 Members',
    maxTeamSize: 6,
    minTeamSize: 2,
    fee: 400,
    feeDisplay: '₹400 / Film Entry',
    featured: false,
    accent: 'red',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Screen your original short fiction, documentary, or thriller on the theater screen before film critics.',
    fullDesc: 'A festival honoring upcoming filmmakers. Submit your short movie for a grand screening followed by director Q&A. Evaluated by award-winning cinematographers and directors.',
    prizes: [
      { rank: '1st Place (Best Picture)', amount: '₹12,000', perk: 'Golden Clapperboard Trophy' },
      { rank: '2nd Place', amount: '₹6,000', perk: 'Silver Film Award' },
      { rank: 'Special Mention', amount: '₹3,000', perk: 'Best Cinematography Award' }
    ],
    rules: [
      'Runtime: 5 to 12 minutes including opening/closing credits.',
      'Must include English subtitles regardless of original spoken language.',
      'Resolution must be Full HD 1080p or 4K, H.264/MP4 format.',
      'Content must be 100% original; plagiarized footage leads to outright disqualification.'
    ]
  },
  {
    id: 'anime-quiz',
    number: '13',
    code: 'GP-CULT-09',
    name: 'ANIME QUIZ',
    subtitle: 'The Ultimate Otaku Arena',
    category: 'CULTURAL / TRIVIA',
    day: 'DAY 02',
    date: 'Day 02 — November 13, 2027',
    time: '02:30 PM',
    venue: 'Paddock Room 204',
    teamSize: '1 - 2 Members',
    maxTeamSize: 2,
    minTeamSize: 1,
    fee: 150,
    feeDisplay: '₹150 / Team',
    featured: false,
    accent: 'gold',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Shonen, Seinen, classic mecha, and modern anime lore in an electrifying multi-stage quiz battle.',
    fullDesc: 'From Initial D drift trivia to Evangelion lore, Attack on Titan strategy to One Piece world-building. Prove your knowledge in rapid visual rounds, OST guessing, and deep trivia.',
    prizes: [
      { rank: '1st Place', amount: '₹5,000', perk: 'Otaku Champion Trophy + Anime Collectibles' },
      { rank: '2nd Place', amount: '₹2,500', perk: 'Runner-up Medal + Merch' }
    ],
    rules: [
      'Solo or Duo teams.',
      'Rounds cover Classic, Modern, Audio OST, and Silhouette recognition.',
      'Use of mobile devices or smart watches strictly prohibited during quiz.',
      'Tiebreakers resolved with Sudden Death 10-second buzzer round.'
    ]
  },
  {
    id: 'ipl-auction',
    number: '14',
    code: 'GP-CULT-10',
    name: 'IPL AUCTION',
    subtitle: 'High-Stakes Franchise Strategy',
    category: 'CULTURAL / STRATEGY',
    day: 'DAY 02',
    date: 'Day 02 — November 13, 2027',
    time: '03:00 PM',
    venue: 'Executive Strategy Suite (Hall 4)',
    teamSize: '3 - 4 Members',
    maxTeamSize: 4,
    minTeamSize: 3,
    fee: 400,
    feeDisplay: '₹400 / Franchise',
    featured: false,
    accent: 'red',
    image: 'https://images.unsplash.com/photo-1531415074868-036b1c57e329?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Manage a virtual budget of ₹100 Crores, bid strategically, and assemble a championship-winning cricket roster.',
    fullDesc: 'Step into the franchise boardroom. Analyze statistical telemetry of international and domestic cricketers, manage RTM cards, navigate bidding wars, and build the ultimate XI under strict salary cap constraints.',
    prizes: [
      { rank: '1st Place', amount: '₹12,000', perk: 'Premier Franchise Trophy' },
      { rank: '2nd Place', amount: '₹6,000', perk: 'Silver Shield' }
    ],
    rules: [
      'Team size: 3 to 4 owners/analysts per franchise.',
      'Initial purse: ₹100 Crores virtual budget.',
      'Squad must satisfy balance criteria: min 4 overseas, min 4 bowlers, min 1 wicketkeeper.',
      'Final rosters simulated through tournament statistical engine to calculate winning franchise.'
    ]
  }
];

export const allEvents = [...technicalEvents, ...culturalEvents];

export const getEventById = (id) => {
  return allEvents.find((event) => event.id === id);
};

