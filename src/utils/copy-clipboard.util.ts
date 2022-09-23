export default function copyClipboard(str: string, message: string) {
    const input = document.createElement('input')

    input.setAttribute('value', str)
    document.body.appendChild(input)
    input.select()

    const result = document.execCommand('copy')
    document.body.removeChild(input)

    if (result) {
        // success alert
    } else {
        // error alert
    }
}
