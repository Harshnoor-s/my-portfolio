import StackIcon from "./StackIcon";

export default function Projects() {
    return (
        <div id="projects" class="pt-30">
            <h2 class="font-display text-1xl mb:text-2xl text-text mb-4 font-bold">Projects</h2>
            <div class="md:grid grid-cols-4 gap-x-4 gap-y-10">
                {/* Portfolio Website */}
                <div>
                    <p class="font-display text-xs text-muted mt-1 mb-1">2026</p>
                </div>
                <div class="col-span-3 mb-10 md:mb-0">
                    <p class="font-display text-base text-text">Personal Portfolio Website</p>
                    <p class="font-display text-xs text-muted mt-2 mb-1 md:mb-0">Built and deployed a responsive single-page portfolio application using React.js and Vite. Designed reusable functional components with Tailwind CSS, following a mobile-first development approach. Integrated Git-based version control with automated CI/CD deployment via Vercel, enabling continuous integration and production-ready builds on each commit.</p>
                    <StackIcon>React.js</StackIcon>
                    <StackIcon>Vite</StackIcon>
                    <StackIcon>Tailwind CSS</StackIcon>
                    <StackIcon>JavaScript</StackIcon>
                    <StackIcon>HTML</StackIcon>
                    <StackIcon>Vercel</StackIcon>
                </div>

                {/* Virtuals Skills Coach */}
                <div>
                    <p class="font-display text-xs text-muted mt-1 mb-1">2024</p>
                </div>
                <div class="col-span-3">
                    <p class="font-display text-base text-text">Body Tracking Game — <i>Virtual Skills Coach</i></p>
                    <p class="font-display text-xs text-muted mt-2">Capstone Project | Team of 4</p>
                    <p class="font-display text-xs text-muted mt-2 mb-1 md:mb-0">Developed a real-time body-tracking system in Unity (C#) using the Kinect sensor to capture and process movement data. Translated physical user movements into structured datasets that could be used for coaching analysis. Implemented real-time feedback mechanisms. Delivered a functional prototype to a research client for evaluation.</p>
                    <StackIcon>Unity</StackIcon>
                    <StackIcon>C#</StackIcon>
                    <StackIcon>Kinect</StackIcon>
                </div>
            </div>
        </div>
    )
}