function showLoading() {
    const loadingDiv = document.getElementById('loading');
    
    if (loadingDiv) {
      loadingDiv.style.display = 'flex'; // Make the loading div visible
      setTimeout(() => {
        window.location.href = 'val3.html'; // Redirect to the next page
      }, 3000); // 3-second delay
    } else {
      console.error('Loading div not found!');
    }
  }
  