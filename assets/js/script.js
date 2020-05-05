function indo(url) {
    $.ajaxSetup({ cache: false });
    setTimeout(function(){ 
        $.ajax({
            type: 'GET',
            url: url,
            beforeSend: function (xhr) {
                xhr.overrideMimeType("text/plain; charset=x-user-defined");
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            }
        })
        .done(function (data) {
            myData = JSON.parse(data);
            
            $('#positif').html(myData[0].positif);
            $('#sembuh').html(myData[0].sembuh);
            $('#meninggal').html(myData[0].meninggal);
            
            
        });
    }, 1000);
    
}

function prov(url) {
    $.ajaxSetup({ cache: false });
    setTimeout(function(){
        $.ajax({
            type: 'GET',
            url: url,
            beforeSend: function (xhr) {
                xhr.overrideMimeType("text/plain; charset=x-user-defined");
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            }
        })
        .done(function (data) {
            myData = JSON.parse(data);
            let html = "";
            let no = 1;
            for(let i = 0; i < myData.length; i++) {
                html += "<tr>";
                html += "<td>"+ no++ +"</td>";
                html += "<td>"+myData[i]['attributes'].Provinsi+"</td>";
                html += "<td>"+myData[i]['attributes'].Kasus_Posi+"</td>";
                html += "<td>"+myData[i]['attributes'].Kasus_Semb+"</td>";
                html += "<td>"+myData[i]['attributes'].Kasus_Meni+"</td>";
                html += "</tr>";
            }
           
            $('#data').html(html);
            
        });
    }, 1000);

}

$(document).ready(function () {
    indo('https://api.kawalcorona.com/indonesia/');
    prov('https://api.kawalcorona.com/indonesia/provinsi/');
});