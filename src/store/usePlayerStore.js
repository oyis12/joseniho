
import { create } from 'zustand';
import { FaFutbol, FaRunning, FaBullseye, FaUserFriends } from 'react-icons/fa';
import { GiAwareness } from "react-icons/gi";

const MOCK_API_DATA = [
  { id: 1, name: "Member of the league", team: "First Team", number: "22", role: "Forward", nationality: "American", dob: "25/02/1988", height: "190cm", weight: "90kg", img: "/images/p1.jpeg", stats: { attack: 10, defence: 95, kick: 88 } },
  { id: 2, name: "Member of the league", team: "Under 21s", number: "34", role: "Goalkeeper", nationality: "British", dob: "12/05/2003", height: "185cm", weight: "80kg", img: "/images/p2.jpeg", stats: { attack: 5, defence: 82, kick: 75 } },
  { id: 3, name: "Member of the league", team: "First Team", number: "04", role: "Defender", nationality: "Spanish", dob: "10/10/1995", height: "188cm", weight: "85kg", img: "/images/p3.jpeg", stats: { attack: 45, defence: 90, kick: 60 } },
  { id: 4, name: "Member of the league", team: "First Team", number: "10", role: "Defender", nationality: "French", dob: "22/01/1994", height: "180cm", weight: "78kg", img: "/images/forth.jpeg", stats: { attack: 55, defence: 85, kick: 70 } },
];

const MOCK_PROGRAMS = [
  { 
    title: "Technical Skills", 
    description: "Ball control, passing accuracy, dribbling, and finishing fundamentals.",
    icon: 'FaFutbol', // Store as string to avoid component issues in state
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800" 
  },
  { 
    title: "Speed Training", 
    description: "Improving acceleration, agility, and quick movement on and off the ball.",
    icon: 'FaRunning', 
    img: "images/speed.jpg" 
  },
  { 
    title: "Tactical Awareness", 
    description: "Understanding positioning, decision-making, and game intelligence.",
    icon: 'GiAwareness', 
    img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1600" 
  },
  { 
    title: "Physical Conditioning", 
    description: "Building strength, endurance, balance, and overall fitness safely.",
    icon: 'FaBullseye', 
    img: "images/training.jpg" 
  },
  { 
    title: "Mental Strength", 
    description: "Developing confidence, focus, discipline, and resilience under pressure.",
    icon: 'FaBullseye', 
    img: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=800" 
  },
  { 
    title: "Team Play", 
    description: "Encouraging communication, cooperation, leadership, and sportsmanship.",
    icon: 'FaUserFriends', 
    img: "/images/teamplay.jpeg" 
  },
];

const MOCK_NEWS = [
  { 
    id: 1, 
    title: "France FC Open To Serie A Return", 
    author: "Thomas Wills", 
    date: "06 June", 
    fullDate: "Oct 12, 2021",
    commentsCount: 125, 
    timeAgo: "1 Day ago", 
    category: "Transfer",
    img: "images/egles_mvp.jpeg",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia..."
  },
  { 
    id: 2, 
    title: "Ireland FC In 10 Racking", 
    author: "Thomas Wills", 
    date: "16 June", 
    fullDate: "Oct 12, 2021",
    commentsCount: 125, 
    timeAgo: "1 Day ago", 
    category: "Match Report",
    img: "images/YFA_team.jpeg",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    content: "Ireland dominated the qualification round with an impressive display of tactical discipline..."
  },
  { 
    id: 3, 
    title: "Brazil Win 3-0 against Argentina", 
    author: "Thomas Wills", 
    date: "06 June", 
    fullDate: "Oct 12, 2021",
    commentsCount: 125, 
    timeAgo: "1 Day ago", 
    category: "International",
    img: "images/trophy_lift.jpeg",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    content: "A masterclass performance led by the veteran forwards secured a comfortable victory..."
  },
    { 
    id: 4, 
    title: "Ireland FC In 10 Racking", 
    author: "Thomas Wills", 
    date: "16 June", 
    fullDate: "Oct 12, 2021",
    commentsCount: 125, 
    timeAgo: "1 Day ago", 
    category: "Match Report",
    img: "images/YFA_team.jpeg",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    content: "Ireland dominated the qualification round with an impressive display of tactical discipline..."
  },
    { 
    id: 5, 
    title: "France FC Open To Serie A Return", 
    author: "Thomas Wills", 
    date: "06 June", 
    fullDate: "Oct 12, 2021",
    commentsCount: 125, 
    timeAgo: "1 Day ago", 
    category: "Transfer",
    img: "images/egles_mvp.jpeg",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia..."
  },
  { 
    id: 6, 
    title: "Ireland FC In 10 Racking", 
    author: "Thomas Wills", 
    date: "16 June", 
    fullDate: "Oct 12, 2021",
    commentsCount: 125, 
    timeAgo: "1 Day ago", 
    category: "Match Report",
    img: "images/YFA_team.jpeg",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    content: "Ireland dominated the qualification round with an impressive display of tactical discipline..."
  },
  { 
    id: 7, 
    title: "Brazil Win 3-0 against Argentina", 
    author: "Thomas Wills", 
    date: "06 June", 
    fullDate: "Oct 12, 2021",
    commentsCount: 125, 
    timeAgo: "1 Day ago", 
    category: "International",
    img: "images/trophy_lift.jpeg",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    content: "A masterclass performance led by the veteran forwards secured a comfortable victory..."
  },
    { 
    id: 8, 
    title: "Ireland FC In 10 Racking", 
    author: "Thomas Wills", 
    date: "16 June", 
    fullDate: "Oct 12, 2021",
    commentsCount: 125, 
    timeAgo: "1 Day ago", 
    category: "Match Report",
    img: "images/YFA_team.jpeg",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    content: "Ireland dominated the qualification round with an impressive display of tactical discipline..."
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

const text = "Joseniho Kids Football League is a vibrant kids football initiative nestled in the heart of Abuja, where we are passionate about nurturing, developing, and celebrating the incredible talent of young footballers. Tailored for players aged 6 to 15, our league provides a dynamic and engaging environment that combines fun with competition, enabling children to master the fundamentals of football while developing essential life skills such as confidence, discipline, and teamwork.Joseninho Kids Football League promises an exhilarating and fulfilling experience for every participant. Our program harmoniously combines skill development with the values of sportsmanship and mentorship, all within a supportive community. Here, football transcends mere play, it becomes a powerful platform for personal growth, character development, and the creation of cherished memories that will last a lifetime."

export const usePlayerStore = create((set, get) => ({
  players: MOCK_API_DATA,
  programs: MOCK_PROGRAMS,
  baseMedia: baseMedia,
  aboutText: text,
  selectedPlayer: null,
  filterRole: "All",
  currentPage: 1,
  itemsPerPage: 8,

  setSelectedPlayer: (player) => set({ selectedPlayer: player }),
  setFilterRole: (role) => set({ filterRole: role, currentPage: 1 }),
  setCurrentPage: (page) => set({ currentPage: page }),

  // Logic to get filtered and paginated data
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

  news: MOCK_NEWS,
  selectedNews: null,
  newsPage: 1,
  newsPerPage: 6,

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