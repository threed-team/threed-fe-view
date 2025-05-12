document.addEventListener('DOMContentLoaded', function () {
    // 두번째 input 박스 포커스 시 border 생성
    const inputMappings = [
        { inputId: 'write-hashtag', boxSelector: '.write-hashtag-box' },
        { inputId: 'write-field', boxSelector: '.write-hashtag-box02' },
    ];

    inputMappings.forEach(({ inputId, boxSelector }) => {
        const input = document.getElementById(inputId);
        const box = document.querySelector(boxSelector);
        if (!input || !box) return;

        input.addEventListener('focus', () => box.classList.add('on'));
        input.addEventListener('blur', () => box.classList.remove('on'));
    });

    // 에디터 생성
    const editor = new toastui.Editor({
        el: content,
        height: '500px',
        initialEditType: 'markdown',
        initialValue: '내용을 입력해 주세요.',
        previewStyle: 'vertical',
    });
    const Content = document.getElementById('content');

    // 에디터 포커스 시 border 생성
    const ContentChild = document.querySelector('.toastui-editor-defaultUI');
    Content.addEventListener('click', () => {
        ContentChild.classList.add('on');
    });
    document.addEventListener('click', (e) => {
        if (!Content.contains(e.target)) {
            ContentChild.classList.remove('on');
        }
    });
});
