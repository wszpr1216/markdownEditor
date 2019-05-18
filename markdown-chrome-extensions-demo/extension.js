var storage = {
  get: (function (key) {
    return localStorage.getItem(key);
  }),

  set: (function (key, value) {
    localStorage.setItem(key, value);
    var data = {};
    data[key] = value;
  }),

  has: (function (key) {
    if (localStorage.hasOwnProperty(key)) {
      return true;
    } else {
      return false;
    }
  }),

  remove: (function (key) {
    localStorage.removeItem(key);
  }),
};

function update(e) {
  var val = e.getValue();
  storage.set('editor.content', JSON.stringify(val));
  setOutput(val);
}

function setOutput(val) {
  document.getElementById('out').innerHTML = marked(val);
}

function save() {
  var code = editor.getValue();
  var blob = new Blob([code], { type: 'text/plain' });
  saveBlob(blob);
}

function saveBlob(blob) {
  var name = "untitled.md";
  if (window.saveAs) {
    window.saveAs(blob, name);
  } else if (navigator.saveBlob) {
    navigator.saveBlob(blob, name);
  } else {
    url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", name);
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    link.dispatchEvent(event);
  }
}

// Listen Ctrl + S
document.addEventListener('keydown', function (e) {
  if (e.keyCode == 83 && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    save();
    return false;
  }
})

// Listen to drap file
document.addEventListener('drop', function (e) {
  e.preventDefault();
  e.stopPropagation();

  var theFile = e.dataTransfer.files[0];
  var theReader = new FileReader();
  theReader.onload = function (e) {
    editor.setValue(e.target.result);
  };

  theReader.readAsText(theFile);
}, false);

// Listen to print as pdf
document.getElementById('print').addEventListener('click', function () {
  var printContents = document.getElementById('out').innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  window.location.reload();
});

// Listen to save as file
document.getElementById('floppy').addEventListener('click', function (e) {
  // var printContents = document.getElementById('out').innerHTML;

  e.preventDefault();
  save();
  return false;
});

// Listen to print as pdf
document.getElementById('plus').addEventListener('click', function () {
  window.open(chrome.extension.getURL('index.html'));
});

//Listen to open a file
document.getElementById('open').addEventListener('change', function (e) {
  // e.preventDefault();
  // e.stopPropagation();

  var selectedFile = document.getElementById('open').files[0];
  console.log(selectedFile)
  var theReader = new FileReader();
  theReader.onload = function (e) {
    editor.setValue(e.target.result);
  };
  theReader.readAsText(selectedFile);
}, false);


// marked set option
marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});

var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
navigator.saveBlob = navigator.saveBlob || navigator.webkitSaveBlob || navigator.mozSaveBlob || navigator.msSaveBlob;
window.saveAs = window.saveAs || window.webkitSaveAs || window.mozSaveAs || window.msSaveAs;

var editor;
if (storage.has('editor.content')) {
  content = JSON.parse(storage.get('editor.content'));
  editor = CodeMirror(document.body, {
    value: content,
    mode: 'gfm',
    lineNumbers: true,
    matchBrackets: true,
    lineWrapping: true,
    theme: 'default',
  });
} else {
  editor = CodeMirror.fromTextArea(document.getElementById('code'), {
    mode: 'gfm',
    lineNumbers: true,
    matchBrackets: true,
    lineWrapping: true,
    theme: 'default',
  });
}

update(editor);
editor.on('change', update);
editor.focus();

// Synchronize scrollbars
var previewDiv = document.getElementById("out");
var editorDiv = editor.getScrollerElement();
previewDiv.addEventListener("scroll", function () {
  var info = editor.getScrollInfo();
  var percent = previewDiv.scrollTop / (previewDiv.scrollHeight - previewDiv.clientHeight);
  editor.scrollTo(0, percent * (info.height - info.clientHeight));
  editorDiv.scrollTop = percent * (editorDiv.scrollHeight - editorDiv.clientHeight);
});

// Another way is to use editor.on('scroll', scroll);
editorDiv.addEventListener("scroll", function () {
  var info = editor.getScrollInfo();
  var percent = info.top / (info.height - info.clientHeight);
  previewDiv.scrollTop = percent * (previewDiv.scrollHeight - previewDiv.clientHeight);
});
