
$(document).ready(
    function(){
        loadData();
        $("#studentPost").on('submit',function(e){
            e.preventDefault();
            var result = { };
           $.each($(this).serializeArray(), function() {
               result[this.name] = this.value;
           });
           result = JSON.stringify(result,null,' ');
           
           
        //    $.get("https://restcountries.eu/rest/v2/name/"+ countryUrl +"?fullText=true",function(data){
                
                
        //     });
        //    console.log(result);

           $.ajax({
               type: 'POST',
               url: 'https://localhost:44369/api/Flags',
               data: result,
               contentType: "application/json",
               dataType: 'json',
               statusCode: {
                   200: function(data) {
                       $("#imageFlag").attr("src",data.responseText);
                       //document["#imageFlag"].src = res;
                        //alert (data.responseText);
                   },
                   400: function() {
                       alert( "Bad Request 404" );
                   }
               }
           });
            });
       



        
    });

    function createRow(student){
        return "<tr class='rigaTabella'>"+createColumn(student.id)+createColumn(student.nomeCompleto)+
                createColumn(student.corsi.length)+"</tr>";
    }

    function createColumn(data){
        return "<td>"+data+"</td>";
    }

    function loadData(){
        $(".rigaTabella").html("");
        
        $.get("https://modisapi20181211015957.azurewebsites.net/api/Studenti",function(data){
            for(var i=0;i<data.length; i++){
                //alert(data[i].nomeCompleto);
                $("#studentTable").append(
                    createRow(data[i])
                );

            }
                
        });
    }