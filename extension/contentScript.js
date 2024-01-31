// Function to check if an element is a deceptive button
function isDeceptiveButton(element) {
    // Check if the element is a button or a link
    if (element.tagName.toLowerCase() === 'button' || element.tagName.toLowerCase() === 'a') {
      // Check if the element opens in a new tab/window
      if (element.target === '_blank') {
        
        // Add your own criteria to identify deceptive buttons here
        
        // Load the TensorFlow.js model
async function loadModel() {
  const model = await tf.loadLayersModel('model/model.json');
  return model;
}

// Function to extract features from the webpage
function extractFeatures() {
  // Add logic to extract features from the webpage (e.g., DOM structure, CSS styles, etc.)
  // Return the extracted features
}

// Function to make predictions using the ML model
async function predictDeception() {
  const model = await loadModel();
  const features = extractFeatures();
  const prediction = model.predict(features);
  return prediction;
}

// Function to display a warning message if deceptive buttons leading to ads are detected
async function displayWarningIfNeeded() {
  const prediction = await predictDeception();
  if (prediction > 0.5) {
      alert('Warning: This website may contain deceptive buttons leading to ads!');
  }
}

// Call the function to display warning if needed when the content script is injected
displayWarningIfNeeded();

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

 
  