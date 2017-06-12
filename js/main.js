$(document).ready(
    function(){
        //Add button
        $('#add').click(
            function(){
                var toAdd = $('input[name=listItem]').val();
                var iNum = $('p').length + 1;

            $('#list').append('<p>' + '<i>' +  iNum + '. ' + '</i>' + '<span class="name">' + toAdd + '</span>' + '<span id="remove">Remove</span></p>');
            printArr(); //Call array in console since the first element has been added
            
            });

        //Remove button
        $(document).on("click", '#remove', function(event) {
          $(event.target).closest("p").remove();
          printArr(); //Print array
        });

        //Free input space when focused
        $('input').focus(function() {
          $(this).val('');
        });


        //Sort the data via sortChildren.js
        $(function($) {
          var sortByName = $.sortFunc(["$(this).find('.name').text()"]),
              sortByI = $.sortFunc(["+$(this).find('i').text()"])
        $("button.name").click(function(){
              $(this).nextAll("div").sortChildren(sortByName)
        })
        $("button.num").click(function(){
              $(this).nextAll("div").sortChildren(sortByI)
          })   

        })

    }

);

        //Add list information into array and log it into console
     function printArr() {
            var taskArr = [];
            $("#list .name").each(function(){ 
                taskArr.push($(this).text()) 
            });
            console.log(taskArr);
      };





        

