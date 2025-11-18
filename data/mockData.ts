import type { Sermon, Event, Ministry, Staff, ChurchInfo } from '../types';

export const churchInfo: ChurchInfo = {
  phone: "0420 685 990",
  email: "connect@gracecovenant.org",
  address: "Stonecutters Neighbourhood Centre, Cnr Stonecutters Drive and Ashlar Cr, Colebee NSW 2761",
  serviceTimes: ["Sundays at 9:00 AM", "Sundays at 11:00 AM"],
  socialMedia: {
    facebook: "https://facebook.com",
    instagram: "https://www.instagram.com/gracecovenantchurch.aus",
    youtube: "https://youtube.com"
  }
};

export const sermons: Sermon[] = [
  {
    id: 'sermon-1',
    title: "The Foundation of Faith",
    speaker: "Pastor Santhosh",
    date: "2024-07-21",
    series: "Foundations",
    description: "Discover the unshakable foundation of our faith in Jesus Christ and how it applies to our daily lives. A message of hope and strength.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    audioUrl: "/audio/sermon1.mp3",
    notesUrl: "/notes/sermon1.pdf",
    scriptureRefs: ["Matthew 7:24-27", "1 Corinthians 3:11"],
    thumbnailUrl: "https://picsum.photos/seed/sermon1/800/450"
  },
  {
    id: 'sermon-2',
    title: "Living in Grace",
    speaker: "Pastor Sarah Lee",
    date: "2024-07-14",
    series: "Grace Upon Grace",
    description: "Explore the depths of God's grace and what it means to live a life transformed by His unmerited favor.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    audioUrl: "/audio/sermon2.mp3",
    notesUrl: "/notes/sermon2.pdf",
    scriptureRefs: ["Ephesians 2:8-9", "Romans 5:20"],
    thumbnailUrl: "https://picsum.photos/seed/sermon2/800/450"
  },
  {
    id: 'sermon-3',
    title: "The Power of Community",
    speaker: "Guest Speaker Michael Chen",
    date: "2024-07-07",
    series: "Standalone Message",
    description: "An inspiring message on the biblical importance of community and doing life together with fellow believers.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    title: "Summer Family Picnic",
    date: "2024-08-10",
    time: "12:00 PM - 4:00 PM",
    locationName: "Central Park",
    address: "567 Park Rd, New Creation City",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.618037136021!2d-73.98784168459413!3d40.74844097932822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117429%3A0x9a6949c5a2a5a5d1!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1628796853383!5m2!1sen!2sus",
    description: "Join us for our annual summer picnic! A great time of food, fun, and fellowship for the whole family. We'll have games for kids, a BBQ, and plenty of space to relax.",
    imageUrl: "https://picsum.photos/seed/event1/1200/600",
    registrationLink: "#",
    category: 'Community'
  },
  {
    id: 'event-2',
    title: "Youth Night: Glow Up",
    date: "2024-08-16",
    time: "7:00 PM - 9:30 PM",
    locationName: "Stonecutters Neighbourhood Centre",
    address: churchAddress,
    mapEmbedUrl: churchMapEmbedUrl,
    description: "An exciting night for all middle and high school students! We'll have blacklight games, worship, a powerful message, and free pizza.",
    imageUrl: "https://picsum.photos/seed/event2/1200/600",
    registrationLink: "#",
    category: 'Youth'
  },
  {
    id: 'event-3',
    title: "Worship & Prayer Night",
    date: "2024-08-28",
    time: "7:30 PM",
    locationName: "Stonecutters Neighbourhood Centre",
    address: churchAddress,
    mapEmbedUrl: churchMapEmbedUrl,
    description: "An evening dedicated to seeking God's presence through extended worship and prayer. A powerful time to refresh your spirit.",
    imageUrl: "https://picsum.photos/seed/event3/1200/600",
    registrationLink: "#",
    category: 'Worship'
  },
];

export const ministries: Ministry[] = [
  {
    id: 'ministry-1',
    name: "GraceKids",
    slug: "kids",
    description: "Deepwater - GraceKids provides a safe, fun, and engaging environment for children from birth to 5th grade to learn about Jesus on their level. Our amazing team is passionate about partnering with parents to raise a generation of world-changers.",
    imageUrl: "https://picsum.photos/seed/ministry1/800/600",
    contactPerson: "Nancy Anand",
    contactEmail: "kids@gracecovenant.org",
    meetingInfo: "Sundays during 9 AM & 11 AM services"
  },
  {
    id: 'ministry-2',
    name: "Velocity Youth",
    slug: "youth",
    description: "Velocity is the youth ministry of GraceCovenant for students in 6th-12th grade. We exist to see students connected in community, growing in their faith, and empowered to make a difference in their schools and world.",
    imageUrl: "https://picsum.photos/seed/ministry2/800/600",
    contactPerson: "David Rodriguez",
    contactEmail: "youth@gracecovenant.org",
    meetingInfo: "Fridays at 7:00 PM"
  },
  {
    id: 'ministry-3',
    name: "Small Groups",
    slug: "groups",
    description: "We believe life is better together. Small groups are the heart of our church community, providing a place to build friendships, study God's word, and support one another. Groups meet throughout the week in homes across the city.",
    imageUrl: "https://picsum.photos/seed/ministry3/800/600",
    contactPerson: "Maria Garcia",
    contactEmail: "groups@gracecovenant.org",
    meetingInfo: "Various times and locations"
  },
];

export const staff: Staff[] = [
  {
    id: 'staff-1',
    name: "Santhosh",
    role: "Lead Pastor",
    bio: "Pastor Santhosh has been leading Grace Covenant since its founding. He has a passion for clear, biblical teaching and seeing people's lives transformed by the Gospel.",
    imageUrl: "https://picsum.photos/seed/staff1/500/500"
  },
  {
    id: 'staff-2',
    name: "Lisa Santhosh",
    role: "Praise & Worship Leader",
    bio: "Pastor Lisa oversees our small groups and community outreach initiatives. She loves connecting people and helping them find their place in the church family.",
    imageUrl: "https://picsum.photos/seed/staff2/500/500"
  },
  {
    id: 'staff-3',
    name: "Sunitha",
    role: "Media & Communications Director",
    bio: "Sunitha leads our Media ministry. She is passionate about using technology to enhance our worship experience and spread the message of Grace Covenant online.",
    imageUrl: "https://picsum.photos/seed/staff3/500/500"
  },
  {
    id: 'staff-4',
    name: "Nancy Anand",
    role: "Children's Ministry Director",
    bio: "Nancy has a heart for kids and families. She leads our GraceKids team with creativity and excellence, making church the best hour of every kid's week.",
    imageUrl: "https://picsum.photos/seed/staff4/500/500"
  },
];