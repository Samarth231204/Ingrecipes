/**
 * Simple JavaScript Navbar
 * This script creates a navigation bar element and appends it to the document body.
 * It can be included on any page by adding <script src="navbar.js"></script>.
 */

(function() {
    // Define the navigation items
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Recipes', href: '/recipes' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' }
    ];

    // Create the navbar container
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';

    // Populate the navbar with links
    navItems.forEach(item => {
        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.name;
        navbar.appendChild(link);
    });

    // Insert the navbar as the first child of body
    document.addEventListener('DOMContentLoaded', () => {
        document.body.insertBefore(navbar, document.body.firstChild);
    });
})();
