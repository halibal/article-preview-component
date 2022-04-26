var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

$(document).ready(function() {
                    
    var options = {
        html: true,
        title: "Optional: HELLO(Will overide the default-the inline title)",
        //html element
        //content: $("#popover-content")
        content: $('[data-name="popover-content"]')
        //Doing below won't work. Shows title only
        //content: $("#popover-content").html()

    }
    var exampleEl = document.getElementById('shareBtn')
    var popover = new bootstrap.Popover(exampleEl, options)
})