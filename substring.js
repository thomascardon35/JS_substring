<script>
    $(function(){
        var tableBox= $("#admin td"); // en natif : document.querySelector("#admin td");
                                      // Dans mon projet ForEver ce sélecteur est un tableau d'objet d'une quarantaine d'élément

        for (var index = 0; index < tableBox.length; index++){

            var textTableBox = tableBox[index].textContent;

            /*var newTextTableBox = textTableBox.substring(0,3);   */
            
            tableBox[index].textContent= textTableBox.substring(0,10) + '...';
        }
    });
</script>
