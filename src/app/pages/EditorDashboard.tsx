import React from 'react';
import { Link } from 'react-router';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { FileText, Briefcase, Image as ImageIcon, Edit3, Plus } from 'lucide-react';
import { mockBlogPosts, mockPortfolio } from '../lib/mock-data';
import { Badge } from '../components/ui/badge';

export default function EditorDashboard() {
  const stats = [
    {
      name: 'Draft Posts',
      value: '8',
      icon: FileText,
      href: '/dashboard/editor/blog',
    },
    {
      name: 'Published Posts',
      value: mockBlogPosts.length.toString(),
      icon: FileText,
      href: '/dashboard/editor/blog',
    },
    {
      name: 'Portfolio Projects',
      value: mockPortfolio.length.toString(),
      icon: Briefcase,
      href: '/dashboard/editor/portfolio',
    },
    {
      name: 'Media Files',
      value: '156',
      icon: ImageIcon,
      href: '/dashboard/editor/media',
    },
  ];

  const recentPosts = mockBlogPosts.slice(0, 3);
  const recentProjects = mockPortfolio.slice(0, 3);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Editor Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage content and media across the platform.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link to="/dashboard/editor/blog">
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Link>
            </Button>
            <Button asChild>
              <Link to="/dashboard/editor/pages">
                <Edit3 className="h-4 w-4 mr-2" />
                Edit Pages
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.name} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.name}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <Button variant="ghost" size="sm" className="mt-4 w-full" asChild>
                    <Link to={stat.href}>
                      Manage →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Blog Posts */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Blog Posts</CardTitle>
                <CardDescription>Your latest published articles</CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link to="/dashboard/editor/blog">View All</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex items-start gap-4 pb-4 border-b last:border-0">
                    <img 
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 line-clamp-1">{post.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                        <Badge className="text-xs bg-green-100 text-green-800">{post.status}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" asChild>
                <Link to="/dashboard/editor/blog">
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Post
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Portfolio Projects */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Portfolio Projects</CardTitle>
                <CardDescription>Recently added projects</CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link to="/dashboard/editor/portfolio">View All</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div key={project.id} className="flex items-start gap-4 pb-4 border-b last:border-0">
                    <img 
                      src={project.gallery[0]}
                      alt={project.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 line-clamp-1">{project.title}</p>
                      <p className="text-xs text-gray-600">{project.client}</p>
                      {project.featured && (
                        <Badge variant="secondary" className="text-xs mt-1">Featured</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" asChild>
                <Link to="/dashboard/editor/portfolio">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Project
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Content Management Tips */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardHeader>
            <CardTitle>Content Management Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Use clear, descriptive titles and meta descriptions for better SEO</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Optimize images before uploading to improve page load times</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Keep content fresh - update blog posts and portfolio projects regularly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Use tags and categories consistently to help users find content</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
