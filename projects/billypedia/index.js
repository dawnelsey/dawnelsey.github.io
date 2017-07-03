/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        // EXAMPLE: Looping over top rated recordings; replace with your code //


// ******DO TODO #3 MAKE PRETTY***//
$('nav').css({'font-size': '50px',
    'background-color': "green",
});

// TODO #4 //
        //create a var for topRated data.discography.topRated in the data array//
            let topRated = data.discography.topRated;
            
        //   (makeList(topRated, 'list-top-rated', 'top-recording').appendTo$('#section-top-rated') );
            
            /* took out to test appendTo vs. append*/
            $('#section-top-rated').append(makeList(topRated, 'list-top-rated', 'top-recording'));
        
        
        
        // Loop through the top rated array checking each object
            _.each(topRated, function(recording) {
        // make a list of the top rated titles//
            let $topRated = $('<li>').attr('class', 'top-recording').text(recording.title);
            
            
        // the var $toprated is add to the end of the list topRated //
            $topRated.appendTo('#list-top-rated');
        // the year is add to the list top rated //
              $topRated.append($('<li>').text(recording.year));
          });







// TODO #5 //
        // declare a var to add recordings recordings to the recordingSection in the sidebar//
            var $recordsSection = $('<section>').addClass('recordings');
             $('#sidebar').append($recordsSection);
       
// /////////////////////////////////////////////////////////////////////////////////////////////////       
//       // the function make list goes through the content and makes a list of the recording titles //
             function makeList(content, idName, className) {
              var $list = $('<ul>').attr('id', idName).appendTo($recordsSection);


                 _.forEach(content, function(recording){
//              var $listItem = $('<li>').attr('class', 'list-recordings').appendTo($list);
//                     $('<li>').text(recording.title).attr('class', 'list-recordings').appendTo($listItem);
//                     // $('<div>').attr('class', 'title').text('Title: ' + recording.title).appendTo($listItem);
//                     $('<div>').attr('class', 'artist').text('Artist: ' + recording.artist).appendTo($listItem);
//                     $('<div>').attr('class', 'year').text('Year: ' + recording.year).appendTo($listItem);
                    
               });
              return $list;
              }
        
// ///////////////////////////////////////////////////////////////////////////////////////////////////        
//         // declared a var recording and assigned data.discography. recordings
//             var recordings = data.discography.recordings;
            
//             $('#sidebar').append(makeList(recordings, 'list-recordings', 'recordings' ));
            
// // TODO 6 ADD STYLE //
            
//             // var $topImage = $('<img>').attr('src', topRated[0].art);
//             // console.log(topRated[0].art);
//             var $midImage = $('<img>').attr('src', recordings[0].art);
//             console.log(recordings[0].art);
      
//       //TOP RATED IMAGE //
//             //$('#list-top-rated').prepend($topImage).attr('src', recordings.art);
        
//           // $('#recordings-list').prepend($midImage);
            
        
// // TODO 7 : Dynamically Swap Billy Images***//
//             let counter = 0;
//             $('#image-container-billy').click(function() {
//                 counter++;
//             if(counter === 4) {
//                 counter = 0;
//             }
//             $('#image-billy').attr('src', data.images.billy[counter]);
//             });
// //  TODO #8     //
   
//   // changes the image when you click on the title for the first list //
  
//   _.each($('.top-recording'),function(value, index) {
//       $('.top-recording').eq(index).click(function(){
//           $($topImage).attr('src', topRated[index].art);
         
//       });
//   });
  
//   // changes the image when you click on the title for the second list //
//   _.each($('.recordings'),function(value, index) {
//       $('.recordings').eq(index).click(function(){
//           $($midImage).attr('src', recordings[index].art);
//       });
//   });
//### TODO 9 Build a Table using jQuery //  
   
    // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


