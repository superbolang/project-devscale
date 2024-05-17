const nextConfig = {
  serverRuntimeConfig: {
    serviceTypes: [
      {
        id: 1,
        title: "Boarding Accommodations",
        description: "Secure and comfortable boarding options for pets of all sizes. Whether it’s a spacious suite or a cozy den, your guests will feel right at home",
        image: "/images/Boarding-Accommodations.jpg"
      },
      {
        id: 2,
        title: "Feeding and Hydration",
        description: "Prioritize the dietary needs of each pet. Offer high-quality meals and ensure fresh water is always available",
        image: "/images/Feeding-and-Hydration.jpg"
      },
      {
        id: 3,
        title: "Exercise and Playtime",
        description: "Regular play sessions and outdoor activities keep pets active and happy. Consider playgroups, walks, and even agility courses",
        image: "/images/Exercise-and-Playtime.jpg"
      },
      {
        title: "Grooming Services",
        description: "Pamper pets with baths, brushing, nail trims, and fur styling. A well-groomed pet is a happy pet",
        image: "/images/Grooming-Services.jpg"
      },
    ],
    servicePackages: [
      {
        id: 1,
        name: "Basic",
        price: 50000,
        includeService: ["Boarding Accommodations", "Feeding and Hydration"],
        image: "/images/Package-1.jpg"
      },
      {
        id: 2,
        name: "Extra",
        price: 750000,
        includeService: ["Boarding Accommodations", "Feeding and Hydration", "Exercise and Playtime"],
        image: "/images/Package-2.jpg"
      },
      {
        id: 3,
        name: "Super",
        price: 150000,
        includeService: ["Boarding Accommodations", "Feeding and Hydration", "Exercise and Playtime", "Grooming Services"],
        image: "/images/Package-3.jpg"
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-b4d8bce428ce4efaaa2645805a673293.r2.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;