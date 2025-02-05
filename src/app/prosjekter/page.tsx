'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/ui/Header';
import { Project } from '@/types/supabase';
import { getProjects } from '@/lib/dataService';

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
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="space-y-8">
          {loading ? (
            <p className="text-secondary">Laster prosjekter...</p>
          ) : projects.length === 0 ? (
            <p className="text-secondary">Ingen aktive prosjekter</p>
          ) : (
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <Header variant="h2" className="mb-2">{project.name}</Header>
                  <p className="text-text mb-4">{project.description}</p>
                  <div className="text-sm text-secondary">
                    Status: {project.status}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}