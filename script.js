const pdfBtn = document.getElementById("pdfBtn");

pdfBtn.addEventListener("click", function () {
 
    const myCv = document.getElementById("myCv");
      html2pdf(myCv);
});
