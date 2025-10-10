interface SectionContents {
  id: number;
  text: string;
  content: string;
  subtext?: string;
}

export const SectionContents: SectionContents[] = [
  { 
    id: 1,
    text: 'Accommodation',
    content: 'Enjoy spacious, comfortable rooms designed to make your stay feel like home, whether for business or leisure.'
  },
  
  {
    id: 3,
    text: 'Conference Room',
    content: 'Host your important meetings in our fully equipped conference room, designed for productivity and success.'
  },
  {
    id: 4,
    text: 'Complimentary Breakfast & Kitchenette',
    content: 'Start your day with a freshly prepared breakfast, and enjoy the convenience of an in-room kitchenette for light meals.'
  },
];
