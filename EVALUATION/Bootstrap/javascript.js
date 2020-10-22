function ValidateEmail(inputText)
{
    var mailformat = /.+@.+\..+/;
        if(inputText.value.match(mailformat))
        {
            document.form1.text1.focus();
            return (true);
        }
        else
        {
            alert("Entrez une adresse mail valide !");
            document.form1.text1.focus();
            event.preventDefault();
            return (false);
        }
};
