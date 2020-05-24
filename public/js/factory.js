export class Factory {
    create = (component, options) => {
        return new component(options || {});
    }
}
