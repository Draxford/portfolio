import Image from "next/image";

const AboutMe = () => {
  return (
    <section id="home" className="hero">
      <div   className="skills">
      <h1 className="soft">Soft Skills:</h1>
      <p className="soft_content descriptions">
        Liderazgo: Capacidad para liderar equipos multidisciplinarios y asegurar
        la entrega exitosa de proyectos. 
        Comunicación: Habilidades para
        comunicar de manera efectiva con equipos y stakeholders. Gestión del
        tiempo: Eficiencia en la organización y priorización de tareas para
        cumplir con los plazos. Resolución de problemas: Habilidad para
        dentificar y solucionar problemas tecnológicos de manera eficaz.
        Adaptabilidad: Capacidad para mantenerse al día con las últimas
        tendencias y tecnologías, y adaptarse rápidamente a los cambios. Trabajo
        en equipo: Competencia en colaborar con diversos equipos para alcanzar
        objetivos comunes.
      </p>
      <h1 className="skill">Skills:</h1>
      <p className="skill_content descriptions">
        Programación: Experiencia en múltiples lenguajes de programación. Bases
        de datos: Gestión y optimización de bases de datos. Gestión de
        proyectos: Implementación y seguimiento de proyectos tecnológicos. Redes
        informáticas: Comprensión y manejo de redes de computadoras. Auditoría
        de sistemas: Evaluación y mejora de sistemas informáticos. Desarrollo de
        soluciones tecnológicas: Creación e implementación de sistemas robustos
        y escalables. Optimización de procesos empresariales: Identificación y
        ejecución de mejoras operativas mediante tecnología.
      </p>
        
      </div>
      <div>
      <a
        href="https://www.linkedin.com/in/luis-diego-castro"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visita mi LinkedIn
      </a>

      </div>
     
   
    </section>
    
  );
};

export default AboutMe;
