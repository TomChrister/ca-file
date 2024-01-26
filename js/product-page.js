document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modalContent').style.display = 'block';
    document.body.style.overflow = 'hidden';
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    closeModal();
});

document.getElementById('modal').addEventListener('click', function(event) {
    // Close the modal only if the overlay (outside the modal content) is clicked
    if (event.target === document.getElementById('modal')) {
        closeModal();
    }
});

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modalContent').style.display = 'none';
    document.body.style.overflow = 'auto';
}

