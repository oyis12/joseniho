

import { create } from 'zustand';
import { FaFutbol, FaRunning, FaBullseye, FaUserFriends } from 'react-icons/fa';
import { GiAwareness } from "react-icons/gi";

const MOCK_API_DATA = [
  { id: 1, name: "Member of the league", team: "First Team", number: "22", role: "NA", nationality: "Nigerian", dob: "N/A", height: "190cm", weight: "90kg", img: "/images/p1.jpeg", stats: { attack: 10, defence: 95, kick: 88 } },
  { id: 2, name: "Member of the league", team: "Under 21s", number: "34", role: "NA", nationality: "Nigerian", dob: "N/A", height: "185cm", weight: "80kg", img: "/images/p2.jpeg", stats: { attack: 5, defence: 82, kick: 75 } },
  { id: 3, name: "Member of the league", team: "First Team", number: "04", role: "NA", nationality: "Nigerian", dob: "N/A", height: "188cm", weight: "85kg", img: "/images/p3.jpeg", stats: { attack: 45, defence: 90, kick: 60 } },
  { id: 4, name: "Member of the league", team: "First Team", number: "10", role: "NA", nationality: "Nigerian", dob: "N/A", height: "180cm", weight: "78kg", img: "/images/forth.jpeg", stats: { attack: 55, defence: 85, kick: 70 } },
];

const MOCK_PROGRAMS = [
  { title: "Technical Skills", description: "Ball control, passing accuracy, dribbling, and finishing fundamentals.", icon: 'FaFutbol', img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800" },
  { title: "Speed Training", description: "Improving acceleration, agility, and quick movement on and off the ball.", icon: 'FaRunning', img: "images/speed.jpg" },
  { title: "Tactical Awareness", description: "Understanding positioning, decision-making, and game intelligence.", icon: 'GiAwareness', img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1600" },
  { title: "Physical Conditioning", description: "Building strength, endurance, balance, and overall fitness safely.", icon: 'FaBullseye', img: "images/training.jpg" },
  { title: "Mental Strength", description: "Developing confidence, focus, discipline, and resilience under pressure.", icon: 'FaBullseye', img: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=800" },
  { title: "Team Play", description: "Encouraging communication, cooperation, leadership, and sportsmanship.", icon: 'FaUserFriends', img: "/images/teamplay.jpeg" },
];

const MOCK_NEWS = [
  { 
    id: 1, 
    title: "Tantita Security Services to Be Unveiled as Official Partner at Kick-Off", 
    tag: "Breaking News",
    author: "Admin", 
    date: "14 Feb, 2026", 
    image: "/images/breaking.jpeg",
    excerpt: "In a significant development for grassroots football, TSSNL will be unveiled as the Official Partner...",
    content: `In a significant development for grassroots football in Nigeria, Tantita Security Services Nigeria Limited (TSSNL) will be officially unveiled as the Official Partner of the Joseniho Kids Football League during the kick-off ceremony of the league’s second edition.

The unveiling will form a major highlight of the opening event, reinforcing the growing credibility and national appeal of the fast-rising youth football competition dedicated to discovering, nurturing, and developing young football talents.

As a leading indigenous security solutions provider known for protecting critical national infrastructure and championing community-driven initiatives, TSSNL’s partnership is expected to provide vital logistical support, operational backing, and strategic resources to further strengthen the league’s structure and expand its impact.

A representative of the company will be present at the opening ceremony to reaffirm Tantita’s commitment to youth empowerment through sports and emphasize football’s unique role in instilling discipline, teamwork, resilience, and social cohesion among children.

Organizers of the Joseniho Kids Football League described the partnership as a landmark achievement ahead of the second edition, noting that the collaboration will enhance opportunities for participating academies and further professionalize the league’s operations.

The event is expected to draw parents, football enthusiasts, community leaders, and supporters of youth development as the second edition officially kicks off.`,
featured: true,
  },
 {
      id: 2,
      title: "Great memories...",
      image: "/images/award_press.jpeg",
      date: "27 June, 2020",
      comments: 89,
      excerpt:
        "Great memories are created not only on the pitch but through the smiles, cheers, and shared energy of everyone present. The finale came alive through the spirit of the community that filled the stands.",
      featured: true,
    },
    {
      id: 3,
      title: "The true magic of the finale...",
      image: "/images/coach1.jpeg",
      date: "27 June, 2020",
      comments: 89,
      excerpt:
        "The true magic of the finale extended beyond the game itself — captured in every smile, every cheer, and every moment shared among supporters and guests.",
      featured: true,
    },
    {
      id: 4,
      title: "The finale was more than a game...",
      image: "/images/inmatch_g.jpeg",
      date: "27 June, 2020",
      comments: 89,
    },
    {
      id: 5,
      title: "The most lasting memories are built together...",
      image: "/images/YFA_team.jpeg",
      date: "27 June, 2020",
      comments: 89,
    },
];

const baseMedia = [
    { id: 1, title: "Youth Cup Final", time: "1 years Ago", date: "2025-01-01", img: "/images/inmatch_g.jpeg" },
    { id: 2, title: "Bravo Training Session", time: "1 years Ago", date: "2025-01-15", img: "/images/teamplay.jpeg" },
    { id: 3, title: "Foxtrot Night Match", time: "1 years Ago", date: "2025-01-12", img: "/images/media_n.jpeg" },
    { id: 4, title: "Golf Trophy Lift", time: "3 years Ago", date: "2022-12-10", img: "/images/winner.jpeg" },
    { id: 5, title: "Beyond the action on the pitch, the crowd brought added joy and meaning", time: "1 months Ago", date: "2026-01-10", img: "/images/award_press.jpeg" },
    { id: 6, title: "India Fan Zone", time: "1 years Ago", date: "2025-01-10", img: "/images/bg_bannerArea.jpg" },
    { id: 7, title: "Juliet Press Conf", time: "6 months Ago", date: "2025-07-10", img: "/images/press.jpeg" },
    { id: 8, title: "Kilo New Kit Reveal", time: "4 months Ago", date: "2025-09-10", img: "/images/teamplay2.jpeg" },
    { id: 9, title: "The finale was more than a game  it was a shared experience of unforgettable moments", time: "2 months Ago", date: "2025-12-20", img: "/images/under_12_winner.jpeg" },
    { id: 10, title: "The best memories were shaped by smiles, cheers, and a vibrant community.", time: "2 months Ago", date: "2025-12-19", img: "/images/trophy_lift.jpeg" },
    { id: 11, title: "Beyond the goals were the smiles, excitement, and collective energy of the stands.", time: "2 months Ago", date: "2025-12-15", img: "/images/YFA_team.jpeg" },
    { id: 12, title: "The finale’s success reflected both performance and the atmosphere created by supporters", time: "2 months Ago", date: "2025-12-10", img: "/images/youtth_winner.jpeg" },
    { id: 13, title: "Lasting memories were built through shared moments and lively energy.", time: "3 months Ago", date: "2025-12-10", img: "/images/1.jpeg" },
    { id: 14, title: "From pitch to crowd, the finale carried a strong spirit of togetherness.", time: "3 months Ago", date: "2025-12-10", img: "/images/2.jpeg" },
    { id: 15, title: "Award 3", time: "3 months Ago", date: "2025-12-10", img: "/images/3.jpeg" },
    { id: 16, title: "Award 4", time: "4 months Ago", date: "2025-12-10", img: "/images/4.jpeg" },
    { id: 17, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/5.jpeg" },
    { id: 18, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/6.jpeg" },
    { id: 19, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/7.jpeg" },
    { id: 20, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/8.jpeg" },
    { id: 21, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/9.jpeg" },
    { id: 22, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/11.jpeg" },
    { id: 23, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/12.jpeg" },
    { id: 24, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/13.jpeg" },
    { id: 25, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/14.jpeg" },
    { id: 26, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/15.jpeg" },
    { id: 27, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/16.jpeg" },
    { id: 28, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/17.jpeg" },
    { id: 29, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/18.jpeg" },
    { id: 30, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/19.jpeg" },
    { id: 31, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/20.jpeg" },
    { id: 32, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/21.jpeg" },
    { id: 33, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/22.jpeg" },
    { id: 33, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/23.jpeg" },
    { id: 34, title: "", time: "2 months Ago", date: "2025-12-10", img: "/images/24.jpeg" },
    { id: 35, title: "Great memories were created both on the pitch and through the energy of everyone present.", time: "1 months Ago", date: "2026-01-26", img: "/videos/vd3.mp4" },
    { id: 36, title: "The true magic of the finale lived in every smile, cheer, and shared moment.", time: "1 months Ago", date: "2026-01-20", img: "/videos/vd1.mp4" },
    { id: 37, title: "The finale became a celebration shaped by connection and community presence", time: "1 months Ago", date: "2026-01-19", img: "/videos/vd2.mp4" },
  ];

  const MOCK_FIXTURES = [
  {
      id: 1,
      stadium: "sport complex arena",
      date: "April 02, 2026",
      home: { name: "Camp United.", logo: "/images/team1.png" },
      away: { 
        name: "Young Stars Academy.", 
        logo: "/images/team3.png",
        about: 'Youngstars Football Academy Established in 2012, Youngstars Football Academy is a youth development Academy base in Abuja, Nigeria, focused on nurturing talent, .... The Academy is a registered corporate organization affiliated with the Abuja Football Association and the Nigeria Football Federation, focused on educating, developing, and promoting young Nigerian footballers. The founder and president is Abdulganiyu Taofeek, also known as "Coach Ola," The Academy has participated in various local and National age-grade championships since its formation.',
       social: {
          instagram: "@young_starsfa7642",
          facebook: "Youngstarsfa",
          tiktok: "@youngstarsfa"
        },
      },
      bg: "/images/bg-mc3.jpeg",
    },
    {
      id: 2,
      stadium: "Sport Complex",
      date: "April 02, 2026",
      home: {
        id: 201,
        name: "Athletic Edge Academy",
        logo: "/images/team6.png",
        founded: 2005,
        stadium: "Athletic Edge Stadium",
        coach: "John Doe",
        league: "Youth League",
      },
      away: {
        id: 202,
        name: "Eagle's Wing Academy",
        logo: "/images/team7.png",
        founded: 2010,
        stadium: "Eagle Wing Stadium",
        coach: "Jane Smith",
        league: "Youth League",
        about:
          "Eagle’s Wing Sports academy LTD owns and operates professional soccer development center for kids, teenagers and youths who are working towards discovering and developing their passion early. We have engineered a unique system to unleash the sporting potentials of the next generation's emerging football stars, channeling their energies towards a positive influence in the society, encouraging their passion and promoting their dreams.\n\nEagle's Wing Sports Academy LTD is focused on teaching the basic football culture, structure and philosophy to athletes from 2 years of age to the age of 20.",
        mission:
          "We are on a mission to unleash the sporting potentials of the next generation's emerging soccer stars, channel the energies of the young stars towards positive influence in the society, encourage passion and promote their dreams.",
        social: {
          instagram: "eagle's_wing_football_academy",
          twitter: "@eagle's wing football academy",
          facebook: "@eagle's football academy",
          email: "eagleswingfa@gmail.com",
          website: "www.eagleswingfa.com",
        },
      },
      bg: "/images/bg-mc3.jpeg",
    },
    {
      id: 3,
      stadium: "Sport complex",
      date: "April 02, 2026",
      home: { 
        name: "N-Youth Academy.", 
        logo: "/images/team4.png", 
        about: "N-Youth Sports Academy (N-YSA) is a professional sports academy dedicated to helping young teenage athletes actualize their dreams in sports while ensuring their academic development and personal growth are fully supported. Established in 2019, N-YSA has consistently groomed student-athletes to excel both academically and athletically, creating a balanced pathway to success on and off the field. Our structured development model produces disciplined, well-educated athletes with clearly defined career pathways in sports and beyond.",
      social: {
          instagram: "@nyouthsports",
          facebook: "N Youth Sports Academy",
          website: "www.nyouthsports.com",
          youtube: "N Youth Sports Academy"
        },
      },
      away: { 
        name: "Destiny Academy.", 
        logo: "/images/team5.png", 
        about: "Destiny football academy is a youth development Academy that has a professional and qualified team of coaches who specialize in children’s sport. The Academy is a registered corporate organization affiliated with the Abuja football Association, Established in  2021, DestinyFa is dedicated to contributing to community engagement and the health and well- being of boys and girls from 2years of age to the age of 17.",
      social: {
          instagram: "@DestinyFa",
          twitter: "@eagle's wing football academy",
          facebook: "Destinyfa",
          tiktok: "@Destinyfa"
        },
      },
      bg: "/images/bg-mc3.jpeg",
    },
    {
      id: 4,
      stadium: "Sport Complex",
      date: "April 02, 2026",
      home: { name: "Diamat FA-Abuja", logo: "/images/team2.jpeg" },
      away: { name: "Hawks FC.", logo: "/images/team8.png" },
      bg: "/images/bg-mc3.jpeg",
    },
]
const text = "Joseniho Kids Football League is a vibrant kids football initiative nestled in the heart of Abuja, where we are passionate about nurturing, developing, and celebrating the incredible talent of young footballers...";

export const usePlayerStore = create((set, get) => ({
  players: MOCK_API_DATA,
  programs: MOCK_PROGRAMS,
  fixtures: MOCK_FIXTURES,
  baseMedia: baseMedia,
  news: MOCK_NEWS,
  aboutText: text,
  selectedNews: null,
  currentPage: 1,
  itemsPerPage: 8,
  selectedPlayer: null,
  filterRole: "All",
  newsPage: 1,
  newsPerPage: 6,


 setSelectedPlayer: (player) => set({ selectedPlayer: player }),
  setFilterRole: (role) => set({ filterRole: role, currentPage: 1 }),
  setCurrentPage: (page) => set({ currentPage: page }),

    getProcessedData: () => {
    const { players, filterRole, currentPage, itemsPerPage } = get();
    
    // 1. Filter
    const filtered = filterRole === "All" 
      ? players 
      : players.filter(p => p.role === filterRole);

    // 2. Paginate
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

    return { 
      displayPlayers: paginated, 
      totalPages,
      totalResults: filtered.length 
    };
  },


  setSelectedNews: (news) => set({ selectedNews: news }),
  setNewsPage: (page) => set({ newsPage: page }),

  // Logic for Paginated News
  getPaginatedNews: () => {
    const { news, newsPage, newsPerPage } = get();
    const startIndex = (newsPage - 1) * newsPerPage;
    return news.slice(startIndex, startIndex + newsPerPage);
  },

  // Helper for total pages
  getTotalNewsPages: () => {
    const { news, newsPerPage } = get();
    return Math.ceil(news.length / newsPerPage);
  },

  contactStatus: 'idle',
  setContactStatus: (status) => set({ contactStatus: status }),

}));