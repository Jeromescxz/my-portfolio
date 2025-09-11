"use client";

import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", level: 95, icon: "⚛️" },
      { name: "React", level: 90, icon: "⚛️" },
      { name: "TypeScript", level: 85, icon: "📘" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Laravel", level: 95, icon: "🔧" },
      { name: "PHP", level: 90, icon: "🐘" },
      { name: "Node.js", level: 80, icon: "🟢" },
      { name: "MySQL", level: 95, icon: "🗄️" },
    ],
  },
  {
    title: "Testing & Tools",
    skills: [
      { name: "Pest", level: 95, icon: "🧪" },
      { name: "Playwright", level: 95, icon: "🎭" },
      { name: "Browser Testing", level: 95, icon: "🌐" },
      { name: "Github Actions", level: 90, icon: "📝" },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-slate-700/50 text-gray-300 hover:bg-slate-600/50"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-purple-400 font-semibold">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Multi Tenancy",
              "RabbitMQ",
              "Filament",
              "Adonis.js",
              "AWS",
              "REST APIs",
              "Microservices",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg border border-slate-600/50 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
