// First button
document.getElementById('openModalBtn').addEventListener('click', function() {
    openModal('modal', 'modalContent');
});

// Second button
document.getElementById('openModalBtn2').addEventListener('click', function() {
    openModal('modal2', 'modalContent2');
});

function openModal(modalId, contentId) {
    document.getElementById(modalId).style.display = 'block';
    document.getElementById(contentId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

document.getElementById('closeModalBtn').addEventListener('click', function() {
    closeModal('modal', 'modalContent');
});

document.getElementById('closeModalBtn2').addEventListener('click', function() {
    closeModal('modal2', 'modalContent2');
});

document.getElementById('modal').addEventListener('click', function(event) {
    // Close the modal only if the overlay (outside the modal content) is clicked
    if (event.target === document.getElementById('modal')) {
        closeModal('modal', 'modalContent');
    }
});

document.getElementById('modal2').addEventListener('click', function(event) {
    // Close the modal only if the overlay (outside the modal content) is clicked
    if (event.target === document.getElementById('modal2')) {
        closeModal('modal2', 'modalContent2');
    }
});

function closeModal(modalId, contentId) {
    document.getElementById(modalId).style.display = 'none';
    document.getElementById(contentId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

