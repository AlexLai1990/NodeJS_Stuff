var Person = require('./Person'),
    logger = require('./logger');

var kevin = new Person({
    firstName:'Kevin',
    lastName:'Whinnery',
    //age:31,
    knowsKungFu:true
});

logger.info('Does '+ kevin.firstName +' know kung-fu?' + ' His name is ' + kevin.firstName + 'age = ' + kevin.age);
logger.info(kevin.knowsKungFu ? 'You better believe it!' : 'Nope.');

