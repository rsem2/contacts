$(document).ready(function(){
    $(document).ready(function(){
        $('form').submit(function(){

            var shortbio = $("textarea[name='description']").val()
            var divString = '<div class="person" data-hiddendescription='+shortbio+'>';
            var name = $("input[name='first_name']").val()+" "+$("input[name='last_name']").val();
            
            divString += "<h1>"+name+"</h1>";
            divString += "<h2>Click for description</h2></div>"

            $("#people").append(divString);
        
            return false
    
        });

        $(document).on("click",".person",function(){
            descriptionString="<h3>"+$(this).data("hiddendescription")+"</h3>"
            $(this).html(descriptionString)
        })

        // $(".person").click(function(){
        //     descriptionString="<h3>"+$(this).data("hiddendescription")+"</h3>"
        //     $(this).html(descriptionString)
    });
})