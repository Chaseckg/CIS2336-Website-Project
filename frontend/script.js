// FAQ page functionality

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = document.getElementById(question.getAttribute("aria-controls"));

        const isOpen = question.getAttribute("aria-expanded") === "true";

        question.setAttribute("aria-expanded", !isOpen);
        answer.hidden = isOpen;
    });
});
