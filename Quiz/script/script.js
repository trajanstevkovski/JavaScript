$(document).ready(function(){

    function StartGame(service = new URLService()) {
        let _that = this;
    
        this.init = function () {
    
            $(".button-startgame").on("click", function (e) {
                e.preventDefault();
                window.localStorage.setItem("userData", JSON.stringify({name: "", mode: "", difficulty: "", time: 0, score: 0 }));
                window.location.replace(service.setUrl($(`input[name="select"]:checked`).val(), _that.getQuery()));
            })
            history.replaceState({}, null, window.location.pathname);
        }
    
        this.getQuery = function () {
            if (!($(`input[name="gameName"]`).val())) {
                $(`input[name="gameName"]`).val("anonymous")
                return $("form").serialize();
            } else {
                return $("form").serialize();
            }
        }
    }
    
    let newGame = new StartGame();
    newGame.init();
});