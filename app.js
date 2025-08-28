// Sidebar functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggleNav = document.getElementById('sidebarToggleNav');
    const navbarToggle = document.querySelector('.option-on-button label');
    
    // Toggle sidebar collapse/expand from navbar button
    sidebarToggleNav.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        
        // Store state in localStorage
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
    });
    
    // Restore sidebar state from localStorage
    const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (sidebarCollapsed) {
        sidebar.classList.add('collapsed');
    }
    
    // Mobile sidebar toggle (using existing navbar button)
    navbarToggle.addEventListener('click', function() {
        if (window.innerWidth <= 800) {
            sidebar.classList.toggle('mobile-open');
        }
    });
    
    // Close mobile sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 800) {
            const isClickInsideSidebar = sidebar.contains(event.target);
            const isClickOnNavbarToggle = navbarToggle.contains(event.target);
            
            if (!isClickInsideSidebar && !isClickOnNavbarToggle) {
                sidebar.classList.remove('mobile-open');
            }
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 800) {
            sidebar.classList.remove('mobile-open');
        }
    });
    
    // Add active state to sidebar items
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            sidebarItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
});
