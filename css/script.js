document.querySelectorAll('.toggle-info').forEach(name => {
  name.addEventListener('click', () => {
    const info = name.nextElementSibling.nextElementSibling;
    info.classList.toggle('show');
  });
});
