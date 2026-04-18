import { useState, useEffect, useRef, type ReactNode, type FC } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  BookOpen, 
  Award, 
  Code2, 
  Database, 
  Layers,
  ChevronRight,
  Menu,
  X,
  FileText,
  BarChart4,
  ArrowUpRight,
  Youtube,
  Cloud,
  Send,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, PROJECTS, SKILLS, CERTIFICATIONS } from './constants';
import foto from "./foto_diri.jpeg";

interface SectionHeaderProps {
  number: string;
  title: string;
  dark?: boolean;
}

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label?: string;
}

interface TimelineItemProps {
  item: any;
}

interface ProjectCardProps {
  project: any;
}

const SectionHeader: FC<SectionHeaderProps> = ({ number, title, dark }) => {
  return (
    <div id={title.toLowerCase().replace(/\s+/g, '-')} className="flex items-center gap-4 mb-16">
      <div className="flex flex-col text-left">
        <span className="text-[10px] font-bold text-brand-accent tracking-[0.2em] uppercase mb-1">{number} // STAGE</span>
        <h2 className={`professional-heading text-3xl lg:text-4xl uppercase ${dark ? '!text-white' : ''}`}>{title}</h2>
      </div>
      <div className={`h-[1px] flex-1 ${dark ? 'bg-white/10' : 'bg-border-subtle'}`} />
    </div>
  );
};

const SocialLink: FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="flex items-center gap-2 text-brand-secondary hover:text-brand-accent transition-colors group"
    >
      <div className="p-2 border border-border-subtle rounded-md group-hover:border-brand-accent/30 group-hover:bg-brand-accent/5 transition-all">
        {icon}
      </div>
      {label && <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>}
    </a>
  );
};

const TimelineItem: FC<TimelineItemProps> = ({ item }) => {
  return (
    <div className="grid md:grid-cols-4 gap-4 md:gap-12 group">
      <div className="md:col-span-1">
        <span className="text-xs font-bold text-brand-accent/60 font-mono tracking-wider">{item.period}</span>
      </div>
      <div className="md:col-span-3 space-y-4">
        <div className="space-y-1">
          <h4 className="text-xl font-bold text-brand-primary group-hover:text-brand-accent transition-colors">{item.role}</h4>
          <div className="flex items-center gap-2 text-sm font-medium text-brand-secondary">
             <span>{item.company}</span>
             <span className="text-border-subtle">•</span>
             <span>{item.location}</span>
          </div>
        </div>
        {item.extra && (
          <div className="inline-block px-2 py-0.5 bg-brand-accent/5 border border-brand-accent/10 rounded text-[10px] font-bold text-brand-accent uppercase tracking-wider">
            {item.extra}
          </div>
        )}
        <ul className="space-y-3">
          {item.points.map((p: string, j: number) => (
            <li key={j} className="text-sm text-brand-secondary leading-relaxed flex items-start gap-3">
              <ChevronRight size={14} className="mt-1 text-brand-accent/40 flex-shrink-0" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const mainLink = project.links?.github || project.links?.kaggle || project.links?.huggingface || project.links?.paper;

  return (
    <a 
      href={mainLink} 
      target="_blank" 
      rel="noreferrer"
      className="prof-card flex flex-col h-full group bg-white cursor-pointer"
    >
      <div className="flex items-start justify-between mb-8">
        <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
           {project.links?.paper ? <BookOpen size={20} /> : <Layers size={20} />}
        </div>
        <div className="flex gap-4">
          {project.links?.paper && (
            <div onClick={(e) => { e.stopPropagation(); window.open(project.links.paper, '_blank'); }} className="text-brand-secondary hover:text-brand-accent p-1">
              <ExternalLink size={16} />
            </div>
          )}
          {project.links?.github && (
            <div onClick={(e) => { e.stopPropagation(); window.open(project.links.github, '_blank'); }} className="text-brand-secondary hover:text-brand-accent p-1">
              <Github size={16} />
            </div>
          )}
          {project.links?.kaggle && (
            <div onClick={(e) => { e.stopPropagation(); window.open(project.links.kaggle, '_blank'); }} className="text-brand-secondary hover:text-brand-accent p-1">
              <BarChart4 size={16} />
            </div>
          )}
          {project.links?.huggingface && (
            <div onClick={(e) => { e.stopPropagation(); window.open(project.links.huggingface, '_blank'); }} className="text-brand-secondary hover:text-brand-accent p-1">
              <Cloud size={16} />
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="sub-label">{project.period}</span>
            {project.links?.paper && (
              <span className="text-[9px] font-bold text-brand-accent px-1.5 py-0.5 bg-brand-accent/5 border border-brand-accent/20 rounded uppercase tracking-tighter">
                Published Research
              </span>
            )}
          </div>
          <h4 className="text-xl font-bold text-brand-primary leading-tight uppercase group-hover:text-brand-accent transition-colors">{project.title}</h4>
        </div>
        
        <p className="text-sm text-brand-secondary leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 pt-6 mt-auto">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-[9px] font-bold uppercase tracking-widest bg-slate-100 text-slate-500 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-border-subtle flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-brand-accent">
         <span className="text-[10px] font-bold uppercase tracking-[0.2em]">View Case Study</span>
         <ArrowUpRight size={14} />
      </div>
    </a>
  );
};

const ContactForm: FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [result, setResult] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        setStatus('success');
        setResult("Your message has been sent. I will get back to you as soon as possible.");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setResult(responseData.message || "The message could not be sent right now. Please reach out directly via email.");
      }
    } catch (error) {
      console.log("Error", error);
      setStatus('error');
      setResult("A connection error occurred. Please try contacting me directly via email.");
    }
  };

  return (
    <div className="prof-card max-w-2xl mx-auto shadow-2xl shadow-brand-accent/5 backdrop-blur-sm bg-white/50">
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="from_name" value="Portfolio Visitor" />
        <input type="hidden" name="subject" value="New Professional Inquiry from Portfolio" />
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-2">
            <label className="sub-label block" htmlFor="name">Full Name</label>
            <input 
              required
              id="name"
              name="name"
              type="text" 
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-bg-secondary border border-border-subtle rounded-lg focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="sub-label block" htmlFor="email">Email Address</label>
            <input 
              required
              id="email"
              name="email"
              type="email" 
              placeholder="john@organization.com"
              className="w-full px-4 py-3 bg-bg-secondary border border-border-subtle rounded-lg focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all text-sm"
            />
          </div>
        </div>
        
        <div className="space-y-2 text-left">
          <label className="sub-label block" htmlFor="message">How can I help you?</label>
          <textarea 
            required
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me about your project or inquiry..."
            className="w-full px-4 py-3 bg-bg-secondary border border-border-subtle rounded-lg focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all text-sm resize-none"
          />
        </div>

        <button 
          disabled={status === 'loading' || status === 'success'}
          type="submit" 
          className="w-full btn-primary py-4 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Sending...</span>
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle2 size={18} />
              <span>Talk to you soon!</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>

        <AnimatePresence>
          {status === 'success' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-bold text-green-600 bg-green-50 p-3 rounded border border-green-100 uppercase tracking-wider"
            >
              {result}
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-bold text-red-600 bg-red-50 p-3 rounded border border-red-100 uppercase tracking-wider"
            >
              {result}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState('summary');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: 'summary', label: 'Executive Summary', icon: <FileText size={18} /> },
    { id: 'skills', label: 'Core Technical Skills', icon: <Code2 size={18} /> },
    { id: 'experience', label: 'Work Experience', icon: <BarChart4 size={18} /> },
    { id: 'projects', label: 'Project Experience', icon: <Layers size={18} /> },
    { id: 'certifications', label: 'Certification and License', icon: <Award size={18} /> },
    { id: 'contact', label: 'Contact Inquiry', icon: <Mail size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary selection:bg-brand-accent/10 selection:text-brand-accent font-sans text-brand-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tighter uppercase">{PERSONAL_INFO.name}</span>
            <span className="text-[9px] font-bold text-brand-accent uppercase tracking-[0.3em]">Data Scientist - AI/ML Engineer</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {sections.map(section => (
              <button 
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`nav-link ${activeSection === section.id ? 'nav-link-active' : ''}`}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent"
                  />
                )}
              </button>
            ))}
            <button className="btn-primary ml-4" onClick={() => scrollTo('summary')}>
              Connect
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-brand-primary">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="lg:hidden fixed inset-0 z-40 bg-white pt-24 px-6 h-screen"
          >
            <div className="flex flex-col gap-6">
              {sections.map(section => (
                <button 
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`text-2xl font-bold uppercase tracking-tight text-left ${activeSection === section.id ? 'text-brand-accent' : 'text-brand-primary'}`}
                >
                  {section.label}
                </button>
              ))}
              <div className="h-[1px] bg-border-subtle w-full my-6" />
              <div className="flex flex-col gap-6">
                 <div className="grid grid-cols-2 gap-4">
                   <SocialLink href={PERSONAL_INFO.links.linkedin} icon={<Linkedin />} label="LinkedIn" />
                   <SocialLink href={PERSONAL_INFO.links.github} icon={<Github />} label="GitHub" />
                   <SocialLink href={PERSONAL_INFO.links.kaggle} icon={<BarChart4 />} label="Kaggle" />
                   <SocialLink href={PERSONAL_INFO.links.huggingface} icon={<Cloud />} label="HuggingFace" />
                   <SocialLink href={PERSONAL_INFO.links.youtube} icon={<Youtube />} label="YouTube" />
                   <SocialLink href={`mailto:${PERSONAL_INFO.email}`} icon={<Mail />} label="Email" />
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="summary" className="bg-bg-secondary border-b border-border-subtle">
          <div className="section-container grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8 space-y-8">
              <h1 className="professional-heading text-5xl lg:text-7xl">
                Developing machine learning solutions <br className="hidden lg:block" /> with <span className="text-brand-accent">Robust Data Architectures.</span>
              </h1>
              <p className="text-lg text-brand-secondary leading-relaxed max-w-2xl font-medium">
                {PERSONAL_INFO.summary}
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-6 items-center pt-4">
                <button 
                  className="btn-primary"
                  onClick={() => scrollTo('contact')}
                >
                  Initiate Discussion
                </button>
                <div className="flex flex-wrap gap-4">
                  <SocialLink href={PERSONAL_INFO.links.github} icon={<Github size={20} />} />
                  <SocialLink href={PERSONAL_INFO.links.linkedin} icon={<Linkedin size={20} />} />
                  <SocialLink href={PERSONAL_INFO.links.kaggle} icon={<BarChart4 size={20} />} />
                  <SocialLink href={PERSONAL_INFO.links.huggingface} icon={<Cloud size={20} />} />
                  <SocialLink href={PERSONAL_INFO.links.youtube} icon={<Youtube size={20} />} />
                </div>
              </div>
            </div>
            {/* Visual Element */}
            <div className="lg:col-span-4 hidden lg:block">
               <div className="relative aspect-square bg-white border border-border-subtle p-12 overflow-hidden shadow-2xl skew-x-[-4deg]">
                  <div className="absolute top-0 right-0 p-4">
                     <span className="text-[8px] font-mono text-border-subtle uppercase tracking-[0.5em] vertical-text">010101010101</span>
                  </div>
                  <div className="h-full flex flex-col justify-between italic text-brand-secondary/20 font-mono text-xs border-l border-t border-border-subtle p-4">
                    <span>{PERSONAL_INFO.role}</span>
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={foto}
                      alt="profile"
                      className="w-60 rounded-xl shadow-lg"
                    />
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Core Expertise */}
        <section id="skills" className="section-container space-y-20">
          <SectionHeader number="01" title="Strategic Capabilities" />
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="prof-card space-y-6">
              <h4 className="text-xl font-bold uppercase tracking-tight">Technical Methodologies</h4>
              <p className="text-sm text-brand-secondary">Expertise in statistical analysis, predictive modeling, and deep learning architectures tailored for scale.</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-4 border-t border-slate-50">
                 {SKILLS.skillset.map(s => (
                   <span key={s} className="flex items-center gap-2 text-xs font-semibold text-brand-secondary">
                      <div className="w-1 h-1 rounded-full bg-brand-accent/40" />
                      {s}
                   </span>
                 ))}
              </div>
            </div>
            <div className="prof-card space-y-6 border-brand-accent/20 bg-brand-accent/[0.01]">
              <h4 className="text-xl font-bold uppercase tracking-tight">Infrastructure & Tech Stack</h4>
              <p className="text-sm text-brand-secondary">Proficiency in building robust pipelines and deploying production-grade AI solutions across cloud environments.</p>
              <div className="flex flex-wrap gap-2 pt-4">
                 {SKILLS.toolset.map(t => (
                   <span key={t} className="px-3 py-1.5 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest rounded shadow-sm">
                      {t}
                   </span>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="bg-bg-secondary border-y border-border-subtle">
           <div className="section-container space-y-24">
             <SectionHeader number="02" title="Work Experience" />
             <div className="space-y-20">
                <div className="space-y-16">
                  {EXPERIENCES.map((exp, i) => (
                    <TimelineItem key={i} item={exp} />
                  ))}
                </div>
                <div className="h-[1px] bg-border-subtle w-full" />
                <div className="space-y-16">
                  <div className="flex items-center justify-between">
                     <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent opacity-60">Educational Background</h3>
                  </div>
                  {EDUCATION.map((edu, i) => (
                    <TimelineItem key={i} item={{
                      company: edu.institution,
                      role: edu.degree,
                      period: edu.period,
                      points: edu.points,
                      location: edu.location,
                      extra: `GPA: ${edu.gpa}`
                    }} />
                  ))}
                </div>
             </div>
           </div>
        </section>

        {/* Project Experience */}
        <section id="projects" className="section-container space-y-20">
           <SectionHeader number="03" title="Project Experience" />
           <div className="grid lg:grid-cols-2 gap-8">
             {PROJECTS.map((project, i) => (
               <ProjectCard key={i} project={project} />
             ))}
           </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="bg-brand-primary text-white">
           <div className="section-container space-y-20">
             <SectionHeader number="04" title="Certification and License" dark />
             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {CERTIFICATIONS.map((cert, i) => (
                 <div key={i} className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors group">
                   <div className="flex items-center justify-between mb-6">
                      <Award className="text-brand-accent" size={24} />
                      <span className="text-[10px] font-bold font-mono opacity-40">{cert.year}</span>
                   </div>
                   <h4 className="text-sm font-bold uppercase tracking-tight leading-relaxed group-hover:text-brand-accent transition-colors">
                     {cert.name}
                   </h4>
                   <p className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40 mt-4">{cert.issuer}</p>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* Contact Inquiry */}
        <section id="contact" className="bg-bg-secondary border-t border-border-subtle">
           <div className="section-container space-y-20">
             <SectionHeader number="05" title="Contact Inquiry" />
             <div className="grid lg:grid-cols-2 gap-16 items-start">
               <div className="space-y-8 text-left">
                  <h3 className="professional-heading text-4xl">Discussing <span className="text-brand-accent">Strategic Opportunities</span> & Inquiries.</h3>
                  <p className="text-brand-secondary text-lg leading-relaxed">
                    I am currently evaluating new opportunities in Data Science and AI Engineering. If you have a professional inquiry or a strategic coordination request, please utilize the form or reach out directly via established channels.
                  </p>
                  
                  <div className="space-y-6 pt-8">
                     <div className="flex items-center gap-4 group">
                        <div className="p-3 bg-white border border-border-subtle rounded-xl text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                           <Mail size={20} />
                        </div>
                        <div className="flex flex-col">
                           <span className="sub-label">Electronic Mail</span>
                           <span className="font-bold text-brand-primary uppercase text-sm tracking-tight">{PERSONAL_INFO.email}</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-4 group">
                        <div className="p-3 bg-white border border-border-subtle rounded-xl text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                           <MapPin size={20} />
                        </div>
                        <div className="flex flex-col">
                           <span className="sub-label">Current Deployment</span>
                           <span className="font-bold text-brand-primary uppercase text-sm tracking-tight">{PERSONAL_INFO.location}</span>
                        </div>
                     </div>
                  </div>
               </div>
               
               <ContactForm />
             </div>
           </div>
        </section>

        {/* Contact Footer */}
        <section className="section-container text-center space-y-12">
           <div className="space-y-4">
              <span className="sub-label">Final Phase</span>
              <h2 className="professional-heading text-4xl lg:text-6xl">Open for Career Partnerships.</h2>
              <p className="text-brand-secondary max-w-xl mx-auto font-medium">
                Seeking opportunities in Data Science, Data Engineering, or Advanced Analytics where technical precision is the requirement.
              </p>
           </div>
           
           <div className="flex flex-col items-center gap-8">
              <button 
                className="btn-primary text-lg px-12 py-4"
                onClick={() => scrollTo('contact')}
              >
                Send Official Inquiry
              </button>
              
              <div className="flex flex-wrap gap-8">
                 <SocialLink href={PERSONAL_INFO.links.github} icon={<Github />} label="GITHUB" />
                 <SocialLink href={PERSONAL_INFO.links.linkedin} icon={<Linkedin />} label="LINKEDIN" />
                 <SocialLink href={PERSONAL_INFO.links.kaggle} icon={<BarChart4 />} label="KAGGLE" />
                 <SocialLink href={PERSONAL_INFO.links.huggingface} icon={<Cloud />} label="HUGGING FACE" />
                 <SocialLink href={PERSONAL_INFO.links.youtube} icon={<Youtube />} label="YOUTUBE" />
              </div>
           </div>
        </section>

        <footer className="bg-bg-secondary border-t border-border-subtle py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="flex flex-col items-center md:items-start">
                  <span className="font-extrabold text-lg tracking-tighter uppercase">{PERSONAL_INFO.name}</span>
                  <span className="text-[9px] font-bold text-brand-secondary/40 uppercase tracking-[0.5em]">Semarang // Indonesia // 2026</span>
               </div>
               
               <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest text-brand-secondary/60">
                  <button onClick={() => scrollTo('summary')} className="hover:text-brand-accent">Overview</button>
                  <button onClick={() => scrollTo('experience')} className="hover:text-brand-accent">Career</button>
                  <button onClick={() => scrollTo('projects')} className="hover:text-brand-accent">Projects</button>
                  <button onClick={() => scrollTo('contact')} className="hover:text-brand-accent">Inquiry</button>
               </div>
            </div>
        </footer>
      </main>
    </div>
  );
}
