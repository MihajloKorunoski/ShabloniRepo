$(document).ready(function () {
    $('table tr:even').addClass('boja')
    $('table tr').each(function () {
        $(this).find('td:even').addClass('border')
    })
})