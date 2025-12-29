document.addEventListener('DOMContentLoaded', () => {
    // Set current year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    const copyBtn = document.getElementById('copy-btn');
    const toast = document.getElementById('toast');
    const ibanText = "IT86D0357601601010004835062"; // Using the raw string to ensure clean copy

    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(ibanText);

            // Show feedback
            showToast();

            // Optional: visual feedback on button
            const originalBtnText = copyBtn.innerHTML;
            copyBtn.innerHTML = `
                Copied! 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            `;
            copyBtn.classList.add('btn-success'); // You could add a success class if defined

            // Revert after 2 seconds
            setTimeout(() => {
                copyBtn.innerHTML = originalBtnText;
                copyBtn.classList.remove('btn-success');
            }, 2000);

        } catch (err) {
            console.error('Failed to copy: ', err);
            toast.textContent = "Failed to copy IBAN.";
            toast.classList.remove('hidden');
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 3000);
        }
    });

    function showToast() {
        toast.textContent = "IBAN Copied!";
        toast.classList.remove('hidden');

        // Hide after 3 seconds
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    }
});
