// -------------------------for shopping cart ----------------------------------------//
$(document).ready(function() {
    update_amounts();
    $('.qty, .price').on('keyup keypress blur change', function(e) {
        update_amounts();
    });
});

function update_amounts() {
    var sum = 0.0;
    $('#myTable > tbody > tr').each(function() {
        var qty = parseInt($(this).find('.qty').val());
        var price = parseFloat($(this).find('.price').val());
        var amount = qty * price;
        sum += amount;
        $(this).find('.amount').text(amount);
    });
    $('.total').text(sum);
}

// for increment quantity or decrement //
var plusBtn = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");

plusBtn.click(function() {
    var $n = $(this).parent(".button-container").find(".qty");
    var newVal = parseInt($n.val()) + 1;
    $n.val(newVal);
    update_amounts();
});

minusBtn.click(function() {
    var $n = $(this).parent(".button-container").find(".qty");
    var QtyVal = parseInt($n.val());
    if (QtyVal > 0) {
        var newVal = QtyVal - 1;
        $n.val(newVal);
        update_amounts();
    } else {              // si le produit est inferieur a zoro
        var verif = confirm("Are you sure you want to delete this product, please?");
        if (verif) {
              // Supprimer la ligne
            var row = $(this).closest("tr");
            row.remove();
        } else {
            alert("Thank you for keeping this product.");
        }
    }
});



  

var images = document.getElementsByClassName("like");

// Parcourir tous les éléments avec la classe 'like'
for (var i = 0; i < images.length; i++) {
  // Ajouter un gestionnaire d'événements au clic de chaque image
  images[i].addEventListener("click", function() {
    // Ajouter la classe 'selected' à l'élément image cliqué
    this.classList.add("selected");
  });
}


