// Add event listener to download CV button
document.getElementById("download-cv-btn").addEventListener("click", () => {
	const cvUploaded = true; // Replace with actual CV upload status
	if (cvUploaded) {
		const link = document.createElement("a");
		link.href = "cv.pdf"; // Replace with actual CV file name
		link.download = "cv.pdf";
		link.click();
	} else {
		document.getElementById("cv-status").textContent = "CV not uploaded";
		alert("Please upload your CV first!");
	}
});
