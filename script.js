
$(function () {
  
  // save the textarea value to localstorage
  $(".saveBtn").on('click',function(event){
    event.preventDefault();
    var key= ($(this).parent()).attr('id');
    var scheduletext = $(this).siblings().eq(1);
    localStorage.setItem(key,scheduletext.val());
  });

  //displays color format for the current, past and future hours
  currenthour= parseInt(dayjs().format("H"));
  $(".time-block").each(function(){
    var blockhour = $(this).data('hour');
    if (blockhour<currenthour){
      $(this).addClass("past");
    } 
    else if (blockhour===currenthour)
    {
      $(this).addClass("present");
    }else
    {
      $(this).addClass("future");
    }
  });  
 
  //retrive the data from localstorage using the id as key
  $(".description").each(function(){
    var parentid=($(this).parent()).attr('id');
    var description = localStorage.getItem(parentid);
    $(this).val(description);
    
  })

  //displays today date with ordinal
  var currentday = dayjs().format('dddd, MMMM Do');
  $('#currentDay').text(currentday);
});
