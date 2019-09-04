function makeInputNode(identifier, label, inputType = "text", placeholder = "") {
    return `
    <label for="form-${identifier}">${label}</label>
    <input type="${inputType}" id="form-${identifier}" placeholder="${placeholder}">
    <span id="form-${identifier}-result"></span>
    `;
}

export {makeInputNode};