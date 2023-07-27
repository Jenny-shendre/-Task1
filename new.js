// JavaScript to add interactivity

// Function to check if the menu should be scrolled
function checkScroll() {
    const navigation = document.querySelector('.navigation');
    if (window.scrollY > 50) {
      navigation.classList.add('scrolled');
    } else {
      navigation.classList.remove('scrolled');
    }
  }
  
  // Function to handle smooth scrolling to anchor links
  function smoothScrollToAnchor(event) {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    const offset = document.querySelector(target).offsetTop;
    window.scroll({
      top: offset - 70, // Adjust scroll position to account for the fixed header height
      behavior: 'smooth'
    });
  }
  
  // Add event listeners
  document.addEventListener('scroll', checkScroll);
  
  const menuItems = document.querySelectorAll('.navigation a');
  menuItems.forEach(item => {
    item.addEventListener('click', smoothScrollToAnchor);
  });
  