import UploadAdapter from 'https://euncode.github.io/cellculturepredict/UploadAdapter.js'

export default function makeEditor(target) {
    return ClassicEditor.create(document.querySelector(target), {
        extraPlugins: [MyCustomUploadAdapterPlugin]
    })

}

function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new UploadAdapter(loader)
    }
}
