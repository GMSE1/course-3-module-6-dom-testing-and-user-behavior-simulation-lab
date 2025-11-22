// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

/**
 * Add text content to an element by ID
 */
function addElementToDOM(elementId, text) {
  const element = document.getElementById(elementId);
  element.textContent = text;
}

/**
 * Remove an element from the DOM by ID
 */
function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  element.remove();
}

/**
 * Simulate a click by updating element content
 */
function simulateClick(elementId, text) {
  const element = document.getElementById(elementId);
  element.textContent = text;
}

/**
 * Handle form submission with validation
 * Executes immediately when called (for testing purposes)
 */
function handleFormSubmit(formId, displayElementId) {
  const form = document.getElementById(formId);
  const input = document.getElementById('user-input');
  const displayElement = document.getElementById(displayElementId);
  const errorMessage = document.getElementById('error-message');
  
  // Get and trim the input value
  const inputValue = input.value.trim();
  
  // Validate and update DOM immediately
  if (inputValue === '') {
    // Show error for empty input
    errorMessage.textContent = 'Input cannot be empty';
    errorMessage.classList.remove('hidden');
  } else {
    // Clear any previous error
    errorMessage.textContent = '';
    errorMessage.classList.add('hidden');
    
    // Display the user input in the DOM
    displayElement.textContent = inputValue;
  }
}

// Export functions for Jest testing
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};