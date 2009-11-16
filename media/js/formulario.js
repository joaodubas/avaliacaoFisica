/**
 * @author joaodubas
 * Formata o formulario para que os rotulos dos <code>labels</code> aparecam dentro
 * dos campos <code>input</code>. Alem disso altera o <code>focus</code> destes
 * elementos entre tres estados: inativo, ativo, focus
 */
var formatForm = {
    elmForm: null,           //formulario
    elmInputList: null,      //array de inputs dentro do formulario
    elmInput: null,          //um elemento input
    elmInputNode: null,      //nome do no elemento obtido
    elmRotulo: null,         //elemento que recebe o rotulo
    elmRotuloContent: null,  //conteudo do rotulo
    elmInputValue: function(idElmForm){
        formatForm.elmForm = $(idElmForm);
        formatForm.elmInputList = formatForm.elmForm.getElementsByTagName('input');
        for(var indice in formatForm.elmInputList){
            formatForm.elmInput = formatForm.elmInputList[indice];
            if(formatForm.elmInput.type == 'text'){
                formatForm.elmRotulo = formatForm.elmInput.parentNode.parentNode.getElementsByTagName('span')[0];
                formatForm.elmRotuloContent = formatForm.elmRotulo.textContent || elmRotulo.innerText;
                formatForm.elmInput.value = formatForm.elmRotuloContent;
                formatForm.elmInput.addClass('inativo');
            }
        }
        if(document.addEventListener){
            formatForm.elmForm.addEventListener('focus', formatForm.inputValueHandler, true);
            formatForm.elmForm.addEventListener('blur', formatForm.inputValueHandler, true);
        } else if(document.attachEvent){
            formatForm.elmForm.attachEvent('onfocusin', formatForm.inputValueHandler);
            formatForm.elmForm.attachEvent('onfocusout', formatForm.inputValueHandler);
        }
    },
    inputValueHandler: function(e){
        formatForm.elmInput = _getElmTarget(e);
        formatForm.elmInputNode = _getFormatNodeName(formatForm.elmInput);
        if(formatForm.elmInputNode == 'input' && formatForm.elmInput.type == 'text'){
            formatForm.elmRotulo = formatForm.elmInput.parentNode.parentNode.getElementsByTagName('span')[0];
            formatForm.elmRotuloContent = formatForm.elmRotulo.textContent || elmRotulo.innerText;
            if(formatForm.elmInput.value == formatForm.elmRotuloContent){
                formatForm.elmInput.value = '';
                formatForm.elmInput.removeClass('inativo');
                formatForm.elmInput.addClass('focus');
            } else if(formatForm.elmInput.value == '' || formatForm.elmInput.value == null){
                formatForm.elmInput.value = formatForm.elmRotuloContent;
                formatForm.elmInput.removeClass('focus');
                formatForm.elmInput.removeClass('ativo');
                formatForm.elmInput.addClass('inativo');
            } else {
                formatForm.elmInput.removeClass('inativo');
                formatForm.elmInput.removeClass('focus');
                formatForm.elmInput.addClass('ativo');
                
            }
        }
    },
};
