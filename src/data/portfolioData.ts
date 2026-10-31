export interface FilmItem {
  id: string;
  index: string;
  title: string;
  category: string;
  src: string;
  description: string;
  aspectClass?: string;
}

export interface StillItem {
  id: string;
  index: string;
  title: string;
  category: string;
  src: string;
  description: string;
  aspect?: string;
  gridSpan?: string;
}

export const FILMS_DATA: FilmItem[] = [
  {
    id: 'film-01',
    index: '001',
    title: 'Ethereal Luminescence',
    category: 'BEAUTY & HIGH FASHION',
    src: '/portfolio/agency/videos/3f467cc01908c12bda49d6d10deb1a32_720w.mp4',
    description: 'Intimate high-fashion portraiture exploring natural radiance, skin luminosity, and chiaroscuro lighting.',
    aspectClass: 'aspect-[16/10] md:aspect-[16/9]'
  },
  {
    id: 'film-02',
    index: '002',
    title: 'Velvet Indulgence',
    category: 'GOURMET CONFECTIONERY',
    src: '/portfolio/agency/videos/Transform_storyboard_into_video_20261027153937.mp4',
    description: 'Macro viscosity and fluid confectionery motion showcasing rich cocoa texture and sensory appetite appeal.',
    aspectClass: 'aspect-[4/3] md:aspect-[16/10]'
  },
  {
    id: 'film-03',
    index: '003',
    title: 'Apex Extreme',
    category: 'TECH & ADVENTURE',
    src: '/portfolio/agency/videos/Transform_storyboard_into_video_20261027163849.mp4',
    description: 'High-velocity environmental camera tracking, cinematic lens flare, and rugged action camera commercial.',
    aspectClass: 'aspect-[4/3] md:aspect-[16/10]'
  },
  {
    id: 'film-04',
    index: '004',
    title: 'Noir Haute Couture',
    category: 'LUXURY EDITORIAL',
    src: '/portfolio/agency/videos/659d16ff96ed4f3f1ecb4b6b57deb665_720w.mp4',
    description: 'Monochrome mood study with deliberate cinematic pacing, stylized garment movement, and evocative gaze.',
    aspectClass: 'aspect-[16/10] md:aspect-[21/9]'
  }
];

export const STILLS_DATA: StillItem[] = [
  {
    id: 'still-01',
    index: '001',
    title: 'Portronics Vader Pro',
    category: 'TECH & GAMING',
    src: '/portfolio/agency/photos/Portronics Vader Pro Gaming Mouse Ad.png',
    description: 'Wireless gaming mouse concept with cybernetic ambient illumination and dramatic shadow composition.',
    gridSpan: 'md:col-span-6 lg:col-span-7'
  },
  {
    id: 'still-02',
    index: '002',
    title: 'Ocean & Canyon',
    category: 'LUXURY FRAGRANCE',
    src: '/portfolio/agency/photos/Ocean & Canyon Perfume Duo.png',
    description: 'Dual elemental perfume campaign exploring raw stone textures and oceanic atmosphere.',
    gridSpan: 'md:col-span-6 lg:col-span-5'
  },
  {
    id: 'still-03',
    index: '003',
    title: 'Sylvi Timepieces',
    category: 'HOROLOGY & WATCHES',
    src: '/portfolio/agency/photos/More Than a Watch_ Premium SYLVI Timepiece.png',
    description: 'Editorial horology advertisement highlighting chronograph precision and brushed metal reflections.',
    gridSpan: 'md:col-span-6 lg:col-span-4'
  },
  {
    id: 'still-04',
    index: '004',
    title: 'Minimalist Vitamin C',
    category: 'CLINICAL BEAUTY',
    src: '/portfolio/agency/photos/Minimalist Vitamin C Serum Glow.png',
    description: 'Clean clinical radiance visual built for modern skincare digital campaigns.',
    gridSpan: 'md:col-span-6 lg:col-span-4'
  },
  {
    id: 'still-05',
    index: '005',
    title: 'Hoppup Gaming Earbuds',
    category: 'AUDIO & WEARABLES',
    src: '/portfolio/agency/photos/HOPPUP Gaming Earbuds_ Game On.png',
    description: 'Cyberpunk neon rim lighting and dynamic floating earbud composition.',
    gridSpan: 'md:col-span-6 lg:col-span-4'
  },
  {
    id: 'still-06',
    index: '006',
    title: 'Nestasia Lifestyle Tumbler',
    category: 'LIFESTYLE & LIVING',
    src: '/portfolio/agency/photos/cb1b0da1-4324-4331-80cb-e5d68fd89d7f.png',
    description: 'Minimalist modern drinkware portrait exploring earthen tones and clean tableware aesthetics.',
    gridSpan: 'md:col-span-6 lg:col-span-6'
  },
  {
    id: 'still-07',
    index: '007',
    title: 'Little Angel Baby Care',
    category: 'MATERNAL & BABY CARE',
    src: '/portfolio/agency/photos/7d6c9a20-743a-4754-8169-e7a6a85dda30.png',
    description: 'Soft pastel atmosphere and reassuring comfort portrait for baby wellness.',
    gridSpan: 'md:col-span-6 lg:col-span-6'
  },
  {
    id: 'still-08',
    index: '008',
    title: 'OZiva Clean Nutrition',
    category: 'HEALTH & BOTANICALS',
    src: '/portfolio/agency/photos/57377e2d-aa86-49c5-83f5-b2835405f07d.png',
    description: 'Botanical foliage and clean organic protein visual identity.',
    gridSpan: 'md:col-span-6 lg:col-span-4'
  },
  {
    id: 'still-09',
    index: '009',
    title: 'Metal Loban Dani',
    category: 'ARTISANAL HERITAGE',
    src: '/portfolio/agency/photos/Metal Loban Dani Ritual Ad.png',
    description: 'Sacred brass incense burner capturing centuries of artisanal metalcraft.',
    gridSpan: 'md:col-span-6 lg:col-span-4'
  },
  {
    id: 'still-10',
    index: '010',
    title: 'Artisanal Cocoa Indulgence',
    category: 'CONFECTIONERY FEATURE',
    src: '/portfolio/agency/photos/A Little Chocolate, Brighter Day.png',
    description: 'Decadent chocolate layers and warm editorial lighting crafted for confectionery brands.',
    gridSpan: 'md:col-span-6 lg:col-span-4'
  }
];

export const STUDIO_CONFIG = {
  name: 'AETHER',
  subtitle: 'INDEPENDENT CREATIVE STUDIO / AI-POWERED PRODUCTION',
  email: 'team@aetherstudio.com',
  phone: '8595216037',
  phoneDisplay: '+91 8595216037',
  year: '2026'
};
