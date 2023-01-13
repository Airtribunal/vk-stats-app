import { Injectable } from '@nestjs/common';
import * as LRU from 'lru-cache';

@Injectable()
export class CacheService {
  cache: LRU<any, any>;
  constructor() {
    this.cache = new LRU({
      ttl: 1000 * 60,
      ttlAutopurge: true,
    });
  }

  set(key, value) {
    this.cache.set(key, value);
  }

  get(key) {
    return this.cache.get(key);
  }
}
