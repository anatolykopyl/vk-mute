# vk-mute

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

Заглушить собеседника в беседе в ВК. 🔇

На данный момент ВКонтакте не позволяет заглушать людей в беседах. Это расширение для Chrome берется это исправить.

Если нажать на кнопку 🔇 напротив сообщения в беседе, то все сообщения во всех беседах от этого отправителя будут скрыты.

## Установка:
### Вариант 1
Скачать из интернет-магазина Chrome ([ссылка](https://chrome.google.com/webstore/detail/vk-mute/mcnkfnjggkbenehgfelnnkklpkpjeibl)).

### Вариант 2
1. [Скачать ZIP](https://github.com/anatolykopyl/vk-mute/releases)
2. Разархивировать в удобное место
3. Хром > Настройки > Расширения
    1. Включить режим разработчика
    2. Загрузить распакованное, выбрать каталог с расширением

Расширение должно работать во всех браузерах на движке Chromium.

Проверено на:
- Google Chrome
- Opera
- Brave

## Разработка:
Для живого обновления содержимого каталога `extension` во время работы запускаем:
```
$ npm run watch
```

Для билда расширения:
```
$ npm run build
```
