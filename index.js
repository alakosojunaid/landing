function scrollToProducts(){
    document.getElementById("products").scrollIntoView({
        behavior:"smooth"
    });
}

function submitForm(e){
    e.preventDefault();
    alert("Message sent successfully!");
}
