$(function() {

    //заявка на аудит
    $("#auditForm").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "https://tls.media/mail.php",
            data: th.serialize()
        }).done(function() {
            dataLayer.push({
                'event': 'simmetriazayavka1'
            });
            alert("Благодарим вас за обращение. Наш мереджер свяжется с вами в ближайшее время.");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
	});

    //Подписка на рассылку
    $("#mailSubscription").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "https://tls.media/mail.php",
            data: th.serialize()
        }).done(function() {
            dataLayer.push({
                'event': 'simmetriazayavka2'
            });
            alert("Благодарим вас за обращение. Наш мереджер свяжется с вами в ближайшее время.");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
	});

});
