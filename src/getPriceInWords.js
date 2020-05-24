/**
 * @description Return the price of the good in words
 * @param {number} num - Price of the good
 */
exports.getPriceInWords = function (num) {
  const arrNumbers = new Array()
  arrNumbers[1] = new Array('', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать')
  arrNumbers[2] = new Array('', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто')
  arrNumbers[3] = new Array('', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот')
  function numberParser (_num, desc) {
    var string = ''
    var numOfHundreds = ''
    if (_num.length === 3) {
      numOfHundreds = _num.substr(0, 1)
      _num = _num.substr(1, 3)
      string = arrNumbers[3][numOfHundreds] + ' '
    }
    if (_num < 20) string += arrNumbers[1][parseFloat(_num)] + ' '
    else {
      var firstNumber = _num.substr(0, 1)
      var secondNumber = _num.substr(1, 2)
      string += arrNumbers[2][firstNumber] + ' ' + arrNumbers[1][secondNumber] + ' '
    }
    switch (desc) {
      case 0:
        if (_num.length === 2 && parseFloat(_num.substr(0, 1)) === 1) {
          string += 'рублей'
          break
        }
        var lastNumber = parseFloat(_num.substr(-1))
        if (lastNumber === 1) string += 'рубль'
        else if (lastNumber > 1 && lastNumber < 5) string += 'рубля'
        else string += 'рублей'
        break
      case 1:
        _num = _num.replace(/^[0]{1,}$/g, '0')
        if (_num.length === 2 && parseFloat(_num.substr(0, 1)) == 1) {
          string += 'тысяч '
          break
        }
        var lastNumber = parseFloat(_num.substr(-1))
        if (lastNumber === 1) string += 'тысяча '
        else if (lastNumber > 1 && lastNumber < 5) string += 'тысячи '
        else if (parseFloat(_num) > 0) string += 'тысяч '
        string = string.replace('один ', 'одна ')
        string = string.replace('два ', 'две ')
        break
      case 2:
        _num = _num.replace(/^[0]{1,}$/g, '0')
        if (_num.length == 2 && parseFloat(_num.substr(0, 1)) == 1) {
          string += 'миллионов '
          break
        }
        var lastNumber = parseFloat(_num.substr(-1))
        if (lastNumber === 1) string += 'миллион '
        else if (lastNumber > 1 && lastNumber < 5) string += 'миллиона '
        else if (parseFloat(_num) > 0) string += 'миллионов '
        break
      case 3:
        _num = _num.replace(/^[0]{1,}$/g, '0')
        if (_num.length === 2 && parseFloat(_num.substr(0, 1)) == 1) {
          string += 'миллиардов '
          break
        }
        var lastNumber = parseFloat(_num.substr(-1))
        if (lastNumber === 1) string += 'миллиард '
        else if (lastNumber > 1 && lastNumber < 5) string += 'миллиарда '
        else if (parseFloat(_num) > 0) string += 'миллиардов '
        break
    }
    return string
  }

  if (!num || num === 0) return false
  if (typeof num !== 'number') {
    num = num + ''
    num = num.replace(',', '.')
    num = parseFloat(num)
    if (isNaN(num)) return false
  }
  num = num.toFixed(2)
  if (num.indexOf('.') != -1) {
    var num_arr = num.split('.')
    var num = num_arr[0]
  }
  var numLength = num.length
  var string = ''
  var numParser = ''
  var count = 0
  for (var i = (numLength - 1); i >= 0; i--) {
    var numDigit = num.substr(i, 1)
    numParser = numDigit + numParser
    if ((numParser.length === 3 || i === 0) && !isNaN(parseFloat(numParser))) {
      string = numberParser(numParser, count) + string
      numParser = ''
      count++
    }
  }
  return string.replace(/[\s]{1,}/g, ' ')
}
