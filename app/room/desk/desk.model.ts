'use strict';

export class Desk {
    constructor(
        private _name: string,
        private _picture: string,
        private _function: string,
        private _email: string,
        private _phone: string) { }

    public get name(): string { return this._name; }
    public get picture(): string { return this._picture; }
    public get function(): string { return this._function; }
    public get email(): string { return this._email; }
    public get phone(): string { return this._phone; }

    public set name(name: string) { this._name = name }
    public set picture(picture: string) { this._picture = picture; }
    public set function(func: string) { this._function = func; }
    public set email(email: string) { this._email = email; }
    public set phone(phone: string) { this._phone = phone; }

}