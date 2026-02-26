import StackIcon from "./StackIcon";

export default function Projects() {
    return (
        <div id="projects" class="pt-30">
            <h2 class="font-display text-2xl text-text mb-4">Projects</h2>
            <div class="grid grid-cols-4 gap-x-4 gap-y-10">
                {/* Portfolio Website */}
                <div>
                    <p class="font-display text-xs text-muted mt-1">2026</p>
                </div>
                <div class="col-span-3">
                    <p class="font-display text-base text-text">Personal Portfolio Website</p>
                    <p class="font-display text-xs text-muted mt-2">A single-page, responsive portfolio website built to showcase my skills, projects, and professional background. Designed with a clean, modern aesthetic and smooth scrolling navigation to highlight my work and experience as a software engineer.</p>
                    <StackIcon>React.js</StackIcon>
                    <StackIcon>Vite</StackIcon>
                    <StackIcon>Tailwind CSS</StackIcon>
                    <StackIcon>JavaScript</StackIcon>
                    <StackIcon>HTML</StackIcon>
                </div>

                {/* Virtuals Skills Coach */}
                <div>
                    <p class="font-display text-xs text-muted mt-1">2024</p>
                </div>
                <div class="col-span-3">
                    <p class="font-display text-base text-text">Body Tracking Game — <i>Virtual Skills Coach</i></p>
                    <p class="font-display text-xs text-muted mt-2">Capstone Project | Team of 4</p>
                    <p class="font-display text-xs text-muted mt-2">Developed a real-time body-tracking system in Unity (C#) using the Kinect sensor to capture and process movement data. Translated physical user movements into structured datasets that could be used for coaching analysis. Implemented real-time feedback mechanisms. Delivered a functional prototype to a research client for evaluation.</p>
                    <StackIcon>Unity</StackIcon>
                    <StackIcon>C#</StackIcon>
                    <StackIcon>Kinect</StackIcon>
                </div>
            </div>
        </div>
    )
}