document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute("href"));
if (target) {
target.scrollIntoView({ behavior: "smooth" });
}
});
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("nav a"); // Select all navbar links
    const sections = document.querySelectorAll("section");

    function setActiveButton(targetId) {
        buttons.forEach(btn => btn.classList.remove("bg-gradient-to-r", "from-purple-900", "to-purple-500"));
        const activeBtn = document.querySelector(`nav a[href="#${targetId}"]`);
        if (activeBtn) {
            activeBtn.classList.add("bg-gradient-to-r", "from-purple-900", "to-purple-500"); // Add highlight effect
        }
    }

    // Click Event: Highlight the clicked button
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("href").substring(1); // Get section ID from href
            setActiveButton(targetId);
        });
    });

    // Scroll Event: Highlight button when section comes into view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveButton(entry.target.id);
            }
        });
    }, { threshold: 0.6 }); // Adjust this value if needed

    sections.forEach(section => observer.observe(section));
});
