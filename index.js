document.addEventListener('DOMContentLoaded', () => {

    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]

    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('active'); // added snippet
        navbarLinks.classList.toggle('active');
        
    });

    document.querySelectorAll('.navbar-links a')
        .forEach( n => 
            n.addEventListener('click', () => {
                toggleButton.classList.remove('active');
                navbarLinks.classList.remove('active');
            })
        )
})
