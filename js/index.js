
$(document).ready(
    function(){
        loadData();
        $("#studentPost").on('submit',function(e){
            e.preventDefault();
            var result = { };
            $.each($(this).serializeArray(), function() {
                result[this.name] = this.value;
            });
            var req = {};
            var country = "https://restcountries.eu/rest/v2/name/"+ result.nome +"?fullText=true"
            $.get(country ,function(data, textStatus){
                    req['nome']=data[0].alpha2Code;
                    var sender = JSON.stringify(req);
                    $.ajax({
                        type: 'POST',
                        url: 'https://flagsapi.azurewebsites.net/api/Flags',
                        data: sender,
                        contentType: "application/json",
                        dataType: 'json',
                        statusCode: {
                            200: function(data2) {
                                $("#imageFlag").attr("src",data2.responseText);
                            },
                            400: function() {
                                alert( "Bad Request 404" );
                            }
                        }
                    });
                });
            });
       



        
    });


    function loadData(){
      
    }