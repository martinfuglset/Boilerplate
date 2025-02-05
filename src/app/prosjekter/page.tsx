'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/ui/Header';
import { Project } from '@/types/supabase';
import { getProjects } from '@/lib/dataService';
import { Plus, Clock, CheckCircle } from 'lucide-react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Header variant="h1">Prosjekter</Header>
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Nytt prosjekt
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Clock className="h-5 w-5" />
            <h3 className="font-semibold">Aktive prosjekter</h3>
          </div>
          <p className="text-2xl font-bold">{projects.filter(p => p.status === 'active').length || 0}</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-2 text-green-600 mb-2">
            <CheckCircle className="h-5 w-5" />
            <h3 className="font-semibold">Fullførte prosjekter</h3>
          </div>
          <p className="text-2xl font-bold">{projects.filter(p => p.status === 'completed').length || 0}</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-2 text-blue-600 mb-2">
            <Clock className="h-5 w-5" />
            <h3 className="font-semibold">Totalt antall prosjekter</h3>
          </div>
          <p className="text-2xl font-bold">{projects.length}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <Header variant="h2" className="mb-4">Prosjektoversikt</Header>
        {loading ? (
          <p className="text-gray-600">Laster prosjekter...</p>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <Link
                href={`/prosjekter/${project.id}`}
                key={project.id}
                className="block border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors"
              >
                <h3 className="font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 rounded-full text-xs ${project.status === 'active' ? 'bg-primary/10 text-primary' : 'bg-green-100 text-green-600'}`}>
                    {project.status === 'active' ? 'Aktiv' : 'Fullført'}
                  </span>
                  <span className="text-primary hover:text-primary/80">Se detaljer</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">Ingen prosjekter funnet</p>
        )}
      </div>
    </div>
  );
}