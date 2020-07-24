function createForm() {

    var url = "https://raw.githubusercontent.com/oharelbs/ePractice/master/DEV/funForm.html";
    window.open(url, "_blank");

    jQuery.get(url, function(data) {
       var x = document.getElementById('testme').value;
       console.log(x)
    });
    

//x = 'hihi'
}