// Whispering Pines Golf Course - Local Image Paths
// Images downloaded from whisperingpinesgc.net

// Base path for GitHub Pages deployment
const basePath = process.env.NODE_ENV === "production" ? "/whispering-pines-golf-course" : "";

// Helper to prefix image paths with basePath
export const img = (path: string) => `${basePath}${path}`;

export const images = {
  // Logo and Branding
  logo: {
    header: img("/images/logos/logo-header.png"),
    footer: img("/images/logos/logo-footer.png"),
    background: img("/images/logos/header-bg.jpg"),
  },

  // Homepage Slider Images
  slider: [
    img("/images/slider/slider-1.jpg"),
    img("/images/slider/slider-2.jpg"),
    img("/images/slider/slider-3.jpg"),
    img("/images/slider/slider-4.jpg"),
    img("/images/slider/slider-5.jpg"),
    img("/images/slider/slider-6.jpg"),
  ],

  // Course Map and Scorecard
  courseMap: {
    outside: img("/images/features/driving-range.jpg"),
    inside: img("/images/features/driving-range.jpg"),
  },

  // Feature Images
  features: {
    food: img("/images/features/food.jpg"),
    proShop: img("/images/features/pro-shop.jpg"),
    bookOnline: img("/images/features/book-online.jpg"),
    events: img("/images/features/events.jpg"),
    crossCountrySki: img("/images/features/cross-country-ski.jpg"),
    courseOverview: img("/images/features/driving-range.jpg"),
    driving_range: img("/images/features/driving-range.jpg"),
    hole8Pond: img("/images/features/hole-8-pond.jpg"),
  },

  // Gallery photos
  gallery: [
    img("/images/gallery/gallery-1.jpg"),
    img("/images/gallery/gallery-2.jpg"),
    img("/images/gallery/gallery-3.jpg"),
    img("/images/gallery/gallery-4.jpg"),
    img("/images/gallery/gallery-5.jpg"),
    img("/images/gallery/gallery-6.jpg"),
  ],

  // Hole Images - Real photos from Whispering Pines
  holes: {
    1: {
      photo: img("/images/holes/hole-1.jpg"),
      layout: img("/images/holes/hole-1.jpg"),
      thumbnail: img("/images/holes/hole-1.jpg"),
    },
    2: {
      photo: img("/images/holes/hole-2.jpg"),
      layout: img("/images/holes/hole-2.jpg"),
      thumbnail: img("/images/holes/hole-2.jpg"),
    },
    3: {
      photo: img("/images/holes/hole-3.jpg"),
      layout: img("/images/holes/hole-3.jpg"),
      thumbnail: img("/images/holes/hole-3.jpg"),
    },
    4: {
      photo: img("/images/holes/hole-4.jpg"),
      layout: img("/images/holes/hole-4.jpg"),
      thumbnail: img("/images/holes/hole-4.jpg"),
    },
    5: {
      photo: img("/images/holes/hole-5.jpg"),
      layout: img("/images/holes/hole-5.jpg"),
      thumbnail: img("/images/holes/hole-5.jpg"),
    },
    6: {
      photo: img("/images/holes/hole-6.jpg"),
      layout: img("/images/holes/hole-6.jpg"),
      thumbnail: img("/images/holes/hole-6.jpg"),
    },
    7: {
      photo: img("/images/holes/hole-7.jpg"),
      layout: img("/images/holes/hole-7.jpg"),
      thumbnail: img("/images/holes/hole-7.jpg"),
    },
    8: {
      photo: img("/images/holes/hole-8.jpg"),
      layout: img("/images/holes/hole-8.jpg"),
      thumbnail: img("/images/holes/hole-8.jpg"),
      pond: img("/images/features/hole-8-pond.jpg"),
    },
    9: {
      photo: img("/images/holes/hole-9.jpg"),
      layout: img("/images/holes/hole-9.jpg"),
      thumbnail: img("/images/holes/hole-9.jpg"),
    },
    10: {
      photo: img("/images/holes/hole-10.jpg"),
      layout: img("/images/holes/hole-10.jpg"),
      thumbnail: img("/images/holes/hole-10.jpg"),
    },
    11: {
      photo: img("/images/holes/hole-11.jpg"),
      layout: img("/images/holes/hole-11.jpg"),
      thumbnail: img("/images/holes/hole-11.jpg"),
    },
    12: {
      photo: img("/images/holes/hole-12.jpg"),
      layout: img("/images/holes/hole-12.jpg"),
      thumbnail: img("/images/holes/hole-12.jpg"),
    },
    13: {
      photo: img("/images/holes/hole-13.jpg"),
      layout: img("/images/holes/hole-13.jpg"),
      thumbnail: img("/images/holes/hole-13.jpg"),
    },
    14: {
      photo: img("/images/holes/hole-14.jpg"),
      layout: img("/images/holes/hole-14.jpg"),
      thumbnail: img("/images/holes/hole-14.jpg"),
    },
    15: {
      photo: img("/images/holes/hole-15.jpg"),
      layout: img("/images/holes/hole-15.jpg"),
      thumbnail: img("/images/holes/hole-15.jpg"),
    },
    16: {
      photo: img("/images/holes/hole-16.jpg"),
      layout: img("/images/holes/hole-16.jpg"),
      thumbnail: img("/images/holes/hole-16.jpg"),
    },
    17: {
      photo: img("/images/holes/hole-17.jpg"),
      layout: img("/images/holes/hole-17.jpg"),
      thumbnail: img("/images/holes/hole-17.jpg"),
    },
    18: {
      photo: img("/images/holes/hole-18.jpg"),
      layout: img("/images/holes/hole-18.jpg"),
      thumbnail: img("/images/holes/hole-18.jpg"),
    },
  },
};

export const getHoleImage = (holeNumber: number) => {
  return images.holes[holeNumber as keyof typeof images.holes] || null;
};
