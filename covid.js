


$('#newss').click(function(){
console.log(document.getElementById('news').style.display );
  if(document.getElementById('news').style.display == "none"){
    document.getElementById('news').style.display = "";
    document.getElementById('newss').innerHTML = "Hide-News"

  }
  else {
    document.getElementById('news').style.display = "none";
    document.getElementById('newss').innerHTML = "Show-News";
  }

});
$("#show-more").click(function(){
  if(document.getElementById('precentage').style.display == "none"){
    document.getElementById('precentage').style.display = "";
    document.getElementById('show-more').innerHTML = "Show-Less";
    // document.getElementById('precentages').innerHTML = "Hide-News"

  }
  else {
    document.getElementById('precentage').style.display = "none";
    document.getElementById('show-more').innerHTML = "Show-More";
    // document.getElementById('precentages').innerHTML = "Show-News";
  }

});
$("#show-more-state").click(function(){
  if(document.getElementById('stateprecentage').style.display == "none"){
    document.getElementById('stateprecentage').style.display = "";
    document.getElementById('show-more-state').innerHTML = "Show-Less";
    // document.getElementById('precentages').innerHTML = "Hide-News"

  }
  else {
    document.getElementById('stateprecentage').style.display = "none";
    document.getElementById('show-more-state').innerHTML = "Show-More";
    // document.getElementById('precentages').innerHTML = "Show-News";
  }

});

fetch('https://gnews.io/api/v3/search?q=corona&token=b7e8eae2088fd251c2682107869a7a0e')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        // var firstnews = ".newsheadline" + i;


        document.querySelector('.newsheadline').innerHTML= data.articles[0].title;

if(data.articles[0].image!= null){
        document.querySelector('.image').src= data.articles[0].image;}
        else {
          document.querySelector('.image').src = 'js1.jpg'
        }
        document.querySelector('.more').href= data.articles[0].url;

                document.querySelector('.newsheadline1').innerHTML= data.articles[1].title;
if(data.articles[1].image!= null){
                document.querySelector('.image1').src= data.articles[1].image;}
                else {
                  document.querySelector('.image1').src = 'js2.jpg'
                }

                document.querySelector('.more1').href= data.articles[1].url;

                        document.querySelector('.newsheadline2').innerHTML= data.articles[2].title;
if(data.articles[2].image!= null){
                        document.querySelector('.image2').src= data.articles[2].image;}
                        else {
                          document.querySelector('.image2').src = 'js3.jpg'
                        }
                        document.querySelector('.more2').href= data.articles[2].url;

                                document.querySelector('.newsheadline3').innerHTML= data.articles[3].title;
if(data.articles[3].image!= null){
                                document.querySelector('.image3').src= data.articles[3].image;}
                                else {
                                  document.querySelector('.image3').src = 'js4.jpg'
                                }
                                document.querySelector('.more3').href= data.articles[3].url;

                                        document.querySelector('.newsheadline4').innerHTML= data.articles[4].title;
if(data.articles[4].image!= null){
                                        document.querySelector('.image4').src= data.articles[4].image;}
                                        else {
                                          document.querySelector('.image4').src = 'js1.jpg'
                                        }
                                        document.querySelector('.more4').href= data.articles[4].url;




    });
var url = "https://api.covidindiatracker.com/state_data.json";
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();


GiphyAJAXCall.addEventListener('load', function( data ) {


  pushToDom(data.target.response);

// your callback events go here

});


function pushToDom(input){
  // document.querySelector(".js-container").innerHTML = null ;
  var tracker =JSON.parse(input);

  console.log(tracker);
  var total =0;
  var totalactive = 0;
  var  totaldeaths=0 ;
  var totalrecovered =0;
  var totalchange=0;
  var totalactivechange =0;
  var totalrecoveredchange =0;
  var totaldeathschange =0;
  google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['state', 'cases'],

      [tracker[0].state, tracker[0].confirmed],
      [tracker[1].state, tracker[1].confirmed],
      [tracker[2].state, tracker[2].confirmed],
      [tracker[3].state, tracker[3].confirmed],
      [tracker[4].state, tracker[4].confirmed],
      [tracker[5].state, tracker[5].confirmed],
      [tracker[6].state, tracker[6].confirmed],
      [tracker[7].state, tracker[7].confirmed],
      [tracker[8].state, tracker[8].confirmed],
      [tracker[9].state, tracker[9].confirmed],
      [tracker[10].state, tracker[10].confirmed],
      [tracker[11].state, tracker[11].confirmed],
      [tracker[12].state, tracker[12].confirmed],
      [tracker[13].state, tracker[13].confirmed],
      [tracker[14].state, tracker[14].confirmed],
      [tracker[15].state, tracker[15].confirmed],
      [tracker[16].state, tracker[16].confirmed],
      [tracker[17].state, tracker[17].confirmed],
      [tracker[18].state, tracker[18].confirmed],
      [tracker[19].state, tracker[19].confirmed],
      [tracker[20].state, tracker[20].confirmed],
      [tracker[21].state, tracker[21].confirmed],
      [tracker[22].state, tracker[22].confirmed],
      [tracker[23].state, tracker[23].confirmed],
      [tracker[24].state, tracker[24].confirmed],
      [tracker[25].state, tracker[25].confirmed],
      [tracker[26].state, tracker[26].confirmed],
      [tracker[27].state, tracker[27].confirmed],
      [tracker[28].state, tracker[28].confirmed],
      [tracker[29].state, tracker[29].confirmed],
      [tracker[30].state, tracker[30].confirmed],
        [tracker[31].state, tracker[31].confirmed],
          [tracker[32].state, tracker[32].confirmed],
            [tracker[33].state, tracker[33].confirmed],
              [tracker[34].state, tracker[34].confirmed],
                [tracker[35].state, tracker[35].confirmed],
                  [tracker[36].state, tracker[36].confirmed],
                    [tracker[37].state, tracker[37].confirmed]





    ]);

    var options = {
         region: 'IN', // India
         domain : 'IN',
         // magnifyingGlass : {enable: true, zoomFactor: 5.0},
         // magnifyingGlass.enable : true,
         // displayMode: 'markers', //If you want to highlight some cities
         resolution: 'provinces', //If you want to display provinces in India
         colorAxis: {colors: ['red']} //If you want specific color for your markers (cities)
       };
    // var option = { displayMode: 'text' };
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }
  for(var i =0 ;i<=37;i++){

     total = total + tracker[i].confirmed;
     totalactive = totalactive + tracker[i].active;
     totalrecovered = totalrecovered +tracker[i].recovered;
     totaldeaths +=tracker[i].deaths;
     totaldeathschange +=tracker[i].dchanges;
     totalrecoveredchange +=tracker[i].rchanges;
     totalactivechange += tracker[i].achanges;
     totalchange +=tracker[i].cchanges;


  }

    document.querySelector(".totalcases").innerHTML = total  ;
    document.querySelector(".activecases").innerHTML = totalactive  ;
    // document.querySelector(".activeprecentage").innerHTML =  + ((totalactive/total)*100).toFixed(1) + "%";
    document.querySelector(".recovered").innerHTML = totalrecovered ;
    // document.querySelector(".recoveredprecentage").innerHTML =  ((totalrecovered/total)*100).toFixed(1) + "%";
    document.querySelector(".deaths").innerHTML = totaldeaths ;
    // document.querySelector(".deathsprecentage").innerHTML =  ((totaldeaths/total)*100).toFixed(1) + "%";
    document.querySelector(".deathschanges").innerHTML = "+" + totaldeathschange ;
    document.querySelector(".activechanges").innerHTML = "+" + totalactivechange ;
    document.querySelector(".recoveredchanges").innerHTML = "+" + totalrecoveredchange ;
    document.querySelector(".totalchange").innerHTML = "+" + totalchange ;
    google.charts.load("current", {packages:["corechart"]});
       google.charts.setOnLoadCallback(drawChart);
       function drawChart() {
         var datapie = google.visualization.arrayToDataTable([
           ['activecases', 'precentage'],
           ['active',  totalactive],
           ['recovered', totalrecovered],
           ['deaths',  totaldeaths],

         ]);

         var optionspie = {

           is3D: true,
           chartArea:{left:20,top:0,width:'90%',height:'75%'},
           pieSliceText : 'none' ,
           legend : 'left',
           'width' : 250

         };

         var chartpie = new google.visualization.PieChart(document.getElementById('piechart_3dindia'));
         chartpie.draw(datapie, optionspie);
         // console.log(chartpie.rect);
       };



    $(".statename").on("click", function(e) {
      var sender = $(this);
      var selectedstate = this.id;
      console.log(selectedstate);
      document.querySelector(".name").innerHTML = tracker[this.id].state;
      document.querySelector(".statetotalcases").innerHTML = tracker[this.id].confirmed;
      document.querySelector(".stateactivecases").innerHTML = tracker[this.id].active;
      // ;
      document.querySelector(".staterecovered").innerHTML = tracker[this.id].recovered;
        //
      document.querySelector(".statedeaths").innerHTML = tracker[this.id].deaths;
        // ;
        document.querySelector(".statedeathschanges").innerHTML ="+"+ tracker[this.id].dchanges;
          document.querySelector(".statetotalcaseschange").innerHTML = "+" +tracker[this.id].cchanges;
            document.querySelector(".staterecoveredchange").innerHTML = "+" +tracker[this.id].rchanges;
              document.querySelector(".stateactivecaseschange").innerHTML =  "+" +tracker[this.id].achanges;
              // document.querySelector(".activeprecentagestate").innerHTML = ((tracker[this.id].active/tracker[this.id].confirmed)*100).toFixed(1) + "%";
              // document.querySelector(".recoveredprecentagestate").innerHTML =  + ((tracker[this.id].recovered/tracker[this.id].confirmed)*100).toFixed(1) + "%";
              // document.querySelector(".deathsprecentagestate").innerHTML =  + ((tracker[this.id].deaths/tracker[this.id].confirmed)*100).toFixed(1) + "%";

              google.charts.load("current", {packages:["corechart"]});
                 google.charts.setOnLoadCallback(drawChart);
                 function drawChart() {
                   var datapie = google.visualization.arrayToDataTable([
                     ['activecases', 'precentage'],
                     ['active',  tracker[selectedstate].active],
                     ['recovered', tracker[selectedstate].recovered],
                     ['deaths',  tracker[selectedstate].deaths],

                   ]);

                   var optionspie = {

                     is3D: true,
                     chartArea:{left:20,top:0,width:'90%',height:'75%'},
                     pieSliceText : 'none' ,
                     legend : 'left',
                     'width' : 250
                   };

                   var chartpie = new google.visualization.PieChart(document.getElementById('piechart_3d'));
                   chartpie.draw(datapie, optionspie);
                 };


      //district DATA
      var districtdata = tracker[this.id].districtData;

                    var districtlist = document.getElementById("dropdown-menu-district");
                    while (districtlist.hasChildNodes()) {
                        districtlist.removeChild(districtlist.firstChild);
                    }

                    for (let i = 0; i < districtdata.length; i++) {

                        let districtdropdownelement = document.createElement('a');

                        let districtlink = document.createTextNode(districtdata[i].name);

                        districtdropdownelement.appendChild(districtlink);

                        // statedropdownelement.title = data[i].state;

                        districtdropdownelement.id = 100 + i;

                        districtdropdownelement.className = "dropdown-item";

                        document.getElementById("dropdown-menu-district").appendChild(districtdropdownelement);

                    }

                    document.getElementById("districtdropdown").style.display = "block";
                    $("#dropdown-menu-district a").click(function () {




                       var clickedid2 = $(this).attr("id");

                       console.log(this);
                       console.log(clickedid2);

                       // var sdata2 = window.tracker;

                       var districtdata = tracker[selectedstate].districtData;
                       console.log(districtdata);




                       document.querySelector(".districtname").innerHTML = districtdata[clickedid2 - 100].name;
                       document.querySelector(".totalcasesdistrict").innerText = districtdata[clickedid2 - 100].confirmed;
                       // document.querySelector(".totaldistrictchanges").innerHTML = "+" + districtdata[clickedid2 - 100].cchange;
                    });




   });


}// document.querySelector(".state").addEventListener('click',function(){
//   for( var i=0 ;i<=37;i++){
//      var a = document.createElement('a');
//      var link = document.createTextNode(tracker[i].state);
//      a.appendChild(link);
//      a.id = i;
//      a.href ="#";
//      a.onClick ="reply_click(this.id)";
//
//      document.body.appendChild(a);
//    }
//
//
//  });


 // console.log(document.querySelector('.states').id);
   // console.log(tracker[].active);

   // console.log(tracker[0].active);





       // console.log(state);
     // console.log(tracker);}

                // Append the anchor element to the bo
