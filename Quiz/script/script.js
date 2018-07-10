$(document).ready(function () {

    function StartGame(service = new URLService()) {
        let _that = this;

        this.init = function () {
            
            $(".button-startgame").on("click", function (e) {
                e.preventDefault();
                if ($(`input[name="gameName"]`).val().length > 15) {
                    $("h1").after($(`<span class="alert name-alert">`).text("Your name must be less that 15 characters long"));
                } else {
                    window.localStorage.setItem("userData", JSON.stringify({
                        Name: "",
                        Mode: "",
                        Difficulty: "",
                        Time: 0,
                        Score: 0,
                        Average: 0
                    }));
                    window.location.replace(service.setUrl($(`input[name="select"]:checked`).val(), _that.getQuery()));
                }
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