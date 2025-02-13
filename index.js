function showLoading() {
    const loadingDiv = document.getElementById('loading');
    
    if (loadingDiv) {
      loadingDiv.style.display = 'flex'; // Make the loading div visible
      setTimeout(() => {
        window.location.href = './main1/val1.html'; // Redirect to the next page
      }, 3000); // 3-second delay
    } else {
      console.error('Loading div not found!');
    }
  }
  