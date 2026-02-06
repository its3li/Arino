import { useState, useEffect } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Project {
  id: string;
  title: string;
  title_ar: string;
  description: string;
  description_ar: string;
  category: string;
  image_url: string;
  project_url: string | null;
  featured: boolean;
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f5f1e8] pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a3a52] mb-4">
            <span className="rtl:hidden">Our Portfolio</span>
            <span className="ltr:hidden">استعراض مشاريع</span>
          </h1>
          <p className="text-lg text-[#1a3a52]/70 max-w-2xl mx-auto">
            <span className="rtl:hidden">Explore our creative projects and innovative solutions</span>
            <span className="ltr:hidden" dir="rtl">استكشف مشاريعنا الإبداعية وحلولنا المبتكرة</span>
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
          <div className="flex items-center gap-2 text-[#1a3a52]">
            <Filter size={20} />
            <span className="font-medium">
              <span className="rtl:hidden">Filter:</span>
              <span className="ltr:hidden">تصنيف:</span>
            </span>
          </div>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                selectedCategory === cat
                  ? 'bg-[#1a3a52] text-[#f5f1e8] shadow-lg'
                  : 'bg-white text-[#1a3a52] hover:bg-[#1a3a52]/10'
              }`}
            >
              {cat === 'all' ? (
                <>
                  <span className="rtl:hidden">All</span>
                  <span className="ltr:hidden">الكل</span>
                </>
              ) : cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
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
            <p className="text-xl text-[#1a3a52]/60">
              <span className="rtl:hidden">No projects found in this category</span>
              <span className="ltr:hidden" dir="rtl">لا توجد مشاريع في هذا التصنيف</span>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image_url || 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.project_url && (
                    <a
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 p-2 bg-[#f5f1e8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#d4a574]"
                    >
                      <ExternalLink size={20} className="text-[#1a3a52]" />
                    </a>
                  )}
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#d4a574]/20 text-[#1a3a52] text-xs font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#1a3a52] mb-2">
                    <span className="rtl:hidden">{project.title}</span>
                    <span className="ltr:hidden" dir="rtl">{project.title_ar}</span>
                  </h3>
                  <p className="text-[#1a3a52]/70 line-clamp-3">
                    <span className="rtl:hidden">{project.description}</span>
                    <span className="ltr:hidden" dir="rtl">{project.description_ar}</span>
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
