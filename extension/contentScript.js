// Function to check if an element is a deceptive button
function isDeceptiveButton(element) {
    // Check if the element is a button or a link
    if (element.tagName.toLowerCase() === 'button' || element.tagName.toLowerCase() === 'a') {
      // Check if the element opens in a new tab/window
      if (element.target === '_blank') {
        // Add your own criteria to identify deceptive buttons here
        // For example, you could check if the button/link has certain CSS classes or attributes indicating it's an ad
        return true;
      }
    }
    return false;
  }
  
  // Function to scan the page for deceptive buttons and warn the user
  function scanForDeceptiveButtons() {
    // Find all buttons and links on the page
    const elements = document.querySelectorAll('button, a');
    // Check each element for deception
    elements.forEach(element => {
      if (isDeceptiveButton(element)) {
        // If a deceptive button is found, alert the user
        alert('Warning: This button/link may open an ad in a new tab!');
        // You can also customize the warning mechanism here, such as displaying a message on the page
      }
    });
  }
  
  // Call the function to scan for deceptive buttons when the content script is injected
  scanForDeceptiveButtons();
  