$(function() {
    console.log("ready");

    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        operator = ["plus", "minus", "times", "divide", "power"]

    $(document).on("click", ".btn", function() {
        var currentSelection = this.value;
        console.log(currentSelection);
        if ($("#first-number") === undefined) {
            if (numbers.contains(currentSelection)) {
                $("#first-number").text(currentSelection);
            };
        };
    });
});