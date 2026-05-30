export default function initExampleComponent(hosts) {
  hosts.forEach((host) => {
    if (host.dataset.ready === "true") return;

    host.dataset.ready = "true";

    const cards = Array.from(host.querySelectorAll(".F__exampleComponent-card"));

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.dataset.hovered = "true";
      });

      card.addEventListener("mouseleave", () => {
        delete card.dataset.hovered;
      });
    });
  });
}
