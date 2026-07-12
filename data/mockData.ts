import type { Sermon, Event, Ministry, Staff, ChurchInfo } from '../types';

export const churchInfo: ChurchInfo = {
  phone: "0420 685 990",
  email: "connect@gracecovenant.org",
  address: "Stonecutters Neighbourhood Centre, Cnr Stonecutters Drive and Ashlar Cr, Colebee NSW 2761",
  serviceTimes: ["Sundays at 9:00 AM - 10:30 AM"],
  socialMedia: {
    facebook: "https://www.facebook.com/gracecovenantchurch.aus/",
    instagram: "https://www.instagram.com/gracecovenantchurch.aus",
    youtube: "https://www.youtube.com/@gracecovenantchurchsydney"
  }
};

export const sermons: Sermon[] = [
  {
    id: 'sermon-1',
    title: "Included!",
    speaker: "Pastor Santhosh",
    date: "2026-07-12",
    series: "Sunday Service",
    description: "A message from Pastor Santhosh at Grace Covenant Church's Sunday Service. Watch the full message on our YouTube channel.",
    videoUrl: "https://www.youtube.com/embed/-9sIeUHWN_E",
    scriptureRefs: [],
    thumbnailUrl: "https://i.ytimg.com/vi/-9sIeUHWN_E/hqdefault.jpg"
  },
  {
    id: 'sermon-2',
    title: "Picture of God - Part 2",
    speaker: "Pastor Santhosh",
    date: "2026-07-05",
    series: "Picture of God",
    description: "Part two of the 'Picture of God' series from Pastor Santhosh, shared during our Lord's Table gathering.",
    videoUrl: "https://www.youtube.com/embed/yF_fDSR0MgU",
    scriptureRefs: [],
    thumbnailUrl: "https://i.ytimg.com/vi/yF_fDSR0MgU/hqdefault.jpg"
  },
  {
    id: 'sermon-3',
    title: "Picture of God",
    speaker: "Pastor Santhosh",
    date: "2026-06-28",
    series: "Picture of God",
    description: "Part one of the 'Picture of God' series from Pastor Santhosh, shared during our Sunday Service.",
    videoUrl: "https://www.youtube.com/embed/LwUX7BslYPo",
    scriptureRefs: [],
    thumbnailUrl: "https://i.ytimg.com/vi/LwUX7BslYPo/hqdefault.jpg"
  },
];

const churchMapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.8282902315053!2d150.84272187633212!3d-33.73887951214045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129b0f15c15c15%3A0x80854582f3273e34!2sStonecutters%20Neighbourhood%20Centre!5e0!3m2!1sen!2sau!4v1721976935266!5m2!1sen!2sau";
const churchAddress = "Cnr Stonecutters Drive and Ashlar Cr, Colebee NSW 2761";

export const events: Event[] = [
  {
    id: 'event-1',
    title: "Sunday Service",
    date: "2026-07-19",
    time: "9:00 AM - 10:30 AM",
    locationName: "Stonecutters Neighbourhood Centre",
    address: churchAddress,
    mapEmbedUrl: churchMapEmbedUrl,
    description: "Join us for our weekly Sunday service filled with worship, biblical teaching, and fellowship. All are welcome!",
    imageUrl: "/artifacts/sunday_service_worship_1763537430650.png",
    registrationLink: "mailto:connect@gracecovenant.org?subject=Registration%20-%20Sunday%20Service",
    category: 'Worship'
  },
  {
    id: 'event-2',
    title: "Bible Study",
    date: "2026-07-17",
    time: "7:30 PM",
    locationName: "Stonecutters Neighbourhood Centre",
    address: churchAddress,
    mapEmbedUrl: churchMapEmbedUrl,
    description: "Dive deeper into God's Word in our Bible Study sessions. Join us on the 1st and 3rd Friday of each month.",
    imageUrl: "/artifacts/bible_study_warmth_1763537438596.png",
    registrationLink: "mailto:connect@gracecovenant.org?subject=Registration%20-%20Bible%20Study",
    category: 'Study'
  },
  {
    id: 'event-3',
    title: "Teens Bible",
    date: "2026-07-18",
    time: "6:30 PM",
    locationName: "Stonecutters Neighbourhood Centre",
    address: churchAddress,
    mapEmbedUrl: churchMapEmbedUrl,
    description: "Dynamic Bible study for teens led by Nancy Anand. A place for youth to grow in faith, ask questions, and build friendships. Every Saturday at 6:30 PM!",
    imageUrl: "/artifacts/teens_bible_youth_1763542826529.png",
    registrationLink: "mailto:youth@gracecovenant.org?subject=Registration%20-%20Teens%20Bible",
    category: 'Youth'
  },
];

export const ministries: Ministry[] = [
  {
    id: 'ministry-1',
    name: "GraceTeens",
    description: "GraceTeens provides a safe, fun, and engaging environment for children from birth to 5th grade to learn about Jesus on their level. Our amazing team is passionate about partnering with parents to raise a generation of world-changers.",
    imageUrl: "/artifacts/kids_bible_classroom_1763537449346.png",
    contactPerson: "Pastor Santhosh",
    contactEmail: "kids@gracecovenant.org",
    meetingInfo: "Saturdays during 6:30 PM In Person/Zoom ID - 4735795423"
  },
  {
    id: 'ministry-2',
    name: "Youth Ministry",
    description: "Our Youth Ministry is for students in 6th-12th grade. We exist to see students connected in community, growing in their faith, and empowered to make a difference in their schools and world.",
    imageUrl: "/artifacts/teens_bible_youth_1763542826529.png",
    contactPerson: "Nancy Anand",
    contactEmail: "youth@gracecovenant.org",
    meetingInfo: "Fridays at 7:30 PM"
  },
  {
    id: 'ministry-3',
    name: "Tongues of Fire",
    description: "We believe life is better together. Small groups are the heart of our church community, providing a place to build friendships, study God's word, and support one another. Groups meet throughout the week in homes across the city.",
    imageUrl: "/artifacts/bible_study_warmth_1763537438596.png",
    contactPerson: "Pastor Santhosh",
    contactEmail: "groups@gracecovenant.org",
    meetingInfo: "Zoom ID - 4735795423"
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
    bio: "Lisa Santhosh leads our Praise and worship ministry. Worship is grounded in biblical principles, focusing on thankful praise and honor for God's blessings and his role as a great king.",
    imageUrl: "https://ui-avatars.com/api/?name=Lisa+Santhosh&background=1a365d&color=d4af37&size=500&bold=true&font-size=0.33"
  },
  {
    id: 'staff-3',
    name: "Sunitha",
    role: "Media Director",
    bio: "Sunitha oversees all media operations, including our digital presence and broadcast efforts. She focuses on innovative communication strategies to share our message with a broader audience.",
    imageUrl: "https://ui-avatars.com/api/?name=Sunitha&background=1a365d&color=d4af37&size=500&bold=true&font-size=0.33"
  },
  {
    id: 'staff-4',
    name: "Nancy Anand",
    role: "Youth Pastor",
    bio: "Nancy has a passion for the next generation and leads our Teens Bible ministry with energy and authenticity. She creates a space where teens feel valued, heard, and encouraged to pursue Jesus in their own unique way.",
    imageUrl: "https://ui-avatars.com/api/?name=Nancy+Anand&background=1a365d&color=d4af37&size=500&bold=true&font-size=0.33"
  },
];