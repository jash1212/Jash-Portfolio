import Container from '../components/layout/Container';
import ProjectCard from '../components/ui/ProjectCard';
import cubeview from '../assets/cubeview.png'
import cricket from '../assets/cricket.png'
import careerprep from '../assets/careerprep.png'
import api from '../assets/api.png'

const projects = [
    {

        title: "CubeView",
        description: "CubeView is a data observability and metadata intelligence platform built to help teams monitor, understand, and trust their data systems. It includes automated data quality checks, incident detection, health scoring, metadata management, and field-level insights — all powered by a scalable backend architecture and a modern, interactive dashboard.",
        tags: ["React", "Django", "PostgreSQL"],
        image: cubeview, // Add your image URL here
        github: "https://github.com/jash1212/CubeView" // Add your GitHub URL here
    },
    {
        title: "CareerPrep",
        description: "CareerPrep is an AI-powered interview preparation platform designed to help students and professionals practice real-world technical and behavioral interviews. It provides roles and performance feedback to simulate real interview scenarios and build confidence.",
        tags: ["React", "FastAPI", "MySQL"],
        image: careerprep, // Add your image URL here
        github: "https://github.com/Anuradha-bhaskar/CareerPrep" // Add your GitHub URL here
    },
    {
        title: "Abuse-Aware API Gateway",
        description: "A Dockerized API Gateway that protects backend services using sliding window rate limiting, Redis-based abuse scoring, progressive IP blocking, JWT validation, and structured logging. Built to simulate real-world traffic protection and distributed state management.",
        tags: ["Node.js", "Express", "Redis", "Docker"],
        image: api,
        github: "https://github.com/jash1212/api-gateway"
    },
    {
        title: "Cricket Analysis",
        description: "Cricket Analysis is a data-driven exploration of international cricket performance using real match datasets. The project includes SQL queries on structured cricket statistics, visual analysis, and insights generated from batting and bowling records. It demonstrates database construction, query formulation, and data interpretation using Python and SQL to extract meaningful patterns from cricket data.",
        tags: ["Python", "SQL", "Pandas", "Data Visualization"],
        image: cricket,
        github: "https://github.com/jash1212/Cricket-Analysis"
    }

];

const Projects = () => {
    return (
        <section id="projects" className="relative z-30 py-32 min-h-screen bg-background text-foreground">
            {/* Static Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 100%'
                }}
            ></div>

            <Container className="relative z-10">
                <div className="mb-20">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6" style={{ fontFamily: "'Tinos', serif" }}>
                        Selected <span className="text-black/40">Works</span>
                    </h2>
                    <div className="h-[1px] w-full bg-black/10"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-24">
                    {projects.map((project, index) => (
                        <div key={index} className={index % 2 === 1 ? 'md:mt-20' : ''}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Projects;
