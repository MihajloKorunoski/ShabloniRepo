$(document).ready(function(){
    $(document).tooltip({
        items: "img, [data-geo], [title]",
        content: function(){
            let element = $(this);
            if (element.is("[data-geo]")) {
                let text = element.text();
                return `<img class='map' alt='${text}' src='st-stephens.jpg'>`
            }
            if (element.is("img")) {
                return element.attr("alt");
            }
            if (element.is("[title]")){
                return element.attr("title");
            }
        }
    });
});