import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import { mockPortfolio } from '../../lib/mock-data';

export default function ClientProjects() {
  const projects = mockPortfolio.slice(0, 2);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
          <p className="text-gray-600 mt-2">View and track your project progress</p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{project.title}</CardTitle>
                    <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <img 
                    src={project.gallery[0]}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Progress</p>
                      <Progress value={index === 0 ? 75 : 40} className="h-2" />
                      <p className="text-sm font-semibold text-blue-600 mt-1">{index === 0 ? '75%' : '40%'} Complete</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Expected Completion</p>
                      <p className="font-semibold">{new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
