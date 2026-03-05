

const about = () => {
  return (
    <section className="py-28">
      <h2 className="samurai-font text-4xl font-bold text-gray-900 text-center">
        About Me
      </h2>
      <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="cascadia space-y-6 text-gray-700 leading-relaxed">
          <p>My journey into software development started with curiousity about how modern web applications work behind the scenes. Over time, that curiousity turned into a passion for building real-world applications.</p>

          <p>
            
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="samurai-font text-xl font-semibold text-gray-800 mb-4">Technologies I Work With</h3>
          <p className="cascadia text-gray-600">React • Node.js • Express • MongoDB • Redis • JWT • Tailwind</p>
          <h3 className="samurai-font text-xl font-semibold text-gray-800 mt-8 mb-4">What I Enjoy Building</h3>
          <p className="cascadia text-gray-600">
            Full Stack Web Apps, scalable backend APIs, and developer tools.
          </p>
        </div>
      </div>
    </section>
  )
}

export default about
