$(document).ready(function () {

    function StartGame(service = new URLService()) {
        let _that = this;

        this.init = function () {

            $(".button-startgame").on("click", function (e) {
                e.preventDefault();
                window.localStorage.setItem("userData", JSON.stringify({
                    name: "",
                    mode: "",
                    difficulty: "",
                    time: 0,
                    score: 0
                }));
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
    localStorage.setItem("multiple", JSON.stringify({"easy": [{
        difficulty: "easy",
        mode: "multiple",
        name: "anonymous",
        score: 8,
        time: 60
    },
    {
        difficulty: "easy",
        mode: "multiple",
        name: "anonymous",
        score: 7,
        time: 45
    },
    {
        difficulty: "easy",
        mode: "multiple",
        name: "anonymous",
        score: 6,
        time: 66
    },
    {
        difficulty: "easy",
        mode: "multiple",
        name: "anonymous",
        score: 4,
        time: 60
    },
    {
        difficulty: "easy",
        mode: "multiple",
        name: "anonymous",
        score: 6,
        time: 60
    }
], "medium": [{
        difficulty: "medium",
        mode: "multiple",
        name: "anonymous",
        score: 0,
        time: 0
    },
    {
        difficulty: "medium",
        mode: "multiple",
        name: "anonymous",
        score: 0,
        time: 0
    },
    {
        difficulty: "medium",
        mode: "multiple",
        name: "anonymous",
        score: 0,
        time: 0
    },
    {
        difficulty: "medium",
        mode: "multiple",
        name: "anonymous",
        score: 0,
        time: 0
    }
], "hard": [{
        difficulty: "medium",
        mode: "multiple",
        name: "anonymous",
        score: 0,
        time: 0
    },
    {
        difficulty: "medium",
        mode: "multiple",
        name: "anonymous",
        score: 0,
        time: 0
    },
    {
        difficulty: "medium",
        mode: "multiple",
        name: "anonymous",
        score: 0,
        time: 0
    },
    {
        difficulty: "medium",
        mode: "multiple",
        name: "anonymous",
        score: 0,
        time: 0
    }
]}));
    let newGame = new StartGame();
    newGame.init();
});