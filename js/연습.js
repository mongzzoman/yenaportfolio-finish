// for( i = 1 ;i <= 10; i++ ){
//     alertClone = $('.alert-box1').contents().clone()
//     alertCloneContainer = $('<div class="section1-alert-clone' + [i] + '"></div>')
//     alertCloneContainer.appendTo('.section1')
//     alertCloneContainer.append(alertClone)
//     alertCloneContainer.append(alert)
// }

$(function(){
    let span = document.querySelector('.loading-bar span') 
    for(i=1; i<=25; i++) {
        spanClone = $('span').contents().clone()
        spanCloneContainer = $('<div class="span00 loading-bar' + [i] + '"></div>')
        spanCloneContainer.appendTo('.loading-bar')
        spanCloneContainer.append(spanClone)
        spanCloneContainer.append(span)
    }

})