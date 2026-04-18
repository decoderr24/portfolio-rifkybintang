export interface Project {
  title: string;
  period: string;
  description: string;
  points: string[];
  tags: string[];
  links?: {
    github?: string;
    kaggle?: string;
    paper?: string;
    huggingface?: string;
  };
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  points: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  gpa: string;
  points: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}
