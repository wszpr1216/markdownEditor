$("#md").on("keyup blur",function () {
    $('#html').html(marked($("#md").val()))
})