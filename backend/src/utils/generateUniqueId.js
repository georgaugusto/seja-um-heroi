export default function generateUniqueId() {
    return crypto.randomBytes(4).tostring('HEX');
}