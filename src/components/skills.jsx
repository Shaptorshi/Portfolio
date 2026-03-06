import {motion} from 'framer-motion'

const s = [
    {
        title: "CS Fundamentals",
        lang: "DSA • OOPs • DBMS"
    },
    {
        title: "Programming Languages",
        lang: "C • Java • JavaScript • TypeScript",
    },
    {
        title: "Frontend",
        lang: "React.js • TailwindCSS",
    },
    {
        title: "Backend",
        lang: "Node.js • Express.js • REST APIs • JWT"
    },
    {
        title: "Developer Tools",
        lang: "Git • GitHub • Postman • VS Code"
    }
]

const skills = () => {
    return (
        <div id='skills'>
            <h2 className='samurai-font text-4xl font-bold text-gray-900 text-center'>Skills</h2>
            <motion.div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
                {s.map((skill, idx) => {
                    return (
                        <motion.div key={idx} whileHover={{scale:1.05}} transition={{duration:0.5}} className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl'>
                            <h3 className='samurai-font font-semibold text-xl text-gray-800'>{skill.title}</h3>
                            <p className='cascadia mt-3 text-sm text-gray-600'>{skill.lang}</p>
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
    )
}

export default skills
