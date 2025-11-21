export const portfolioData = {
  personalInfo: {
    name: "Nikita Kunwor",
    title: "Computer Engineering Student & Creative Developer",
    email: "kunwornikita123@gmail.com",
    phone: "+977 9840137137",
    github: "https://github.com/Nikita0728",
    linkedin: "", // Not provided in image, leaving empty
    bio: "I am a Computer Engineering student enthusiastic about UI/UX design and Full Stack Development. I have a strong foundation in AI/ML and a passion for creating interactive, user-centric digital experiences. My research interests lie in Image Processing, particularly in Medical Imaging."
  },
  education: [
    {
      institution: "Thapathali Campus, Institute of Engineering (IOE)",
      degree: "B.E. in Computer Engineering",
      duration: "April 2022 - Present",
      location: "Kathmandu, Nepal"
    },
    {
      institution: "National Institute of Science and Technology (NIST)",
      degree: "Associate's Degree in Science",
      duration: "June 2019 - December 2021",
      location: "Lainchaur, Kathmandu"
    }
  ],
  skills: {
    languages: ["JavaScript", "Python", "C++", "C", "SQL", "PostgreSQL"],
    frameworks: ["React", "Next.js", "Django", "Flask", "Node.js", "Express.js"],
    tools: ["GitHub", "Vercel", "scikit-learn", "TensorFlow", "NumPy", "pandas", "OpenCV", "Three.js"],
    ai_ml: ["Linear Regression", "Logistic Regression", "Decision Trees", "Random Forests", "CNNs", "Transfer Learning"]
  },
  projects: [
    {
      title: "GeoNUSAF",
      status: "Ongoing",
      description: "Combining panoptic segmentation with diffusion models using Detectron2 and Stable Diffusion to generate intelligent urban visualizations for Kathmandu.",
      technologies: ["Detectron2", "Stable Diffusion", "Python"]
    },
    {
      title: "AI Email Summarizer & Response Generator",
      description: "Developed a service using Google Gemini, RAG, and FastAPI for email summarization and response generation.",
      technologies: ["FastAPI", "Google Gemini", "RAG", "LLM"]
    },
    {
      title: "Used Car Selling Price Prediction Model",
      description: "Built a machine learning model to predict the selling price of used cars. Compared Linear Regression and Random Forest models.",
      technologies: ["Python", "scikit-learn", "ML"]
    },
    {
      title: "PharmaLife",
      description: "Full-stack pharmaceutical e-commerce platform featuring user authentication, shopping cart, and product browsing.",
      technologies: ["Django", "Next.js"]
    },
    {
      title: "ShopMe",
      description: "Full-stack women's fashion e-commerce website with secure payments and product catalog.",
      technologies: ["Next.js", "Django", "PostgreSQL"]
    },
    {
      title: "Text-to-ASL Conversion System",
      description: "Designed a text-to-ASL translation framework using the T5 model and Blender to convert text into 3D animated signs.",
      technologies: ["T5 Model", "Blender"]
    },
    {
      title: "Hospital Management System",
      description: "Software solution to manage hospital operations including patient records, appointments, and billing.",
      technologies: ["Software Development"]
    },
    {
      title: "Data Visualization Platform",
      description: "Web-based platform to visualize and explore spatial and structured datasets interactively.",
      technologies: ["Web Development", "Data Viz"]
    }
  ]
};
