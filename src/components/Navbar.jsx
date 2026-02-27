export default function Navbar() {
    return (
        <div class="hidden md:block">
            <nav class="text-display text-muted text-base">
                <ul>
                    <li class="mb-2"><a href="#" class="hover:text-hover-accent hover:font-bold transition-all duration-200 ease-out">Home</a></li>
                    <li class="mb-2"><a href="#education" class="mb-2 hover:text-hover-accent hover:font-bold transition-all duration-200 ease-out">Education</a></li>
                    <li class="mb-2"><a href="#projects" class="mb-2 hover:text-hover-accent hover:font-bold transition-all duration-200 ease-out">Projects</a></li>
                    <li class="mb-2"><a href="#experience" class="mb-2 hover:text-hover-accent hover:font-bold transition-all duration-200 ease-out">Experience</a></li>
                </ul>
            </nav>
        </div>
    )
}