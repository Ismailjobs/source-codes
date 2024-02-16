var notify = require('gulp-notify');

module.exports = function() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: 'tanımlanamayan hata',
        message: '<%= error.message %>',
        sound: 'Submarine'
    }).apply(this, args);
    this.emit('son');
};
s