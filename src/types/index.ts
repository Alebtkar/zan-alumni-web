
// Project Interface
export interface Project {
  id: string;
  title: string;
  description?: string;
  type: "residential" | "commercial" | "industrial";
  slug: string;
  images: string[];
  location?: string;
  timeline: ProjectMilestone[];
  status: "planned" | "ongoing" | "completed";
  clientReview?: Review;
  createdAt: string;
  updatedAt: string;
}

// Milestone Interface
export interface ProjectMilestone {
  id: string;
  title: string;
  description?: string;
  date: string;
  image?: string;
}

// Service Interface
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon?: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

// Article Interface
export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  body: string;
  image?: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

// QuoteRequest Interface
export interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location?: string;
  notes?: string;
  fileUrl?: string;
  createdAt: string;
}

// JobApplication Interface
export interface JobApplication {
  id: string;
  name: string;
  email: string;
  phone?: string;
  position: string;
  resumeUrl?: string;
  coverLetter?: string;
  createdAt: string;
}

// Review Interface
export interface Review {
  id: string;
  name: string;
  project?: string;
  comment: string;
  rating: number;
  createdAt: string;
}

// User Interface
export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "superAdmin" | "editor";
  createdAt: string;
  updatedAt: string;
}
