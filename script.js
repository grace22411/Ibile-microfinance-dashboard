$(document).ready(function(){
    $('#img-uploader').click(function(e) {
        $('#file-upload').click();
      });
			 
			 
      $('#file-upload').change(function() {
        var reader = new FileReader();
        reader.onload = function(e) {
          var preview = document.querySelector('.avatar');
          preview.style.backgroundImage = `url(${e.target.result})`;
//          preview.style.maxWidth = '350px';
//          preview.style.maxHeight = '350px';
        }
        reader.readAsDataURL(this.files[0]);
      })

      
      
   
});