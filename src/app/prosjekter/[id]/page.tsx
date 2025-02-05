'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/ui/Header';
import { Project } from '@/types/supabase';
import { getProjects } from '@/lib/dataService';
import { Clock, Calendar, Users, CheckCircle } from 'lucide-react';

export default function ProjectPage() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projects = await getProjects();
        const foundProject = projects.find(p => p.id === id);
        setProject(foundProject || null);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <div className="p-6">Laster prosjekt...</div>;
  }

  if (!project) {
    return (
      <div className="p-6">
        <Header variant="h1">Prosjekt ikke funnet</Header>
        <p className="mt-4 text-gray-600">Beklager, vi kunne ikke finne prosjektet du leter etter.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Header variant="h1">{project.name}</Header>
        <span className={`px-3 py-1 rounded-full text-sm ${project.status === 'active' ? 'bg-primary/10 text-primary' : 'bg-green-100 text-green-600'}`}>
          {project.status === 'active' ? 'Aktiv' : 'Fullført'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Clock className="h-5 w-5" />
            <h3 className="font-semibold">Status</h3>
          </div>
          <p className="text-lg">{project.status === 'active' ? 'Aktiv' : 'Fullført'}</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Calendar className="h-5 w-5" />
            <h3 className="font-semibold">Startdato</h3>
          </div>
          <p className="text-lg">{new Date(project.created_at).toLocaleDateString('nb-NO')}</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Users className="h-5 w-5" />
            <h3 className="font-semibold">Teammedlemmer</h3>
          </div>
          <p className="text-lg">5 medlemmer</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-2 text-primary mb-2">
            <CheckCircle className="h-5 w-5" />
            <h3 className="font-semibold">Fullførte oppgaver</h3>
          </div>
          <p className="text-lg">12 / 15</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <Header variant="h2" className="mb-4">Prosjektbeskrivelse</Header>
        <p className="text-gray-600">{project.description}</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <Header variant="h2" className="mb-4">Prosjektaktivitet</Header>
        <div className="space-y-4">
          <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Milepæl oppnådd</p>
              <p className="text-sm text-gray-600">Fase 1 av prosjektet er fullført</p>
              <p className="text-xs text-gray-400 mt-1">2 dager siden</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Nytt teammedlem</p>
              <p className="text-sm text-gray-600">Mari Hansen har blitt med i prosjektet</p>
              <p className="text-xs text-gray-400 mt-1">4 dager siden</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}