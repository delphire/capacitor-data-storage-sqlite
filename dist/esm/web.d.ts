import { WebPlugin } from '@capacitor/core';
import { StorageDatabaseHelper } from './web-utils/StorageDatabaseHelper';
export declare class CapacitorDataStorageIdbWeb extends WebPlugin {
    mDb: StorageDatabaseHelper;
    constructor();
    set(options: {
        key: string;
        value: string;
    }): Promise<{
        result: boolean;
    }>;
    get(options: {
        key: string;
    }): Promise<{
        value: string;
    }>;
    remove(options: {
        key: string;
    }): Promise<{
        result: boolean;
    }>;
    clear(): Promise<{
        result: boolean;
    }>;
    iskey(options: {
        key: string;
    }): Promise<{
        result: boolean;
    }>;
    keys(): Promise<{
        keys: Array<string>;
    }>;
    values(): Promise<{
        values: Array<string>;
    }>;
    keysvalues(): Promise<{
        keysvalues: Array<any>;
    }>;
}
declare const CapacitorDataStorageIdb: CapacitorDataStorageIdbWeb;
export { CapacitorDataStorageIdb };
