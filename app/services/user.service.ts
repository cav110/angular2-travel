import {Injectable} from '@angular/core';
// 模拟的数据
import {USERS} from '../mock/user.data';
// Logger服务
import {Logger} from "./logger.service";
import {BetterLogger} from "./better-logger.service";
// BetterLogger服务
//import {BetterLogger} from './better-logger.service';

// 当这个服务需要出初始化的时候必须使用@Injectable()
@Injectable()
export class UserService {
    constructor(private logger: Logger, private betterLogger: BetterLogger) {

    }
    getUsers() {
        //this.logger.log('get users!');
        //this.betterLogger.log('get users!');
        return USERS;
    }
}