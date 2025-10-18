// Service landing list
import {
  BarChart3,
  Bell,
  CreditCard,
  Database,
  Globe,
  Heart,
  MapPin,
  MessageSquare,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Truck,
  UserCheck,
} from "lucide-react";
import type { Feature } from "../../models/Service";

// Nav LINKS
export const navLinks = ["Home", "About", "Contact", "About US"];

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
