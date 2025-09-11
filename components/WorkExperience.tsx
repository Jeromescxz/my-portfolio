"use client";

const workExperience = [
  {
    id: 1,
    company: "Betrnk Tours",
    position: "Senior Full Stack Developer",
    duration: "Feb 2024 - Present",
    startDate: "February 5, 2024",
    endDate: "Current",
    type: "Current Position",
    description:
      "Currently working as a Senior Full Stack Developer, leading development initiatives and building scalable web applications for the tourism industry.",
    responsibilities: [
      "Leading full-stack development projects using modern technologies",
      "Architecting and building responsive user interfaces with Next.js and React",
      "Designing and implementing robust backend systems with Laravel and PHP",
      "Managing database architecture and complex API integrations",
      "Mentoring junior developers and conducting code reviews",
      "Collaborating with cross-functional teams and stakeholders on project delivery",
    ],
    technologies: ["Next.js", "Laravel", "PHP", "React", "MySQL"],
    status: "current",
  },
  {
    id: 2,
    company: "Halcyon Agile",
    position: "Full Stack Developer",
    duration: "Jun 2022 - Jan 2024",
    startDate: "June 25, 2022",
    endDate: "January 31, 2024",
    type: "Previous Position",
    description:
      "Worked as a Full Stack Developer for 1 year and 7 months, gaining extensive experience in web development and agile methodologies.",
    responsibilities: [
      "Developed and maintained full-stack web applications",
      "Implemented responsive frontend designs using modern frameworks",
      "Built scalable backend APIs and database architectures",
      "Participated in agile development processes and sprint planning",
      "Collaborated with designers and product managers on feature development",
    ],
    technologies: ["Laravel", "PHP", "JavaScript", "MySQL", "HTML/CSS"],
    status: "completed",
  },
];

export default function WorkExperience() {
  const getStatusColor = (status: string) => {
    return status === "current"
      ? "bg-green-500/20 text-green-400 border-green-500/30"
      : "bg-blue-500/20 text-blue-400 border-blue-500/30";
  };

  const calculateDuration = (startDate: string, endDate: string) => {
    if (endDate === "Current") {
      const start = new Date(startDate);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - start.getTime());
      const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
      const years = Math.floor(diffMonths / 12);
      const months = diffMonths % 12;

      if (years > 0) {
        return `${years} year${years > 1 ? "s" : ""} ${
          months > 0 ? `${months} month${months > 1 ? "s" : ""}` : ""
        }`;
      }
      return `${months} month${months > 1 ? "s" : ""}`;
    }
    return "1 year 7 months";
  };

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey as a Full Stack Developer, building
            innovative solutions and growing my expertise
          </p>
        </div>

        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <div
              key={job.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-2xl font-bold text-white">
                      {job.position}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(
                        job.status
                      )}`}
                    >
                      {job.status === "current" ? "Current" : "Completed"}
                    </span>
                  </div>
                  <h4 className="text-xl text-purple-400 font-semibold mb-2">
                    {job.company}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400">
                    <span className="flex items-center">
                      <span className="mr-2">📅</span>
                      {job.duration}
                    </span>
                    <span className="hidden sm:block">•</span>
                    <span className="flex items-center">
                      <span className="mr-2">⏱️</span>
                      {calculateDuration(job.startDate, job.endDate)}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {job.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold text-white mb-4">
                    Key Responsibilities
                  </h5>
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-white mb-4">
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-lg text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Career Summary
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  3+
                </div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">2</div>
                <div className="text-gray-300">Companies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  10+
                </div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  Senior
                </div>
                <div className="text-gray-300">Current Level</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
