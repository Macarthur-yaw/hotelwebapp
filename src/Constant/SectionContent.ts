interface SectionContents{
    id:number,
    text:string,
    content:string,
    subtext?:string
}
export const SectionContents:SectionContents[] = [
    { 
        id:1,
        text:'Restaurant',
content:'Have a taste of our finest dishes both local and continental, let your taste buds do the talking.'},

 {
        id:2,
    
        text:'Executive Lounge',
        content:'A serene beautiful setting to have some drinks with family and friends or just have quality time with yourself.'
    },
    {
        id:3,
      text: 'Conference Room',
      content:'A professional space to have your important meetings. Fully equipped to ensure a successful presentation.'
    },
    {
        id:4,
      text: 'Swimming Pool',
      content:'Having a hot day? Our swimming pool is nice place to relax and cool off.'
    },
  ];