function xx(e) {
    return e;
}

xx(23);

function yy(e) {
	return xx(e)*e;
}

  function evalString(text) {
    return text.replace(/\\\\/g, '\\')
               .replace(/\\n/g, '\n')
               .replace(/\\r/g, '\r')
               .replace(/\\t/g, '\t')
               .replace(/\\b/g, '\b')
               .replace(/\\f/g, '\f')
               .replace(/\\{/g, '{')
               .replace(/\\}/g, '}')
               .replace(/\\"/g, '"')
               .replace(/\\'/g, "'");
  }
function test(e) {
	alert('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
}
function testie8(e) {
alert('这是在ie8下写的');
alert('ie9:可以');
}