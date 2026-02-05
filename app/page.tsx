import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Bibek Bhandari
          </span>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
              <Image
                src="/profile.jpg"
                alt="Bibek Bhandari"
                width={160}
                height={160}
                className="w-full h-full rounded-full object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Bibek Bhandari
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4">
            Full Stack Developer | Backend Engineer | AI Enthusiast
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Building production-grade applications with MERN stack, Next.js, cloud infrastructure, and AI integrations
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-600 rounded-full font-semibold hover:border-purple-500 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I&apos;m a passionate Full Stack Developer with deep expertise in building production-grade web applications. From understanding the fundamentals of computer networks and DNS to deploying scalable applications on AWS, I cover the entire development spectrum.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My expertise spans frontend development with React and Next.js, backend engineering with Node.js and Express, database management with MongoDB and PostgreSQL, and DevOps practices including Docker and cloud deployments.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I&apos;m also exploring AI integrations, building agentic workflows, and implementing advanced systems like OIDC authentication and Zanzibar-inspired authorization models.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/Bibek1008" target="_blank" className="p-3 bg-gray-800 rounded-lg hover:bg-purple-500/20 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/bibek-bhandari-053283226/" target="_blank" className="p-3 bg-gray-800 rounded-lg hover:bg-purple-500/20 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://leetcode.com/u/Bibek_Bhandari1/" target="_blank" className="p-3 bg-gray-800 rounded-lg hover:bg-purple-500/20 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
                </a>
                <a href="https://hashnode.com/@bibekbhandari1" target="_blank" className="p-3 bg-gray-800 rounded-lg hover:bg-purple-500/20 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"/></svg>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-gray-800 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">📍 Location</span>
                    <span className="font-bold text-sm">Bengaluru, India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">🎓 University</span>
                    <span className="font-bold text-sm">CMRIT, Bangalore</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">🎯 Focus</span>
                    <span className="font-bold text-sm">Full Stack + AI</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">☁️ Cloud</span>
                    <span className="font-bold text-sm">AWS, Vercel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Tech Stack <span className="text-3xl">🛠️</span>
          </h2>
          <p className="text-gray-400 text-center mb-16">
            Technologies I use to bring ideas to life
          </p>
          
          {/* Tech Stack Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🎨</span>
                <h3 className="text-xl font-bold">Frontend</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#61DAFB"><path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z"/></svg>
                  <span className="text-sm font-medium">React</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#3178C6"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>
                  <span className="text-sm font-medium">TypeScript</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/></svg>
                  <span className="text-sm font-medium">Next.js</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#06B6D4"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>
                  <span className="text-sm font-medium">Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Backend Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">⚙️</span>
                <h3 className="text-xl font-bold">Backend</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#339933"><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/></svg>
                  <span className="text-sm font-medium">Node.js</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/></svg>
                  <span className="text-sm font-medium">Express.js</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl col-span-2 justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/></svg>
                  <span className="text-sm font-medium">Next.js API</span>
                </div>
              </div>
            </div>

            {/* Database Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🗄️</span>
                <h3 className="text-xl font-bold">Database</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#47A248"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>
                  <span className="text-sm font-medium">MongoDB</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#4169E1"><path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4648a9.6496 9.6496 0 0 0-.5765-.0227c-1.7074-.0384-3.296.5625-4.5917 1.7249-1.7679-.4717-5.0933-.8881-7.1833.4223C.9218 2.9538.4867 4.5847.2703 5.7096c-.6543 3.3994.5716 8.6702 2.7639 11.9951.4598.6965.9845 1.4439 1.6948 1.9765.4554.3419.9319.5587 1.4334.6603.2003.0405.4073.0608.6116.0608.3281 0 .6495-.0586.9531-.1768.715-.2781 1.302-.802 1.6963-1.4937.2927-.5128.4866-1.0945.5605-1.6698a6.7654 6.7654 0 0 0 1.0857.4159c.0554.015.5167.1367 1.1991.1367.5351 0 1.1916-.0793 1.8773-.3065.2803.7333.7353 1.3815 1.3348 1.8898.6159.5222 1.3534.8873 2.1692 1.0736.5765.1318 1.1407.198 1.6783.198 1.3169 0 2.4585-.4036 3.3079-1.1713.8201-.7407 1.2665-1.7625 1.2913-2.9567.0165-.7972-.1428-1.6566-.4726-2.5518zm-2.1252 3.0689c-.0064.3111-.0427.6175-.1111.9099-.0792.1728-.2137.3187-.3847.4177a1.7567 1.7567 0 0 1-.9033.2355c-.2156 0-.4453-.0251-.6829-.0763-.5765-.1238-1.0696-.3855-1.4657-.778-.432-.4279-.7177-.9808-.8503-1.6463l-.0389-.1957-.1888.0496a7.6066 7.6066 0 0 1-2.0213.2707c-1.0717 0-2.0137-.2283-2.7999-.678l-.2366-.1353-.0546.2643c-.0718.3474-.2193.6911-.4264 1.0124-.2739.4261-.6163.7503-1.0183.9645-.3803.2028-.8029.3058-1.2547.3058-.1953 0-.3965-.0215-.5986-.0639-.3877-.0812-.7304-.2397-1.0185-.4714-.5765-.4635-.9784-1.0741-1.3687-1.6636-1.9944-3.0203-3.1068-7.8737-2.5299-10.9141.1503-.7913.447-1.9375 1.2251-2.4971 1.5461-1.1118 4.5321-.6631 6.0517-.2756l.2116.0541.1155-.1876c1.1378-1.8467 2.8876-2.5072 4.5836-2.4697.2147.0048.4289.0226.6389.053l.0057.0008.0053-.0009a8.6726 8.6726 0 0 1 .4596-.0536c2.0309-.1623 3.8155.5862 4.9766 2.0718.2168.3519.4386.9478.4386 1.6899 0 .9308-.2593 2.0635-.5771 3.2296-.5826 2.1379-1.5736 4.4418-2.7879 6.3778l-.1578.2517.2892.0933c.5364.1729.9474.3484 1.2211.5217.1152.1069.1855.2482.1986.3997a3.0025 3.0025 0 0 1-.0133.6017z"/></svg>
                  <span className="text-sm font-medium">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#2D3748"><path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5765-.0309-.7463.083-.7463.083L1.3067 10.6915c-.2798.1753-.4555.493-.4555.8303 0 .1073.017.2134.0498.3118l3.7568 11.2015c.1581.472.5928.7874 1.0832.7874h12.6768c.4904 0 .925-.3154 1.0832-.7874l3.4067-10.1605c.1581-.472-.0127-1.0193-.5078-1.2928zM12.093 15.4377l-4.3934-3.1943c-.2695-.1959-.3633-.5559-.2279-.8679l2.7264-6.2817c.1354-.312.5028-.4715.8225-.3573l6.0117 2.1512c.3196.1142.4922.4467.3858.7427l-4.0473 7.6045c-.1064.2-.334.3249-.5672.3249-.1066 0-.2141-.0263-.3106-.0821z"/></svg>
                  <span className="text-sm font-medium">Prisma</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#DC382D"><path d="M10.5 2.661l-8.571 4.95v9.9l8.571 4.949 8.571-4.95v-9.9L10.5 2.661zm5.985 13.271l-5.985 3.456-5.985-3.456V8.088l5.985-3.456 5.985 3.456v7.844z"/><path d="M10.5 8.661l-2.571 1.485v2.97l2.571 1.485 2.571-1.485v-2.97L10.5 8.661z"/></svg>
                  <span className="text-sm font-medium">Redis</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Skills Row */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* DevOps & Cloud Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">☁️</span>
                <h3 className="text-xl font-bold">DevOps & Cloud</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#2496ED"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/></svg>
                  <span className="text-sm font-medium">Docker</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FF9900"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"/></svg>
                  <span className="text-sm font-medium">AWS</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>
                  <span className="text-sm font-medium">Vercel</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#F05032"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>
                  <span className="text-sm font-medium">Git</span>
                </div>
              </div>
            </div>

            {/* AI & Advanced Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🤖</span>
                <h3 className="text-xl font-bold">AI & Advanced</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#00D8FF"><circle cx="12" cy="12" r="3"/><path fill="none" stroke="#00D8FF" strokeWidth="1.5" d="M12 1.5c6.5 0 10.5 4.5 10.5 10.5S18.5 22.5 12 22.5 1.5 18 1.5 12 5.5 1.5 12 1.5z"/></svg>
                  <span className="text-sm font-medium">AI SDK</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#8B5CF6"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  <span className="text-sm font-medium">Inngest</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#10B981"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  <span className="text-sm font-medium">RAG Systems</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white"><path d="M4.5 7.5C4.5 5.01 6.51 3 9 3h6c2.49 0 4.5 2.01 4.5 4.5v9c0 2.49-2.01 4.5-4.5 4.5H9c-2.49 0-4.5-2.01-4.5-4.5v-9zm3 0v9c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5H9c-.83 0-1.5.67-1.5 1.5z"/></svg>
                  <span className="text-sm font-medium">Kafka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Production-grade applications built with scalability, security, and performance in mind
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "OIDC Authentication Microservice",
                description: "A production-ready authentication service with JWT issuance, refresh tokens, JWKS, OAuth 2.0, and OIDC flows. Includes security hardening and OpenTelemetry integration.",
                tags: ["Node.js", "JWT", "OAuth 2.0", "Docker", "OpenTelemetry"],
                emoji: "🔐",
                color: "purple",
              },
              {
                title: "Zanzibar-Inspired Authorization System",
                description: "Advanced authorization using recursive graph traversal and relationship tuples. Implements Google Zanzibar patterns for scalable permission resolution.",
                tags: ["Graph Traversal", "Authorization", "Microservices", "Caching"],
                emoji: "🛡️",
                color: "pink",
              },
              {
                title: "Form Builder SaaS",
                description: "Scalable backend APIs with dynamic form schema design, type-safe APIs using tRPC, and high-throughput response ingestion. Built with Turborepo monorepo.",
                tags: ["Next.js", "tRPC", "MongoDB", "Zod", "Turborepo"],
                emoji: "📝",
                color: "blue",
              },
              {
                title: "AI-Powered Code Review",
                description: "GitHub integration for automated code reviews using AI. Features BetterAuth authentication, Polar monetization, and async workflows with Inngest.",
                tags: ["Next.js", "AI SDK", "Inngest", "Prisma", "GitHub API"],
                emoji: "🤖",
                color: "green",
              },
              {
                title: "v0.dev Clone - Prompt to UI",
                description: "AI-powered UI generation from prompts with secure code execution using E2B. Implements agentic workflows with Inngest AgentKit.",
                tags: ["AI", "Inngest", "E2B", "Clerk", "Server Actions"],
                emoji: "✨",
                color: "orange",
              },
              {
                title: "Advanced RAG System",
                description: "Retrieval-Augmented Generation with document ingestion pipelines, vector search, embedding generation, and AI workflows using Inngest.",
                tags: ["RAG", "Vector DB", "Embeddings", "Inngest", "LLMs"],
                emoji: "🧠",
                color: "cyan",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group p-6 bg-gray-800/30 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{project.emoji}</div>
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Learning <span className="text-purple-400">Journey</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            A comprehensive curriculum covering the full spectrum of modern web development
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Fundamentals", topics: ["Computer Networks", "DNS", "Client-Server", "HTTP/HTTPS", "WebSockets"], icon: "🌐" },
              { title: "Building Blocks", topics: ["HTML5 & Forms", "CSS & Layouts", "Responsive Design", "Animations", "Tailwind CSS"], icon: "🧱" },
              { title: "JavaScript", topics: ["ES6+ Features", "Async/Await", "DOM Manipulation", "OOP", "TypeScript"], icon: "⚡" },
              { title: "Backend", topics: ["Node.js", "Express.js", "REST APIs", "Databases", "Authentication"], icon: "⚙️" },
              { title: "React", topics: ["Components", "Hooks", "State Management", "Routing", "Performance"], icon: "⚛️" },
              { title: "Full Stack", topics: ["Next.js", "SSR/SSG", "API Routes", "Server Actions", "Deployment"], icon: "🚀" },
              { title: "AI Integration", topics: ["GenAI & LLMs", "Workflows", "Agents", "RAG Systems", "Inngest"], icon: "🤖" },
              { title: "DevOps", topics: ["Docker", "AWS EC2", "Load Balancers", "CloudFront", "CI/CD"], icon: "☁️" },
            ].map((category) => (
              <div key={category.title} className="p-6 bg-gray-800/30 rounded-2xl border border-gray-800 hover:border-purple-500 transition-colors">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-bold mb-3">{category.title}</h3>
                <ul className="space-y-1">
                  {category.topics.map((topic) => (
                    <li key={topic} className="text-gray-400 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog & Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Two Cards Side by Side */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Blog Card */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">✍️</div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">
                    I Love <span className="text-purple-400">Writing</span> Technical Blogs
                  </h2>
                  <p className="text-gray-400 text-sm mb-4">
                    I enjoy sharing my knowledge and learning journey through technical blog posts. 
                    I write about web development, DNS resolution, CSS concepts, and various other 
                    topics to help fellow developers learn and grow.
                  </p>
                  <a 
                    href="https://hashnode.com/@bibekbhandari1" 
                    target="_blank" 
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500 hover:bg-purple-600 rounded-xl font-semibold transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"/></svg>
                    Read My Blog on Hashnode
                  </a>
                </div>
              </div>
            </div>

            {/* Get in Touch Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-3">Get in Touch</h2>
              <p className="text-gray-400 text-sm mb-6">
                I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://www.linkedin.com/in/bibek-bhandari-053283226/" 
                  target="_blank" 
                  className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-purple-500 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/Bibek1008" 
                  target="_blank" 
                  className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-purple-500 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span className="font-medium">GitHub</span>
                </a>
                <a 
                  href="https://leetcode.com/u/Bibek_Bhandari1/" 
                  target="_blank" 
                  className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-purple-500 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
                  <span className="font-medium">LeetCode</span>
                </a>
                <a 
                  href="https://hashnode.com/@bibekbhandari1" 
                  target="_blank" 
                  className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-purple-500 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"/></svg>
                  <span className="font-medium">Blog</span>
                </a>
              </div>
            </div>
          </div>

          {/* Recent Blog Posts */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold">Recent Blog Posts</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="https://dns-resolution-work1.hashnode.dev" target="_blank" className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors group border border-gray-700/50">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🌐</span>
                <span className="font-medium group-hover:text-purple-400 transition-colors">How DNS Resolution Works</span>
              </div>
              <p className="text-gray-500 text-sm">Understanding the domain name system</p>
            </a>
            <a href="https://client-url.hashnode.dev" target="_blank" className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors group border border-gray-700/50">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🔗</span>
                <span className="font-medium group-hover:text-purple-400 transition-colors">Client URL (cURL)</span>
              </div>
              <p className="text-gray-500 text-sm">Mastering command-line HTTP requests</p>
            </a>
            <a href="https://css-selectors12.hashnode.dev" target="_blank" className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors group border border-gray-700/50">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🎨</span>
                <span className="font-medium group-hover:text-purple-400 transition-colors">CSS Selectors</span>
              </div>
              <p className="text-gray-500 text-sm">Deep dive into CSS styling</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2026 Bibek Bhandari
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/Bibek1008" target="_blank" className="text-gray-400 hover:text-purple-400 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/bibek-bhandari-053283226/" target="_blank" className="text-gray-400 hover:text-purple-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://leetcode.com/u/Bibek_Bhandari1/" target="_blank" className="text-gray-400 hover:text-purple-400 transition-colors">
              LeetCode
            </a>
            <a href="https://hashnode.com/@bibekbhandari1" target="_blank" className="text-gray-400 hover:text-purple-400 transition-colors">
              Blog
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
