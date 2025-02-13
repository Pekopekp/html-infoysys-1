let pressCount = 0;

function handleNo() {
  pressCount++;
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button button');
  const gif = document.querySelector('.gif');

  if (pressCount <= 5) {
    const positions = [
      { top: '30px', left: '50px' },       // Top-left corner
      { top: '20px', right: '90px' },      // Top-right corner
      { bottom: '60px', right: '10px' },   // Bottom-right corner
      { bottom: '30px', left: '80px' },    // Bottom-left corner
      {  bottom: '70px', left: '10px'  } // Center
    ];

    const gifs = [
      './1.gif',  // First gif
      './2.gif',  // Second gif
      './3.gif',  // Third gif
      './4.gif',  // Fourth gif
      './5.gif'   // Fifth gif
    ];

    const pos = positions[pressCount - 1];
    noButton.style.top = pos.top || '';
    noButton.style.left = pos.left || '';
    noButton.style.right = pos.right || '';
    noButton.style.bottom = pos.bottom || '';
    noButton.style.transform = pos.transform || '';

    // Change the GIF
    gif.src = gifs[pressCount - 1];

    // Increase the size of the "Yes" button
    yesButton.style.width = `${150 + pressCount * 30}px`;
    yesButton.style.height = `${75 + pressCount * 15}px`;
  } else {
    noButton.style.display = 'none';  // Hide the "No" button
    gif.src = './1.gif';  // Final gif
  }
}

function handleYes() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');
  const gif = document.querySelector('.gif');
  const loveText = document.querySelector('.love-text');

  gif.src = './final.gif';
  noButton.style.display = 'none';
  yesButton.style.display = 'none';
  
  // Show the "I Love You" text with a fade-in effect
  loveText.style.display = 'block';
  loveText.classList.add('fade-in');
}