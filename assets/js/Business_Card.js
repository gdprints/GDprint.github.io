document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('design-modal');
    const openModalBtn = document.getElementById('open-modal');
    const closeModalBtn = document.querySelector('.close');
    const designOptions = document.querySelectorAll('.design-option');
    const selectedDesignInput = document.getElementById('selected-design');

    // Open the modal
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Close the modal
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Select a design
    designOptions.forEach(option => {
        option.addEventListener('click', () => {
            const designName = option.getAttribute('data-design-name');
            selectedDesignInput.value = designName;
            modal.style.display = 'none';
        });
    });
});
