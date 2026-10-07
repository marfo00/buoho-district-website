// Production image resolution utility
export interface ManagedImageConfig {
  key: string;
  label: string;
  section: 'branding' | 'hero' | 'leadership' | 'ministries' | 'events' | 'gallery';
  pageName: string;
  defaultUrl: string;
  description: string;
}

export const MANAGED_IMAGES: ManagedImageConfig[] = [
  // 1. Branding
  {
    key: 'buoho_district_custom_logo',
    label: 'Buoho District Official Logo',
    section: 'branding',
    pageName: 'Header & Footer (All Pages)',
    defaultUrl: '/images/gallery/logo_full.jpg',
    description: 'The official logo of The Church of Pentecost, Buoho District appearing in the top navigation and footer.',
  },
  // 2. Hero Centerpiece - Church Building
  {
    key: 'buoho_church_building_image',
    label: 'Buoho Central Church Building',
    section: 'hero',
    pageName: 'Home Page (Hero 3D Centerpiece)',
    defaultUrl: '/images/buoho_central_church.jpg',
    description: 'The primary central building photo of The Church of Pentecost, Buoho Central auditorium featured in the hero orbit.',
  },
  // 3. Leadership
  {
    key: 'buoho_pastor_thomas_appiah_photo',
    label: 'District Pastor Thomas Appiah',
    section: 'leadership',
    pageName: 'Leadership Page & Leadership Spotlight',
    defaultUrl: '/images/leadership/pastor_thomas_appiah.jpg',
    description: 'Photo of District Pastor & Minister-in-Charge Pastor Thomas Appiah.',
  },
  // 4. Ministries
  {
    key: 'buoho_ministry_youth_week-2026',
    label: 'Buoho Youth Ministry',
    section: 'ministries',
    pageName: 'Ministries Section (Current Updates)',
    defaultUrl: '/images/ministries/youth_week.jpg',
    description: 'Youth ministry rally and apostolic consecration image.',
  },
  {
    key: 'buoho_ministry_womens_week-2026',
    label: 'Women’s Movement',
    section: 'ministries',
    pageName: 'Ministries Section (Current Updates)',
    defaultUrl: '/images/ministries/womens_week.png',
    description: 'Women unleashed for kingdom glory ministry image.',
  },
  {
    key: 'buoho_ministry_children_week-2026',
    label: 'Children’s Ministry',
    section: 'ministries',
    pageName: 'Ministries Section (Current Updates)',
    defaultUrl: '/images/ministries/children_week.jpg',
    description: 'Next generation kingdom champions children ministry image.',
  },
  // 5. Events
  {
    key: 'buoho_event_strategic_growth_flyer',
    label: '2026 Strategic Growth Plan Flyer',
    section: 'events',
    pageName: 'Events and Announcement Section',
    defaultUrl: '/images/events/strategic_growth_plan.jpg',
    description: 'Worldwide 800,000 souls evangelism challenge flyer.',
  },
  // 6. Orbit & Moments Gallery
  {
    key: 'buoho_gallery_sharing-love',
    label: 'Buoho District Sharing Love (Outreach)',
    section: 'gallery',
    pageName: 'Hero Orbit & Moments Gallery',
    defaultUrl: '/images/gallery/sharing_love.jpg',
    description: 'District evangelism outreach and benevolence.',
  },
  {
    key: 'buoho_gallery_singer-dancing',
    label: 'Vibrant Worship & Praise',
    section: 'gallery',
    pageName: 'Hero Orbit & Moments Gallery',
    defaultUrl: '/images/gallery/singer_dancing.jpg',
    description: 'Worshipers in vibrant praise during Sunday service.',
  },
  {
    key: 'buoho_gallery_men-dancing',
    label: 'Men’s Ministry Joyful Assembly',
    section: 'gallery',
    pageName: 'Hero Orbit & Moments Gallery',
    defaultUrl: '/images/gallery/men_dancing.jpg',
    description: 'PEMEM brethren rejoicing in the Lord.',
  },
  {
    key: 'buoho_gallery_woman-dancing',
    label: 'Women’s Movement Dancing & Praise',
    section: 'gallery',
    pageName: 'Hero Orbit & Moments Gallery',
    defaultUrl: '/images/gallery/woman_dancing.jpg',
    description: 'Sisters dancing during district convention.',
  },
  {
    key: 'buoho_gallery_apostle-nyamekye',
    label: 'Apostolic Teaching & Preaching',
    section: 'gallery',
    pageName: 'Hero Orbit & Moments Gallery',
    defaultUrl: '/images/gallery/apostle_nyamekye.jpg',
    description: 'Apostolic leadership and preaching the pure Word of God.',
  },
  {
    key: 'buoho_gallery_aps-annor-knees',
    label: 'Intercession on Knees',
    section: 'gallery',
    pageName: 'Hero Orbit & Moments Gallery',
    defaultUrl: '/images/gallery/aps_annor_knees.jpg',
    description: 'Fervent prayer on knees for revival and spiritual growth.',
  },
  {
    key: 'buoho_gallery_prophet-annor-solo',
    label: 'Prophetic Proclamation & Ministration',
    section: 'gallery',
    pageName: 'Hero Orbit & Moments Gallery',
    defaultUrl: '/images/leadership/prophet_annor_solo.jpg',
    description: 'Ministry of prophetic proclamation and apostolic grace.',
  },
  {
    key: 'buoho_gallery_elder-agyepong',
    label: 'Elder Dr. Joseph Siaw Agyepong',
    section: 'gallery',
    pageName: 'Hero Orbit & Moments Gallery',
    defaultUrl: '/images/leadership/elder_dr_agyepong.jpg',
    description: 'Kingdom stewardship and godly leadership exemplary.',
  },
  {
    key: 'buoho_gallery_elder-seth-miah',
    label: 'Elder Seth Miah',
    section: 'gallery',
    pageName: 'Hero Orbit & Moments Gallery',
    defaultUrl: '/images/leadership/elder_seth_miah.jpg',
    description: 'Faithful service and presbytery leadership.',
  },
  {
    key: 'buoho_gallery_prophet-annor-wife',
    label: 'Prophet J.E. Annor & Wife',
    section: 'gallery',
    pageName: 'Hero Orbit & Moments Gallery',
    defaultUrl: '/images/leadership/prophet_annor_and_wife.jpg',
    description: 'Honored spiritual pioneers and marital dedication in ministry.',
  },
  {
    key: 'buoho_gallery_pemem-dawn',
    label: 'PEMEM Dawn Prayers',
    section: 'gallery',
    pageName: 'Hero Orbit & Moments Gallery',
    defaultUrl: '/images/events/pemem_dawn_prayers.jpg',
    description: 'Early morning intercession by men of valor.',
  },
];

/**
 * Returns the effective image URL for a given managed key, falling back to defaultUrl.
 */
export function getManagedImage(key: string, defaultUrl: string): string {
  if (typeof window === 'undefined') return defaultUrl;
  try {
    const stored = localStorage.getItem(key);
    return stored || defaultUrl;
  } catch {
    return defaultUrl;
  }
}
