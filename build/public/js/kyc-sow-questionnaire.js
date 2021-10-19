$(function() {    

    $("#other-document").hide();
    $('#source-of-wealth-list').change(function(){
        if (this.value == 'other-as-applicable')
        {
          $("#other-document").show();
        }
        else
        {
          $("#other-document").hide();
        }
    });

});