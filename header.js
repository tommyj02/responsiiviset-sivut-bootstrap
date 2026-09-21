fetch("header.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("header-container").innerHTML = html;

    
  })
  .catch(error => {
    console.error("Could not load header:", error);
  });