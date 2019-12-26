Генерация dgb кошелька (пары ключей и адреса) с помощью [digibyte-js](https://github.com/digicontributer/digibyte-js), используя его, как скрипт в html файле.

### Установка digibyte-js

digibyte-js устанавливается через nodejs, достаточно в терминале ввести: 
```
npm install digibyte
```
или
```
bower install digibyte
```

### Установка browserify

```
npm install -g browserify
```

### Скрипт [main.js]

Запрос модуля должен быть к index.js, а не digibyte.js:
```
const dgb = require('./node_modules/digibyte/index.js')
```

Генерация ключа и адреса:
```
var privateKey = new dgb.PrivateKey();
var address = privateKey.toAddress();
```

Обычный читаемый вид можно получить через .toString():

```
    console.log(privateKey.toString()) //private key
    console.log(privateKey.toPublicKey().toString()) //public key
    console.log(address.toString()) //address
```

### Генерация bundle из browserify

```
browserify main.js -o bundle.js
```
где: 
main.js — ваш скрипт, который обращается к модулям nodejs;
bundle.js — название файла-бандла с модулями и скриптом, который интегрируется в html файл.

### Использование bundle.js в html

```
<script src="bundle.js"></script>
```

