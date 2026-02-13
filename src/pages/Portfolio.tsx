import { useState, useEffect } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  id: string;
  title: string;
  title_ar: string;
  description: string;
  description_ar: string;
  categories: string[];
  categories_ar: string[];
  image_url: string;
  project_url: string | null;
}

const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Salaf Researcher',
    title_ar: 'باحث السلف',
    description:
      'An advanced AI-powered research tool built to deliver answers inferred from the Quran and Sunnah according to the understanding of the Salaf.',
    description_ar:
      'أداة بحثية متقدمة تعتمد على الذكاء الاصطناعي، صُممت بدقة لتقديم الإجابات المستنبطة من القرآن والسنة بفهم سلف الأمة.',
    categories: ['Websites', 'AI'],
    categories_ar: ['مواقع إلكترونية', 'ذكاء اصطناعي'],
    image_url: 'https://i.ibb.co/dJ2QCRZZ/Fill-the-edges-2k-202602130113.jpg',
    project_url: 'https://salaf-ai.vercel.app/'
  },
  {
    id: '2',
    title: 'Aniro',
    title_ar: 'أنيروا',
    description: 'Aniro was designed to be your daily guide toward serenity.',
    description_ar: 'صُمم "أنيروا" ليكون دليلك اليومي نحو السكينة.',
    categories: ['Android App', 'Mobile'],
    categories_ar: ['تطبيق أندرويد', 'جوال'],
    image_url: 'https://i.ibb.co/67RhGBk1/Make-it-a-2k-202602130044.jpg',
    project_url: 'https://aniro.vercel.app/'
  }
];

export default function Portfolio() {
  const { isArabic } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(sampleProjects);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const categories = ['all', ...Array.from(new Set(projects.flatMap((p) => p.categories)))];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.categories.includes(selectedCategory));

  const getCategoryLabel = (cat: string) => {
    if (cat === 'all') return isArabic ? 'الكل' : 'All';
    if (!isArabic) return cat;

    const project = projects.find((p) => p.categories.includes(cat));
    if (!project) return cat;

    const categoryIndex = project.categories.indexOf(cat);
    return project.categories_ar[categoryIndex] || cat;
  };

  return (
    <div className="min-h-screen bg-[#f5f1e8] pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a3a52] mb-4">
            {isArabic ? 'استعراض مشاريع' : 'Our Portfolio'}
          </h1>
          <p className="text-lg text-[#1a3a52]/70 max-w-2xl mx-auto" dir={isArabic ? 'rtl' : 'ltr'}>
            {isArabic
              ? 'استكشف مشاريعنا الإبداعية وحلولنا المبتكرة'
              : 'Explore our creative projects and innovative solutions'}
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
          <div className="flex items-center gap-2 text-[#1a3a52]">
            <Filter size={20} />
            <span className="font-medium">{isArabic ? 'تصنيف:' : 'Filter:'}</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                selectedCategory === cat
                  ? 'bg-[#1a3a52] text-[#f5f1e8] shadow-lg'
                  : 'bg-white text-[#1a3a52] hover:bg-[#1a3a52]/10'
              }`}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                <div className="h-64 bg-[#1a3a52]/10" />
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-[#1a3a52]/10 rounded" />
                  <div className="h-4 bg-[#1a3a52]/10 rounded w-3/4" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-[#1a3a52]/60" dir={isArabic ? 'rtl' : 'ltr'}>
              {isArabic ? 'لا توجد مشاريع في هذا التصنيف' : 'No projects found in this category'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative aspect-video overflow-hidden bg-[#1a3a52]/5">
                  <img
                    src={project.image_url}
                    alt={isArabic ? project.title_ar : project.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.project_url && (
                    <a
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 p-2 bg-[#f5f1e8] rounded-full hover:bg-[#d4a574]"
                    >
                      <ExternalLink size={20} className="text-[#1a3a52]" />
                    </a>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {(isArabic ? project.categories_ar : project.categories).map((category) => (
                      <span
                        key={`${project.id}-${category}`}
                        className="inline-block px-3 py-1 bg-[#d4a574]/20 text-[#1a3a52] text-xs font-semibold rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a3a52] mb-2" dir={isArabic ? 'rtl' : 'ltr'}>
                    {isArabic ? project.title_ar : project.title}
                  </h3>
                  <p className="text-[#1a3a52]/70 line-clamp-3" dir={isArabic ? 'rtl' : 'ltr'}>
                    {isArabic ? project.description_ar : project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
