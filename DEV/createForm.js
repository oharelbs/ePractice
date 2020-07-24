function createForm() {

    window.open("funForm.html", "_blank");

    jQuery.get('D:/GitHub/ePractice/DEV/funForm.html', function(data) {
       var x = document.getElementById('testme').value;
       alert(x)
    });
    

//x = 'hihi'
}