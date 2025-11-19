
export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  series: string;
  description: string;
<<<<<<< HEAD
  videoUrl: string;
=======
  videoUrl: string; 
  liveStreamUrl?: string;
>>>>>>> 63cc47b2e33ab74ac5e3a7e022ba7f1468f504ba
  audioUrl: string;
  notesUrl: string;
  scriptureRefs: string[];
  thumbnailUrl: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  locationName: string;
  address: string;
  mapEmbedUrl: string;
  description: string;
  imageUrl: string;
  registrationLink: string;
  category: 'Kids' | 'Youth' | 'Community' | 'Worship' | 'Study';
  leadPerson?: string; // Optional: Person leading/teaching the event
}

export interface Ministry {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  contactPerson: string;
  contactEmail: string;
  meetingInfo: string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface ChurchInfo {
  phone: string;
  email: string;
  address: string;
  serviceTimes: string[];
  socialMedia: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
}