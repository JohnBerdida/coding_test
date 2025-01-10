import 'reflect-metadata';

class Container {
    private services: Map<string, any> = new Map();

    public resolve<T>(key: {new (...args: any[]): T}): T {
        if (!this.services.has(key.name)) {
            const instance = new key(...this.getDependencies(key));
            this.services.set(key.name, instance);
        }

        return this.services.get(key.name)
    }

    private getDependencies(key: any): any[] {
        const paramTypes = Reflect.getMetadata('design:paramtypes', key) || [];

        return paramTypes.map((paramType: any) => this.resolve(paramType));
    }
}

export const container = new Container();