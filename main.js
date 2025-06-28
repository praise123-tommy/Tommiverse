document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const reader = new FileReader();
  const file = form.photo.files[0];
  reader.onload = function() {
    const user = {
      username: form.username.value,
      email: form.email.value,
      dob: form.dob.value,
      description: form.description.value,
      maritalStatus: form.maritalStatus.value,
      workStatus: form.workStatus.value,
      dream: form.dream.value,
      phone: form.phone.value,
      nin: form.nin.value,
      status: form.status.value,
      photo: reader.result,
      signupTime: new Date().toLocaleString(),
      stats: {
        tasks: 0,
        coins: 0,
        referrals: 0,
        badges: 0
      }
    };
    localStorage.setItem("tomiverseUser", JSON.stringify(user));
    window.location.href = "profile.html";
  };
  reader.readAsDataURL(file);
});
