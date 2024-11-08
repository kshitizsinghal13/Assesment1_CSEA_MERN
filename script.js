document.getElementById('generate-resume').addEventListener('click', function() {
    //form input values are fetched here
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;

    // preview vaale resume 
    document.getElementById('rname').innerText = name;

    // image upload
    const imageUpload = document.getElementById('imageUpload');
    if (imageUpload.files && imageUpload.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('rimage').src = e.target.result;
        }
        reader.readAsDataURL(imageUpload.files[0]);
    }
//display data on previwed resume.............
    document.getElementById('remail').innerText = email;
    document.getElementById('rphone').innerText = phone;

    const linkedinLink = document.getElementById('rlinkedin');
    linkedinLink.href = linkedin;
    linkedinLink.innerText = linkedin;

    const githubLink = document.getElementById('rgithub');
    githubLink.href = github;
    githubLink.innerText = github;

    document.getElementById('reducation').innerText = education;
    document.getElementById('rexperience').innerText = experience;

    // Hide form and show resume preview
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('rpreview').classList.remove('hidden');
});
//dowload feature i used html2pdf library
document.getElementById('download-resume').addEventListener('click', function() {
   const element = document.getElementById('rpreview');
   html2pdf()
       .from(element)
       .save(`${document.getElementById('name').value}_Resume.pdf`);
});