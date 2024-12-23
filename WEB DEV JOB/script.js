let images = [
    {
      h1Text: "Professor Adetokunbo Babatunde Sofoluwe, ABS-CITS",
      pText: "Driving University of Lagos IT transformation and fostering collaboration",
      bgImage: "citsimage.png",
    },
    {
      h1Text: "SECURITY FOCUS",
      pText: "Implementing robust measures to safeguard data and infrastructure.",
      bgImage: "cits2.jpg",
    },
    {
      h1Text: "ICT TRAINING",
      pText: "Empowering staff and students with essential tech skills.",
      bgImage: "cits3.jpg",
    }
  ];
  
  let currentIndex = 0;
  const h1Element = document.querySelector('section.homepage h1');
  const pElement = document.getElementById('homepage-paragraph');
  const homepageSection = document.querySelector('section.homepage');
  
  function changeContent() {
    // Fade out the text
    h1Element.style.opacity = 0;
    pElement.style.opacity = 0;
  
    // Wait for the fade-out to complete before changing the content and background
    setTimeout(() => {
      // Change the background image
      homepageSection.style.backgroundImage = `url('${images[currentIndex].bgImage}')`;
  
      // Update the text content
      h1Element.textContent = images[currentIndex].h1Text;
      pElement.textContent = images[currentIndex].pText;
  
      // Fade in the text
      h1Element.style.opacity = 1;
      pElement.style.opacity = 1;
  
      // Update the index to cycle through the images
      currentIndex = (currentIndex + 1) % images.length;
    }, 1000); // 1 second delay for fade out
  }
  
  // Call the function at regular intervals
  setInterval(changeContent, 5000);  // Change the content every 8 seconds (adjust as needed)
  