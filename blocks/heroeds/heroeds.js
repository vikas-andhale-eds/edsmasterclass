/**
 * Decorates the heroeds block.
 * Authors may omit or add cells; image and text are handled independently.
 * @param {Element} block The heroeds block element
 */
export default function decorate(block) {
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic && col.children.length === 1) {
        col.classList.add('heroeds-image');
        const img = pic.querySelector('img');
        if (img) {
          img.loading = 'eager';
          img.fetchPriority = 'high';
        }
        return;
      }

      if (col.textContent.trim()) {
        col.classList.add('heroeds-content');
      }
    });
  });

  const img = block.querySelector('img');
  if (img && !img.fetchPriority) {
    img.loading = 'eager';
    img.fetchPriority = 'high';
  }
}
