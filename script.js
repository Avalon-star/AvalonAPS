function newFile() {
    document.getElementById('editor').value = '';
}

function openFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt,.doc,.docx,.pdf';
    input.onchange = function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('editor').value = e.target.result;
        };
        reader.readAsText(file);
    };
    input.click();
}

function saveFile() {
    const content = document.getElementById('editor').value;
    const format = document.getElementById('format').value;
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `document.${format}`;
    link.click();
}

function changeFormat() {
    // 这里可以根据选择的格式进行相应的处理
    console.log('格式已更改为：' + document.getElementById('format').value);
}