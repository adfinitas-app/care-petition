$(document).ready(function() {
    $(".suite").click(function() {
        var id = $(this).attr("data-popin");
        $(this).hide();
        $("#popin"+id).show();
    });

    $(".close").click(function() {
        $(".suite").show();
        $(this).parent().hide();
    });
    $(".burger").click(function(){
        $(".menu-list").slideToggle();
    })
});

// File picker
if( filepicker ) {
  filepicker.setKey("AFVYRtNQ0RJG8H7HpU8mQz");

  $('.trigger-file').on('click', function(e) {
    e.preventDefault();
    var $parent = $(this);

    filepicker.pick(
      {
        mimetype: 'image/*',
        container: 'modal',
        maxSize : 4 * 1024 * 1024,
        services: ['COMPUTER']
      },
      function(Blob){
        $parent.find('input[name*="photo"]').val(Blob.url);
      },
      function(FPError){
    //  console.log(FPError.toString()); - print errors to console
      }
    );
  });
}
