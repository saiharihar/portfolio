const skills = [
    { name: 'C++', level: '90%' },
    { name: 'Java', level: '85%' },
    { name: 'Python', level: '75%' },
    { name: 'HTML & CSS', level: '80%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'AWS Cloud', level: '70%' }
];

const projects = [
    { title: "Real Estate Website", description: "MERN stack project for property listings." },
    { title: "Car Price Prediction", description: "ML model for used car pricing." },
    { title: "VIT Together", description: "Social platform for VIT students." }
];

function loadSkills() {
    const skillsContainer = document.getElementById('skills-container');
    skills.forEach(skill => {
        const skillBar = document.createElement('div');
        skillBar.className = 'skill-bar';
        skillBar.innerHTML = `<h4>${skill.name}</h4><div class="progress" style="width:${skill.level}"></div>`;
        skillsContainer.appendChild(skillBar);
    });
}

function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectsContainer.appendChild(projectCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadSkills();
    loadProjects();
});
