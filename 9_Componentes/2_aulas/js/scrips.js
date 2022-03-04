var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]'),
)

var popOverList = popoverTriggerList.map(function(popoverTriggerEl){
    return new bootstrap.Popover(popoverTriggerEl)
})

// ToolTip

var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]'),
)

var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl){
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
