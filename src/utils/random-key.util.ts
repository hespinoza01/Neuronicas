/**
 * Return a unique string to use how component key into react
 */
export default function randomKey() {
    return '_' + Math.random().toString(36).substring(2, 9)
}
