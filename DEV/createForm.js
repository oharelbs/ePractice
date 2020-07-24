function createForm() {

    window.open("funForm.html", "_blank");

    jQuery.get('https://raw.githubusercontent.com/oharelbs/ePractice/master/DEV/funForm.html', function(data) {
       var x = document.getElementById('testme').value;
       alert(x)
    });
    

//x = 'hihi'
}