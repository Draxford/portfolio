"use client";
import { link } from "fs";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Repo {
    id: number;
    full_name: string;
    files: string[];
}

const Projects = () => {
    const [repo, setRepo] = useState<Repo | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        fetch('https://api.github.com/users/Draxford/repos', {
            
        })
            .then(response => response.json())
            .then(data => {
                const files = data.map((file: any) => file.name);
                setRepo({
                    id: 0,
                    full_name: "Draxford/portfolio",
                    files: files
                });
            })
            .catch(error => {
                console.error('Error fetching repo:', error);
            });
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % (repo?.files.length || 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + (repo?.files.length || 1)) % (repo?.files.length || 1));
    };

    if (!repo) return <p>Cargando...</p>;

    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="carousel">
                <div className="project">
                    <h1>Repositorio público de porfolio de Draxford en GitHub</h1>
                    <div className="slider-container">
                        <button className="prev" onClick={prevSlide}>Anterior</button>
                        <div className="slider" >
                            {repo.files.map((file, index) => (
                                <div key={index} className={index === currentSlide ? "slide active" : "slide"}>
                                    {file}
                                </div>
                            ))}
                        </div>
                        <button className="next" onClick={nextSlide}>Siguiente</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;