// Service landing list
import {
  BarChart3,
  Bell,
  CreditCard,
  Database,
  Globe,
  Heart,
  LineChart,
  MapPin,
  MessageSquare,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Store,
  Truck,
  UserCheck,
} from "lucide-react";
import type { Feature } from "../../models/Feature";
import type {Pricing} from "../../models/Pricing"
import type { Testimonial } from "../../models/Testimonial";

// Nav LINKS
export const navLinks = ["Home", "Features","Pricing","About", "Contact"];

// Features List
export const featuresList: Feature[] = [
  {
    icon: ShoppingBag,
    title: "Buy & Sell Platform",
    desc: "A modern marketplace where users can easily list, browse, and purchase products in seconds.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    desc: "Built with a mobile-first approach using Flutter for smooth and responsive app performance.",
  },
  {
    icon: Globe,
    title: "Web Access",
    desc: "Access the platform from any browser with a responsive and fast web version powered by React.",
  },
  {
    icon: Search,
    title: "Smart Product Search",
    desc: "Find items quickly using advanced filters, keyword matching, and intelligent search ranking.",
  },
  {
    icon: Heart,
    title: "Favorites & Wishlists",
    desc: "Save products you love for later with a personalized wishlist synced across devices.",
  },
  {
    icon: UserCheck,
    title: "User Authentication",
    desc: "Secure registration and login with JWT, email verification, and social sign-in options.",
  },
  {
    icon: MapPin,
    title: "Location-Based Listings",
    desc: "Discover items near you with accurate geolocation and area-based recommendations.",
  },
  {
    icon: MessageSquare,
    title: "In-App Chat",
    desc: "Buyers and sellers can communicate instantly inside the app for smooth transactions.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    desc: "Integrated payment gateways for safe and fast transactions between users.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Sellers",
    desc: "Build trust in the marketplace with identity checks and verified seller badges.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    desc: "Stay updated with instant alerts for new offers, messages, and price changes.",
  },
  {
    icon: Database,
    title: "Robust Backend",
    desc: "Powered by optimized SQL databases for reliable, scalable, and secure data handling.",
  },
  {
    icon: Truck,
    title: "Delivery Management",
    desc: "Track orders and deliveries with real-time updates for both buyers and sellers.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Monitor user growth, sales trends, and engagement with real-time business insights.",
  },
  {
    icon: Settings,
    title: "Admin Control Panel",
    desc: "Manage users, listings, and reports through a powerful and easy-to-use admin dashboard.",
  },
];

// Pricing List
export const pricingList : Pricing[] = [
  {
      name: "Starter",
      price: "Free",
      desc: "Perfect for new users testing Vendoo.",
      features: [
        "List up to 5 items per month",
        "Basic seller dashboard",
        "Limited analytics",
      ],
      highlighted: false,
  },{
      name: "Pro",
      price: "$9.99/mo",
      desc: "Best for active sellers growing their shop.",
      features: [
        "Unlimited listings",
        "Advanced analytics",
        "Priority support",
        "Access to seller tools",
      ],
      highlighted: true,
  },
  {
      name: "Business",
      price: "$19.99/mo",
      desc: "For small stores or power sellers.",
      features: [
        "Everything in Pro",
        "Multi-store management",
        "Team collaboration",
        "API access",
      ],
      highlighted: false,
  }
]


export const testimonials: Testimonial[] = [
  {
    id: crypto.randomUUID(),
    quote:
      "OMG 3anjad Vendoo 8ayyarle sh8le 180°. El inventory management la 7ala ossa, rayya7tne to the max! 💯",
    name: "Sarah K.",
    title: "Vintage Shop Owner",
    stars: 5,
  },
  {
    id: crypto.randomUUID(),
    quote:
      "Tbh kent ktir khayef en2ol sh8le online, bas Vendoo sahhala 3layye level 999. Ma bya3ate double b 3 months. Literally.",
    name: "Mark A.",
    title: "Handmade Crafts Seller",
    stars: 5,
  },
  {
    id: crypto.randomUUID(),
    quote:
      "El Analytics hene el game changer. A5iran sert efham el customers shu baddon w jib bde3a 3al asas. No cap.",
    name: "Elena R.",
    title: "Boutique Owner",
    stars: 5,
  },
  {
    id: crypto.randomUUID(),
    quote:
      "Bro sh8lkon fire 🔥. El support team de8re btrodd, w kel shi wade7 w sahel, ma btdi3. Keep it up!",
    name: "Georges N.",
    title: "Electronics Shop Owner",
    stars: 5,
  },
  {
    id: crypto.randomUUID(),
    quote:
      "Serle shahrayn bas fat7a el store, wel orders ma 3am twa2ef! El platform ktir sari3a w ma bta3le2. Big W.",
    name: "Nour F.",
    title: "Fashion Designer",
    stars: 5,
  },
  {
    id: crypto.randomUUID(),
    quote:
      "A7la shi enno all-in-one. El fawater, el orders, el customers... Ma 3edt b7aje la 10 apps tenye. Sh8l ndif. GG.",
    name: "Karim H.",
    title: "Supplements Seller",
    stars: 5,
  },
];
export const howItWorksSteps = [
  {
    icon: Store, // Changed from FaStore
    title: "Set Up Your Store",
    description:
      "Create your beautiful, custom storefront in just a few clicks.",
  },
  {
    icon: ShoppingCart, // Changed from FaShoppingCart
    title: "Add Your Products",
    description:
      "Upload product images and descriptions with our easy-to-use editor.",
  },
  {
    icon: LineChart, // Changed from FaChartLine
    title: "Start Selling",
    description: "Go live and watch the sales (and data) roll in.",
  },
];