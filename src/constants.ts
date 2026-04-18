import { Project, Experience, Education, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Rifky Bintang Pradana",
  role: "Data Scientist / Data Engineer",
  email: "rifkybintang24@gmail.com",
  location: "Semarang, Indonesia",
  links: {
    linkedin: "https://www.linkedin.com/in/rifkybintang",
    github: "https://github.com/decoderr24",
    kaggle: "https://www.kaggle.com/rifkybntng",
    huggingface: "https://huggingface.co/Decoder24",
    youtube: "https://www.youtube.com/@rifkybntng446",
    research: "https://jtit.polije.ac.id/index.php/jtit/article/view/456"
  },
  summary: "Fresh Graduate in Computer Science seeking roles in Data Science, Data Analysis, or Data Engineering. Experienced in machine learning, deep learning, and data analysis projects, with hands-on experience in data preprocessing, data visualization, and model development through academic research using real datasets."
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Diskominfo",
    location: "Semarang, Indonesia",
    role: "Full Stack Developer (Internship)",
    period: "Mar 2025 - June 2025",
    points: [
      "Developed and maintained full-stack web applications for public service systems",
      "Built frontend and backend features using Laravel, MySQL, and Tailwind CSS",
      "Integrated RESTful APIs and collaborated with government teams"
    ]
  },
  {
    company: "CFLT, Dian Nuswantoro University",
    location: "Semarang, Indonesia",
    role: "Laboratory Assistant",
    period: "Sep 2025 - Mar 2026",
    points: [
      "Assisted in managing lab sessions and supporting student learning activities",
      "Helped organize and monitor language proficiency tests",
      "Developed strong communication, teamwork, and problem-solving skills in an academic environment"
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Dian Nuswantoro University",
    location: "Semarang, Indonesia",
    degree: "Bachelor's Degree in Computer Science",
    period: "Sep 2022 - Mar 2026",
    gpa: "3.48/4.00",
    points: [
      "Built a deep learning model for classification using image datasets",
      "Published research in a peer-reviewed journal on image classification",
      "Conducted data preparation, preprocessing, image augmentation, and feature extraction using Python and SQL",
      "Generated visualizations to interpret model predictions and research outcomes using Python"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Published Research: Sugarcane Leaf Disease Classification (CNN)",
    period: "July 2025 - Dec 2025",
    description: "Scientific research and development of a CNN-based deep learning model for agricultural disease detection, published in a peer-reviewed academic journal.",
    points: [
      "Authored and published a research paper: 'Sugarcane Leaf Disease Classification Using Convolutional Neural Network'",
      "Developed an image classification model using CNN to detect sugarcane leaf diseases from agricultural datasets",
      "Performed image preprocessing and data augmentation to improve model generalization",
      "Trained and evaluated the model using Python, TensorFlow/Keras, and OpenCV",
      "Analyzed model performance and research outcomes for academic publication"
    ],
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "Deep Learning"],
    links: {
      paper: "https://jtit.polije.ac.id/index.php/jtit/article/view/456",
      github: "https://github.com/decoderr24/Sugarcane-Classifier-CNN"
    }
  },
  {
    title: "Indonesian Batik Classification using Vision Transformer",
    period: "Aug 2025 - Dec 2025",
    description: "Implemented ViT architecture for classifying Indonesian batik motifs.",
    points: [
      "Implemented a Vision Transformer (ViT) architecture for Indonesian batik motif classification",
      "Prepared image datasets through data preprocessing and normalization for transformer-based training",
      "Conducted model training and evaluation using Python and deep learning frameworks",
      "Analyzed classification outputs to interpret model prediction behavior"
    ],
    tags: ["ViT", "Vision Transformer", "Deep Learning", "Python", "PyTorch"],
    links: {
      github: "https://github.com/decoderr24/Indonesian-Batik-ViT"
    }
  },
  {
    title: "Indonesian Named Entity Recognition using BERT",
    period: "Oct 2025 - Nov 2025",
    description: "Built a BERT-based NER model for Indonesian language processing.",
    points: [
      "Built a BERT based Named Entity Recognition (NER) model for Indonesian language text",
      "Performed text preprocessing, tokenization, and dataset preparation for transformer NLP models",
      "Implemented training and evaluation pipelines using Python and deep learning libraries"
    ],
    tags: ["NLP", "BERT", "NER", "HuggingFace", "Python"],
    links: {
      github: "https://github.com/decoderr24/Indonesian-NER-using-BERT",
      huggingface: "https://huggingface.co/Decoder24/indonesian-ner-bert"
    }
  },
  {
    title: "Customer Feedback Analysis (Tokopedia)",
    period: "Oct 2025 - Nov 2025",
    description: "Sentiment classification model for marketplace reviews.",
    points: [
      "Built a sentiment classification model to analyze customer reviews from a Tokopedia store",
      "Conducted text preprocessing, feature engineering, and model training using Naive Bayes",
      "Generated insights from customer sentiment to support product improvement"
    ],
    tags: ["Machine Learning", "NLP", "Naive Bayes", "Sentiment Analysis"],
    links: {
      github: "https://github.com/decoderr24/Sentiment-Analysis-Ecommerce"
    }
  },
  {
    title: "Telco Customer Churn Prediction",
    period: "Nov 2025 - Dec 2025",
    description: "Predictive modeling for telecom customer retention.",
    points: [
      "Developed machine learning models to predict customer churn behavior using telecom datasets",
      "Conducted exploratory data analysis to identify patterns and key variables influencing churn",
      "Performed feature engineering and model training using Scikit-learn",
      "Evaluated classification models and analyzed prediction outcomes"
    ],
    tags: ["Scikit-learn", "EDA", "Churn Prediction", "Classification"],
    links: {
      kaggle: "https://www.kaggle.com/code/rifkybntng/telco-churn-prediction"
    }
  },
  {
    title: "Pima Indians Diabetic Prediction",
    period: "Dec 2025 - Jan 2026",
    description: "Predictive analysis for early detection of diabetes using clinical metrics.",
    points: [
      "Developed a diagnostic prediction model for early detection of diabetes using the Pima Indians dataset",
      "Performed detailed statistical analysis and correlation mapping for health features",
      "Implemented model pipelines for classification accuracy"
    ],
    tags: ["Machine Learning", "Health Tech", "Python", "Kaggle"],
    links: {
      kaggle: "https://www.kaggle.com/code/rifkybntng/pima-indians-diabetic-prediction"
    }
  }
];

export const SKILLS = {
  skillset: ["Statistics", "Machine Learning", "Deep Learning", "Data Wrangling", "Data Visualization", "Communication", "Problem Solving", "Critical Thinking"],
  toolset: ["Python", "SQL", "Scikit-learn", "NumPy", "Pandas", "TensorFlow", "OpenCV", "Power BI", "Git", "Microsoft Azure", "AWS"]
};

export const CERTIFICATIONS: Certification[] = [
  { name: "Machine Learning Specialization", issuer: "DeepLearning.AI / Stanford Online", year: "2026" },
  { name: "Machine Learning Fundamentals", issuer: "Dartmouth College", year: "2026" },
  { name: "AI Workflow: Data Analysis and Hypothesis Testing", issuer: "IBM", year: "2026" },
  { name: "Machine Learning Pipelines with Azure ML Studio", issuer: "Coursera", year: "2026" },
  { name: "Getting Started with Deep Learning", issuer: "NVIDIA", year: "2025" },
  { name: "English Proficiency Test", issuer: "Center for Foreign Language Training - UDINUS", year: "2026" }
];
