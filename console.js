console.debug('debug message');
console.log('simple log');
console.warn('warning');
console.error('BOOM');

console.assert(true == false, 'Error message');

console.group('Auth');
console.log('authenticating user');
var user;
if(!user) {
  console.log('user not authenticated');
} else {
  console.log('user authenticated');
}
console.groupEnd('Auth');

console.time('Array init');
var array = new Array(100000);
for(var i = array.length-1; i>=0; i--) {
  array[i] = new Object();
}
console.timeEnd('Array init');

console.log('inspecting elements'); 
$$('input');
$('#Email');

$0;
$1;

monitorEvents(window, 'resize');

var css = 'background: radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px, radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0, linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%); background-size: 470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%; background-color: #840b2a;'

css = css + 'font-size: 10em;';

console.log('%cNice pattern', css);
