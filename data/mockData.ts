import type { Sermon, Event, Ministry, Staff, ChurchInfo } from '../types';

export const churchInfo: ChurchInfo = {
  phone: "0420 685 990",
  email: "connect@gracecovenant.org",
  address: "Stonecutters Neighbourhood Centre, Cnr Stonecutters Drive and Ashlar Cr, Colebee NSW 2761",
  serviceTimes: ["Sundays at 9:00 AM - 10:30 AM"],
  socialMedia: {
    facebook: "https://facebook.com",
    instagram: "https://www.instagram.com/gracecovenantchurch.aus",
    youtube: "https://www.youtube.com/@GraceCovenantChurchsydney"
  }
};

export const sermons: Sermon[] = [
  {
    id: 'sermon-1',
    title: "Deep Calls into Deep",
    speaker: "Pastor Santhosh",
    date: "2025-11-16",
    series: "Foundations",
    description: "Discover the unshakable foundation of our faith in Jesus Christ and how it applies to our daily lives. A message of hope and strength.",
    videoUrl: "https://www.youtube.com/watch?v=MMpKozXb50g",
    audioUrl: "/audio/sermon1.mp3",
    notesUrl: "/notes/sermon1.pdf",
    scriptureRefs: ["Matthew 7:24-27", "1 Corinthians 3:11"],
    thumbnailUrl: "https://picsum.photos/seed/sermon1/800/450"
  },
  {
    id: 'sermon-2',
    title: "Renewal of Mind",
    speaker: "Pastor Santhosh",
    date: "2025-11-09",
    series: "Grace Upon Grace",
    description: "Explore the depths of God's grace and what it means to live a life transformed by His unmerited favor.",
    videoUrl: "https://www.youtube.com/watch?v=ZJwgzxivL0c",
    audioUrl: "/audio/sermon2.mp3",
    notesUrl: "/notes/sermon2.pdf",
    scriptureRefs: ["Ephesians 2:8-9", "Romans 5:20"],
    thumbnailUrl: "https://picsum.photos/seed/sermon2/800/450"
  },
  {
    id: 'sermon-3',
    title: "My Grace is Sufficient",
    speaker: "Pastor Santhosh",
    date: "2025-10-26",
    series: "Standalone Message",
    description: "An inspiring message on the biblical importance of community and doing life together with fellow believers.",
    videoUrl: "https://www.youtube.com/watch?v=MlXnb5zmR80&t=2892s",
    audioUrl: "/audio/sermon3.mp3",
    notesUrl: "/notes/sermon3.pdf",
    scriptureRefs: ["Hebrews 10:24-25", "Acts 2:42-47"],
    thumbnailUrl: "https://picsum.photos/seed/sermon3/800/450"
  },
];

const churchMapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.8282902315053!2d150.84272187633212!3d-33.73887951214045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129b0f15c15c15%3A0x80854582f3273e34!2sStonecutters%20Neighbourhood%20Centre!5e0!3m2!1sen!2sau!4v1721976935266!5m2!1sen!2sau";
const churchAddress = "Cnr Stonecutters Drive and Ashlar Cr, Colebee NSW 2761";

export const events: Event[] = [
  {
    id: 'event-1',
    title: "Sunday Service",
    date: "2025-11-23",
    time: "9:00 AM - 10:30 AM",
    locationName: "Stonecutters Neighbourhood Centre",
    address: churchAddress,
    mapEmbedUrl: churchMapEmbedUrl,
    description: "Join us for our weekly Sunday service filled with worship, biblical teaching, and fellowship. All are welcome!",
    imageUrl: "/artifacts/sunday_service_worship_1763537430650.png",
    registrationLink: "#",
    category: 'Worship'
  },
  {
    id: 'event-2',
    title: "Bible Study",
    date: "2025-11-21",
    time: "7:30 PM",
    locationName: "Stonecutters Neighbourhood Centre",
    address: churchAddress,
    mapEmbedUrl: churchMapEmbedUrl,
    description: "Dive deeper into God's Word in our Bible Study sessions. Join us on the 1st and 3rd Friday of each month.",
    imageUrl: "/artifacts/bible_study_warmth_1763537438596.png",
    registrationLink: "#",
    category: 'Study'
  },
  {
    id: 'event-3',
    title: "Teens Bible",
    date: "2025-11-22",
    time: "6:30 PM",
    locationName: "Stonecutters Neighbourhood Centre",
    address: churchAddress,
    mapEmbedUrl: churchMapEmbedUrl,
    description: "Dynamic Bible study for teens led by Nancy Anand. A place for youth to grow in faith, ask questions, and build friendships. Every Saturday at 6:30 PM!",
    imageUrl: "/artifacts/teens_bible_youth_1763542826529.png",
    registrationLink: "#",
    category: 'Youth'
  },
];

export const ministries: Ministry[] = [
  {
    id: 'ministry-1',
    name: "Sunday Service",
    slug: "sunday-service",
    description: "Join us every Sunday for an inspiring time of worship, biblical teaching, and fellowship. Experience God's presence and connect with our church family as we grow together in faith.",
    imageUrl: "/artifacts/sunday_service_worship_1763537430650.png",
    contactPerson: "Pastor Santhosh",
    contactEmail: "connect@gracecovenant.org",
    meetingInfo: "Sundays at 9:00 AM - 10:30 AM"
  },
  {
    id: 'ministry-2',
    name: "Bible Study",
    slug: "bible-study",
    description: "Dive deeper into God's Word through our Bible Study sessions. A time to explore scripture, ask questions, and grow in understanding together as we study the Bible in depth.",
    imageUrl: "/artifacts/bible_study_warmth_1763537438596.png",
    contactPerson: "Pastor Santhosh",
    contactEmail: "connect@gracecovenant.org",
    meetingInfo: "1st and 3rd Friday at 7:30 PM"
  },
  {
    id: 'ministry-3',
    name: "Teens Bible",
    slug: "teens-bible",
    description: "Teens Bible is a vibrant community where young people ages 13-18 can explore faith, ask tough questions, and grow alongside peers. We create a safe, energetic space where teens encounter God's Word in relevant, engaging ways while building lasting friendships.",
    imageUrl: "/artifacts/teens_bible_youth_1763542826529.png",
    contactPerson: "Nancy Anand",
    contactEmail: "youth@gracecovenant.org",
    meetingInfo: "Saturdays at 6:30 PM"
  },
];

export const staff: Staff[] = [
  {
    id: 'staff-1',
    name: "Pastor Santhosh",
    role: "Lead Pastor",
    bio: "Pastor Santhosh has been leading Grace Covenant with a passion for clear, biblical teaching and seeing people's lives transformed by the Gospel. He shepherds our congregation with wisdom and compassion.",
    imageUrl: "/artifacts/pastor_santhosh.png"
  },
  {
    id: 'staff-2',
    name: "Lisa Santhosh",
    role: "Praise & Worship Leader",
    bio: "Lisa Santhosh leads our worship ministry with passion and excellence. Through music and worship, she creates an atmosphere where people can encounter God's presence and express their love for Him.",
    imageUrl: "https://picsum.photos/seed/staff2/500/500"
  },
  {
    id: 'staff-3',
    name: "Sunitha",
    role: "Media Director",
    bio: "Sunitha oversees all media operations, including our digital presence and broadcast efforts. She focuses on innovative communication strategies to share our message with a broader audience.",
    imageUrl: "https://picsum.photos/seed/staff3/500/500"
  },
  {
    id: 'staff-4',
    name: "Nancy Anand",
    role: "Youth Pastor",
    bio: "Nancy has a passion for the next generation and leads our Teens Bible ministry with energy and authenticity. She creates a space where teens feel valued, heard, and encouraged to pursue Jesus in their own unique way.",
    imageUrl: "https://picsum.photos/seed/staff4/500/500"
  },
];