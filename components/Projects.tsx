"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Cage Management System",
    description:
      "A comprehensive system for managing cage operations with real-time monitoring, inventory tracking, and automated reporting features.",
    technologies: ["Laravel", "PHP", "MySQL"],
    category: "Web Application",
    status: "In Progress",
    features: [
      "Real-time cage monitoring",
      "Inventory management",
      "Automated reporting",
      "User role management",
    ],
  },
  {
    id: 2,
    title: "Website with CMS & Reservation System",
    description:
      "Full-featured website with content management system, online reservation capabilities, and integrated promotion management.",
    technologies: ["Next.js", "Laravel", "PHP", "MySQL"],
    category: "Full Stack",
    status: "Completed",
    features: [
      "Content management system",
      "Online reservations",
      "Promotion management",
      "Payment integration",
    ],
  },
  {
    id: 3,
    title: "Ads Management System",
    description:
      "Advanced advertising platform with campaign management, coupon system, analytics dashboard, and mobile backend API for comprehensive ad management.",
    technologies: ["Laravel", "PHP", "MySQL", "Mobile API"],
    category: "Web Application",
    status: "In Progress",
    features: [
      "Campaign management",
      "Coupon system integration",
      "Analytics dashboard",
      "Mobile backend API",
      "Performance tracking",
      "Automated optimization",
    ],
  },
  {
    id: 4,
    title: "MA Tool (Marketing Automation)",
    description:
      "Marketing automation platform with email campaigns, lead scoring, and customer journey mapping capabilities.",
    technologies: ["Next.js", "Laravel", "PHP", "Line App"],
    category: "SaaS Platform",
    status: "Completed",
    features: [
      "Email automation",
      "Lead scoring",
      "Customer journey mapping",
      "A/B testing",
      "Line app integration",
    ],
  },
  {
    id: 5,
    title: "ERP System",
    description:
      "Enterprise Resource Planning system with modules for inventory, finance, HR, and project management.",
    technologies: ["Laravel", "PHP", "MySQL"],
    category: "Enterprise",
    status: "Completed",
    features: [
      "Inventory management",
      "Financial tracking",
      "HR management",
      "Project planning",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Progress":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "In Development":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Planning":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my
            expertise in full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project List */}
          <div className="lg:col-span-1 space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                  selectedProject.id === project.id
                    ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/50"
                    : "bg-slate-800/50 border-slate-700/50 hover:border-purple-500/30"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white text-sm">
                    {project.title}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{project.category}</p>
              </div>
            ))}
          </div>

          {/* Project Details */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(
                    selectedProject.status
                  )}`}
                >
                  {selectedProject.status}
                </span>
              </div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-lg text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-300"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/50">
                <p className="text-gray-400 text-sm">
                  <span className="text-purple-400 font-semibold">Note:</span>
                  Project details are kept confidential as per client
                  agreements. Contact me to discuss specific implementations and
                  technical approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
