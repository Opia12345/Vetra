export const navLinks = [
  {
    id: 1,
    name: "Write a Review",
    path: "/review",
    active: true,
  },
  {
    id: 2,
    name: "About Us",
    path: "/about_us",
    active: false,
  },
  {
    id: 3,
    name: "Contact",
    path: "/contact_us",
    active: false,
  },
];
//250, 231, 80
export const categories = [
  {
    id: 1,
    name: "Electronics",
    path: "/categories/electronics.png",
  },
  {
    id: 2,
    name: "Restaurants",
    path: "/categories/restaurant.png",
  },
  {
    id: 3,
    name: "Night Life",
    path: "/categories/night.png",
  },
  {
    id: 4,
    name: "Sports",
    path: "/categories/sport.png",
  },
  {
    id: 5,
    name: "Beauty & Spa",
    path: "/categories/salon.png",
  },
  {
    id: 6,
    name: "Automobile",
    path: "/categories/cars.png",
  },
  {
    id: 7,
    name: "Home Services",
    path: "/categories/home.png",
  },
  {
    id: 8,
    name: "Offices",
    path: "/categories/office.png",
  },
];

export const bestCompanies = [
  {
    id: 1,
    name: "Google",
    path: "/companies/google.png",
    link: "www.google.com",
    rating: 5,
    number: "4,012",
  },
  {
    id: 2,
    name: "Meta",
    path: "/companies/meta.png",
    link: "www.meta.com",
    rating: 4,
    number: "2,243",
  },
  {
    id: 3,
    name: "IBM",
    path: "/companies/ibm.png",
    link: "www.ibm.com",
    rating: 3,
    number: "400",
  },
  {
    id: 4,
    name: "Apple",
    path: "/companies/apple.png",
    link: "www.apple.com",
    rating: 5,
    number: "6,432",
  },
];

export const reviews = [
  {
    id: 1,
    reviewer: "John Doe",
    image: "/users/img1.jpg",
    thumbnail: "/thumbnail/tech.jpg",
    timestamp: "2025-03-25T14:32:00Z",
    title: "Fantastic Experience!",
    stars: 5,
    category: "Technology",
    content:
      "Google's services are top-notch. The search engine is incredibly fast, and the ecosystem works seamlessly together. Whether it's Docs, Drive, or Gmail, everything is so well integrated. Highly recommended for both personal and business use!",
  },
  {
    id: 2,
    reviewer: "Sarah Smith",
    image: "/users/img4.jpg",
    thumbnail: "/thumbnail/tech.jpg",
    timestamp: "2025-03-24T10:15:00Z",
    title: "Very Useful",
    stars: 5,
    category: "Technology",
    content:
      "Google has made my work easier with its suite of tools. The way everything syncs across devices is amazing. I can't imagine a day without Google Workspace—it's an absolute game-changer!",
  },
  {
    id: 3,
    reviewer: "Michael Johnson",
    image: "/users/img2.jpg",
    thumbnail: "/thumbnail/tech.jpg",
    timestamp: "2025-03-22T16:45:00Z",
    title: "Could be better",
    stars: 3,
    category: "Technology",
    content:
      "While Google is great, I feel like there are some privacy concerns that need to be addressed. I love the features, but the amount of data they collect can be worrying. If they improve privacy settings, I’d definitely rate it higher.",
  },
  {
    id: 4,
    reviewer: "Emily Davis",
    image: "/users/img4.jpg",
    thumbnail: "/thumbnail/tech.jpg",
    timestamp: "2025-03-20T08:30:00Z",
    title: "Excellent service",
    stars: 5,
    category: "Technology",
    content:
      "I absolutely love how intuitive and fast Google's services are. The search engine gives me exactly what I need within seconds, and the accuracy is mind-blowing. Definitely my go-to platform for everything.",
  },
  {
    id: 5,
    reviewer: "Robert Wilson",
    image: "/users/img7.jpg",
    thumbnail: "/thumbnail/tech.jpg",
    timestamp: "2025-03-18T12:10:00Z",
    title: "Good, but not perfect",
    stars: 4,
    category: "Technology",
    content:
      "I enjoy using Google, but sometimes the search results feel a bit biased. Some pages seem to rank higher for no apparent reason. Still, it's a great tool overall, and I rely on it daily.",
  },
  {
    id: 6,
    reviewer: "Jessica Brown",
    image: "/users/img6.jpg",
    thumbnail: "/thumbnail/hotel.jpg",
    timestamp: "2025-03-16T09:55:00Z",
    title: "Decent but overpriced",
    stars: 3,
    category: "Lifestyle",
    content:
      "The service is good, but I feel like I'm paying too much for the premium features. There should be more affordable plans for smaller businesses.",
  },
  {
    id: 7,
    reviewer: "Daniel Martinez",
    image: "/users/img5.jpg",
    thumbnail: "/thumbnail/food.jpg",
    timestamp: "2025-03-14T18:20:00Z",
    title: "Highly Recommended",
    stars: 5,
    category: "Restaurant",
    content:
      "This platform is amazing! I found all the best product recommendations in one place. The reviews are detailed, well-researched, and super helpful.",
  },
  {
    id: 8,
    reviewer: "Sophia Lopez",
    image: "/users/img4.jpg",
    thumbnail: "/thumbnail/office.jpg",
    timestamp: "2025-03-13T11:45:00Z",
    title: "Great for research",
    stars: 4,
    category: "Companies",
    content:
      "I use this for comparing products before I buy, and it has been very helpful. However, I think the site could do a better job of highlighting customer experiences along with expert reviews.",
  },
  {
    id: 9,
    reviewer: "Matthew Harris",
    image: "/users/img3.jpg",
    thumbnail: "/thumbnail/office.jpg",
    timestamp: "2025-03-11T14:32:00Z",
    title: "Needs More Categories",
    stars: 3,
    category: "Companies",
    content:
      "The reviews are great, but I wish there were more product categories covered. Sometimes I can't find the items I'm looking for, which is frustrating.",
  },
  {
    id: 10,
    reviewer: "Olivia Thompson",
    image: "/users/img4.jpg",
    thumbnail: "/thumbnail/app.jpg",
    timestamp: "2025-03-10T07:15:00Z",
    title: "Amazing UI",
    stars: 5,
    category: "Application",
    content:
      "The design and user experience are fantastic. Super easy to navigate! I love how clean and modern the layout is, and finding reviews is effortless.",
  },
  {
    id: 11,
    reviewer: "William Anderson",
    image: "/users/img2.jpg",
    thumbnail: "/thumbnail/app.jpg",
    timestamp: "2025-03-08T16:05:00Z",
    title: "Not what I expected",
    stars: 2,
    category: "Application",
    content:
      "I had high hopes, but the reviews don't always seem genuine. Some seem promotional rather than real user feedback.",
  },
  {
    id: 12,
    reviewer: "Isabella White",
    image: "/users/img6.jpg",
    thumbnail: "/thumbnail/app.jpg",
    timestamp: "2025-03-07T21:10:00Z",
    title: "Best site for honest reviews",
    stars: 5,
    category: "Application",
    content:
      "I trust this platform more than others. The reviews are detailed and honest! I appreciate the transparency in the rating system.",
  },
  //   {
  //     id: 13,
  //     reviewer: "James Moore",
  //     image: "/users/james.png",
  //     timestamp: "2025-03-06T13:45:00Z",
  //     title: "Love the insights",
  //     stars: 5,
  //     content:
  //       "This site gives me detailed insights before making a purchase. The breakdown of pros and cons helps me make better decisions.",
  //   },
  //   {
  //     id: 14,
  //     reviewer: "Charlotte Taylor",
  //     image: "/users/charlotte.png",
  //     timestamp: "2025-03-04T09:30:00Z",
  //     title: "Could use more user engagement",
  //     stars: 4,
  //     content:
  //       "I like the site, but I'd love to see more user-generated content. Maybe allow customers to upload photos with their reviews?",
  //   },
  //   {
  //     id: 15,
  //     reviewer: "Ethan Martinez",
  //     image: "/users/ethan.png",
  //     timestamp: "2025-03-02T17:50:00Z",
  //     title: "Best review platform",
  //     stars: 5,
  //     content:
  //       "I never make a purchase without checking reviews here first! It's become an essential tool for me.",
  //   },
  //   {
  //     id: 16,
  //     reviewer: "Amelia Walker",
  //     image: "/users/amelia.png",
  //     timestamp: "2025-03-01T12:10:00Z",
  //     title: "Good but slow updates",
  //     stars: 3,
  //     content:
  //       "Love the reviews, but wish they updated the latest products faster. Some of the top products listed are from a few years ago.",
  //   },
  //   {
  //     id: 17,
  //     reviewer: "Benjamin Lewis",
  //     image: "/users/benjamin.png",
  //     timestamp: "2025-02-28T19:25:00Z",
  //     title: "Great for tech lovers",
  //     stars: 5,
  //     content:
  //       "I always use this site for the latest tech product recommendations. It helps me stay ahead in the industry.",
  //   },
  //   {
  //     id: 18,
  //     reviewer: "Mia Robinson",
  //     image: "/users/mia.png",
  //     timestamp: "2025-02-26T15:00:00Z",
  //     title: "Trustworthy and reliable",
  //     stars: 5,
  //     content:
  //       "Finally, a place where I can trust the reviews! I’ve had bad experiences with fake reviews on other sites, but this one feels real.",
  //   },
  //   {
  //     id: 19,
  //     reviewer: "Lucas Hall",
  //     image: "/users/lucas.png",
  //     timestamp: "2025-02-25T08:40:00Z",
  //     title: "Would love video reviews",
  //     stars: 4,
  //     content:
  //       "I like the text reviews, but video reviews would be even better. Seeing the products in action would make a huge difference.",
  //   },
  //   {
  //     id: 20,
  //     reviewer: "Harper King",
  //     image: "/users/harper.png",
  //     timestamp: "2025-02-24T22:30:00Z",
  //     title: "One of the best review sites",
  //     stars: 5,
  //     content:
  //       "I’ve found so many good products here! The recommendations are always spot-on, and I rarely regret a purchase.",
  //   },
];
