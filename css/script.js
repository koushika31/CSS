document.querySelectorAll('.toggle-info').forEach(cardTitle => {
  cardTitle.addEventListener('click', () => {
    const card = cardTitle.closest('.magic-card');
    const extraInfo = card.querySelector('.extra-info');

    // Toggle visibility
    extraInfo.classList.toggle('show');

    // Update aria-expanded for accessibility
    const isVisible = extraInfo.classList.contains('show');
    cardTitle.setAttribute('aria-expanded', isVisible);
  });
});
