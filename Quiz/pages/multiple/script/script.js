$(document).ready(function(){
    function SelectCategory(service = new URLService(), getData = new GetDataService()) {
        let _that = this;

        this.init = function(){
            if(service.isValidUrl()){
                location.replace(service.setUrl());
            }

            _that.showCategory(getData.getCategories());
            _that.welcomeUser($.getUrlVar("gameName"));

            $("#game").on("click",function(e){
                e.preventDefault();
                window.location.replace(service.setUrl($("#game").attr("id"), $("form").serialize()));
            })

            $("#back").on("click", function (e) {
                e.preventDefault();
                window.location.replace(service.setUrl());
            })
        }

        this.showCategory = function(data){
            let select = $("<select>");
            select.attr({id: "selectCategory", class: "select-menu", name: "category"}).appendTo($("#categories"));
            data.trivia_categories.forEach(element => {
                $("<option>").attr("value",`${element.id}`).text(element.name).appendTo($("#selectCategory"));
            });
        }

        this.welcomeUser = function (query) {
            $("#title").text(`Welcome ${query}`)
        }
    
    }

    let newGame = new SelectCategory();
    newGame.init();
})