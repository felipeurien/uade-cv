document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('toggleSwitch');

    toggleSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');

        // Save the user's preference for future visits
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', null);
        }
    });

    // Check the user's preference and set the initial mode
    if (localStorage.getItem('darkMode') === 'enabled') {
        toggleSwitch.checked = true;
        document.body.classList.add('dark-mode');
    }
});