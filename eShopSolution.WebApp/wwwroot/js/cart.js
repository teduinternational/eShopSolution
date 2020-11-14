var CartController = function () {
    this.initialize = function () {
        loadData();
    }

    function loadData() {
        const culture = $('#hidCulture').val();
        $.ajax({
            type: "GET",
            url: "/" + culture + '/Cart/GetListItems',
            success: function (res) {
                var html = '';
                var total = 0;

                $.each(res, function (i, item) {
                    var amount = item.price * item.quantity;
                    html += "<tr>"
                        + "<td> <img width=\"60\" src=\"" + $('#hidBaseAddress').val() + item.image + "\" alt=\"\" /></td>"
                        + "<td>" + item.description + "</td>"
                        + "<td><div class=\"input - append\"><input class=\"span1\" style=\"max-width: 34px\" placeholder=\"1\" id=\"appendedInputButtons\" size=\"16\" type=\"text\">"
                        + "<button class=\"btn\" type =\"button\"> <i class=\"icon-minus\"></i></button>"
                        + "<button class=\"btn\" type=\"button\"><i class=\"icon-plus\"></i></button>"
                        + "<button class=\"btn btn-danger\" type=\"button\"><i class=\"icon-remove icon-white\"></i></button>"
                        + "</div>"
                        + "</td>"

                        + "<td>" + numberWithCommas(item.price) + "</td>"
                        + "<td>" + numberWithCommas(amount) + "</td>"
                        + "</tr>";
                    total += amount;
                });
                $('#cart_body').html(html);
                $('#lbl_number_of_items').text(res.length);
                $('#lbl_total').text(numberWithCommas(total));
            }
        });
    }
}