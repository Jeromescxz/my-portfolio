export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Passionate Full Stack Developer
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Jerome Hipolito, a dedicated full stack developer with a
              passion for creating robust and scalable web applications. My
              journey in software development has led me to master both frontend
              and backend technologies, allowing me to build complete solutions
              from concept to deployment.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in modern web technologies including Next.js for
              frontend development and Laravel with PHP for backend solutions.
              My expertise extends to testing frameworks like Pest and
              Playwright, ensuring code quality and reliability in every
              project.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, I'm constantly learning new technologies and
              best practices to stay at the forefront of web development. I
              believe in writing clean, maintainable code and creating user
              experiences that make a difference.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Available for projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Remote friendly</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Experience</span>
                  <span className="text-white font-semibold">3+ Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Projects Completed</span>
                  <span className="text-white font-semibold">10+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Technologies</span>
                  <span className="text-white font-semibold">10+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Happy Clients</span>
                  <span className="text-white font-semibold">25+</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
