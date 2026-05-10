function submitForm() {
    // Get form values
    var billingType = document.querySelector('input[name="billing"]:checked').value;
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var indirizzo = document.getElementById("indirizzo").value;
    var localita = document.getElementById("localita").value;
    var cap = document.getElementById("cap").value;
    var email = document.getElementById("email").value;
    var codiceFiscale = document.getElementById("codice_fiscale").value;
    var telefono = document.getElementById("telefono").value;
    var ragione_sociale = document.getElementById("ragione_sociale").value;
    var cod_univoco = document.getElementById("cod_univoco").value;


    if (billingType == "Privato"){
        var formData = {
            billingType: billingType,
            nome: nome,
            cognome: cognome,
            indirizzo: indirizzo,
            localita: localita,
            cap: cap,
            email: email,
            codiceFiscale: codiceFiscale,
            telefono: telefono
        };
    }
    else{
        var formData = {
            billingType: billingType,
            nome: nome,
            cognome: cognome,
            indirizzo: indirizzo,
            localita: localita,
            cap: cap,
            email: email,
            codiceFiscale: codiceFiscale,
            telefono: telefono,
            ragione_sociale: ragione_sociale,
            cod_univoco: cod_univoco
        };
    }
    // You can process the form data here, for example, by displaying it in an alert
    
    alert("Form data submitted:\n" + JSON.stringify(formData, null, 4));
}


document.addEventListener('DOMContentLoaded', function() {
    const billingPrivato = document.getElementById('billing_privato');
    const billingAzienda = document.getElementById('billing_azienda');
    const codFiscale = document.getElementById('codice_fiscale');

    billingPrivato.addEventListener('change', function () {
        const ragioneSociale = document.querySelector('.ragione_sociale');
        const codUnivoco = document.querySelector('.cod_univoco');

        if (billingPrivato.checked) {
            ragioneSociale.style.display = 'none';
            codUnivoco.style.display = 'none';
            codFiscale.style = "";
        } else {
            ragioneSociale.style.display = 'block';
            codUnivoco.style.display = 'block';
        }
    });

    billingAzienda.addEventListener('change', function () {
        const ragioneSociale = document.querySelector('.ragione_sociale');
        const codUnivoco = document.querySelector('.cod_univoco');

        if (billingAzienda.checked) {
            ragioneSociale.style.display = 'block';
            codUnivoco.style.display = 'block';
        } else {
            ragioneSociale.style.display = 'none';
            codUnivoco.style.display = 'none';
        }
    });
});